
var firebaseConfig = {
    apiKey: "AIzaSyBTH_kx_eE86LBl8sFPCWbw5Q7jbwDUwYA",
    authDomain: "social-media-262b7.firebaseapp.com",
    databaseURL: "https://social-media-262b7-default-rtdb.firebaseio.com",
    projectId: "social-media-262b7",
    storageBucket: "social-media-262b7.appspot.com",
    messagingSenderId: "441577905294",
    appId: "1:441577905294:web:4dd65e31f6ac4319d6fddf",
    measurementId: "G-NWNMTYDVS4"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - "+Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoom(this.id)' >#"+Room_names+"<div><hr>";
    document.getElementById("output").innerHTML+= row;
    //End code
    });});}
getData();

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "Welcome " + user_name + "!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}
function redirectToRoom(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html"
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}