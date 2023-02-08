import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [result, setResult] = useState("");

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }
    const clear = () => {
        setResult("");
    }
    const backspace = () => {
        setResult(result.slice(0, -1)); 
    }
    const calculate = () => {
        try {
            setResult(eval(result).toString());
        } catch(err) {
            setResult("Error")
        }
    }
    return (
        <>
            <div className="container">
                <form>
                    <input type="text" value={result} />
                </form>

                 <div className="keypad">
                    <button className="delete" onClick={clear} id="clear">Clear</button>
                    <button className="delete" onClick={backspace} id="backspace">C</button>
                    <button className="highlight" name="/" onClick={handleClick}>&divide;</button>
                    <button className="number" name="7" onClick={handleClick}>7</button>
                    <button className="number" name="8" onClick={handleClick}>8</button>
                    <button className="number" name="9" onClick={handleClick}>9</button>
                    <button className= "highlight" name="*" onClick={handleClick}>&times;</button>
                    <button className="number" name="4" onClick={handleClick}>4</button>
                    <button className="number" name="5" onClick={handleClick}>5</button>
                    <button className="number" name="6" onClick={handleClick}>6</button>
                    <button className= "highlight" name="-" onClick={handleClick}>&ndash;</button>
                    <button className="number" name="1" onClick={handleClick}>1</button>
                    <button className="number" name="2" onClick={handleClick}>2</button>
                    <button className="number" name="3" onClick={handleClick}>3</button>
                    <button className= "highlight" name="+" onClick={handleClick}>+</button>
                    <button className="number" name="0" onClick={handleClick}>0</button>
                    <button className="number" name="." onClick={handleClick}>.</button>
                    <button className= "result" onClick={calculate} id="result">=</button>
                </div>
            </div>
        </>
    );
}

export default App;