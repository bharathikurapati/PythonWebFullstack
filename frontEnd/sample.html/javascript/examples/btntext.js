import React from "react";
import "./styles.css";
function Button(props) {
  //props = {btnText: "Submit", id: 20}
  //props = {btnText: "Save"}
  //props = {btnText: "Cancel"}
  const [counter, setCounter] = React.useState(0);
  const [name, setName] = React.useState("Raju");
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        {props.btnText} {props.id}
      </button>
      <p>
        I am {name} clicked on {counter} times
      </p>
    </div>
  );
}
function App() {
  return (
    <div>
      <p>Hello World</p>
      <Button btnText="Submit" id="15"></Button>
      <Button btnText="Save"></Button>
      <Button btnText="Cancel"></Button>
    </div>
  );
}

export default App;
