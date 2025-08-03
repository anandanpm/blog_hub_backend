# BlogHub Backend

A RESTful API for BlogHub - A Simple Blogging Platform built with Node.js, Express.js, and MongoDB.

## 🚀 Features

- JWT-based authentication
- User registration and login
- CRUD operations for blog posts
- User profile management
- Author-based authorization for blog operations
- MongoDB integration with Mongoose
- Comprehensive error handling
- Input validation and sanitization

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **ODM**: Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **Async-handler**: express-async-handler
- **Environment Variables**: dotenv
- **CORS**: cors middleware

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas account)

## ⚡ Quick Start

### 1. Clone the repository
```bash
git clone <https://github.com/anandanpm/blog_hub_backend>
cd bloghub-backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory and add the following variables:




## 🔗 API Endpoints

### Authentication Routes
| Method | Endpoint | Description | Body Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register a new user | ✅ |
| POST | `/api/auth/login` | Login user | ✅ |
| POST | `/api/auth/logout` | Logout user | ❌ |
| GET | `/api/me` | Get user |  ✅ |

### Blog Routes
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/blogs` | Get all blog posts | ❌ |
| GET | `/api/blogs/:id` | Get single blog post | ❌ |
| POST | `/api/blogs` | Create new blog post | ✅ |
| PUT | `/api/blogs/:id` | Update blog post (author only) | ✅ |
| DELETE | `/api/blogs/:id` | Delete blog post (author only) | ✅ |


## 📝 API Documentation

### Authentication

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "user_id",
      "name": "John Doe",
      "email": "john@example.com"
    },
    "token": "jwt_token_here"
  }
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Blog Operations

#### Create Blog Post
```http
POST /api/blogs
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "title": "My First Blog Post",
  "content": "This is the content of my blog post..."
}
```

#### Get All Blogs
```http
GET /api/blogs
```

**Response:**
```json
{
  "success": true,
  "count": 10,
  "data": [
    {
      "id": "blog_id",
      "title": "Blog Title",
      "content": "Blog content...",
      "author": {
        "id": "author_id",
        "name": "Author Name"
      },
      "createdAt": "2025-08-03T10:00:00Z",
      "updatedAt": "2025-08-03T10:00:00Z"
    }
  ]
}
```

## 🔒 Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## 🗄️ Database Schema

### User Model
```javascript
{
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
}
```

### Blog Model
```javascript
{
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}
```

## 🛡️ Security Features

- Password hashing with bcryptjs
- JWT token-based authentication
- Input validation and sanitization
- CORS protection
- Error handling without sensitive data exposure
- Author-based authorization for blog operations

## 🧪 Testing

```bash
# Run tests (if implemented)
npm test

# Test API endpoints using tools like:
# - Postman
# - Thunder Client (VS Code extension)
# - curl commands
```

## 📦 Dependencies

### Production Dependencies
```json
{
  "express": "^4.18.0",
  "mongoose": "^7.0.0",
  "bcryptjs": "^2.4.3",
  "jsonwebtoken": "^9.0.0",
  "cors": "^2.8.5",
  "dotenv": "^16.0.0",
  "express-validator": "^6.14.0"
}
```

### Development Dependencies
```json
{
  "nodemon": "^2.0.20"
}
```
## 📄 License

This project is licensed under the MIT License.

## 🆘 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check MONGODB_URI in .env file
   - Verify network connectivity for Atlas

2. **JWT Token Issues**
   - Ensure JWT_SECRET is set in .env
   - Check token expiration
   - Verify Authorization header format

3. **CORS Errors**
   - Update CLIENT_URL in .env
   - Check CORS middleware configuration

### Support

For support, please email: kiran@sinope.co.in, luvraj@sinope.co.in

---

**Happy Coding! 🚀**
