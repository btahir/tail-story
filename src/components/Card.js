import React from "react";
import { navigate } from "gatsby";
import { numberWithCommas } from "../utils/helpers";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Tag from "./Tag";

function Card({ item }) {
	const { id, title, description, tags, createdAt, starCount } = item;
	const formattedStarCount = numberWithCommas(starCount);

	const handleClick = () => {
		navigate(`/projects/${id}`)
	}

	return (
		<div className="rounded overflow-hidden px-6 py-4">
			<div className="flex flex-col sm:flex-row sm:justify-between">
				<div className="flex flex-col sm:w-2/3">
					<div className="px-6 py-4">
						<button onClick={handleClick} className="font-bold cursor-pointer text-xl text-gray-800 mb-2 focus:outline-none">{title}</button>
						<p className="text-gray-700 text-base">
							{description}
						</p>
					</div>
				</div>
				<div className="flex items-center justify-between px-6 sm:px-0 sm:flex-col sm:justify-center">
					<div className="flex my-2">
						<StarBorderIcon />
						<div className="ml-1">{formattedStarCount}</div>
					</div>
					<div className="text-gray-600">{createdAt}</div>
				</div>
			</div>
			<div className="px-6 pt-4 pb-2">
				{tags.map((tag, index) =>
					<Tag key={index} item={tag} />
				)}
			</div>
		</div>
	);
}

export default Card;