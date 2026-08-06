import {useEffect} from "react";
// here we need to clean the timerfunction else the timer will keep runnning even after the component is unmounted. so we will use useEffect to clean the timer function
function Timer({ secondsRemaining,dispatch}) {
    const mins=Math.floor(secondsRemaining/60);
    const secs=secondsRemaining%60;
    useEffect(function() {
const id=setInterval(function() {
    dispatch({type:"tick"})
},1000)
return () => clearInterval(id);
},[dispatch])
    return <div className="timer">
        {mins<0?"0":""}{mins}:{secs<10?"0":""}{secs} 
    </div>
}
export default Timer;