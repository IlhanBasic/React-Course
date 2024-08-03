import { useState } from "react";
import QUESTIONS from '../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png'
export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = userAnswers.length===QUESTIONS.length;
    if(quizIsComplete){
        return <div id="summary">
            <img src={quizCompleteImg}/>
            <h2>Quiz completed</h2>
        </div>
    }
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);
    function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer]
        })
    }
    
    return <div className="quiz">
        <div id="question">
            <p>{QUESTIONS[activeQuestionIndex].text}</p>
            <ul id="answers">
                {shuffledAnswers.map(answer => (
                    <li key={answer} className="answer">
                        <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                    </li>)
                )}
            </ul>
        </div>
    </div>


}