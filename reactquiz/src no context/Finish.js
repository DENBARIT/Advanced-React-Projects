function Finish({points,maxPoints,highscore,dispatch}) {
    const percentage=Math.ceil((points/maxPoints)*100);
    let emoji;
    if(percentage===100)emoji="🥇";
    else if(percentage>=80 && percentage<100) emoji="🎉";
    else if(percentage>=50 && percentage<80) emoji="🙃";
else if(percentage>=30 && percentage<50) emoji="🤨";
else emoji="🤦‍♂️";

    return <><p  className="result">
     <span>{emoji}</span>   You score <strong>{points}</strong> out of {maxPoints} points ({percentage}%)
    </p>
    <p className="highscore">
        (High Score: <strong>{highscore}</strong>)

    </p>
    <button className="btn btn-ui" onClick={()=>dispatch({type: "restart", payload: []})}>Restart Quiz</button>
</>
}
export default Finish;