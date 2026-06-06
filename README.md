# 🦷 Dental Lab Omran

A modern and lightweight dental laboratory management system built to simplify client tracking, work management, and cost calculation for dental labs.

Designed with simplicity and efficiency in mind, the application helps technicians and lab owners organize daily work, manage client records, and generate printable summaries with ease.

---

## ✨ Overview

Managing dental lab cases manually can become difficult as the number of clients and cases grows.

**Dental Lab Omran** provides a simple solution that allows you to:

- Manage clients and dentists
- Track dental work orders
- Calculate costs automatically
- Filter and search records quickly
- Print client reports
- Store data locally without requiring a database

---

## 🚀 Features

### 👥 Client Management

- Add new clients
- Edit client information
- Delete clients and their related records
- Search by client name or phone number

### 🦷 Work Management

Each client can have multiple work entries, including:

- Work type
- Description
- Cost

### 📂 Work Categories

The system supports different work types, including:

- Vacuum
- Flexible
- Industrial
- Flex

Each category is visually distinguished for easier tracking.

### 💰 Automatic Cost Calculation

- Calculate total costs instantly
- Display totals by category
- Generate a clear financial summary for each client

### 🖨️ Printing Support

Print professional client reports containing:

- Laboratory information
- Client details
- Work records
- Total amount

### 💾 Local Data Storage

All data is stored directly in the browser using:

```javascript
localStorage
```

No server or database setup is required.

---

## 🛠️ Tech Stack

- React 19
- Vite
- React Router DOM
- JavaScript (ES6+)
- CSS3
- Local Storage API

---

## 📦 Installation

### Clone the repository

```bash
git clone <repository-url>
```

### Navigate to the project directory

```bash
cd dental-lab-omran
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The application will be available at:

```bash
http://localhost:5173
```

---

## 🏗️ Production Build

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 📁 Project Structure

```text
src/
│
├── components/
│   ├── AddWorkForm/
│   ├── ClientCard/
│   ├── FilterBar/
│   ├── Modal/
│   ├── Navbar/
│   ├── TotalSection/
│   └── WorkRow/
│
├── pages/
│   ├── ClientsPage/
│   └── WorksPage/
│
├── hooks/
│   └── useLocalStorage.js
│
├── utils/
│   └── helpers.js
│
├── App.jsx
└── main.jsx
```

---

## 🎯 How It Works

1. Create a new client.
2. Open the client's workspace.
3. Add dental work records.
4. Track costs automatically.
5. Print a professional report whenever needed.

---

## 🔮 Future Improvements

Potential enhancements for future releases:

- PDF export
- Data backup and restore
- Cloud synchronization
- Payment tracking
- Monthly financial reports
- Dashboard analytics
- User authentication and permissions
- Multi-language support

---

## Why This Project?

This project was created to provide a practical and easy-to-use solution for dental laboratories that need a fast way to manage clients and work orders without relying on complex software or expensive systems.

Its focus is on simplicity, speed, and productivity.

---

## 👨‍💻 Author

**Abeer Ali**

Frontend Developer passionate about building practical applications that solve real-world business problems.

---

## 📄 License

This project is open for personal and commercial use.

Feel free to use, modify, and improve it according to your needs.
