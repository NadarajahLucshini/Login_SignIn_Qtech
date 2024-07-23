# Simple-Login-and-Registration-in-MERN_Qtech



# Backend
This is the backend for a simple API that handles user registration and login with JWT authentication using Node.js, Express, and MongoDB.

## Features

- User registration
- User login
- JWT authentication
- Secure password hashing with bcrypt

## Prerequisites

- Node.js
- MongoDB

## Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/qtech-task-backend.git
cd qtech-task-backend
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the root directory and add the following:

```env
MONGO_URL=mongodb://localhost:27017/qtech
JWT_SECRET=your_jwt_secret_key
PORT=8080
```

4. Ensure your MongoDB server is running.

## Running the Application

To start the server, run:

```bash
npm start
```

The server should now be running on `http://localhost:8080`.

## Endpoints

### Register

**URL:** `/api/auth/register`



### Login

**URL:** `/api/auth/login`

**Method:** `POST`


## Project Structure


.
├── app
│   ├── config
│   │   └── config.js
│   ├── controllers
│   │   └── authController.js
│   ├── model
│   │   └── user.js
│   ├── routes
│   │   └── auth.js
├── node_modules
├── .env
├── package.json
├── server.js
└── README.md

## code overview

### server.js

Sets up the Express server, connects to MongoDB, and sets up middleware and routes.

### config.js

Exports configuration details such as the MongoDB URL and JWT secret.

### authController.js

Handles user registration and login logic.

### user.js

Defines the User model and schema, including password hashing and comparison methods.

### auth.js

Defines routes for user registration and login.

## Sample Data Import

To import sample user data into the database, you can use the `importData.js` script.

1. Create `importData.js`:
2. Run the import script:

```bash
node importData.js

```

# Frontend


## Overview

This project is a React-based frontend application that provides users with a seamless experience for registration, login, and accessing a dashboard. The application includes secure password handling, JWT authentication, and user-friendly UI elements.

## Features

- **User Authentication**: Users can register, login, and receive a JWT token for session management.
- **Responsive Design**: The application is designed to be fully responsive and user-friendly.
- **Lazy Loading**: Components are loaded lazily to improve performance and user experience.
- **Protected Routes**: Routes are protected based on user authentication status.

## Technology Stack

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For routing and navigation.
- **Axios**: For making HTTP requests.
- **CSS**: For styling components.
- **JWT**: For secure user authentication.

## Installation

1. **Clone the repository:**
    ```sh
    https://github.com/NadarajahLucshini/Simple-Login-and-Registration-in-MERN_Qtech.git
    cd frontend
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Run the application:**
    ```sh
    npm start
    ```

## Project Structure

```plaintext
react-frontend-app/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── Login.js
│   │   ├── Regi.js
│   │   └── ...
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── LoginPage.js
│   │   ├── Reg.js
│   │   ├── DashBoard.js
│   │   └── ...
│   ├── Routes/
│   │   ├── Routes.js
│   ├── App.js
│   ├── index.js
│   ├── style.css
│   ├── HomeStyle.css
│   └── ...
│
├── .gitignore
├── package.json
├── README.md
└── ...
```



## Authentication Flow

### Login

1. User enters email and password.
2. On form submission, an API request is sent to the backend.
3. If credentials are valid, a JWT token is received and stored in `localStorage`.
4. User is redirected to the dashboard.

### Registration

1. User enters name, email, password, and confirms password.
2. On form submission, an API request is sent to the backend.
3. If registration is successful, a JWT token is received and stored in `localStorage`.
4. User is redirected to the login page.

## CSS Styling

- General styles are defined in `style.css`.
- Home page-specific styles are in `HomeStyle.css`.

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License.



