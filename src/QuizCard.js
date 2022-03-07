import AnswerCard from "./AnswerCard"

const QuizCard = ({selectedQuestion, navigateNextQuiz, selectAnswer, selectedAnswer,correctAnswer, selectedQuestionIndex, quizzes}) =>{
   console.log(selectedQuestion)
   const {question, answers} = selectedQuestion
   const navigateNext = () =>{
      navigateNextQuiz()
   }
   
   return(
      <div>
         <h5 >Question: {selectedQuestionIndex + 1} /{quizzes.length} </h5>
          <h2>{question}</h2>
          {answers.map((answer, index) => <AnswerCard answer={answer} key={index} selectAnswer={selectAnswer} selectedAnswer={selectedAnswer} correctAnswer={correctAnswer} />)}
          <button className="btn-outline-secondary justify-content-center" onClick={navigateNext}>Next Question</button>
      </div>
   )
}

export default QuizCard