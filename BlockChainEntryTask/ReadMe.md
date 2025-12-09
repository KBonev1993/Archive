To run the project, please follow these steps:

    Clone the repository to your local machine using the command:

git clone https://github.com//.git
Replace and with your GitHub username and the name of the repository, respectively.

2.Install the required dependencies by navigating to the project directory and running the following command:

npm install

3.Create a .env file in the root directory of the project and set the following environment variables:

DB_HOST= DB_PORT= DB_NAME= DB_USER= DB_PASSWORD=
Replace , , , , and with the appropriate values for your database.

4.Start the server by running the following command:

npm start
This will start the server and make it available at http://localhost:3000.
5.To test the API endpoints, you can use a tool like Postman or simply navigate to http://localhost:3000/blocks/all or http://localhost:3000/block/hash in your web browser. These endpoints will return a list of all blocks and a specific block, respectively, as described in the prompt.

LimeAcademy Entry Task

Blockchain and REST API Implementation

Project Description This project is a basic implementation of a blockchain and REST API. It includes a Block class that handles the creation of blocks, a Blockchain class that operates as a blockchain network and validates the chain, and a database schema that supports transactions. The project also includes REST API endpoints for getting all blocks and getting a specific block based on its hash.

Installation

1.Clone the repository to your local machine using the command:

git clone https://github.com//.git

Replace and with your GitHub username and the name of the repository, respectively.

2.Install the required dependencies by navigating to the project directory and running the following command:

npm install

3.Create a .env file in the root directory of the project and set the following environment variables:

DB_HOST= DB_PORT= DB_NAME= DB_USER= DB_PASSWORD=

Replace , , , , and with the appropriate values for your database.

Usage

1.Start the server by running the following command:

npm start

This will start the server and make it available at http://localhost:3000.

2.To test the API endpoints, you can use a tool like Postman or simply navigate to http://localhost:3000/blocks/all or http://localhost:3000/block/hash in your web browser. These endpoints will return a list of all blocks and a specific block, respectively, as described in the prompt.

Here's an example folder structure for your project:

    /src
        blockchain.js
        index.js
    /models
        block.js
    /routes
        blocks.js
        block.js
    /database
        db.js
    package.json
    README.md
