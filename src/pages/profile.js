import React, { useState, useEffect } from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ProfileIcons from "../components/ProfileIcons";
import ProfileAvatar from "../components/ProfileAvatar";
import Tag from "../components/Tag";
import Card from "../components/Card";
import UpdateProjectBtn from "../components/UpdateProjectBtn";
import { navigate } from "gatsby";
import { getUserDetails, addProject, getUserProjects } from '../utils/firebaseActions';
import { useAuth } from "gatsby-theme-firebase";

function Profile() {

  const { profile } = useAuth();

  const [name, setName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [description, setDescription] = useState('');
  const [github, setGithub] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [email, setEmail] = useState('');
  const [skills, setSkills] = useState([]);
  const [creatorId, setCreatorId] = useState('');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (profile) {
      setCreatorId(profile.uid)
      // get user data
      const fireUserData = getUserDetails(profile.uid)
      fireUserData.then(res => {
        if (res.displayName) {
          setName(res.displayName)
        }
        if (res.jobTitle) {
          setJobTitle(res.jobTitle)
        }
        if (res.description) {
          setDescription(res.description)
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
      const projectId = Date.now()
      await addProject({ creatorId, projectId, title, description, github, demo, tagArray })
      window.location.reload()
    }
  }

  return (
    <Layout>
      <SEO title="Profile" />
      <div className="flex justify-center">
        <button onClick={() => navigate('/edit-profile')} className="bg-indigo-600 text-white py-1 px-2 text-xl font-semibold tracking-wide hover:bg-indigo-700 focus:outline-none m-2">Edit</button>
        <button className="bg-indigo-600 text-white py-1 px-2 text-xl font-semibold tracking-wide hover:bg-indigo-700 focus:outline-none m-2">Preview</button>
      </div>
      <div className="bg-white my-12 pb-6 w-full flex flex-col">
        <ProfileAvatar
          name={name}
          jobTitle={jobTitle}
          description={description}
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
    </Layout>
  );
}

export default Profile;
