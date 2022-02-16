# Microservice-nodeJS-rabbitMq

this example test how to post on rabbitMq a string (in our case CIN of a person) and get his informations from Mongodb

requirements : install Mongodb , cretae Database 

to install rabbitMQ librery run : npm install --save amqplib  

in the first terminal run : 
cd server
node server.js
 
in the second run 
node client.js "CIN of the person"
