  # E-Commerce Website Backend
  ![License Badge](https://img.shields.io/badge/License-MIT-yellow.svg)
  ## Table of Contents
  1. [Instructions](#1-instructions)
  2. [Description](#2-description)
  3. [Contribution Guidelines](#3-contribution-guidelines)
  4. [Testing the Application](#4-testing-the-application)
  5. [License](#5-license)
  6. [Questions](#6-questions)

  ## 1. Instructions
  Below is a video demonstration of the application as well as a walkthrough of how it is installed.</br>
  https://drive.google.com/file/d/1SKhCrWRFni4CQv41TsVta4v0RZvy-9RU/view?usp=sharing

  Installation Instructions:
   1. To start, you will need to install the necessary package dependencies from the package.json by entering "npm i" in the VS Code Terminal.
   2. You will need to enter your postgres login information (username and password) into the provided .env file.
   3. In the terminal, enter "psql -U postgres" and enter your postgres password.
   4. Once the password has been entered, type "\i db/schema.sql" in the Terminal to create the database and tables to be seeded. Once this has been done, enter "\q".
   5. In order to use the seed script from the package.json, you will just need to enter "npm run seed" and that data will be added.
   6. Finally, you can enter "npm start" to synchronize the models to Sequelize and start the server.

   Below are examples of how to use Insomnia to test the routes of the application for creation/updating/deletion of items.</br>

  GET Route Exmaple </br>
  ![Insomnia GET Route Example](/Assets/insomnia-demo-1.png)

  POST Route Example </br>
  ![Insomnia POST Route Example](/Assets/insomnia-demo-2.png)

  ## 2. Description
  This is a demo for a backend e-commerce website. It allows the user to Create, Read, Update, and Delete (CRUD) products, categories, and tags associated with the inventory. The relationships between all three can be updated as well to add/remove information as needed.

  ## 3. Contribution Guidelines
  Because a large majority of this code was provided externally, only approved contributions may be added.

  ## 4. Testing the Application
  Insomnia is the ideal testing software to use for testing routes and ensuring all CRUD options for each model work correctly. You are also able to re-seed the database data to start over if needed. 

  ## 5. License
  MIT</br>
  https://opensource.org/licenses/MIT

  ## 6. Questions:
  Contact me with questions at:</br>
    - Github: *jeremydray*</br>
    - Email: *jeremydray@gmail.com*
