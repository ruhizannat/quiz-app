const GameOver = ({resetQuiz, gameScore}) =>{
    
    return(
        <div>
          
            <h4 className="">Game Over</h4>
            <p className="justify-content-center">Total Score:{gameScore}</p>
            <button onClick={resetQuiz} className="btn btn-outline-secondary">Reset Quiz</button>
        </div>
    )
}

export default GameOver