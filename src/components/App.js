import React, { useState } from "react";
import "../styles/App.css";
const keys = [
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
  [" "],
];
//You are given all the keys required in the keyboard
//Give id to each button you create for these keys. The id should be in format ("key" + key_character)
//For example,id of button for key 1 should be "key1".
//Also, for space key(the last row), give id "keyspace".


const VirtualKeyboard = () => {
  return (
    <div>

    </div>
  );
};

const App = () => {
  return (
    <div id="main">
      <h1 className="head">Virtual Keyboard</h1>
      <div id="textbox" className="textbox">
      </div>
      <VirtualKeyboard />
    </div>
  );
};

export default App;
