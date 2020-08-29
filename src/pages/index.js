import React, { useState, useEffect } from "react";
import QuizCard from '../components/QuizCard';

import Layout from "../components/Layout";
import SEO from "../components/SEO";

function IndexPage() {
  const DATA = [
    {
      quote: 'There is only one thing in the world worse than being talked about, and that is not being talked about.',
      choices: ['Oscar Wilde', 'William Shakespear', 'John F. Kennedy', 'Donald Trump'],
      answer: 'Oscar Wilde'
    },
    {
      quote: 'Another quote',
      choices: ['Oscar Wilde', 'William Shakespear', 'John F. Kennedy', 'Donald Trump'],
      answer: 'Oscar Wilde'
    },    
  ]
  const [quiz, setQuiz] = useState(DATA[0]);
  const [quizIndex, setQuizIndex] = useState(0);

  useEffect(() => {
    
  }, [])

  const handleAnswer = (answerStatus) => {
    // update quiz    
    setQuiz(DATA[quizIndex + 1])
    setQuizIndex(quizIndex + 1)
  }


  return (
    <Layout>
      <SEO title="Home" />      
      <div className="text-center text-2xl font-bold tracking-wide" >Welcome To Surprising Quotes</div>
      <div className="text-center text-lg font-light italic mt-4" >Take the quiz. Guess who said this.</div>
      <div className="text-center mt-20">
        <QuizCard data={quiz} handleAnswer={handleAnswer} />
      </div>    
    </Layout>
  );
}

export default IndexPage;
