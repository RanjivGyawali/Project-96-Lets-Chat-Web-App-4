var firebaseConfig = {
      apiKey: "AIzaSyD_wfE_YFBqR89m6Ec2n5L0pQa6gAI_0hQ",
      authDomain: "kwitter-c3454.firebaseapp.com",
      databaseURL: "https://kwitter-c3454-default-rtdb.firebaseio.com",
      projectId: "kwitter-c3454",
      storageBucket: "kwitter-c3454.appspot.com",
      messagingSenderId: "40958004881",
      appId: "1:40958004881:web:46d22d5cc483653c81f930"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function Send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();