import React from "react";
import {navigate} from "gatsby";
import {numberWithCommas} from "../utils/helpers";
import StarBorderIcon from '@material-ui/icons/StarBorder';

function Card({ item }) {
	const {id, title, description, tags, createdAt, starCount } = item;
	const formattedStarCount = numberWithCommas(starCount);

	const handleClick = () => {
		navigate(`/projects/${id}`)
	}

	return (
		<div className="rounded overflow-hidden m-4 hover:bg-gray-100">
			<div className="flex justify-between">
				<div className="flex flex-col w-2/3">
					<div className="px-6 py-4">
						<button onClick={handleClick} className="font-bold cursor-pointer text-xl text-teal-900 mb-2 focus:outline-none">{title}</button>
						<p className="text-gray-700 text-base">
							{description}
						</p>
					</div>
					<div className="px-6 pt-4 pb-2">
						{tags.map( (tag, index) => 
							<span key={index} className="inline-block bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>					
						)}
					</div>
				</div>				
				<div className="flex flex-col justify-start">
					<div className="flex my-2">
						<StarBorderIcon />
						<div className="ml-1">{formattedStarCount}</div>
					</div>
					<div className="text-gray-600">{createdAt}</div>
				</div>
			</div>
    </div>
  );
}

export default Card;