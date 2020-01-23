File to submit: {Fullname}_T3A3.zip
Due: Jan 25 by 23:59
# T3A3: System with Data and Application Layers
## [Don't miss out on the the professional report!](REPORT.md)
### Implement a System with Data and Application Layers

- data layer and application layer, with a very basic presentation layer
## Brief
An organisation with existing products and services has approached you to build a prototype that extends or improves an existing part of their product/service. They require you to produce a complete application/business layer (server-side) and data layer (server-side) with a basic presentation layer(client-side) that would integrate with their existing systems/applications, but would substantially improve a small aspect of functionality. You must utilise NodeJS for the implementation of the data and business layers, and provide a report on the professional legal, ethical and legal considerations relating to the system, as well as the privacy and security concerns for the system.
## Requirements
### Business Logic and Documentation Requirements
#### R1: Implements an application layer which interfaces with a database to solve business problems
It is a requirement of this assessment that your application must execute without breaking errors and return data from a database. You will receive a mark for this requirement based on whether the features in requirements R2 - R12 work as described.
#### R2: Produces a professional report that provides an analysis of *privacy and security* concerns relating to a system
Discuss how the application will handle the privacy of user data within the system, and how security features of the frameworks you are utilising will assist to mitigate security concerns.

Example: discuss how the use of ORMs mitigate SQL injection attacks, and how API frameworks such as ExpressJS can handle the sanitisation of user input.
#### R3: Produces a professional report which discusses *professional, ethical and legal obligations* relating to a system
Discuss how you will address the following obligations as a developer:
- professional obligations (delivering the project on time, being explicit about ongoing maintenance of the system)
- ethical obligations: ensuring that the application conforms with ethical codes of conduct approved by industry
- legal obligations: that you have assessed whether the application is subject to any legal regulation, if none, consider any privacy implications.
#### R4: Uses programming language features or frameworks to implement a data model
Develop a server-side application on NodeJS which implements a data model and validates data in terms of its type and whether it is required.
#### R5: Uses programming language features or frameworks to manipulate a data model
Implement code using a JavaScript framework to create, read, update and delete records, and export all data from the database from the database.
#### R6: Uses programming language features or frameworks to display data
Develop a user interface using an HTML template that replicates user functionalities and displays data in a tabular format.
#### R7: Implements application layer which utilises a database to produce aggregated data relating to business matters
Develop an API endpoint which requires a query that retrieves data from the database and does a SUM, AVERAGE, MIN, MAX or other operation requiring data to be parsed and aggregated.
#### R8: Implements input validation and integrity checks on data to address business risks
Checks for null values and provides error checking to ensure integrity of information in the database.

For example: clearly indicate how you have tested the integrity of the data for entities to ensure that data will not lead to a database with incomplete data, or data that is not appropriate (for example: properties should have a size limit appropriate for the data held)
### Database Requirements
#### R9: Analyses a problem scenario and creates database tables and fields
#### a. create database tables and fields
#### b. create relationships between tables which enable queries
#### c. implement integrity checks
Write a SQL script to implement a database. The script must define:

- tables
- fields with validation
- relationships between tables

Your database must have at least FIVE tables which demonstrate:
- one to many relationships
- one to one relationships
#### R10: Develops complex queries which select, filter, group and order data
Write at least THREE SQL queries which involve the selecting, filtering, grouping and ordering data.
#### R11: Develops complex queries which join tables together
Write TWO SQL queries which join tables.
#### R12: Implements a script to export all data from the database
Write a SQL statement which retrieves all data from the database.
