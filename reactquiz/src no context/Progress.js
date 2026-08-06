function Progress({index,points,numQuestions,maxPoints,answer}) {
return <header className="progress">

    {/* here for the progress bar we use index +Number(answer!==null) because if there exists answer then  immediately the progress bar will update,the number will be 1 when the answer is true and will be 0 
    when the answer is null so the value of the prgress bar will not update until the answer is submitted */}
<progress max={numQuestions} value={index+Number(answer!==null)}></progress>
    
    <p>Question <strong>{index + 1} </strong>of {numQuestions}</p>
    
    {/* <input type="range" value={points} /> */}

    <strong>{points}/{maxPoints}</strong></header>
}
export default Progress;