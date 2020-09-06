import React from "react";
import { navigate } from "gatsby";
import { firestoreTimeStampConvert } from "../utils/helpers";
import GitHubIcon from '@material-ui/icons/GitHub';
import Tag from "./Tag";

function Card({ item }) {
	const { projectId, title, description, tagArray, createdAt, github } = item;

	const handleClick = () => {
		navigate(`/projects/${projectId}`)
	}

	const summary = () => {
		return `${description.substring(0, 200)}...`;
	}

	return (
		<div className="rounded overflow-hidden px-6 py-4">
			<div className="flex flex-col sm:flex-row sm:justify-between">
				<div className="flex flex-col sm:w-2/3">
					<div className="px-6 py-4">
						<button onClick={handleClick} className="font-bold cursor-pointer text-xl text-gray-800 mb-2 focus:outline-none">{title}</button>
						<p className="text-gray-700 text-justify">
							{summary()}
						</p>
					</div>
				</div>
				<div className="flex items-center justify-between px-6 sm:px-0 sm:flex-col sm:justify-center">
					<a href={github} target="_blank" rel="noreferrer" className="flex my-2">
						<GitHubIcon />
					</a>
					<div className="text-gray-600">{firestoreTimeStampConvert(createdAt)}</div>
				</div>
			</div>
			<div className="px-6 pt-4 pb-2">
				{tagArray.map((tag, index) =>
					<Tag key={index} item={tag} />
				)}
			</div>
		</div>
	);
}

export default Card;