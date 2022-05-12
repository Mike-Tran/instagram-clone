// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import Login from "./Login";
import Posts from "./Posts"
import Signup from './Signup';

function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);

  function setCurrentUser(currentUser) {
    setUser(currentUser);
    setLoggedIn(true);
    setPosts(currentUser.posts)
  }

  function logOut() {
    setUser({});
    setLoggedIn(false);
    setPosts([]);
    localStorage.token = '';
  }

  useEffect(() => {
    const token = localStorage.token;
    if (typeof token !== 'undefined' && token.length > 1
      && token !== 'undefined'
    ) {
      fetch('/auto_login', {
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


  console.log(posts);
  if (!loggedIn) {
    return (
      <>
        <Signup />;
        <Login setCurrentUser={setCurrentUser} />;
      </>
    )
  } else {
    return ( 
      <>
        <h1>{user.username}</h1>
        < Posts posts={posts} />
        <button onClick={logOut}> LogOut </button>
      </>
    )
  }
}

export default App;
