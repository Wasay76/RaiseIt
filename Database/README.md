# RaiseIT Database API

This repository contains the implementation of a database for managing information about bills and Members of Provincial Parliament (MPPs) in Ontario. The project uses MongoDB as the database and Express.js to handle API requests.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
  - [Clone the Repository](#clone-the-repository)
  - [Install Dependencies](#install-dependencies)
  - [Set Up MongoDB](#set-up-mongodb)
  - [Configure Environment Variables](#configure-environment-variables)
  - [Start the Server](#start-the-server)
  - [Test Endpoints](#test-endpoints)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
  - [Bill APIs](#bill-apis)
  - [MPP APIs](#mpp-apis)
- [Testing](#testing)
- [Future Improvements](#future-improvements)

## Features

- Store and manage information about Ontario bills and MPPs.
- APIs to retrieve data for specific queries such as:
  - All bills or specific bills by number/status/sponsor.
  - All MPPs or specific MPPs by name/riding.
  - Bills sponsored by MPPs.
  - MPP positions on specific bills.
  - MPP involvement in motions.

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Framework for creating APIs.
- **MongoDB**: Database for storing bill and MPP data.
- **Mongoose**: ODM for MongoDB and Node.js.
- **Postman**: Tool for testing API endpoints.
- **Puppeteer**: For web scraping to populate the database.

## Setup Instructions

### Clone the Repository

```bash
git clone <repository_url>
cd RaiseIT
```
### Install Dependencies

```bash
npm Install
```
### Set Up MongoDB

- Install and run MongoDB locally or provide a cloud MongoDB URI.

### Configure Environmental Veriables

- Create a .env file in the root directory with the following:

```bash
PORT=5003
MONGO_URI=mongodb://localhost:27017/RaiseIT
```

### Start the Server

```bash
node server.js
```
## Environment Variables

| Variable    | Description                 | Example                               |
|-------------|-----------------------------|---------------------------------------|
| `PORT`      | Port number for the server  | `5003`                                |
| `MONGO_URI` | MongoDB connection string   | `mongodb://localhost:27017/RaiseIT`    |

## API Endpoints

### Bill APIs

| Endpoint                      | Method | Description                                   |
|-------------------------------|--------|-----------------------------------------------|
| `/api/bills/getAllBills`      | GET    | Get all bills or a specific bill by number     |
| `/api/bills/getBillsByStatus` | GET    | Get bills filtered by their status             |
| `/api/bills/getBillsBySponsor`| GET    | Get bills sponsored by a specific MPP          |

### ETC

### MPP APIs

| Endpoint                                 | Method | Description                                        |
|------------------------------------------|--------|----------------------------------------------------|
| `/api/mpps/getAllMPPs`                    | GET    | Get all MPPs or a specific MPP by name             |
| `/api/mpps/getMPPByName`                  | GET    | Get a specific MPP by name                         |
| `/api/mpps/getMPPByRiding`                | GET    | Get MPPs filtered by riding                        |
| `/api/mpps/getBillsSponsoredByMPP`        | GET    | Get bills sponsored by a specific MPP              |
| `/api/mpps/getMPPPositionOnBill`          | GET    | Get MPP’s position on a specific bill               |
| `/api/mpps/getMotionsByMPP`                | GET    | Get motions involving a specific MPP                |

### ETC

## Testing

Use Postman or any REST client to test API endpoints.

### Example Requests

#### Get All Bills

```bash
GET http://localhost:5003/api/bills/getAllBills
```

### Get MPP By Name 

```bash
GET http://localhost:5003/api/mpps/getMPPByName?name=John Doe
```
- Verify responses in the database using MongoDB Compass or the mongosh shell.

## Future Improvements

- **Authentication and Authorization**: Implement secure access to the API using JWT or OAuth.
- **Schema Expansion**: Extend the database schema to include more fields for bills and MPPs, such as bill descriptions, MPP contact information, and voting records.
- **Real-time Updates**: Integrate WebSockets to provide real-time updates for new bills or changes to existing MPPs.
- **Frontend Development**: Develop a user-friendly frontend interface for easier interaction with the database, allowing users to browse and query bills and MPPs without using API clients.
- **Enhanced Testing**: Implement automated testing using frameworks like Jest or Mocha to ensure API reliability and performance.
- **Documentation**: Create comprehensive API documentation using tools like Swagger for better developer experience.
- **Deployment**: Set up continuous integration and deployment pipelines to streamline updates and maintenance.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Postman](https://www.postman.com/)
- [Puppeteer](https://pptr.dev/)



