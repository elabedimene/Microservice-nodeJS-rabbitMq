var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//var personRouter = require('./routes/personRouter');

//dabase require
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/minis-finance';
const connect = mongoose.connect(url);

connect.then((db) => {
  console.log("connected to the server"); 
},(err) => { console.log(err) ; 
});

var MongoClient = require('mongodb').MongoClient;
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//app.use('/person', personRouter);

var amqp = require('amqplib/callback_api');

amqp.connect('amqps://unpdhmjh:9O6phmtSscvSCVvrg88qq8461qz8y8t5@jellyfish.rmq.cloudamqp.com/unpdhmjh', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    var queue = 'finance';

    channel.assertQueue(queue, {
      durable: false
    });
    channel.prefetch(1);
    console.log(' [x] Awaiting RPC requests');
    channel.consume(queue, function reply(msg) {
      var cin = msg.content.toString();

      console.log(" [.] fib(%d)", cin);

      
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("minis-finance");
        dbo.collection("person").findOne({"cin" : cin}, function(err, result) {
          if (err) throw err;
            
          channel.sendToQueue(msg.properties.replyTo,
            Buffer.from(JSON.stringify(result)), {
              correlationId: msg.properties.correlationId
            });
    
          channel.ack(msg);

          console.log(JSON.stringify(result));
          db.close();
        });
      });



      
      
    });
  });
});








// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
