import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: ''
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
// const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
// const commentsCollection = db.collection('comments')
// const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  // usersCollection,
  postsCollection,
  // commentsCollection,
  // likesCollection
}

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js"></script>
//
// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.20.0/firebase-analytics.js"></script>
//
// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyCyZeac_yevgSLXqnlKNH1Xm2zULOYLY9Q",
//     authDomain: "ratpersona-blog.firebaseapp.com",
//     databaseURL: "https://ratpersona-blog.firebaseio.com",
//     projectId: "ratpersona-blog",
//     storageBucket: "ratpersona-blog.appspot.com",
//     messagingSenderId: "427157095902",
//     appId: "1:427157095902:web:35465b326edbc02483c94f",
//     measurementId: "G-XKELKQ43SQ"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>
