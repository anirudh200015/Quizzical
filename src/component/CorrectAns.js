import React from "react"

function CorrectAns(props){

    
    return (
        <div className="endgame">

        {props.checkFlag && <h2>You scored {props.score}/{props.numberOfQues} !! </h2>}

        {props.checkFlag && <button onClick={props.changePage} className="playAgain"> Play Again! </button>}

        </div>
    )
}

export default CorrectAns;