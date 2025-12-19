# Job Application Portal API

A RESTful Job Application Portal built using **Node.js, Express, and MongoDB**.  
Candidates can register, upload resumes, apply for jobs, and track their applications.

---

## 🚀 Features

- User Registration & Login (JWT Authentication)
- Resume Upload using Multer (PDF/DOC)
- View Job Listings
- Apply for Jobs
- View Submitted Applications
- Secure API with protected routes

---

## 🛠 Tech Stack

- Backend: Node.js, Express.js
- Database: MongoDB (Mongoose)
- Authentication: JWT
- File Upload: Multer
- Deployment: Render

---

## 📂 Project Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/Shreyaschauhan/job-application-portal
cd job-application-portal
npm install
npm run dev

PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

```md

API Endpoints
🔐 Authentication

POST /api/auth/register – Register a new user

POST /api/auth/login – Login user

```md

💼 Jobs

GET /api/jobs – Get all job listings

POST /api/jobs/seed – Create sample jobs (run once)

```md

📄 Applications

POST /api/applications/:jobId – Apply for a job (JWT required, resume upload)

GET /api/applications/my – View logged-in user's applications (JWT required)

```md

Resume Upload

Accepted formats: PDF, DOC, DOCX

Uploaded files are stored in the /uploads directory

Resumes can be accessed via:
/uploads/<filename>

```md

API Testing

All API endpoints were tested using Postman.
Postman collection file is included in the repository.

```md

Live Deployment

Live API URL:https://job-application-portal-g06q.onrender.com/

