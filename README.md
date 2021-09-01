# 21 MERN

## Book Search Engine

This is the twenty-first assignment for the MSU Coding Bootcamp; To refactor book search engine using a RESTful API to use a GraphQL API built with Apollo Server.  The app was built using a MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API.  

The refactoring sets up Apollo Server to use GraphQL instead of the RESTful API. It also refactors the authentication middleware to work with the GraphQL API, and creates an Apollo Provider to communicate with the Apollo Server. 

### Live Links
- [Daniel Shoup's Book Search Engine Repisitory](https://github.com/danshoup/BookSearchEngine)
- [Daniel Shoup's link to the deployed Book Search Engine on Heroku](https://book-search-engine-msu-2021.herokuapp.com/)


### Book Search Engine Screenshot

![Application Screen Shot1](./public/images/BookSearchEngine-screenshot.png)

## Acceptance Criteria

- On the back end: Implement Appolo Server as middleware that works with GraphQL API; Export typeDefs and resolvers to work with the Mongoose models; Define the query and mutation types.

- On the front end: Create file for the `me` query using Apollo Server and executing the mutations; Create an Apollo Provider; Change the functionality to use hooks instead of funtions from the API file. 

- Has Apollo Server that uses GraphQL queries and mutations to replace the existing RESTful API.

- Uses Apollo server as middlewre on the Express.js server.

- Includes schema settings for resolvers nad typeDefs.

- Uses an Apollo Provider to communicate with the Apollo Server.

- UI is is clean and polished, and user experience is intuitive and easy to navigate.

- Application resembles the mock-up provided in the homework instructions.

- Application must be deployed to Heroku

- Application must be deployed at a live URL, and load with no errors.

- GitHub URL must be submitted, and the repository must contain the application code.

- Application console is free of errors.

- Repository has a unique name and follows best practices for naming, indentation, comments, and contains descriptive commit messages.  The repository also contains a quality READMY file with description, screenshot,a nd link to deployed application.

- URL of the functional, deployed application, and the URL of the GitHub repository must be submitted.



