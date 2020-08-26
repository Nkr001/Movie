import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';





const firebase=require('firebase')
require('firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyDOvbbafBJP49DcmanmVDNWdfJdpgY2JaI",
  authDomain: "movies-50974.firebaseapp.com",
  databaseURL: "https://movies-50974.firebaseio.com",
  projectId: "movies-50974",
  storageBucket: "movies-50974.appspot.com",
  messagingSenderId: "821725198558",
  appId: "1:821725198558:web:a23758da6eebf38a01ea4f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
