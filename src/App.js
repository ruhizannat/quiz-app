import './App.css';
import React, { useEffect, useState } from 'react';
import QuizCard from './QuizCard'
import shuffle from './utils'
import 'bootstrap/dist/css/bootstrap.min.css';
import GameOver from './GameOver';


const App = () =>{
  const [quizzes, setQuizzes] = useState(null)
  const [selectedQuestion, setSelectedQuestion] = useState(null)
  const [startGame, setStartGame] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [selectedQuestionIndex, setSelectedQuestionIndex] =useState(0) 
  const [endGame, setEndGame] = useState(false)  
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [correctAnswer, setCorrectAnswer] =useState(null)
  const [gameScore, setGameScore] = useState(0)


  const startQuiz =async () =>{
  const res = await  fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple')
  const {results} = await res.json()
  setQuizzes(results)
  setStartGame(true)
  setSelectedQuestion(
    {
      question:results[0].question,
      answers: shuffle(results[0]),
     
    })
    setCorrectAnswer(results[0].correct_answer)
  setLoaded(true)
  console.log(results)
  }

  useEffect(() =>{
    startQuiz()
  }, [])

  const navigateNextQuiz = () =>{
    // make sure you are in last question
    const isLastQuestion = quizzes.length - 1 === selectedQuestionIndex
    if(isLastQuestion){
      setEndGame(true)
    }else{
      const currentIndex = selectedQuestionIndex + 1
      setSelectedQuestionIndex(currentIndex)
      setSelectedQuestion(
       {
         question:quizzes[currentIndex].question,
         answers: shuffle(quizzes[currentIndex])
        
       })
       setCorrectAnswer(quizzes[currentIndex].correct_answer)
       setSelectedAnswer(null)

    }
  }
  const selectAnswer = (answer) =>{
    setSelectedAnswer(answer)
    // is correct answer selected
    if(answer === correctAnswer){
      // update score
      setGameScore((prevScore) => prevScore + 1)
    }
    
  }

  const resetQuiz = () =>{
    setQuizzes(null)
    setSelectedQuestion(null)
    setStartGame(false)
    setLoaded(false)
    setSelectedQuestionIndex(0)
    setEndGame(false)
    setGameScore(0)
    
  }
  console.log(correctAnswer, selectedAnswer)
  return(
    <div>
      {endGame && <GameOver resetQuiz={resetQuiz} gameScore={gameScore} />}
      {startGame && loaded && !endGame && <QuizCard selectedQuestion={selectedQuestion} navigateNextQuiz={navigateNextQuiz} selectAnswer={selectAnswer} selectedAnswer={selectedAnswer} correctAnswer={correctAnswer} quizzes={quizzes} selectedQuestionIndex={selectedQuestionIndex} />}
      {!startGame &&  <button className="btn-outline-secondary justify-content-center" onClick={startQuiz}>Start Quiz</button>}
     
    </div>
  )
  
}

export default App