const AnswerCard =({answer, selectAnswer, selectedAnswer, correctAnswer}) =>{
    const isRightAnswer = selectedAnswer && answer === correctAnswer
    const isWrongAnswer = selectedAnswer && answer !== correctAnswer
    const correctClass = isRightAnswer ? 'correct-answer' : ''
    const wrongClass = isWrongAnswer ? 'incorrect-answer' : ''
    const disabledClass = selectedAnswer ? 'disabled-answer' : ''
   
   return(
       <div>
        
					<div className='answer-section mb-2'>
						
                        <div className="form-check">
                            <input className="form-check-input mt-3" type="checkbox" value="" />
                            <p className={`${correctClass} ${wrongClass} ${disabledClass}`} onClick={() => selectAnswer(answer)}>{answer}</p>
                         </div>
						
					</div>
       </div>
   )
}

export default AnswerCard