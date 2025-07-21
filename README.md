
# Code Challenge - Resilient Microservice Architecture

This project demonstrates a scalable and resilient microservice architecture using **Node.js**, **Docker**, **NGINX**, **Prometheus**, **Grafana**, and a React frontend. It includes patterns like load balancing, circuit breaking, fallback, and real-time monitoring.

---

## 🚀 Tech Stack

- **Backend Services**: Node.js (Express)
- **Gateway**: NGINX (with load balancing)
- **Resilience**: [Opossum](https://nodeshift.dev/opossum/) for circuit breaker
- **Frontend**: React + Chart.js
- **Monitoring**: Prometheus + Grafana
- **Containerization**: Docker, Docker Compose

---

## 📁 Folder Structure

```
.
├── api_gateway/          # NGINX config
├── main_service/         # Primary microservice with circuit breaker
├── dummy_external/       # Simulated third-party service
├── frontend/             # React frontend for visualization
├── monitoring/           # Prometheus config
├── docker-compose.yml    # Orchestrates all services
└── README.md
```

---

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/xantares-peeks/code_challenege.git
cd code_challenege
```

---

### 2. Start Backend Services (From root)

Use Docker Compose to spin up:

- NGINX API Gateway
- Main service (with resilience logic)
- Dummy external service
- Prometheus for monitoring

```bash
docker-compose up --build
```

> 🔁 This command should be run from the **root directory** (where `docker-compose.yml` exists).

---

### 3. Start the Frontend

In another terminal:

```bash
cd frontend
npm install
npm start
```

The frontend runs on: [http://localhost:3000](http://localhost:3000)

---

## 📊 Monitoring

Once services are running:

- **Prometheus**: [http://localhost:9090](http://localhost:9090)
- **Grafana** (if added): [http://localhost:3001](http://localhost:3001)

---

## ✅ Resilience Behavior

- Simulates success, fallback, and error based on third-party responses
- Circuit breaker pattern prevents system overload
- Real-time data displayed in frontend using a wave-like chart

---

## 🧼 Shutdown

To stop all services:

```bash
docker-compose down
```

---

## 📌 Notes

- If using Windows, you might see CRLF warnings — they are safe to ignore.
- Ensure Docker is running before executing `docker-compose`.

---

## 📧 Contact

Maintained by **xantares-peeks**  
Feel free to raise issues or submit pull requests!
