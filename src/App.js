import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button/Button";
import { useState } from "react";

function App() {
  const [str, setStr] = useState("");
  const [res, setRes] = useState(0);


  return (
    <div>
      <div>
        <h1>React Calculator</h1>
        <input type="text" readonly value={str} />
        <br />
        <p id="result">{res}</p>
        <br />
        <br />
        <div className="calcButtons">
            <Button setStr={setStr} setRes={setRes} str={str} res={res}>7</Button>
            <Button setStr={setStr} setRes={setRes} str={str} res={res}>8</Button>
            <Button setStr={setStr} setRes={setRes} str={str} res={res}>9</Button>
            <Button setStr={setStr} setRes={setRes} str={str} res={res}>+</Button>
            <Button setStr={setStr} setRes={setRes} str={str} res={res}>4</Button>
            <Button setStr={setStr} setRes={setRes} str={str} res={res}>5</Button>
            <Button setStr={setStr} setRes={setRes} str={str} res={res}>6</Button>
            <Button setStr={setStr} setRes={setRes} str={str} res={res}>-</Button>
            <Button setStr={setStr} setRes={setRes} str={str} res={res}>1</Button>
            <Button setStr={setStr} setRes={setRes} str={str} res={res}>2</Button>
            <Button setStr={setStr} setRes={setRes} str={str} res={res}>3</Button>
            <Button setStr={setStr} setRes={setRes} str={str} res={res}>*</Button>
            <Button setStr={setStr} setRes={setRes} str={str} res={res}>C</Button>
            <Button setStr={setStr} setRes={setRes} str={str} res={res}>0</Button>
            <Button setStr={setStr} setRes={setRes} str={str} res={res}>=</Button>
            <Button setStr={setStr} setRes={setRes} str={str} res={res}>/</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
