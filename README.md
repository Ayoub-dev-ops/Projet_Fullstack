# My Portfolio Application

Welcome to my portfolio repository! This application showcases my skills and projects through both backend and frontend components built using different technologies.

## Overview

This repository contains the code for my portfolio application. The project is divided into two main sections:

1. **Backend**: This part of the application handles the server-side logic and API endpoints. It is built usingNode.js, Express, and MongoDB and is responsible for tasks such as data handling, authentication, and serving content to the frontend.

2. **Frontend**: The frontend section is the user-facing part of the portfolio. It is developed using React.js and is responsible for displaying the UI, interacting with users, and consuming data from the backend.

## Technologies Used

- **Backend**: Node.js, Express, and MongoDB
- **Frontend**: React.js

## Folder Structure

```

├── backend/ # Backend code
│ ├── api
│ │ ├── controlers
│ │ └── routes
│ ├── config
│ ├── middlewares
│ ├── models
│ │ ├── projects
│ │ └── users
│ ├── rest-request
│ ├── services
| └── README.md # Backend Repository information
├── frontend/ # Frontend code
│ ├── img
│ ├── public
│ ├── src
| └── README.md # Frontend Repository information
└── README.md # Repository information

```

## Getting Started

To run this application locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. **Install Dependencies**:

   - **Backend**:
     ```bash
     cd backend
     npm install
     ```
   - **Frontend**:
     ```bash
     cd frontend
     npm install
     ```

3. **Run the Application**:

   - **Backend**:
     ```bash
     cd backend
     npm run dev
     ```
   - **Frontend**:
     ```bash
     cd frontend
     npm run dev
     ```

4. **Access the Application**:
   Once both backend and frontend servers are running, you can access the application at:
   ```
   http://localhost:5173
   ```
