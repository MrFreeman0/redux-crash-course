import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';


import Posts from './components/Posts'
import PostForm from './components/PostForm'
import Store from './store'


function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <PostForm/>
        <Posts/>
      </div>      
    </Provider>

  );
}

export default App;
