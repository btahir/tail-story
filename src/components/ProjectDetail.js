import React, { useState, useEffect } from 'react';
import ProjectIcons from './ProjectIcons';
import DeleteProjectAlert from './DeleteProjectAlert';
import Tag from './Tag';
import UpdateProjectBtn from "./UpdateProjectBtn";
import { useAuth } from "gatsby-theme-firebase";
import { getProjectDetail, deleteProject, updateProjectDetails } from "../utils/firebaseActions";
import { firestoreTimeStampConvert, convertArrayToObject } from "../utils/helpers";
import { navigate } from "gatsby";

const InitialData = {
	id: 123,
	title: '',
	github: '',
	demo: '',
	description: '',
	creatorId: '',
	profileId: '',
	projectTags: [],

	createdAt: { seconds: 0, nanoseconds: 0 }
}

const ProjectDetail = ({ projectId }) => {
	const [projectData, setProjectData] = useState(InitialData);
	const [isCreator, setIsCreator] = useState(false);

	const { profile } = useAuth();

	useEffect(() => {		
		// fetch project data. use props for id.
		getProjectDetail(projectId)
			.then(res => {
				if (res !== undefined && Object.keys(res).length) {
					setProjectData(res)
					// find out if its creator or public
					if (profile) {
						if (res.creatorId === profile.uid) {
							setIsCreator(true)
						}
					}
				}
			})
	}, [profile, projectId])

	const handleProjectDelete = async () => {
		await deleteProject(projectData.key)
		navigate('/profile')
	}

	const handleProjectEdit = (title, description, github, demo, projectTagsArray) => {
		const projectTagsObject = convertArrayToObject(projectTagsArray)
		// update state
		setProjectData({
			...projectData,
			title,
			description,
			github,
			demo,
			projectTags: projectTagsObject
		})

		// update firestore
		updateProjectDetails(projectData.key, title, description, github, demo, projectTagsObject)
	}

	return (
		<div className="max-w-6xl mx-auto">
			<div className="flex flex-col text-center border-b-2 border-gray-100 pb-4">
				{isCreator ?
					<div className="flex justify-center mb-4">
						<div className="w-16">
							<UpdateProjectBtn btnTitle="Edit" projectData={projectData} handleSubmit={handleProjectEdit} />
						</div>
						<div className="w-24">
							<DeleteProjectAlert handleSubmit={handleProjectDelete} />
						</div>
					</div>
					:
					null
				}
				<div className="text-gray-800 font-extrabold leading-loose text-2xl text-center">{projectData.title}</div>
				<ProjectIcons profileId={projectData.profileId} github={projectData.github} demo={projectData.demo} />
			</div>
			<div className="mt-8 text-gray-700 px-2">
				{projectData.description}
			</div>
			<div className="px-6 pt-4 pb-2 mt-4 flex justify-around">
				<div>
					{Object.keys(projectData.projectTags).map((tag, index) =>
						<Tag key={index} item={tag} />
					)}
				</div>
				<div>
					Submitted: <span className="text-gray-600">{firestoreTimeStampConvert(projectData.createdAt)}</span>
				</div>
			</div>
		</div>
	)
}

export default ProjectDetail;

