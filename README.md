# :earth_africa: Trip Expenses App :heavy_dollar_sign:
![Powered by: Free imagination](https://img.shields.io/badge/Powered%20by-Free%20imagination-blueviolet)
![Status: Fixes in progress](https://img.shields.io/badge/Status-Fixes%20in%20progress-blue)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

Originally I started to develop the project as part of [Coderscamp](https://coderscamp.edu.pl/) initiative (2019/2020 edition).

We developed core functionalities as a group and fullfilled the project requirements. Currently I have individually taken up the task to futher develop the app and create fixes using knowledge and skills I acquired over the past few months.

You can check original source group code at [Project Mentor Github Page](https://github.com/dobrzyckahanna/Trip-Expenses-App).

Live demo is temporarily taken down pending security fixes.


## About the project

### Main idea:
Project was designed as a **tool for managing trip expenses**.

After creating an account, user has options for:
- adding / modifying / deleting **trips** (name, startdate, description)
- adding / modifying / deleting **expenses** (amount, currency, category, description)
- generating a **trip summary** - comparison of spent and leftover amount according to budget, graph with expenses divided into categories
- displaying **current exchange rates** and converting budget from one supported currency to another using external API


### Project requirements:
The project should fullfill the list of requirements as follows:
- **frontend**: React + Redux + chosen styling type
- **backend**: database with input validation + client / server communication + HTTP request handling + authorization/authentication
- **deployment**: live version of project on chosen web hosting platform

### Project realization: used technologies and libraries:
- **frontend**: React, Redux, Styled Components
- **extra frontend libraries**: react-datepicker, react-select, moment
- **backend**: mongoose tool (for interaction with MongoDB database), Express server,
- **authorization and security**: Express, bcrypt & jsonwebtoken,
- **deployment**: heroku


## Setup for development:

### Before getting started
To run the project on your local machine for development and testing purposes you need to install the following software:

- node.js & npm
- MongoDB

### Getting started
1. Clone repository
```
git clone https://github.com/ireshka/Trip-Expenses-App.git
```
2. [Create your database on MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and add .env file to your repository (main folder)
```
.env
```
```
NODE_CONFIG_DIR=./config
DB_USER=your Atlas database user name (not user name to Mongo account)
DB_PASSWORD=your Atlas database password (not password to Mongo account)
DB_DATABASE_ADDRESS=your Atlas database address
DB_DATABASE_NAME=your Atlas database name
NODE_ENV=development
DEBUG=server:startup,server:database
DEBUG_COLORS=true
DEBUG_FD=1
JWT_PRIVATEKEY=your secret jwt key
```
3. Install required project dependencies
```
cd TravelPlanner
npm run install:app
```
4. Run developer server
```
npm run start:app
```
5. To see and test app open on [localhost:3000](http://localhost:3000)

## Credits
- Icons used:
    - Icon made by Smashicons from www.flaticon.com
    - Icon made by Freepik from www.flaticon.com
- background photo by Louis Hansel on https://unsplash.com/
- icons from <a href="https://fontawesome.com/">Font Awesome</a>
- external exchange rates API: https://api.exchangerate-api.com/v4/latest/

## To improve
[To be moved to Github Project section]
- keeping user logged in after page refresh
- secure Private Route (change the validation method)
- redux refactor 
- improve solution with exchange rates object
- add animation to dropdown menu
- remove or hash password in login payload
- change user status to "loggedIn" after registration

## Future features
- adding / modifying custom categories
- searching in user trips
- sorting user trips
- sorting and filtering user expenses

## Authors
### Active project maintainer:
- Małgosia - [ireshka](https://github.com/ireshka)

### Initial contributors:
- Ania - [apiwonska](https://github.com/apiwonska)
- Natalia - [natkalia](https://github.com/natkalia)
- Agata - [ceglarzagata](https://github.com/ceglarzagata)

## About CodersCamp
This was the 5th edition of the camp. More info about the camp: https://coderscamp.edu.pl/