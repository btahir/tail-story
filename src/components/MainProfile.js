import React, { useState, useEffect } from "react";

import ProfileIcons from "./ProfileIcons";
import ProfileAvatar from "./ProfileAvatar";
import Tag from "./Tag";
import Card from "./Card";
import UpdateProjectBtn from "./UpdateProjectBtn";
import { navigate } from "gatsby";
import { getProfileDetails, addProject, getUserProjects } from "../utils/firebaseActions";
import { convertArrayToObject, convertObjectToArray } from "../utils/helpers";
import { useAuth } from "gatsby-theme-firebase";

function MainProfile() {

  const { profile } = useAuth();

  const [profileId, setProfileId] = useState('');
  const [name, setName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [description, setDescription] = useState('');
  const [github, setGithub] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [email, setEmail] = useState('');
  const [skills, setSkills] = useState([]);
  const [creatorId, setCreatorId] = useState('');
  const [profileImageSrc, setProfileImageSrc] = useState('');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (profile) {
      setCreatorId(profile.uid)
      // get user data
      const fireProfileData = getProfileDetails(profile.uid)
      fireProfileData.then(res => {
        if (res.profileId) {
          setProfileId(res.profileId)
        }
        if (res.displayName) {
          setName(res.displayName)
        }
        if (res.jobTitle) {
          setJobTitle(res.jobTitle)
        }
        if (res.description) {
          setDescription(res.description)
        }
        if (res.profileImageSrc) {
          setProfileImageSrc(res.profileImageSrc)
        }
        if (res.githubURL) {
          setGithub(res.githubURL)
        }
        if (res.linkedinURL) {
          setLinkedin(res.linkedinURL)
        }
        if (res.profileEmail) {
          setEmail(res.profileEmail)
        }
        if (res.skillTags) {
          setSkills(res.skillTags)
        }
      })

      // get project data
      getUserProjects(profile.uid).then(res => setProjects(res))
    }
  }, [profile])

  const handleAddProject = async (title, description, github, demo, tagArray) => {
    if (projects.length >= 3) {
      alert('Cannot add more than 3 projects!')
    } else {
      const projectId = Date.now().toString()
      const projectTags = convertArrayToObject(tagArray)

      await addProject({ creatorId, profileId, projectId, title, description, github, demo, projectTags })
      window.location.reload()
    }
  }

  return (
    <div>
      <div className="flex justify-center">
        <button onClick={() => navigate('/edit-profile')} className="bg-indigo-600 text-white py-1 px-2 text-xl font-semibold tracking-wide hover:bg-indigo-700 focus:outline-none m-2">Edit</button>
        <button onClick={() => navigate(`/profile/${profileId}`)} className="bg-indigo-600 text-white py-1 px-2 text-xl font-semibold tracking-wide hover:bg-indigo-700 focus:outline-none m-2">Preview</button>
      </div>
      <div className="bg-white my-12 pb-6 w-full flex flex-col">
        <ProfileAvatar
          name={name}
          jobTitle={jobTitle}
          description={description}
          profileImageSrc={profileImageSrc}
        />
        <div className="flex flex-col items-center">
          <ProfileIcons
            github={github}
            linkedin={linkedin}
            email={email}
          />
          <div className="mt-6 pt-3 flex flex-wrap mx-6">
            {skills.map((obj, index) =>
              <Tag key={index} item={obj} />
            )}
          </div>
        </div>
      </div>
      <div className="text-center">
        {projects.length < 3 ?
          <div className="w-56 mx-auto">
            <UpdateProjectBtn
              btnTitle='Add Project (Max: 3)'
              handleSubmit={handleAddProject}
            />
          </div>
          :
          <div className="text-xl font-semibold text-indigo-600">All Projects Added</div>
        }
      </div>
      <div className="mt-16 flex flex-col bg-gray-100">
        {projects.map((el, index) => <Card key={index} item={el} />)}
      </div>
    </div>
  );
}

export default MainProfile;
