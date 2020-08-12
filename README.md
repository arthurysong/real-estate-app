# Citidex

## Description

RESTful API used to manage resources for Citidex website. Built using Ruby on Rails. 

Checkout the [front end](https://github.com/arthurysong/citidex-frontend) for Citidex.

[Deployed application](https://citidex.herokuapp.com/)

## Screenshot

![screenshot](citidex.jpg)

## Endpoints 

|   Name    |     Resource     |       Path         | HTTP Verb |                     Purpose                     |
| :-------: | :--------------: | :----------------: | :-------: | :---------------------------------------------: |
|   Create  |      Home        |   /homes/          |    POST   |               Create new home                   |
|   Show    |      Zipcode     |   /zipcodes/:id    |    GET    |              Displays single zipcode            |
|   Create  |      Zipcode     |   /zipcodes        |    POST   |              Create new zipcode                 |
|   Show    |      Cities      |   /cities/:id      |    GET    |              Displays single city               |
|   Index   |      Cities      |   /cities          |    GET    |              Displays all cities                |
|   Create  |      Cities      |   /cities          |    POST   |                Create new city                  |

## Development

- Fork the repository and clone it to your machine
- Run `bundle install` to download dependencies
- Run API using `rails s`