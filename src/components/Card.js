import React, { useState, useEffect } from "react";
import { navigate } from "gatsby";
import { firestoreTimeStampConvert } from "../utils/helpers";
import LiveTvIcon from '@material-ui/icons/LiveTv';
import Tag from "./Tag";
import { getProjectImage } from "../utils/firebaseActions";

function Card({ item }) {
	const { projectId, title, description, projectTags, createdAt, demo, projectImageId } = item;

	const [projectImageSrc, setProjectImageSrc] = useState(null);

	useEffect(() => {
		getProjectImage(projectImageId)
			.then(res => {
				setProjectImageSrc(res)
			})
	}, [])

	const handleClick = () => {
		navigate(`/projects/${projectId}`)
	}

	const summary = () => {
		return `${description.substring(0, 200)}...`;
	}

	return (
		<div className="flex flex-col sm:flex-row rounded overflow-hidden px-6 py-4 border-b-2 border-gray-200">
			<div className="h-64 w-full self-center sm:w-32 sm:h-32">
				<img className="object-cover w-full h-full rounded-sm" src={projectImageSrc} alt="project-img" />
			</div>
			<div className="flex-1">
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
						<a href={demo} target="_blank" rel="noreferrer" className="flex my-2">
							<LiveTvIcon />
						</a>
						<div className="text-gray-600">{firestoreTimeStampConvert(createdAt)}</div>
					</div>
				</div>
				<div className="px-6 pt-4 pb-2">
					{Object.keys(projectTags).map((tag, index) =>
						<Tag key={index} item={tag} />
					)}
				</div>
			</div>
		</div>
	);
}

export default Card;