import React, { useState, useEffect } from 'react';
import { numberWithCommas } from "../utils/helpers";
import GitHubIcon from '@material-ui/icons/GitHub';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';

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
				<div className="mt-6">
					<PersonIcon className="cursor-pointer mx-4" fontSize="large" />
					<MailIcon className="cursor-pointer mx-4" fontSize="large" />
					<GitHubIcon className="cursor-pointer mx-4" fontSize="large" />
				</div>
			</div>
			<div className="mt-16 text-gray-700">
				{projectData.description}
			</div>
			<div className="flex justify-evenly my-8">
				<div className="px-6 pt-4 pb-2">
					{projectData.tags.map((tag, index) =>
						<span key={index} className="inline-block bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
					)}
				</div>
				<div className="flex flex-col mt-4">
					<div className="flex">
						<StarBorderIcon />
						<div className="ml-1">{formattedStarCount}</div>
					</div>
					<div className="text-gray-600">{projectData.createdAt}</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectDetail;

