# MERN Stack Project

A full-stack web application built with MongoDB, Express.js, React, and Node.js.

## Prerequisites

- Node.js 
- MongoDB Atlas account
- npm (Node Package)
- Postman (API Testing Tool)

### About Postman

Postman is a popular API platform that makes it easy to test, document, and interact with APIs. In this project, you can use Postman to:

- Test API endpoints without a frontend
- Send requests to your backend server
- Verify CRUD operations (Create, Read, Update, Delete)
- Debug API responses

#### Example Requests in Postman

1. **Get All Products**
   - Method: GET
   - URL: `http://localhost:3000/api/products`

2. **Create Product**
   - Method: POST
   - URL: `http://localhost:3000/api/products`
   - Body (JSON):
   ```json
   {
     "name": "Example Product",
     "price": 29.99,
     "image": "https://example.com/image.jpg"
   }
   ```

3. **Update Product**
   - Method: PUT
   - URL: `http://localhost:3000/api/products/:id`
   - Body (JSON):
   ```json
   {
     "name": "Updated Product",
     "price": 39.99
   }
   ```

4. **Delete Product**
   - Method: DELETE
   - URL: `http://localhost:3000/api/products/:id`

## Project Structure
```
MERN Stack/
├── backend/           # Backend server files
│   ├── config/       # Database configuration
│   ├── controllers/  # Route controllers
│   ├── models/       # Database models
│   ├── routes/       # API routes
│   └── server.js     # Server entry point
├── frontend/         # React frontend
│   ├── src/         # Source files
│   ├── dist/        # Build output
│   └── package.json  # Frontend dependencies
└── package.json      # Root dependencies
```

## Environment Variables

Create a `.env` file in the root directory:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
NODE_ENV=development
```

## Installation

1. **Clone the repository**
```bash
git clone https://github.com/arthurpvicente/MERN-Stack.git
cd MERN-Stack
```

2. **Install Dependencies**
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
```

## Running the Application

### Development Mode

1. **Start the Backend Server**
```bash
# From the root directory
npm run dev
```

2. **Start the Frontend Development Server**
```bash
# Open a new terminal
cd frontend
npm run dev
```

The application will be available at:
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:3000`

### Production Mode

1. **Build the Frontend**
```bash
# From the root directory
npm run build
```

2. **Start the Production Server**
```bash
npm start
```

The full application will be served at `http://localhost:3000`

## API Endpoints

- `GET /api/products` - Get all products
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

## Technologies Used

- **Frontend**: React, Chakra UI, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build frontend for production
- `npm start` - Start production server
