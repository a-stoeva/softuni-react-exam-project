1. Overview
WeddingHelper is a Single Page Application (SPA) built with React. It provides a catalog of wedding service posts (e.g., gifts, catering services, decoration, etc.).
Public users can browse and view post details.
Authenticated users can create, edit, and manage their own listings.
This project follows the SoftUni React Project Assignment Requirements (2025).

2. Features
   
  2.1. Public (Guest) Features
    Browse catalog of posts
    View details of every post
    Register an account
    Login
    
  2.2. Private (Authenticated User) Features
    Create a new post
    Edit and delete own posts
    Access “My Posts” personal area
    Like posts (cannot like own posts)
    Logout

3. Technologies Used
   
  3.1. Front-End
    React
    React Router
    Context API (UserContextFile.jsx - manages authentication state, stores user ID, email, access token, provides login / logout functions )
    Custom Hooks (useRequest - handles HTTP requests, useControlledForm - handles forms)
    CSS Modules
    REST API communication
    
  3.2. Back-End
    SoftUni Practice Server

4. How to Run the Project

  4.1. Install dependencies for and run client:
        npm install
        npm run dev
        
  4.2. Install and run backend:
    npm install
    node index.js
