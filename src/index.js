import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Dropdown from './Components/Dropdown'
import Dropdown2 from './Components/Dropdown2'





ReactDOM.render(
  <React.StrictMode>
    <center>
    
     <Header></Header>
<div align="left">
<Dropdown></Dropdown>
<Dropdown2></Dropdown2>
</div>

  <Home></Home>
  <Footer></Footer>
  </center>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
