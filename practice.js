const firebaseConfig = {
    apiKey: "AIzaSyAYy44Iuh5H0WD3b0MJgyxtknt_e5yuMe4",
    authDomain: "project94-fb292.firebaseapp.com",
    databaseURL: "https://project94-fb292-default-rtdb.firebaseio.com",
    projectId: "project94-fb292",
    storageBucket: "project94-fb292.appspot.com",
    messagingSenderId: "307550345219",
    appId: "1:307550345219:web:78e4971c2ac3e026371636"
  };
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
function addUser(){
    user_name = document.getElementById("user_name").value ;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
 }