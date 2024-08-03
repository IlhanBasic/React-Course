import { useState, useCallback } from "react";
import QUESTIONS from '../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png'
import QuestionTimer from "./QuestionTimer.jsx";
export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = userAnswers.length === QUESTIONS.length;
    if (quizIsComplete) {
        return (
            <div id="summary">
                <img src={quizCompleteImg} />
                <h2>Quiz completed</h2>
            </div>
        )

    }
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);

    const handleSelectAnswer = useCallback(
        function handleSelectAnswer(selectedAnswer) {
            setUserAnswers((prevUserAnswers) => {
                return [...prevUserAnswers, selectedAnswer]
            })
        }, []
    );
    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);
    return (
        <div id="quiz">
            <div id="question">
                <QuestionTimer key={activeQuestionIndex} timeout={10000} onTimeout={handleSkipAnswer} />
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
    )
}