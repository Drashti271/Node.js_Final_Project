# Node.js_Final_Project

Recipe Sharing Platform

This is a recipe sharing platform built with Node.js, Express, MongoDB,
and EJS. Users can register, log in, and share their favorite recipes
with others. The platform includes features for uploading images, adding
recipes, viewing all recipes, and managing user roles.

## Project Structure

    NODE.JS_FINAL_PROJECT
    ├── configs/
    │   ├── database.js
    │   └── dotenv.js
    ├── controllers/
    │   ├── recipe.controller.js
    │   └── user.controller.js
    ├── middlewares/
    │   ├── imageUpload.js
    │   ├── userAuth.middleware.js
    │   └── userRole.middleware.js
    ├── models/
    │   ├── recipe.model.js
    │   └── user.model.js
    ├── routers/
    │   ├── index.js
    │   ├── recipe.route.js
    │   └── user.route.js
    ├── uploads/
    ├── views/
    │   ├── pages/
    │   │   ├── addRecipe.ejs
    │   │   ├── login.ejs
    │   │   ├── register.ejs
    │   │   └── viewRecipe.ejs
    │   └── partials/
    │       ├── footer.ejs
    │       ├── header.ejs
    │       └── index.ejs
    ├── .env
    ├── .env.example
    ├── .gitignore
    ├── package.json
    └── package-lock.json

## Installation Instructions

``` bash
git clone https://github.com/your-username/recipe-sharing-platform.git
cd recipe-sharing-platform
npm install
cp .env.example .env
npm start
```

Server runs at: http://localhost:3000

Recipe List 
<img width="1592" height="531" alt="image" src="https://github.com/user-attachments/assets/1b933fe4-f2d2-4322-aafd-04ef4b117b32" />

## Features

-   User Registration & Login
-   Role-Based Access Control
-   Add / Edit / Delete Recipes
-   Image Upload with Multer
-   JWT Authentication

## Technologies Used

Node.js, Express.js, MongoDB, Mongoose, EJS, Multer, JWT

## License

MIT License
