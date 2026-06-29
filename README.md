# 🚀 LeadFlow CRM (Mini CRM System)

## 📌 Project Overview
LeadFlow CRM is a full-stack Mini Customer Relationship Management system built using the MERN stack.

It helps businesses manage incoming leads, track their status, and store follow-up notes in one place.

This project simulates how real companies handle customer leads from website forms.

-------------------------------------------------

## ⚙️ Tech Stack
- Frontend: React.js
- Backend: Node.js + Express.js
- Database: MongoDB (Atlas)
- API: RESTful APIs

---------------------------------------------------

## ✨ Features

✔ Add new leads  
✔ View all leads  
✔ Update lead status (New → Contacted → Converted)  
✔ Add follow-up notes  
✔ Delete leads  
✔ Search leads by name/email  
✔ Admin login system  

-------------------------------------------------------

## 📁 Project Structure


server/
server.js
models/Lead.js
routes/leadRoutes.js

client/
src/
App.js
Login.js


--------------------------------------------------------------

## 🚀 How to Run This Project

### 1️⃣ Backend Setup

```bash
cd server
npm install
npm run dev

Server runs on:

http://localhost:5000

------

2️⃣ Frontend Setup
cd server/client
npm install
npm start

Frontend runs on:

http://localhost:3000

-------------------------------------------------




 Admin Login Credentials
Email: admin@gmail.com
Password: admin123

-------------------------------------------------

🌐 API Endpoints
Leads
GET /api/leads → Get all leads
POST /api/leads → Add new lead
PUT /api/leads/:id → Update lead status
PUT /api/leads/:id/notes → Update notes
DELETE /api/leads/:id → Delete lead

📸 Screenshots
\images

----------------------------------------------------


💡 What I Learned
Full-stack MERN development
REST API creation
MongoDB integration
React state management
CRUD operations
Real-world CRM workflow

--------------------------------------------------

👨‍💻 Author

Name: Sai Neha Reddy
Project: Full Stack Web Development – Task 2 (Mini CRM)
