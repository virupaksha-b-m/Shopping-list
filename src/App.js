import "./styles.css";
import { useState } from "react";

export default function App() {
  const [arr, setArr] = useState([]);

  const [invalue, setInvalue] = useState("");

  function inputvalue(event) {
    var value1 = event.target.value;
    setInvalue(value1);
  }

  function addItem() {
    setArr((prevItems) => {
      return [...prevItems, invalue];
    });

    setInvalue("");
  }

  return (
    <section>
      <h1>Project 4 : Shopping list</h1>
      <div className="App">
        <h3>Item to buy</h3>

        <input
          type="text"
          onChange={inputvalue}
          name="list"
          value={invalue}
          placeholder="enter the item"
        />

        <button onClick={addItem}> Add</button>
        {arr.map((item) => (
          <ul key={item}>
            <li key={item}> {item} </li>
          </ul>
        ))}
      </div>
    </section>
  );
}
