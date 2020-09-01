import React, { useState, useEffect } from 'react';
import { numberWithCommas } from "../utils/helpers";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ProjectIcons from './ProjectIcons';
import Tag from './Tag';

const DATA = {
	id: 123,
	title: 'ImageMin API Using FastAPI',
	description: 'I spun up a FastAPI server using the base docker image and deployed an API to compress images.',
	tags: ['python', 'docker', 'image compression', 'opencv', 'api'],
	createdAt: 'Sun Aug 30 2020',
	starCount: 1293,
}

const ProjectDetail = ({ projectID }) => {
	const [projectData, setProjectData] = useState(DATA);

	useEffect(() => {
		// fetch project data. use props for id.
		setProjectData(DATA)
	}, [])

	const formattedStarCount = numberWithCommas(projectData.starCount);

	return (
		<div>
			<div className="flex flex-col text-center">
				<div className="text-teal-900 font-extrabold leading-loose text-2xl text-center">{projectData.title}</div>
				<ProjectIcons />
			</div>
			<div className="mt-8 flex justify-around border-b-2 py-2 border-gray-100">
				<div>
					Last Updated: <span className="text-gray-600">{projectData.createdAt}</span>
				</div>
				<div className="flex">
					<StarBorderIcon />
					<div className="ml-1">{formattedStarCount}</div>
				</div>
			</div>
			<div className="mt-12 text-gray-700">
				{projectData.description}
			</div>
			<div className="px-6 pt-4 pb-2 mt-4 text-center">
				{projectData.tags.map((tag, index) =>
					<Tag key={index} item={tag} />
				)}
			</div>
		</div>
	)
}

export default ProjectDetail;

