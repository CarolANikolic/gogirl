Gogirl is a personal project. The aim is to create a public API about women that changed the world. In this API you can access the following data:

- Name;
- Date of Birth;
- Date of Death;
- Continent where the woman was born;
- Summary: a short summary about her and her contribution to the world;
- Wikepedia: a wikipedia URL to lean more.

## Development Process

- Gather information on women that changed the world;
- Create an CSV file using JS to be imported on to the database;
- Create a database and a table with PostgreSQL, populating by importing the CSV file;
- Set up the backend with NodeJS;
- Set up the port;
- Mount middleware for working with JSON;
- Mount route path combined with the router middleware;
- Create the routes;
- Create the queries for: all women, by id, by continent and by name;
- Create the controller with all the functions resposible for receivind the requests and send the responses;
- Test requests and responses;
- Handle error and empty results;

## Built with

- JavaScript;
- Node.js;
- Express.js;

## Technologies and Tools

- [JavaScript](https://www.javascript.com)
- [Node.js](https://nodejs.org/en)
- [Express.js](https://expressjs.com)

## Usage

The API is organized by paths that designates the type os request.

### All Women

~~~
GET /api/v1/women
~~~

### Woman By ID

~~~
GET /api/v1/women/:id
~~~

### Women By Continent

~~~
GET /api/v1/women/continent/:continent
~~~

### Woman By Name

~~~
GET /api/v1/women/name/:name
~~~

## Data Format

The response data format is in JSON.

## Empty Values 

When no data is found based on the request, a personalized message to inform the empty result is sent to the client.

### Made with :heart: by [Caroline Almeida Nikolic](https://www.linkedin.com/in/carolinealmeidanikolic/)