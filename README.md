# Backend Server README

This backend server is built using Express.js and provides APIs for managing user submissions and accessing submission data. Below is an overview of the server structure, routes, controllers, and database setup.

## Server Structure:

### 1. server.js

- Entry point for the Express application.
- Configures middleware including CORS and JSON parsing.
- Defines routes and starts the server.

## Routes:

### 2. router/index.js

- Defines API routes for accessing and manipulating submission data.
- Routes requests to corresponding controller functions.

## Controllers:

### 3. controller/index.js

- Exports controller functions for handling different CRUD operations.
- Includes functions for accessing, inserting, and deleting submission data.

### 4. controller/data/accessData.js

- Controller for accessing submission data.
- Implements functions to fetch all submissions or a specific submission by username.

### 5. controller/data/insertData.js

- Controller for inserting submission data.
- Implements function to insert a new submission into the database.

### 6. controller/data/deleteData.js

- Controller for deleting submission data.
- Implements function to delete a submission by username.

## Database:

### 7. db/index.js

- Exports the MySQL database connection.
- Configures connection parameters and exports the connection object.

### 8. db/connection.js

- Creates a MySQL connection pool using parameters from the configuration file.
- Tests the connection to ensure successful setup.

## Configuration:

- Configuration parameters such as database credentials and server port are stored in a separate configuration file.
- Environment variables are used for sensitive information.

## Dependencies:

- Express: Web framework for Node.js applications.
- CORS: Middleware for enabling Cross-Origin Resource Sharing.
- MySQL2: MySQL client for Node.js applications.
- Ioredis: Redis client for Node.js applications.

## Getting Started:

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies with `npm install` or `yarn install`.
4. Configure environment variables for database connection and server port.
5. Start the server with `npm start` or `yarn start`.
6. Access the API endpoints for managing submission data.

## Additional Notes:

- Ensure the MySQL server is running and accessible before starting the backend server.
- Handle sensitive information securely and avoid hardcoding credentials in the source code.
- Proper error handling is implemented to manage potential errors during database operations.

Feel free to explore the server codebase and customize it according to your requirements. If you have any questions or issues, please refer to the documentation or contact the project maintainers.
