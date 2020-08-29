import React, { useState, useEffect } from "react";
import QuizCard from '../components/QuizCard';

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon
} from "react-share";

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
  const [quizDone, setQuizDone] = useState(true);

  useEffect(() => {

  }, [])

  const handleAnswer = (answerStatus) => {
    // update score
    if (answerStatus === 'Correct!') {
      setScore(score + 1)
    }
    let newIdx = quizIndex + 1;
    if (newIdx < MAX_SCORE) {
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

  const shareUrl = "google.com";
  const socialTitle = "Test Title";


  return (
    <Layout>
      <SEO title="Home" />
      <div className="text-center text-2xl font-bold tracking-wide" >Welcome To Surprising Quotes</div>
      <div className="text-center text-lg font-light mt-4" >Take the quiz. Guess who said this.</div>
      <div className="text-center mt-20">
        {quizDone ?
          <div>
            <div className="text-2xl leading-relaxed font-semibold">You scored <span className="text-teal-600 font-extrabold">{getScorePerc()}</span></div>
            <div className="flex flex-col my-8">
              <div className="flex flex-row justify-around max-w-xs mx-auto w-64">
                <div className="font-thin">spread the news:</div>
                <FacebookShareButton
                  url={shareUrl}
                  quote={socialTitle}
                  className="focus:outline-none"
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton
                  url={shareUrl}
                  title={socialTitle}
                  className="focus:outline-none"
                >
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
                <PinterestShareButton
                  url={shareUrl}
                  media={'https://cdn.pixabay.com/photo/2019/05/22/22/28/brainstorm-4222728_960_720.jpg'}
                  description={'Guess who said this!'}
                  className="focus:outline-none"
                >
                  <PinterestIcon size={32} round />
                </PinterestShareButton>
              </div>
              <a 
                href="https://gum.co/tIODA" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-400 hover:bg-teal-600 text-white font-bold py-2 px-4 m-4 rounded-full focus:outline-none max-w-sm mt-8 mx-auto">
                  Upgrade To Unlock 100 Questions
              </a>
            </div>
          </div>
          : <QuizCard data={quiz} handleAnswer={handleAnswer} />
        }
      </div>
    </Layout>
  );
}

export default IndexPage;
