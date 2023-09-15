import { useState, useEffect } from "react";

const Converter = () => {

     const [number, setNumber] = useState("");
     const [bool, setBool] = useState(true);
     const [text, setText] = useState("Invert");

    const change = (e) => {
        console.log(e.target.value);
        setNumber(e.target.value);
    };

    const reset = () => {
        setNumber("");
    };

    const invert = () => {
        setBool(!bool);
        reset();
    };

    useEffect(() => {
       if(bool) setText("Invert");
       else setText("Turn Back");
    }, [bool]);

    return(
        <>
        <h1>Time Converter</h1>
        <div>
        <label>Minutes</label>
        <input type="number" 
        placeholder="Minutes" 
        onChange={change} 
        value={bool ? number : Math.floor(number * 60)} 
        disabled={!bool}
         />
        </div>
        <div>
            <label>Hours</label>
            <input type="number" placeholder="Hours" 
            disabled={bool} 
            value={bool ? Math.floor(number / 60) : number} 
            onChange={change} />
        </div>
        <button style={{
            backgroundColor:"tomato",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "10px",
            }}
            onClick={reset}
            >
            Reset</button>
        <button>
          style={{
                backgroundColor:"skyblue",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "10px",
          }}  
          onClick={invert}
        {text}
        </button>
        Reset
        </>
    );
};

const Btn = () => {
    return (
        <button>
          style={{
                backgroundColor:"skyblue",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "10px",
          }}  
          onClick={invert}
        {text}
        </button>
    );
};

export default Converter;
