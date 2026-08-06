import { useReducer} from "react";
const initialState = { count: 0, step: 1 };

function reducer(state, action) {
console.log(state,action);
  switch (action.type) {
case "increment":
    return {...state,count:state.count + state.step};
    case "decrement":
    return {...state,count:state.count - state.step}; 
    case  "setcount":
    return {...state,count:action.payload};
    case  "setstep":
return {...state,step:action.payload};
case "setreset":
    return {initialState};
default:
    throw new Error("Unknown action type: " + action.type);

    }
}

function DateCounter() {
  
  const [state, dispatch] = useReducer(reducer, initialState);
const { count, step } = state;
  // This mutcates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  // payload is optional we can remove it and just use direct values
  const dec = function () {
    dispatch({type: "decrement"})
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    dispatch({type: "increment"})
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
  dispatch({type: "setcount", payload: Number(e.target.value)})
  };


  const defineStep = function (e) {
    dispatch({type: "setstep", payload: Number(e.target.value)})
    // setStep(Number(e.target.value));
  };

  const reset = function () {
    dispatch({type:"setreset"})
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
