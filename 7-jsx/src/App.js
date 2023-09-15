import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
   const setCount = () => {
    setCounter(counter + 1);
   };
    return (
        <div>
                 <h1>Total clicks: {counter}</h1>
                 <button onClick={setcount}>Click!</button>
                 </div>   
    );
};

export default App;