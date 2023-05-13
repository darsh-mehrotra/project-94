
const firebaseConfig = {
    apiKey: "AIzaSyBPkUHLO0QiJcXUUE5tPrIZjKnX8DtmFRg",
    authDomain: "lets-chat-web-app-2f4ad.firebaseapp.com",
    projectId: "lets-chat-web-app-2f4ad",
    storageBucket: "lets-chat-web-app-2f4ad.appspot.com",
    messagingSenderId: "949323180882",
    appId: "1:949323180882:web:cd95dbe4685144ea48688b",
    measurementId: "G-5S6SLPQBT7"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
