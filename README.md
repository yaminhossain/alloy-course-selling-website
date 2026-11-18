# Alloy

## Description

ALLOY is a full-featured online learning platform where tutors can create and manage courses, students can purchase and bookmark them, and users can engage in course-related community discussions. Built using the MERN stack with modern styling via Tailwind CSS and DaisyUI.

## Useful Links

### Client Side

**Hosted with Firebase:** [Alloy Client Side](https://alloy-1feaf.web.app/)

### Server Side

**Hosted with Vercel:** [Alloy Server Side](https://alloy-server.vercel.app/)

**GitHub:** [Server Side Repository](https://github.com/anik12136/alloy-server)

## Features

- 🔐 Firebase Authentication (Email/Password, Google)
- 🧑‍🏫 Role-based dashboard for Students and Tutors
- 📚 Course creation and management for tutors
- 🛒 Students can browse, buy, and bookmark courses
- 💬 Community section for course-related discussions
- 📬 Course request system (students request topics, tutors respond)
- 🌗 Theme toggle: Light, Dark, System
- 👤 User profile editing
- 💅 Clean UI with Tailwind CSS + DaisyUI

## Tech Stack

- **Frontend:** React.js, Tailwind CSS, DaisyUI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase Authentication
- **Hosting:** Firebase Hosting (client side), Vercel (server side)

## NPM Libraries

- **@heroicons/react** – For modern and customizable UI icons
- **@tanstack/react-query** – For managing server state, data fetching, and caching
- **axios** – For making HTTP requests to the backend API
- **firebase** – For Firebase Authentication and client-side Firebase services
- **react** – Core frontend library
- **react-dom** – For rendering React components in the browser
- **react-hook-form** – For managing forms and handling form validation
- **react-icons** – For integrating popular icon libraries
- **react-router-dom** – For client-side routing and navigation
- **react-spinners** – For displaying loading indicators
- **sweetalert2** – For displaying interactive alerts and confirmation dialogs
- **swiper** – For creating interactive sliders and carousels

## Getting Started

Follow these instructions to run Alloy on your local machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm
- [Git](https://git-scm.com/)
- A MongoDB database (local MongoDB installation or [MongoDB Atlas](https://www.mongodb.com/atlas))
- A Firebase project with Authentication enabled

### 1. Clone the Repositories

Clone both the frontend and backend repositories:

```bash
# Clone the frontend repository
git clone https://github.com/yaminhossain/alloy-course-selling-website.git

# Clone the backend repository
git clone https://github.com/anik12136/alloy-server.git
```

### 2. Set Up the Backend

Navigate to the backend directory:

```bash
cd alloy-server
```

Install the dependencies:

```bash
npm install
```

Create a `.env` file in the backend root directory and configure the required environment variables, including your MongoDB connection string and server configuration.

Start the backend server using the appropriate development script defined in `package.json`:

```bash
npm run dev
```

### 3. Set Up the Frontend

Navigate to the frontend project directory:

```bash
cd alloy-course-selling-website
```

Install the dependencies:

```bash
npm install
```

Create a `.env` file (or `.env.local`, depending on the project configuration) and configure the required Firebase credentials and backend API URL.

Make sure Firebase Authentication is properly configured and the Google sign-in provider is enabled if you want to use Google authentication.

Start the frontend development server using the script defined in `package.json`:

```bash
npm run dev
```

### 4. Open the Application

Open the local development URL shown in your terminal (commonly `http://localhost:5173` for Vite applications).

Make sure both the frontend and backend servers are running so the application can communicate with the API.

> **Note:** Replace the placeholder repository URL and configure the environment variables according to the actual project configuration. The frontend and backend scripts may differ depending on their respective `package.json` files.

## Why These Technologies?

- **React.js:** Chosen for building reusable UI components and managing the interactive user interface of the learning platform.
- **Node.js & Express.js:** Used to build the backend REST API and handle application logic, user requests, and course-related operations.
- **MongoDB:** Chosen as a flexible NoSQL database for storing users, courses, bookmarks, and community-related data.
- **Firebase Authentication:** Used to simplify user authentication and support Email/Password and Google sign-in without implementing an authentication system from scratch.
- **Tailwind CSS:** Used for utility-first styling, allowing faster UI development and consistent design.
- **DaisyUI:** Used alongside Tailwind CSS to speed up development with reusable and customizable UI components.
- **TanStack React Query:** Used for managing server-side data, caching responses, and reducing unnecessary API requests.
- **React Router DOM:** Used to manage client-side navigation and provide a smooth single-page application experience.
- **React Hook Form:** Used to simplify form handling and validation.
- **Firebase Hosting & Vercel:** Used to deploy the frontend and backend separately, making application hosting and deployment more manageable.

## Challenges Faced & Solutions

### 1. Implementing Role-Based Access

**Challenge:** Managing different user experiences and permissions for students and tutors was challenging because both roles require different functionalities and dashboard interfaces.

**Solution:** Implemented role-based dashboards to provide separate experiences for students and tutors, allowing each role to access its relevant features.

### 2. Managing Course Creation and Enrollment

**Challenge:** Handling different course-related operations, such as course creation, browsing, purchasing, and bookmarking, required proper coordination between the frontend, backend, and database.

**Solution:** Used Express.js APIs and MongoDB to manage course-related data and operations, providing students and tutors with the necessary course management functionality.

### 3. Implementing Authentication

**Challenge:** Providing a convenient authentication experience while supporting multiple sign-in methods.

**Solution:** Integrated Firebase Authentication to support both Email/Password and Google authentication.

### 4. Managing Server-Side Data

**Challenge:** Handling data fetching, loading states, and repeated API requests across different parts of the application could make the user experience less efficient.

**Solution:** Integrated TanStack React Query to manage server-side state, cache API responses, and simplify data synchronization.

## Problems Solved

Alloy addresses several challenges commonly faced by online learning communities:

- **Lack of a centralized learning platform:** Provides a single platform where students can discover courses and tutors can publish and manage their learning materials.
- **Difficulty managing different user roles:** Provides separate dashboards and functionalities for students and tutors.
- **Limited course discovery and organization:** Allows students to browse available courses and bookmark courses they are interested in.
- **Lack of direct learning-related interaction:** Provides a community discussion section where users can engage in course-related conversations.
- **Difficulty requesting specific learning topics:** Introduces a course request system where students can request topics and tutors can respond.
- **Inconvenient authentication:** Supports Email/Password and Google sign-in through Firebase Authentication.
- **Limited user customization:** Allows users to edit their profiles and customize the application's appearance through Light, Dark, and System themes.

---

**Live Demo:** [Alloy](https://alloy-1feaf.web.app/)
