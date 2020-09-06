import React, { useState, useEffect } from 'react';
import { numberWithCommas } from "../utils/helpers";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ProjectIcons from './ProjectIcons';
import DeleteProjectAlert from './DeleteProjectAlert';
import Tag from './Tag';
import { useAuth } from "gatsby-theme-firebase";
import { getProjectDetail, deleteProject } from "../utils/firebaseActions";
import { firestoreTimeStampConvert } from "../utils/helpers";
import { navigate } from "gatsby";

const InitialData = {
	id: 123,
	title: '',
	description: '',
	tagArray: [],
	createdAt: {seconds: 0, nanoseconds: 0}
}

const ProjectDetail = ({ projectID }) => {
	const { profile } = useAuth();
	const [projectData, setProjectData] = useState(InitialData);	
	const [isProjectValid, setIsProjectValid] = useState(true);

	useEffect(() => {
		// fetch project data. use props for id.
		if(profile) {
			getProjectDetail(projectID)
			.then(res => {
				if(res === undefined || !Object.keys(res).length) {
					setIsProjectValid(false)
				} else {
					setProjectData(res)
				}
			})
		}
	}, [profile])

	// const formattedStarCount = numberWithCommas(projectData.starCount);

	const handleProjectDelete = async () => {
		await deleteProject(projectData.key)
		navigate('/profile')
	}

	return (
		<div>
			<div className="flex flex-col text-center">
				<div className="mb-4">
					<button className="bg-indigo-600 text-white py-1 px-2 text-xl font-semibold tracking-wide hover:bg-indigo-700 focus:outline-none m-2">Edit</button>
					<DeleteProjectAlert handleSubmit={handleProjectDelete} />
				</div>				
				<div className="text-gray-800 font-extrabold leading-loose text-2xl text-center">{projectData.title}</div>
				<ProjectIcons />
			</div>
			<div className="mt-8 flex justify-around border-b-2 py-2 border-gray-100">
				<div>
					Last Updated: <span className="text-gray-600">{firestoreTimeStampConvert(projectData.createdAt)}</span>
				</div>
				<div className="flex">
					{/* <StarBorderIcon />
					<div className="ml-1">{formattedStarCount}</div> */}
				</div>
			</div>
			<div className="mt-12 text-gray-700">
				{projectData.description}
			</div>
			<div className="px-6 pt-4 pb-2 mt-4 text-center">
				{projectData.tagArray.map((tag, index) =>
					<Tag key={index} item={tag} />
				)}
			</div>
		</div>
	)
}

export default ProjectDetail;

