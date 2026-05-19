//<================== 📌1️⃣ Middleware ==================>
// Middleware in Express is a function that has access to the request object (req), 
// the response object (res), and the next middleware function in the application’s 
// request-response cycle. 
// Middleware functions can perform various tasks such as executing code,
//  modifying the request and response objects, 
// ending the request-response cycle, or calling the next middleware function in the stack.

//<================== 📌 2️⃣ Error handling middleware ==================>
// Error handling middleware in Express is a special type of middleware that 
// is designed to catch and handle errors that occur during the processing of requests. 
// It is defined with four parameters: `err`, `req`, `res`, and `next`. 
// The error handling middleware should be added after all other middleware and 
// routes in the application.

// Here is an example of how to create and use error handling middleware in Express:       
// ```javascript
// const express = require('express');
// const app = express();
// // Regular middleware to handle routes
// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// }
// );
// // Error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack); // Log the error stack trace
//     res.status(500).send('Something went wrong!'); // Send a generic error response
// });
// // Start the server
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });

// // In this example, the error handling middleware is defined using `app.use()`. 
// // It takes four parameters, where `err` is the error object that was thrown during 
// // the request processing. The middleware logs the error stack trace and sends a generic 
// // error response with a 500 status code. This allows you to handle errors gracefully and
// //  provide feedback to the client when something goes wrong.


//<================== 📌 3️⃣ Authentication using JWT ==================>
// Authentication using JWT (JSON Web Tokens) is a common method for securing APIs and
// web applications. JWT is a compact, URL-safe token that can be used to represent claims 
// between two parties. It consists of three parts: a header, a payload, and a signature.
// To implement authentication using JWT in Express, you can follow these steps:
// 1. Install the necessary packages:
// npm install jsonwebtoken bcryptjs
// 2. Create a user model and a registration route to create new users.
// 3. Create a login route that verifies the user's credentials and generates a JWT token.
// 4. Create a middleware function to protect routes that require authentication by 
// verifying the JWT token.

//<================== 📌 4️⃣ Route handling ==================>
// Route handling in Express is the process of defining how an application responds to
// client requests to specific endpoints (routes). 
// You can define routes using methods like `app.get()`, `app.post()`, `app.put()`, etc. 
// Each route can have a callback function that handles the request and sends a response.
// Here is an example of route handling in Express:
// const express = require('express');
// const app = express();
// // Define a route for the home page
// app.get('/', (req, res) => {
//     res.send('Welcome to the home page!');
// });
// // Define a route for the about page
// app.get('/about', (req, res) => {
//     res.send('This is the about page!');
// });
// // Start the server
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });

//<================== 📌 5️⃣ CORS (Cross-Origin Resource Sharing) ==================>
// CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers
// to restrict web pages from making requests to a different domain than the one that 
// served the web page. CORS is implemented using HTTP headers that allow servers to
// specify which origins are allowed to access their resources.
// To enable CORS in an Express application, you can use the `cors` middleware package. 
// Here is an example of how to enable CORS in an Express application:
// const express = require('express');
// const cors = require('cors');
// const app = express();
// // Enable CORS for all routes
// app.use(cors());
// // Define a route
// app.get('/data', (req, res) => {
//     res.json({ message: 'This is some data!' });
// });
// // Start the server
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });


//<================== 📌 6️⃣ REST API design ==================>
// REST API design is a set of principles and best practices for designing web APIs that
// are scalable, maintainable, and easy to use. 
// Some key principles of REST API design include:
// 1. Use HTTP methods (GET, POST, PUT, DELETE) to perform CRUD operations on resources.
// 2. Use meaningful and consistent resource names in the URL.
// 3. Use status codes to indicate the success or failure of API requests.
// 4. Provide clear and concise documentation for the API.
// 5. Implement authentication and authorization mechanisms to secure the API.
// 6. Use pagination, filtering, and sorting to manage large datasets in API responses.

//<================== 📌 7️⃣ Rate limiting ==================>
// Rate limiting is a technique used to control the amount of incoming traffic to a server
// or API. It helps to prevent abuse and ensure that resources are used efficiently. 
// In Express, you can implement rate limiting using middleware such as `express-rate-limit`.
// Here is an example of how to implement rate limiting in an Express application:


//<================== 📌 8️⃣ Pagination ==================>
// Pagination is a technique used to divide large datasets into smaller, more manageable
// chunks or pages. It allows clients to request a specific subset of data rather than 
// retrieving the entire dataset at once. In Express, you can implement pagination by 
// accepting query parameters for page number and page size, and then using those parameters
// to fetch the appropriate subset of data from your database or data source.


//<================== 📌 9️⃣ File upload ==================>
// File upload in Express can be handled using middleware such as `multer`.
// Multer is a popular middleware for handling multipart/form-data, which is used for 
// uploading files. It allows you to easily handle file uploads and store them on the 
// server or in a cloud storage service. Here is an example of how to implement file upload
// in an Express application using Multer:
