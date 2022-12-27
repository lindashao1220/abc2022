let express = require('express');
let app = express();
let http = require('http').createServer(app);
let io = require('socket.io')(http);


var admin = require("firebase-admin");

// Fetch the service account key JSON file contents
var serviceAccount = require("./key/firsttry-9b5fb-firebase-adminsdk-f9n2m-c8c16a4458.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // The database URL depends on the location of the database
  databaseURL: "https://firsttry-9b5fb-default-rtdb.firebaseio.com"
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database();
var ref = db.ref("message");
// ref.push("byee")

// ref.once('value').then((snapshot)=>{
//   console.log(snapshot.val());
//   let archivalData = snapshot.val();
//   socket.emit('archival-data', archivalData);
// });

// ref.once("value", function(snapshot) {
//   console.log(snapshot.val());
// });


let userCount = 0;
app.use(express.static('public'))


io.on('connection', (socket) => {
  ref.once('value').then((snapshot)=>{
    console.log(snapshot.val());
    let archivalData = snapshot.val();
    socket.emit('archival-data', archivalData);
  });
  
  console.log('a user connected');
  userCount += 1;
  io.emit('new-user-count', {count: userCount});


  socket.on('message-from-one', (data) => {
    ref.push(data);
    io.emit('message-to-all', data);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
    userCount -= 1;
    io.emit('new-user-count', {count: userCount});
  });

});
http.listen(3000, () => {
  console.log('listening on *:3000');
});
