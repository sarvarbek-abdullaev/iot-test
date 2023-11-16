const firebaseConfig = {
  apiKey: "AIzaSyCDZjJmRmQQq1M9o8WjrUa5zeIusSuUMVI",
  authDomain: "iot-learning-fc26f.firebaseapp.com",
  databaseURL: "https://iot-learning-fc26f-default-rtdb.firebaseio.com",
  projectId: "iot-learning-fc26f",
  storageBucket: "iot-learning-fc26f.appspot.com",
  messagingSenderId: "365865795202",
  appId: "1:365865795202:web:b5bd68b7ae5a466c80fe9b",
  measurementId: "G-R668ZM91RQ"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var dataRef1 = database.ref('temp');
var dataRef2 = database.ref('hum');
var dataRef3 = database.ref('led');


//fetch the data
dataRef1.on('value', function (getdata2) {
  var temp = getdata2.val();
  document.getElementById('temperature').innerHTML = temp + "&#8451;";
})

dataRef2.on('value', function (getdata1) {
  var humi = getdata1.val();
  // document.getElementById('humidity').innerHTML = humi + "%";
  var gauge = new RadialGauge({
    renderTo: 'foo',
    value: humi,
  }).draw();
})

var index = 0;
var btn = document.getElementById("led");

function press() {
  index++;
  if (index % 2 == 1) {
    database.ref('LED').set("1");
    document.getElementById('led').innerHTML = "turn off";
  }
  else {
    database.ref('LED').set("0");
    document.getElementById('led').innerHTML = "turn on";
  }
}

document.getElementById("led").addEventListener("click", press);
