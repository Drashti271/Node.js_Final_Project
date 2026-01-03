# Node.js_Final_Project
Recipe Sharing Platform

This is a recipe sharing platform built with Node.js, Express, MongoDB, and EJS. Users can register, log in, and share their favorite recipes with others. The platform includes features for uploading images, adding recipes, viewing all recipes, and managing user roles.

Project Structure

Here’s the structure of the project:

NODE.JS_FINAL_PROJECT
├── configs/
│   ├── database.js            # Database connection configuration
│   └── dotenv.js              # Environment variable configurations
├── controllers/
│   ├── recipe.controller.js   # Logic for recipe operations
│   └── user.controller.js     # Logic for user operations
├── middlewares/
│   ├── imageUpload.js         # Middleware for image uploading using multer
│   ├── userAuth.middleware.js # Middleware for user authentication
│   └── userRole.middleware.js # Middleware for role-based access control
├── models/
│   ├── recipe.model.js        # Recipe schema and model
│   └── user.model.js          # User schema and model
├── routers/
│   ├── index.js               # Main route handler
│   ├── recipe.route.js        # Routes related to recipes
│   └── user.route.js          # Routes related to users
├── uploads/                   # Directory for storing uploaded images
├── views/                     # EJS views for rendering pages
│   ├── pages/
│   │   ├── addRecipe.ejs      # Form for adding a recipe
│   │   ├── login.ejs          # Login page
│   │   ├── register.ejs       # User registration page
│   │   └── viewRecipe.ejs     # Page displaying all recipes
│   └── partials/
│       ├── footer.ejs         # Footer partial for all pages
│       ├── header.ejs         # Header partial for all pages
│       └── index.ejs          # Main index page
├── .env                       # Environment variables for configuration (e.g., DB URI, JWT secret)
├── .env.example               # Example environment file (don't forget to rename to .env)
├── .gitignore                 # Gitignore file for ignoring node_modules, etc.
├── package.json               # Project dependencies and scripts
└── package-lock.json          # Lock file for npm dependencies

Installation Instructions

Clone the repository:

git clone https://github.com/your-username/recipe-sharing-platform.git


Navigate to the project folder:

cd recipe-sharing-platform


Install the dependencies:

npm install


Set up your environment variables. Copy .env.example to .env and fill in the necessary information:

cp .env.example .env


MONGODB_URI: The MongoDB connection URI for your database.

JWT_SECRET: A secret key for signing JWT tokens.

Run the project:

npm start


This will start the server at http://localhost:3000.

Features

User Registration: Allows users to create an account.

User Login: Authenticated users can log in.

Role-Based Access Control: Different routes can be accessed based on the user's role (admin, user).

Add Recipe: Authenticated users can add recipes, including an image upload feature.

View Recipes: All users can view the list of recipes shared by others.

Edit Recipe: Users can update their own recipes.

Delete Recipe: Users can delete their own recipes.

Technologies Used

Node.js: Backend runtime.

Express.js: Web framework for Node.js.

MongoDB: NoSQL database for storing recipes and user data.

Mongoose: ODM (Object Data Modeling) library for MongoDB and Node.js.

EJS: Templating engine for rendering dynamic views.

Multer: Middleware for handling file uploads.

JSON Web Tokens (JWT): For user authentication and session management.

Routes

GET / - Home page, lists recipes.

GET /register - User registration page.

POST /register - Handles user registration.

GET /login - User login page.

POST /login - Handles user login.

GET /recipes - View all recipes.

GET /addRecipe - Page to add a new recipe.

POST /addRecipe - Handles recipe creation.

GET /viewRecipe/:id - View details of a specific recipe.

POST /editRecipe/:id - Handles editing a recipe.

GET /deleteRecipe/:id - Deletes a recipe.

GET /logout - Logs out the user and clears the session.

Contributing

If you want to contribute to this project:

Fork the repository.

Create a new branch for your feature or bug fix.

Make your changes and commit them.

Push your changes and create a pull request.

License

This project is open-source and available under the MIT License
.
