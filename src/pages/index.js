import React, { useState, useEffect } from "react";
import QuizCard from '../components/QuizCard';

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const MAX_SCORE = 2;

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
  const [score, setScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);

  useEffect(() => {
    
  }, [])

  const handleAnswer = (answerStatus) => {
    // update score
    if(answerStatus === 'Correct!') {
      setScore(score+1)
    }
    let newIdx = quizIndex + 1;
    if(newIdx < MAX_SCORE) {
    // update quiz    
    setQuiz(DATA[newIdx])
    setQuizIndex(newIdx)
    } else {
      setQuizDone(true)
    }
  }

  const getScorePerc = () => {
    const perc = (score / MAX_SCORE * 100).toFixed()
    return `${perc.toString()}%`
  }


  return (
    <Layout>
      <SEO title="Home" />      
      <div className="text-center text-2xl font-bold tracking-wide" >Welcome To Surprising Quotes</div>
      <div className="text-center text-lg font-light italic mt-4" >Take the quiz. Guess who said this.</div>
      <div className="text-center mt-20">
        {quizDone ?
          <div className="text-2xl leading-relaxed font-semibold">You scored <span className="text-teal-600 font-extrabold">{getScorePerc()}</span></div>
          : <QuizCard data={quiz} handleAnswer={handleAnswer} />
        }
      </div>    
    </Layout>
  );
}

export default IndexPage;
