# React Routing Application

This project demonstrates **routing in React** using the `react-router-dom` library.  
It includes a navigation bar with links to **Home**, **About**, and **Contact** pages, where each page is rendered dynamically based on the selected route.  
The **active link** in the navigation menu is highlighted to indicate the current page.

---

## 🚀 Features
- Navigation menu with active link highlighting
- Separate components for:
  - Home
  - About
  - Contact
- Implemented using:
  - `BrowserRouter`
  - `Routes`
  - `Route`
  - `NavLink`

---

## 🛠️ Technologies Used
- React
- react-router-dom
- CSS (for styling)

---

## 📂 Project Structure
```bash
react-routing-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Navbar.jsx
│   ├── App.jsx
│   ├── style.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```
## 📦 Installation & Usage

```bash
# 1️⃣ Create a new React project using Vite
npm create vite@latest react-routing-app -- --template react

# 2️⃣ Navigate into the project folder
cd react-routing-app

# 3️⃣ Install dependencies
npm install

# 4️⃣ Install React Router
npm install react-router-dom

# 5️⃣ Start the development server
npm run dev
