# Microservice-nodeJS-rabbitMq

this example test how to post on rabbitMq a string (in our case CIN of a person) and get his informations from Mongodb

requirements :
install Mongodb , cretae Database 
create a rabbitMq account on Cloud https://www.cloudamqp.com/docs/index.html

to install rabbitMQ librery run : npm install --save amqplib  

in the first terminal run : 
cd server
npm start
 
in the second run 
node client.js "CIN of the person"
