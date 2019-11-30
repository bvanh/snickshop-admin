const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCrv6xFdsA5ZWg3dYPekLn6KajDsNt7hN8",
  authDomain: "snickshop-data-demo.firebaseapp.com",
  databaseURL: "https://snickshop-data-demo.firebaseio.com",
  projectId: "snickshop-data-demo",
  storageBucket: "snickshop-data-demo.appspot.com",
  messagingSenderId: "821920108186",
  appId: "1:821920108186:web:7a7f5a608dd665e8ebd923",
  measurementId: "G-E48YPNK3WR"
});

const db = firebaseApp.firestore();
const storage = firebaseApp.storage();
const auth = firebaseApp.auth();

export { db, storage, auth as default };
