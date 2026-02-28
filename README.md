# Portfolio - MERN Stack Developer Portfolio with Admin Panel

A production-grade, fully dynamic personal developer portfolio built with the MERN stack (MongoDB, Express, React/Next.js, Node.js) and deployed on Vercel.

## Features

### Frontend (Next.js 14)
- 🎨 Modern dark theme with premium UI/UX
- ✨ Smooth animations using Framer Motion
- 🌐 Three.js animated particle background
- 📱 Fully responsive (mobile-optimized)
- 🔗 Interactive cursor and hover effects
- 📝 Contact form with backend integration

### Sections
- Hero with animated particles and stats
- About section with professional summary
- Skills visualization with animated progress bars
- Projects with modal details view
- Experience timeline
- Contact form

### Backend (Express + MongoDB)
- RESTful API architecture
- JWT authentication
- MVC architecture
- Full CRUD operations

### Admin Panel
- Secure login with JWT
- Dashboard with statistics
- Manage Projects (CRUD)
- Manage Skills (CRUD)
- Manage Experience (CRUD)
- View Contact Messages

## Tech Stack

### Frontend
- Next.js 14 (App Router)
- React 18
- TailwindCSS
- Framer Motion
- Three.js
- Axios
- Lucide React Icons

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs

## Project Structure

```
portfolio/
├── client/                 # Next.js Frontend
│   ├── app/               # App Router pages
│   │   ├── admin/         # Admin panel pages
│   │   ├── api/           # API routes
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/        # React components
│   ├── package.json
│   └── tailwind.config.js
│
├── server/               # Express Backend
│   ├── controllers/      # Route controllers
│   ├── middleware/       # Auth middleware
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── index.js          # Server entry
│   └── package.json
│
├── .env.example
├── README.md
└── package.json
```

## Installation & Setup

### Prerequisites
- Node.js 18+
- MongoDB Atlas account

### 1. Clone & Install Dependencies

```bash
# Install all dependencies
cd portfolio
npm run install:all
```

### 2. Environment Setup

Create `server/.env`:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

Create `client/.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### 3. Create Admin User

Start the server and create an admin user via API:
```bash
cd server
npm start
```

Then make a POST request to create admin:
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","email":"admin@example.com","password":"yourpassword"}'
```

### 4. Run Development

```bash
# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend
cd client
npm run dev
```

Access:
- Portfolio: http://localhost:3000
- Admin: http://localhost:3000/admin/login

## Deployment

### Deploy Backend to Vercel

1. Create a new project on Vercel
2. Connect your GitHub repository
3. Add environment variables:
   - `MONGODB_URI`
   - `JWT_SECRET`
4. Deploy as Serverless Functions

### Deploy Frontend to Vercel

1. Create a new project on Vercel
2. Connect your GitHub repository (client folder)
3. Add environment variables:
   - `NEXT_PUBLIC_API_URL` = your_backend_url/api
4. Deploy

## License

MIT
