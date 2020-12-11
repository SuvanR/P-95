var firebaseConfig = {
      var firebaseConfig = {
            apiKey: "AIzaSyDD_8680-6x8uzohwbYAIWzfN87nhdN-wY",
            authDomain: "kwitter-43cd6.firebaseapp.com",
            databaseURL: "https://kwitter-43cd6-default-rtdb.firebaseio.com",
            projectId: "kwitter-43cd6",
            storageBucket: "kwitter-43cd6.appspot.com",
            messagingSenderId: "697889217112",
            appId: "1:697889217112:web:1d95832730d069040c482d"
          };

//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}