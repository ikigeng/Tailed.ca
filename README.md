# Student Resource Exchange Platform

A modern web application that enables students to exchange resources, help, and services within their academic community. Built with a full-stack architecture using Node.js, Express, MongoDB, and React.

## Features

- Create and manage posts for resource requests and offers
- Categorize posts as either "Request" or "Offer"
- Add tags to posts for better organization
- Contact information sharing
- Real-time updates
- Modern, responsive user interface

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- RESTful API architecture

### Frontend
- React
- Vite
- Modern JavaScript (ES6+)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (Node Package Manager)
- MongoDB (local installation or MongoDB Atlas account)

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd student-resource-exchange
```

2. Install dependencies for all components:
```bash
npm run install-all
```

This will install dependencies for:
- Root project
- Client application
- Server application

## Running the Application

1. Start both client and server concurrently:
```bash
npm run dev
```

This will start:
- Frontend server at http://localhost:5173
- Backend server at http://localhost:3001

## Project Structure

```
student-resource-exchange/
├── client/             # Frontend React application
├── server/             # Backend Node.js/Express application
│   ├── models/        # MongoDB models
│   ├── routes/        # API routes
│   └── server.js      # Server entry point
├── package.json       # Project configuration
└── README.md         # Project documentation
```

## API Endpoints

### Posts
- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create a new post
- `GET /api/posts/:id` - Get a specific post
- `PUT /api/posts/:id` - Update a post
- `DELETE /api/posts/:id` - Delete a post

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact the maintainers. 