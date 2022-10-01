import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function person(user){
  return user.firstName + " " + user.lastName;
}
const user = {
  firstName: "Amitesh",
  lastName: "Verma",
}
const element = React.createElement(
  'h1',
  {className: 'greet'},
  "Hello " + user.firstName + " " +user.lastName
);

export default function Welcome(props){
  return <h1>Welcome , {props.name} </h1>
}


root.render(
  App()
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
