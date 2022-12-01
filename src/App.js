import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // run once the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log('THE USER IS >>> ', authUser);
      if (authUser) {
        //the user just logged or was logged
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        //user logs out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />

        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
