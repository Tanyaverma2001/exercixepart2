import React from 'react';
import './index.css';

function Tweet(props) {
  return (
    <div >
      <h3>Username: {props.uname}@gmail.com</h3>
      <h3>Name: {props.name}</h3>
      <h3>Date: {props.date}</h3>
      <p>Message: {props.msg}</p>
    </div>
  );
};

function App() {
  return (
    <div>
      <Tweet uname="user1" name="User 1" date="2022-01-01" msg="Hello World!" />
      <Tweet uname="user2" name="User 2" date="2022-02-01" msg="Please Tweet here!" />
      <Tweet uname="user3" name="User 3" date="2022-03-01" msg="You may tweet twice" />
    </div>
  );
};

export default App;