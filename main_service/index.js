const express = require('express');
const axios = require('axios');
const client = require('prom-client');
const CircuitBreaker = require('opossum');

const app = express();
const register = new client.Registry();

// Prometheus setup
client.collectDefaultMetrics({ register });
const requestDuration = new client.Histogram({
    name: 'http_request_duration_seconds',
    help: 'Duration of HTTP requests in seconds',
    labelNames: ['method', 'route', 'code'],
});
register.registerMetric(requestDuration);

const dummyURL = 'http://dummy_external:8002/fetch';

// Circuit Breaker setup
const breaker = new CircuitBreaker(() => axios.get(dummyURL), {
    timeout: 2000,
    errorThresholdPercentage: 50,
    resetTimeout: 5000,
});

breaker.fallback(() => ({ data: 'Circuit breaker fallback used' }));

// Routes
app.get('/data', async (req, res) => {
    const end = requestDuration.startTimer();
    try {
        const response = await breaker.fire();
        end({ method: req.method, route: req.path, code: res.statusCode });
        res.json({ message: response.data });
    } catch (err) {
        end({ method: req.method, route: req.path, code: 500 });
        res.json({ message: err.message || 'Circuit fallback error' });
    }
});

app.get('/metrics', async (req, res) => {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
});

app.listen(8001, () => console.log('Main service running on port 8001'));
