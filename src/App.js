import React, { useEffect } from 'react';
import './App.scss';
import Header from "./components/header";
import LeftSidebar from './components/leftSidebar';
import Feed from './components/feed';
import Widget from './components/shared/widget';
import SignIn from './components/sign in';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logoutUser, selectUser } from './features/userSlice';
import { auth } from './firebase';

function App() {
  
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      console.log(userAuth)
      console.log("break")
      if(userAuth){
        dispatch(loginUser({
          email : userAuth.email,
                    uid : userAuth.uid,
                    photoURL : userAuth.photoURL,
                    name :userAuth.displayName,
                    description : userAuth.description
        }))
      }
      else{
        dispatch(logoutUser);
      }
    })
  },[])


  console.log(user);

  return (
    <div className="app">
      {
        user ? (<div className="app-body container">
          <Header/>
        <LeftSidebar/>
        <Feed/>
        <div className="right-sidebar">
        <Widget title="LinkedIn News"/>
        <Widget title="Ad"/>
        </div>
      </div>) :(
        <SignIn/>
      )
      }
    </div>
  );
}

export default App;
