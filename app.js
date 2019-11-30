const express = require('express');
const path = require('path')
// Init App
const app = express();

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// set public folder
app.use(express.static(path.join(__dirname, 'public')));
// Home Route
app.get('/', function(req, res){
    res.render('index', {
        title:'Bookings'
    });
});

// Add Route
app.get('/bookings/add', function(req, res){
    res.render('add_booking', {
        title:'Add Booking'
    });
});
// Start Server
app.listen(3000,function(){
    console.log('Server started on port 3000 ===>');
});