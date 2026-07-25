import { useState ,useReducer} from "react";

function reducer(state, action) {
  // return state+action;
  console.log("state", state, "action", action);
  if(action.type==="increment"){
    return state+action.payload;
  }
  if(action.type==="decrement"){
    return state-action.payload;
  }
  if(action.type==="setcount"){
    return action.payload;

  }

}

function DateCounter() {
  // const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
const [count, dispatch] = useReducer(reducer, 0);
  // This mutcates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  // payload is optional we can remove it and just use direct values
  const dec = function () {
    dispatch({type: "decrement", payload: 1})
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    dispatch({type: "increment", payload: 1})
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
  dispatch({type: "setcount", payload: Number(e.target.value)})
  };


  const defineStep = function (e) {
    setStep(Number(e.target.value));
  };

  const reset = function () {
    // setCount(0);
    setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
