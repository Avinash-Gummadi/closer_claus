const firebaseConfig = {
  apiKey: "AIzaSyAUqLlCaY-D6DdIxDtYSBLNJA0Ed9RC1Oc",
  authDomain: "authfreelancer.firebaseapp.com",
  projectId: "authfreelancer",
  storageBucket: "authfreelancer.appspot.com",
  messagingSenderId: "363024659973",
  appId: "1:363024659973:web:c2769664ebb4fc777bce6c",
  measurementId: "G-TD79V9XY1K",
};
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// var auth = getAuth();
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
// import { getDatabase } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
// } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// var auth = getAuth();
// const analytics = getAnalytics(app);
console.log("auth");
function SignUp_FL() {
  console.log("SignUp_FL");
  var firstname = document.getElementById("fname").value;
  var lastname = document.getElementById("lname").value;
  var country = document.getElementById("country").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var regularExpression =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,50}$/;
  if (
    firstname.length != 0 &&
    lastname.length != 0 &&
    country.length != 0 &&
    email.length != 0 &&
    password.length != 0
  ) {
    if (password.match(regularExpression)) {
      createUserWithEmailAndPassword(auth, email, password).then((res) => {
        console.log(res);
        console.log("hi");
        window.location.href = ".../dashboard/index.html";
        // auth.signInWithEmailAndPassword(email,password)
      });
    } else {
      //All conditions of regex are not matched convey that to user
      document.querySelector(".className").reset();
    }
  } else {
    alert("Enter all the fields");
  }
}
