import React, { useState } from "react";
import QuizCard from '../components/QuizCard';
import { QUIZ_DATA } from "../utils/quizDataPro";

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

const MAX_SCORE = 10;

console.log(QUIZ_DATA.length)

function Pro() {  
  const [quiz, setQuiz] = useState(QUIZ_DATA[0]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);

  const handleAnswer = (answerStatus) => {
    // update score
    if (answerStatus === 'Correct!') {
      setScore(score + 1)
    }
    let newIdx = quizIndex + 1;
    if (newIdx < MAX_SCORE) {
      // update quiz    
      setQuiz(QUIZ_DATA[newIdx])
      setQuizIndex(newIdx)
    } else {
      setQuizDone(true)
    }
  }

  const getScorePerc = () => {
    const perc = (score / MAX_SCORE * 100).toFixed()
    return `${perc.toString()}%`
  }

  const shareUrl = "https://quizuotes.netlify.app";
  const socialTitle = `Take the Quizuotes quiz and guess the author of famous sayings. I got ${getScorePerc()}.`;


  return (
    <Layout>
      <SEO title="Home" />
      <div className="text-center text-2xl font-bold tracking-wide" >Welcome To Quizuotes Pro</div>
      <div className="text-center text-lg font-light mt-4" >Take our <b>100</b> quotes quiz. Guess the author of the quote.</div>
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
                  description={socialTitle}
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
                  Upgrade To Unlock The 100 Quotes Quiz
              </a>
            </div>
          </div>
          : <QuizCard data={quiz} handleAnswer={handleAnswer} />
        }
      </div>
    </Layout>
  );
}

export default Pro;
