const express = require('express'); // import express module (simplifies routing/requests, among other things)
const app = express(); // create an instance of the express module (app is the conventional variable name used)
const fetch = require('node-fetch'); // import node-fetch (enables the fetch API to be used server-side)
const PORT = process.env.PORT || 5000; // use either the host env var port (PORT) provided by Heroku or the local port (5000) on your machine
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');


// Express Route
  const athleteRoute = require('./routes/athlete.route')

// // Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://bensonm3:%40Bensmat08@cluster0.hvyfm.mongodb.net/Project_0?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
  console.log('Database sucessfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)



// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
 app.use(cors());
 app.use('/athletes', athleteRoute)

// // test stuff
// app.use(express.static(path.join(__dirname, 'build')));
    
// // app.get('/', function (req, res) {
// //   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// // })

app.get('/', (req, res) => { // send a get request to root directory ('/' is this file (app.js))
  fetch('https://www.boredapi.com/api/activity') // fetch activity from bored API - https://www.boredapi.com/about
    .then(res => res.json()) // return a promise containing the response
    .then(json => res.send(`<h1>Today's Activity: ${json.activity}!</h1>`)) // extract the JSON body content from the response (specifically the activity value) and sends it to the client
    .catch(function(err){ // catch any errors
      console.log(err); // log errors to the console
    })
})

app.listen(PORT, () => { // start server and listen on specified port
  console.log(`App is running on ${PORT}`) // confirm server is running and log port to the console
}) 