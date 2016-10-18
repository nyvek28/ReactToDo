import firebase from 'firebase'

try{
  var config = {
        apiKey: "AIzaSyBBmX04dco4BgMQwjMnu-lpiDBhr_iZ3ds",
        authDomain: "todo-app-bbdda.firebaseapp.com",
        databaseURL: "https://todo-app-bbdda.firebaseio.com",
        storageBucket: "todo-app-bbdda.appspot.com",
        messagingSenderId: "100092435273"
      }

  firebase.initializeApp(config)
}catch(err){

}

export var firebaseRef = firebase.database().ref()
export default firebase
