import React, { useReducer } from 'react'
import '../index.css';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import calcReducer from '../reducers/calcReducer';
import { SET_NUM1, SET_NUM2, SET_ACTION, POWER, ROOT, CLEAR } from '../reducers/actions';

const defaultState = {
    result: 0,
    num1: "",
    num2: "",
    action: ""
}

const Calculator = () => {

    const [state, dispatch] = useReducer(calcReducer, defaultState);

    const {num1, num2, result, action } = state;

    const operations = [
        { symbol: "+", letter: "add" },
        { symbol: "-", letter: "subtract" },
        { symbol: "×", letter: "multiply" },
        { symbol: "÷", letter: "divide" },
        { symbol: "x²", letter: "power" },
        { symbol: "xⁿ", letter: "power_n" },
        { symbol: "√", letter: "root" },
    ];

    const numbers = [
        { number: "0", letter: "zero" },
        { number: "1", letter: "one" },
        { number: "2", letter: "two" },
        { number: "3", letter: "three" },
        { number: "4", letter: "four" },
        { number: "5", letter: "five" },
        { number: "6", letter: "six" },
        { number: "7", letter: "seven" },
        { number: "8", letter: "eight" },
        { number: "9", letter: "nine" },
        { number: ".", letter: "decimal" }
    ];

    const getResult = () => {
        dispatch({type: action, payload: { num1: num1, num2: num2 }});
    }

    const setNum = (number)=> {
        action ? dispatch({type: SET_NUM2, payload: number}) : dispatch({type: SET_NUM1, payload: number})
    }

    const setAction = (act, symbol)=> { 
        (act === POWER || act === ROOT) ?  dispatch({type: act}) :
        dispatch({type: SET_ACTION, payload: {act, symbol}});
        console.log(act);
    }

    const clear = ()=> {
        dispatch({type: CLEAR});
    }

    return (
        <div className="calculator">            
            <div className="display">{result}</div> 
            <div class="buttons">
                <button className="btn btn-success letter-equals" onClick={getResult}>=</button>
                <button className="btn btn-danger letter-clear" onClick={()=> clear()}>C</button>
                {numbers.map(({ letter, number }) => (
                    <button key={letter} className={`btn btn-secondary letter-${letter}`} onClick={()=> setNum(number) }>
                        {number}
                    </button>
                ))}
                {operations.map(({ letter, symbol }) => (
                    <button key={letter} className={`btn btn-primary letter letter-${letter}`} onClick={()=> setAction(letter.toUpperCase(), symbol)}>
                        {symbol}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Calculator