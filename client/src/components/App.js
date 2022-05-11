import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  function setCurrentUser(currentUser) {
    console.log("INSIDE SET CURRENT USER");
    setUser(currentUser);
    setLoggedIn(true);
    console.log(user)
  }

  function logOut() {
    setUser({});
    setLoggedIn(false);
    localStorage.token = '';
  }

  useEffect(() => {
    const token = localStorage.token;
    if (typeof token !== 'undefined' && token.length > 1
      && token !== 'undefined'
    ) {
      fetch('http://localhost:3000/auto_login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      })
        .then((r) => r.json())
        .then((user) => {
          setCurrentUser(user)
        });
    } else {
      console.log('No token found, try logging in!');
    }
  }, []);


  if (!loggedIn) {
    return <Login setCurrentUser={setCurrentUser} />;
  } else {
    return <h1>{user.username}</h1>
  }
}

export default App;
