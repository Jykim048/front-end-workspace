import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Button = ({ text, click }) => {
  return <button onClick={click}>{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const plus = () => {
    setCounter(counter + 1);
  };
  const minus = () => {
    setCounter(counter - 1);
  };

console.log("always~~");

useEffect(() => {
   console.log("useEffect~~");
}, []);

useEffect(() => {
   console.log("counter change~~");
}, [counter]);

  return (
    <div>
      <h1 style={{backgroundColor: "pink", color: "skyblue" }}>
        Total clicks: {counter}
        </h1>
      <Button text="+1" click={plus} />
      <Button text="-1" click={minus} />

      {/* <button onClick={plus}>+1</button>
      <button onClick={minus}>-1</button> */}
    </div>
  );
};

export default Counter;