const express = require('express');
const app = express();

app.get('/fetch', async (req, res) => {
    const rand = Math.random();
    if (rand < 0.3) return res.status(500).send('Simulated failure');
    if (rand < 0.5) await new Promise(resolve => setTimeout(resolve, 5000));
    res.json({ status: 'OK' });
});

app.listen(8002, () => console.log('Dummy service on 8002'));
