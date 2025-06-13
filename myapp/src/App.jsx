import React, { useState ,useContext,createContext} from 'react'
import LoginForm from './components/LoginForm'
import UserList from './components/UsersList'
import Navbar from './components/Navbar';
import './App.css'
import { useSelector } from 'react-redux';
import Counter from './components/Counter';

function App() {

  const visible = useSelector((state) => state.toggle_visible.visible);
  const count = useSelector((state) => state.counter.value);
  return (
    <div className="app-container">
          <Navbar />
       <div className="center-wrapper">
       {/* <Counter/> */}
        {visible ? <LoginForm /> : <UserList />}
        <UserList/>
      </div>
    </div>
  );
}

export default App
