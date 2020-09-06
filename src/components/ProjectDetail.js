import React, { useState, useEffect } from 'react';
import ProjectIcons from './ProjectIcons';
import DeleteProjectAlert from './DeleteProjectAlert';
import Tag from './Tag';
import UpdateProjectBtn from "./UpdateProjectBtn";
import { useAuth } from "gatsby-theme-firebase";
import { getProjectDetail, deleteProject, updateProjectDetails } from "../utils/firebaseActions";
import { firestoreTimeStampConvert } from "../utils/helpers";
import { navigate } from "gatsby";

const InitialData = {
	id: 123,
	title: '',
	description: '',
	tagArray: [],
	createdAt: { seconds: 0, nanoseconds: 0 }
}

const ProjectDetail = ({ projectID }) => {
	const { profile } = useAuth();
	const [projectData, setProjectData] = useState(InitialData);

	useEffect(() => {
		// fetch project data. use props for id.
		if (profile) {
			getProjectDetail(projectID)
				.then(res => {
					if (res !== undefined && Object.keys(res).length) {
						setProjectData(res)
					}
				})
		}
	}, [profile, projectID])

	const handleProjectDelete = async () => {
		await deleteProject(projectData.key)
		navigate('/profile')
	}

	const handleProjectEdit = (title, description, github, demo, tagArray) => {
		// update state
		setProjectData({
			...projectData,
			title,
			description,
			github,
			demo,
			tagArray
		})

		// update firestore
		updateProjectDetails(projectData.key, title, description, github, demo, tagArray)
	}

	return (
		<div>
			<div className="flex flex-col text-center">
				<div className="flex justify-center mb-4">
					<div className="w-16">
						<UpdateProjectBtn btnTitle="Edit" projectData={projectData} handleSubmit={handleProjectEdit} />
					</div>
					<div className="w-24">
						<DeleteProjectAlert handleSubmit={handleProjectDelete} />
					</div>
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

