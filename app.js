const express = require('express');
const http = require('http')
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

// Mine
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// Init App
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

// Add Middleware
app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views',  '404.html'))
});

// const url = "mongodb://localhost/jotonialogistics";

// // MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
// //   if (err) throw err;
// //   console.log("Database created!");
// //   db.close();
// // });

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/jotonialogistics', {useNewUrlParser: true}, );

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
//   console.log("Database created!");
// });

// // Load View Engine
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// // set public folder
// app.use(express.static(path.join(__dirname, 'public')));
// // Home Route
// app.get('/', function(req, res){
//     res.render('index', {
//         title:'Bookings'
//     });
// });

// // Add Route
// app.get('/bookings/add', function(req, res){
//     res.render('add_booking', {
//         title:'Add Booking'
//     });
// });
// Start Server
app.listen(3000, ()=>{
    console.log('Server started on port 3000 ===>');
});