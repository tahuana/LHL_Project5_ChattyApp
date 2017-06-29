# ChattyApp

Pinterest for learners.

Allow learners to save learning resources like tutorials, blogs and videos in a central place that is publicly available to any user.

## Functional Requirements:
* Primarily a client-side SPA (single-page app) built with ReactJS
* Based on the HTML and CSS provided
* Contains a chat log displaying messages and notifications
* Contains an input field to change your name and an input field to send a message
* The client-side app communicates with a server via WebSockets for multi-user real-time updates
* No persistent database is involved; the focus is on the client-side experience

## Behaviour Requirements
* When any connected user sends a chat message, all connected users receive and display the message
* When any connected user changes their name, all connected users are notified of the name change
* Notifications are styled differently from chat messages
* Header will display the count of connected users
* When the number of connected users changes, this count will be updated for all connected users

## Getting Started
- Install all dependencies (using the `npm install` command).
- Run the development web server (using the `npm start` command).
- Run the client web server (using the `npm start` command).
- Visit `http://localhost:3000/`

## Dependencies

- Node
- Express
- WS
- babel-core
- babel-loader
- babel-preset-es2015
- babel-preset-react
- babel-preset-stage-0
- css-loader
- eslint
- eslint-plugin-react
- node-sass
- sass-loader
- sockjs-client
- style-loader
- webpack
- webpack-dev-server
- react
- react-dom

## Screenshots
!["Main Page"](https://github.com/SeanSFitz/ResourceWall/blob/master/screenshots/MainPage.png)
!["Registration"](https://github.com/SeanSFitz/ResourceWall/blob/master/screenshots/Registration.png)
!["Search"](https://github.com/SeanSFitz/ResourceWall/blob/master/screenshots/Search.png)
!["UpdateProfile"](https://github.com/SeanSFitz/ResourceWall/blob/master/screenshots/UpdateProfile.png)
!["My Resources"](https://github.com/SeanSFitz/ResourceWall/blob/master/screenshots/MyResources.png)
!["Resource Details & Comments"](https://github.com/SeanSFitz/ResourceWall/blob/master/screenshots/ResourceDetails%2BComments.png)
!["Responsive Main Page"](https://github.com/SeanSFitz/ResourceWall/blob/master/screenshots/ResponsiveDesign.png)
