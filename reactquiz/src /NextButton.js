function NextButton({dispatch,answer,index,numquestions})
{
    if(answer===null)return;
    
    if(index<numquestions-1)
        return (

            <button className="btn btn-ui" onClick={()=>dispatch({type:"nextQuestion"})}>Next</button>
    
    );
    if(index===numquestions-1)
        return (
    <button className="btn btn-ui" onClick={()=>dispatch({type:"finished"})}>
        Finish 
    </button>)
}

export default NextButton;