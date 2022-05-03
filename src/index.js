import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';



import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/* <div>
  <Card Id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
  <Card d={robots[1].id} name={robots[1].name} email={robots[1].email}/>
  <Card d= {robots[2].id}name={robots[2].name} email={robots[2].email}/>
  <Card d={robots[3].id} name={robots[3].name} email={robots[3].email}/>
  <Card d={robots[4].id} name={robots[4].name} email={robots[4].email}/>
  </div> */