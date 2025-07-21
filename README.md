# 📊 Resilient API Dashboard UI

A lightweight, dark-themed **React dashboard** that monitors the status of API responses in real time. This project visualizes whether an API call resulted in ✅ Success, 🛠️ Fallback, or ❌ Error using a wavy line graph.

---

## 🧰 Tech Stack

- **React**
- **Chart.js** (`react-chartjs-2`)
- **Axios**
- **JavaScript (ES6+)**
- **No Tailwind or CSS framework used**

---

## 🚀 Features

- 🎯 Live polling every 3 seconds
- 🌙 Dark theme interface
- 📉 Wavy, mountain-style line graph
- 🟢 Success, 🟡 Fallback, 🔴 Error visualization
- 🧠 Auto-categorization based on response content

---

## 📦 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/frontend-dashboard-ui.git
cd frontend-dashboard-ui
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm start
```

Visit: [http://localhost:3000](http://localhost:3000)

> Make sure your backend is running at `http://localhost:8080/data`.

---

## 📡 API Format Expected

The backend should respond with:

```json
{
  "message": "Hello from External Service"
}
```

Or:

```json
{
  "message": {
    "status": "Fallback triggered"
  }
}
```

Or:

```json
{
  "status": "OK"
}
```

---

## 🧪 Status Definitions

| Status   | How It's Detected                         |
|----------|-------------------------------------------|
| ✅ Success | `message` includes `"hello"` or `"ok"`    |
| 🛠️ Fallback | `message` includes `"fallback"`           |
| ❌ Error   | Network failures or unknown message format |

---

## 📝 License

MIT – feel free to use, fork, and contribute!

---

## ✨ Author

Made with 💙 by [Your Name](https://github.com/your-username)