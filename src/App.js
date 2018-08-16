import React, { Component } from 'react';
import firebase from 'firebase';

import Navbar from './header';
import Home from './home';



const config={


  apiKey: "AIzaSyD83Oc4FWk5ZLTp5byYfE1XFqut3wF-568",
  authDomain: "arac-takip-b96b1.firebaseapp.com",
  databaseURL: "https://arac-takip-b96b1.firebaseio.com",
  projectId: "arac-takip-b96b1",
  storageBucket: "arac-takip-b96b1.appspot.com",
  messagingSenderId: "437973512022"
};

firebase.initializeApp(config);



class App extends Component {

  render() {
    return (
      
        <div>
            <Navbar/>
            <Home/>
           
</div>
       
     
    );
  }
}

export default App;
