const firebaseConfig = {
  apiKey: "AIzaSyDOEKHHBjZO16DYNlqkieEI7ixh7rTHbqc",
  authDomain: "authentificationapp-ae71b.firebaseapp.com",
  databaseURL: "https://authentificationapp-ae71b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "authentificationapp-ae71b",
  storageBucket: "authentificationapp-ae71b.appspot.com",
  messagingSenderId: "754101945006",
  appId: "1:754101945006:web:97f81aea78affaba56a33f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth =  firebase.auth();

//signup function
function signUp(){
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
  //
  promise.catch(e=>alert(e.message));
  alert("Account Created!");
  window.open("https://lunar-blox.xyz/dashboard.html", "_self")
}

//signIN function
function  signIn(){
  var email = document.getElementById("email");
  var password  = document.getElementById("password");
  const promise = auth.signInWithEmailAndPassword(email.value,password.value);
}


//signOut

function signOut(){
  auth.signOut();
  alert("Logged out!");
}

//active user to homepage

firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    var email = user.email;
    window.open("https://lunar-blox.xyz/dashboard.html", "_self");
    canOnlyFireOnce()
  }else{
      
  }
})
