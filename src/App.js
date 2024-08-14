import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './Pages/HomeScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Profile from './Pages/Profile';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
        console.log(userAuth);
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? <Login /> : 
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<Profile/>}/>
          </Routes>
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
