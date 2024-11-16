<<<<<<< HEAD
# Final-Shot

## Description
This is a repo which is my last shot before i make my first money

## Table of Contents

DSA
Full Stack
Devops
Python
Java
System Design

=======
# Course Selling Website API

Welcome to the Course Selling Website API documentation! This API allows you to manage courses, users, and administrative operations like signing up, signing in, and managing courses.

The API follows a RESTful structure and can be accessed through the endpoint `https://tridibs-course-selling-api.onrender.com`. Below, you'll find detailed instructions on how to interact with this API, including endpoints for both admins and users.

---

## Base URL
The API is hosted at:  
**`https://tridibs-course-selling-api.onrender.com`**

## Authentication

### Admin Authentication
- To access any administrative routes, you need to authenticate using a username and password. After signing in, you will receive a Bearer token that must be included in the `Authorization` header for subsequent requests.

### User Authentication
- Users will also need to sign in using their username and password to access user-specific routes, including purchasing courses or viewing purchased courses. You will receive a Bearer token for authentication in a similar manner.

---

## Admin Routes

### 1. **Admin Signup**
- **URL:** `/admin/signup`
- **Method:** POST
- **Description:** Admin signup route to create an admin account.
- **Body Example:**
```json
{
    "username": "Tridib11.com",
    "password": "12340"
}
```

### 2. **Admin Signin**
- **URL:** `/admin/signin`
- **Method:** POST
- **Description:** Admin login route to sign in and receive a Bearer token.
- **Body Example:**
```json
{
    "username": "Tridib11.com",
    "password": "12340"
}
```

### 3. **Add a Course**
- **URL:** `/admin/courses`
- **Method:** POST
- **Description:** Admins can add a new course with the course title, description, image link, and price.
- **Headers:**
  - `Authorization: Bearer <admin-token>`
- **Body Example:**
```json
{
    "title": "Book2",
    "description": "A book2",
    "imageLink": "Image2",
    "price": "100"
}
```

### 4. **Get All Courses**
- **URL:** `/admin/courses`
- **Method:** GET
- **Description:** Admins can view all the courses.
- **Headers:**
  - `Authorization: Bearer <admin-token>`

---

## User Routes

### 1. **User Signup**
- **URL:** `/user/signup`
- **Method:** POST
- **Description:** User signup route to create a new user account.
- **Body Example:**
```json
{
    "username": "Tridib11",
    "password": "12345"
}
```

### 2. **User Signin**
- **URL:** `/user/signin`
- **Method:** POST
- **Description:** User login route to sign in and receive a Bearer token.
- **Body Example:**
```json
{
    "username": "Tridib11",
    "password": "12340"
}
```

### 3. **Get All Available Courses**
- **URL:** `/user/courses`
- **Method:** GET
- **Description:** View all available courses.
- **Headers:**
  - `Authorization: Bearer <user-token>`

### 4. **View Purchased Courses**
- **URL:** `/user/purchasedCourses`
- **Method:** GET
- **Description:** View the list of courses the user has purchased.
- **Headers:**
  - `Authorization: Bearer <user-token>`

### 5. **Purchase a Course**
- **URL:** `/user/courses/:courseId`
- **Method:** POST
- **Description:** Purchase a course using the course ID.
- **Headers:**
  - `Authorization: Bearer <user-token>`
- **Example URL:** `/user/courses/6736605b80b99c93c602ccc4`

---

## Example Requests

### Admin Signup Example:
```bash
curl -X POST https://tridibs-course-selling-api.onrender.com/admin/signup \
  -H "Content-Type: application/json" \
  -d '{"username":"Tridib11.com", "password":"12340"}'
```

### Admin Signin Example:
```bash
curl -X POST https://tridibs-course-selling-api.onrender.com/admin/signin \
  -H "Content-Type: application/json" \
  -d '{"username":"Tridib11.com", "password":"12340"}'
```

### User Signup Example:
```bash
curl -X POST https://tridibs-course-selling-api.onrender.com/user/signup \
  -H "Content-Type: application/json" \
  -d '{"username":"Tridib11", "password":"12345"}'
```

### User Signin Example:
```bash
curl -X POST https://tridibs-course-selling-api.onrender.com/user/signin \
  -H "Content-Type: application/json" \
  -d '{"username":"Tridib11", "password":"12340"}'
```

---

## Error Handling

The API will return standard HTTP error codes for failure cases, such as:
- `400 Bad Request`: Invalid request or missing parameters.
- `401 Unauthorized`: Authentication failed or missing token.
- `404 Not Found`: The requested resource does not exist.
- `500 Internal Server Error`: A problem occurred on the server side.

---

## Conclusion

This API enables easy management of courses and user interactions with a course selling platform. Admins can manage courses while users can sign up, log in, browse, and purchase courses. Remember to use Bearer tokens for authentication on protected routes.

Feel free to explore the API and integrate it into your own projects!
>>>>>>> 85876f78b70dbab132604873b14700a766fd0bb4
