import React, { useState, useEffect } from 'react';

const Quiz = () => {
  const [quiz, setQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuiz = async () => {
      const response = await fetch('/api/quiz');
      const data = await response.json();
      setQuiz(data);
    };
    fetchQuiz();
  }, []);

  const handleAnswer = (answer) => {
    if (answer === quiz.questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  if (!quiz) return <div>Loading...</div>;

  if (currentQuestion >= quiz.questions.length)
    return <div>Your final score: {score}/{quiz.questions.length}</div>;

  const { question, options } = quiz.questions[currentQuestion];

  return (
    <div className="quiz">
      <h1>{quiz.title}</h1>
      <p>{question}</p>
      {options.map((option, idx) => (
        <button key={idx} onClick={() => handleAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Quiz;
