# 🌐 PERN Stack Application
 visit on youtube https://youtu.be/EkQl-gzEfJo
A full-stack web application built using the **PERN Stack**:

- **PostgreSQL** – Powerful open-source relational database  
- **Express.js** – Backend framework for Node.js  
- **React.js** – Frontend JavaScript library for building user interfaces  
- **Node.js** – JavaScript runtime for server-side programming

---

## 📁 Project Structure

/client → React frontend (Vite or CRA)
/server → Express backend with PostgreSQL

yaml
Copy
Edit

---

## ⚙️ Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Git](https://git-scm.com/)

---

## 🛠️ Installation Steps

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd your-project-directory
2. Setup Backend (Express + PostgreSQL)
bash
Copy
Edit
cd server
npm install
Make sure to configure your PostgreSQL database connection inside server/db.js or .env.

Start the backend server:

bash
Copy
Edit
npm run dev
3. Setup Frontend (React)
bash
Copy
Edit
cd ../client
npm install
npm run dev
🌐 View the App
Once both servers are running:

Frontend: http://localhost:5173

Backend API: http://localhost:5000
