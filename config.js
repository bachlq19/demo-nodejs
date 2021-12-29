const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyCBp9Mx5GFVezS2qQ_fo3rrvlz4sB_9h-E",
  authDomain: "appvnpay.firebaseapp.com",
  databaseURL: "https://appvnpay.firebaseio.com",
  projectId: "appvnpay",
  storageBucket: "appvnpay.appspot.com",
  messagingSenderId: "15852141723",
  appId: "1:15852141723:web:e7a3ad7a5b5991ae619a3e",
  measurementId: "G-LTXVXG7YGV",
};
const setup = firebase.initializeApp(firebaseConfig);
exports.db = setup.firestore();