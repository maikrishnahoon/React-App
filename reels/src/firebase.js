import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/storage'
import 'firebase/firestore'

firebase.initializeApp(
    {
        apiKey: "AIzaSyDR1DJVt1lEZ--NDcIoJNVJSPWyhPY1jOg",
        authDomain: "reels-c3035.firebaseapp.com",
        projectId: "reels-c3035",
        storageBucket: "reels-c3035.appspot.com",
        messagingSenderId: "1079318867610",
        appId: "1:1079318867610:web:99a4997bedc52044e8f923"
      }
)
export const auth = firebase.auth(); // direct exporting auth
const firestore = firebase.firestore();

// dividing firestore into 3 part (comment,posts,users)
// we will export this database not whole firebase so no one can make a neww type of collection  
export const database ={
    users:firestore.collection('users'),          // creating a collection in firestore named users.
    getCurrentTimeStamp : firebase.firestore.FieldValue.serverTimestamp         // to get current userInfo
}

export const storage = firebase.storage();

// export default firebase;