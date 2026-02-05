// Firebase config
var firebaseConfig = {
  apiKey: "AIzaSyCAkdsO3-Dzbwv6a4QCuEdhWbCmPNCVXtc",
  authDomain: "crodytolaunchingsoon.firebaseapp.com",
  databaseURL: "https://crodytolaunchingsoon-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "crodytolaunchingsoon",
  storageBucket: "crodytolaunchingsoon.firebasestorage.app",
  messagingSenderId: "473030269256",
  appId: "1:473030269256:web:d15d063e6e36d37222fb7d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to database
var database = firebase.database();

// Save number
function saveNumber() {
  var phoneInput = document.getElementById("phone");
  var phone = phoneInput.value.trim();

  // validation
  if (phone.length !== 10 || isNaN(phone)) {
    alert("Enter a valid 10 digit mobile number");
    return;
  }

  database.ref("launch_users").push({
    phone: phone,
    createdAt: new Date().toISOString()
  });

  alert("🔥 You're in! We'll notify you soon.");
  phoneInput.value = "";
}
