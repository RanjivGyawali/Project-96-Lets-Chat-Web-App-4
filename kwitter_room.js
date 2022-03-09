var firebaseConfig = {
      apiKey: "AIzaSyBnsLrVPdoIr-QP-pqZUNGpPcPeKqnK6xw",
      authDomain: "chat-me-8e29e.firebaseapp.com",
      databaseURL: "https://chat-me-8e29e-default-rtdb.firebaseio.com",
      projectId: "chat-me-8e29e",
      storageBucket: "chat-me-8e29e.appspot.com",
      messagingSenderId: "208916367955",
      appId: "1:208916367955:web:67f58247fa8304f2ded4a6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addroom() {
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding Room Name"
      });
      localStorage.setItem("room_name", room_name);
      window.location= "kwitter_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name-"+Room_names);
                  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location= "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}