import React, { useState } from "react";

function QuizCard({ data, handleAnswer }) {
	const [answered, setAnswered] = useState(false);
	const [answerStatus, setAnswerStatus] = useState(null);

	const handleSubmit = (chosen) => {
		setAnswered(true)
		if(chosen === data.answer) {
			setAnswerStatus('Correct!')
		} else {
			setAnswerStatus('Wrong')
		}
	}

	const handleNext = () => {
		setAnswered(false)
		handleAnswer(answerStatus)
	}

	return (
		<section className="flex flex-col items-center ">
			<div className="md:w-1/2 mb-12">
				<blockquote className="pl-4 font-serif leading-loose text-justify ">
					&ldquo;{data.quote}&rdquo;
				</blockquote>
			</div>
			{answered ? 
				(
					<div>
						<p className="m-2 font-semibold leading-loose text-teal-700">{answerStatus}</p>
						<p>The answer is <b>{data.answer}</b></p>
						<button onClick={handleNext} className="mt-4 bg-teal-400 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none items-center">						
							<span>Next »</span>
						</button>
					</div>
				) : 
				(
					<div>
						{data.choices.map((choice, index) => 
							<button onClick={() => handleSubmit(choice)} key={index} className="bg-teal-400 hover:bg-teal-600 text-white font-bold py-2 px-4 m-4 rounded-full focus:outline-none">
								{choice}
							</button>
						)}
					</div>	
				)
			}

		</section>
	);
}

export default QuizCard;
