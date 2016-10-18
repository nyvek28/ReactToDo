
import firebase from 'firebase'

var config = {
      apiKey: "AIzaSyBBmX04dco4BgMQwjMnu-lpiDBhr_iZ3ds",
      authDomain: "todo-app-bbdda.firebaseapp.com",
      databaseURL: "https://todo-app-bbdda.firebaseio.com",
      storageBucket: "todo-app-bbdda.appspot.com",
      messagingSenderId: "100092435273"
    }

firebase.initializeApp(config)

/////

var rootRef = firebase.database().ref(),
    notesRef = rootRef.child('notes')

rootRef.set({
  app: {
    name: 'Todo App',
    version: 1.0
  },
  isRunning: true,
  user: {
    name: 'Kevyn',
    age: 20
  }
})

notesRef.push().set({
  text: 'Walk the dog'
})

notesRef.on('child_added', (snapshot) => {
  console.log('Child added', snapshot.key, snapshot.val())
})
