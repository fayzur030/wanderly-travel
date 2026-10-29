<div align="center">

# ✈️ Wanderly Travel

### Discover Places. Plan Adventures. Create Memories.

A modern travel booking web application designed to help travelers explore destinations, plan their next adventure, and manage their bookings through a seamless digital experience.

<br />

**Explore the World, One Journey at a Time. 🌍**

<br />

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

<br />

[🌐 Live Demo](#-https://wanderly-travel-three.vercel.app/) · [✨ Features](#-key-features) · [⚙️ Installation](#-installation-and-setup) · [👨‍💻 Author](#-about-the-developer)

</div>

---

## 📌 About the Project

**Wanderly Travel** is a full-stack travel booking application built to provide travelers with a convenient way to discover destinations and manage their travel plans.

The application combines a modern, responsive frontend with a dedicated backend API and MongoDB database to deliver a structured travel booking experience.

Whether users want to explore exciting destinations or keep track of their reservations, Wanderly Travel aims to make the journey from discovery to booking simple and enjoyable.

### 🎯 Project Goals

- Build a practical full-stack application using modern web technologies.
- Implement secure user authentication.
- Develop RESTful APIs for travel destinations and bookings.
- Manage user-specific bookings.
- Create a responsive and user-friendly interface.
- Practice real-world frontend and backend development workflows.

---

## 🌐 Live Demo

🔗 **Live Website:** https://wanderly-travel-three.vercel.app/

<!-- 🔗 **Backend API:** https://bazar-inventory.onrender.com -->

> Replace the frontend placeholder with your actual Wanderly Travel deployment URL. Also, replace the backend URL above with your Wanderly Travel API URL before publishing this README.

---

## ✨ Key Features

### 🌍 Destination Exploration

- Explore available travel destinations.
- View destination information and details.
- Browse travel options through a clean interface.

### 🔐 Authentication System

- User registration and login.
- Email and password authentication with Better Auth.
- Protected user-specific features.
- Authentication-aware application experience.

### 📅 Booking Management

- Create travel bookings.
- View personal booking information.
- Access bookings associated with the authenticated user.
- Review booking details.
- Delete bookings when appropriate.

### 👤 User Experience

- Responsive design for desktop, tablet, and mobile devices.
- Intuitive navigation and user interactions.
- User profile dropdown for convenient account access.
- Toast notifications for application feedback.
- Loading and error handling where implemented.

### ⚡ Full-Stack Architecture

- Next.js frontend with TypeScript.
- Express.js backend API.
- MongoDB database integration.
- API-based communication between frontend and backend.
- Organized frontend components and backend routes.

---

## 🛠️ Technology Stack

### Frontend

| Technology   | Purpose                                 |
| ------------ | --------------------------------------- |
| Next.js      | React framework and application routing |
| React        | Component-based user interface          |
| TypeScript   | Type safety and maintainable code       |
| Tailwind CSS | Responsive styling                      |
| Lucide React | Interface icons                         |
| Sonner       | Toast notifications                     |

### Backend

| Technology  | Purpose                                                  |
| ----------- | -------------------------------------------------------- |
| Node.js     | JavaScript runtime                                       |
| Express.js  | Backend API and routing                                  |
| MongoDB     | NoSQL database                                           |
| Better Auth | Authentication system                                    |
| JWT Plugin  | Token-based authentication integration, where configured |

### Development Tools

| Tool    | Purpose                            |
| ------- | ---------------------------------- |
| Git     | Version control                    |
| GitHub  | Source code hosting                |
| VS Code | Development environment            |
| Vercel  | Frontend deployment, if configured |
| Render  | Backend deployment, if configured  |

---

## 🏗️ Application Architecture

Wanderly Travel follows a client-server architecture.

```text
┌──────────────────────────────┐
│          User                │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│       Next.js Frontend       │
│                              │
│  • Pages and Components      │
│  • TypeScript                │
│  • Tailwind CSS              │
│  • Authentication UI         │
│  • Booking Interface         │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│       Express.js API         │
│                              │
│  • API Routes                │
│  • Request Handling          │
│  • Booking Operations        │
│  • Data Processing           │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│          MongoDB             │
│                              │
│  • Destination Data          │
│  • Booking Records            │
│  • Authentication Data       │
└──────────────────────────────┘
```

_Note: This diagram represents the application's general architecture. The exact database collections and responsibilities depend on your implementation._

---

## 📂 Project Structure

The project is organized into separate frontend and backend directories.

```text
wanderly-travel/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── lib/
│   │   └── types/
│   │
│   ├── package.json
│   └── .env.local
│
├── server/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── index.js
│   ├── package.json
│   └── .env
│
├── .gitignore
└── README.md
```

> This is an illustrative structure. Adjust the folders to match your actual repository, especially if your Express backend does not use separate `controllers` or `models` directories.

---

## ⚙️ Installation and Setup

Follow these steps to run Wanderly Travel locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- A [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) account or a local MongoDB instance.

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate to the project directory:

```bash
cd wanderly-travel
```

### 2. Set Up the Backend

Navigate to the server directory:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the `server` directory and configure your environment variables according to your backend implementation.

Example:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Add any other environment variables required by your backend and authentication configuration.

Start the backend:

```bash
npm run dev
```

> Use the development command defined in your server's `package.json`. If it does not provide `dev`, use the appropriate configured start command.

### 3. Set Up the Frontend

Open a new terminal and navigate to the frontend directory:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file and configure the API URL and authentication settings required by your application.

For example:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
MONGODB_URI=your_mongodb_connection_string
```

> Configure only the variables your frontend actually needs. Keep database credentials and other server-only secrets out of client-accessible environment variables. Better Auth may require additional server-side configuration, including its secret and trusted application URL.

Start the development server:

```bash
npm run dev
```

### 4. Open the Application

Visit:

```text
http://localhost:3000
```

Your local Wanderly Travel application should now be accessible.

---

## 🔑 Environment Variables

The application may require the following environment variables, depending on how authentication and database access are configured.

| Variable              | Description                           |
| --------------------- | ------------------------------------- |
| `PORT`                | Backend server port                   |
| `MONGODB_URI`         | MongoDB connection string             |
| `NEXT_PUBLIC_API_URL` | Backend API base URL                  |
| `BETTER_AUTH_SECRET`  | Secret used by Better Auth            |
| `BETTER_AUTH_URL`     | Base URL of the authentication server |

**Important:** These names are examples. Match them to the actual variables referenced in your code.

- Never commit `.env` or `.env.local` files.
- Never expose database credentials or authentication secrets in browser-accessible code.
- Configure production environment variables in your hosting provider's dashboard.
- Use the correct frontend and backend URLs for your deployment environment.

---

## 🔄 How It Works

A typical user journey through Wanderly Travel looks like this:

1. **Explore:** The user visits the website and discovers available travel destinations.
2. **Authenticate:** The user creates an account or signs in.
3. **Choose:** The user selects a destination and reviews the available information.
4. **Book:** The user submits a booking through the application.
5. **Manage:** The user views and manages their personal bookings.

The frontend communicates with the backend API, while the backend processes requests and interacts with MongoDB.

---

## 🔒 Security Considerations

Security is an important part of a full-stack booking application.

- Use Better Auth according to its recommended configuration.
- Keep sensitive environment variables on the server.
- Validate incoming API requests on the backend.
- Verify user identity before allowing access to private booking data.
- Ensure users can access or delete only the bookings they are authorized to manage.
- Configure appropriate CORS policies for production.
- Avoid exposing sensitive authentication tokens in client-side code or logs.

These are recommended security practices; the actual protections depend on the implementation.

---

## 🚀 Future Improvements

Potential improvements for future versions include:

- [ ] Advanced destination search and filtering.
- [ ] Destination categories and personalized recommendations.
- [ ] Booking status management.
- [ ] Date-based availability checking.
- [ ] Booking confirmation emails.
- [ ] Online payment integration.
- [ ] User reviews and ratings.
- [ ] Wishlist and favorite destinations.
- [ ] Admin dashboard for destination and booking management.
- [ ] Improved automated testing and API documentation.

---

## 📚 What I Learned

Through this project, I practiced and explored:

- Building a full-stack application with Next.js and Express.js.
- Using TypeScript to improve code reliability.
- Connecting frontend interfaces to backend REST APIs.
- Working with MongoDB for persistent data storage.
- Implementing authentication with Better Auth.
- Managing user-specific booking data.
- Organizing application code into reusable components.
- Configuring environment variables and deployment settings.

---

## 👨‍💻 About the Developer

**Md. Fayzur Rahman**

Full-Stack Web Developer focused on building responsive, user-friendly web applications with modern JavaScript technologies.

I enjoy creating practical projects that combine clean UI design, reliable backend functionality, and meaningful user experiences.

### Connect With Me

- **GitHub:** [@fayzur030](https://github.com/fayzur030)
- **LinkedIn:** [Md. Fayzur Rahman](https://www.linkedin.com/in/md-fayzur-rahman/)

---

<div align="center">

### 🌍 Wander More. Worry Less. ✈️

**Built with passion and a love for web development.**

⭐ If you find this project interesting, consider giving the repository a star!

</div>
