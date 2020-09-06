import React, { useState, useEffect } from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ProfileIcons from "../components/ProfileIcons";
import ProfileAvatar from "../components/ProfileAvatar";
import Tag from "../components/Tag";
import Card from "../components/Card";
import AddProjectBtn from "../components/AddProjectBtn";
import { navigate } from "gatsby";
import { getUserDetails } from '../utils/firebaseActions';
import { useAuth } from "gatsby-theme-firebase";

const DATA = {
  tags: ['User experience', 'VueJS', 'TailwindCSS', 'React', 'Painting'],
  projects: [
    {
      id: 123,
      title: 'ImageMin API',
      description: 'I spun up a FastAPI server using the base docker image and deployed an API to compress images.',
      tags: ['python', 'docker', 'image compression', 'opencv', 'api'],
      author: '124222',
      createdAt: 'Sun Aug 30 2020',
      starCount: 123,
    },
    {
      id: 124,
      title: 'Funnier Reddit',
      description: 'I used React and Redux to build a Reddit clone. It\'s way slicker and funnier.',
      tags: ['react', 'redux', 'javascript', 'web app'],
      author: '124222',
      createdAt: 'Sat July 21 2019',
      starCount: 5,
    },
  ]
}


const handleAddProject = (title, description, github, demo, tagArray) => {
  console.log(title, description, github, demo, tagArray)
  if (DATA.projects.length >= 3) {
    alert('Cannot add more than 3 projects!')
  }
}

function Profile() {

  const { profile } = useAuth();

  const [name, setName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [description, setDescription] = useState('');
  const [github, setGithub] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [email, setEmail] = useState('');
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    if (profile) {
      const fireData = getUserDetails(profile.uid)
      fireData.then(res => {
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
    }
  }, [profile])

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
        {DATA.projects.length < 3 ? <AddProjectBtn handleSubmit={handleAddProject} /> : <div className="text-xl font-semibold text-indigo-600">All Projects Added</div>}
      </div>
      <div className="mt-16 flex flex-col bg-gray-100">
        {DATA.projects.map((el, index) => <Card key={index} item={el} />)}
      </div>
    </Layout>
  );
}

export default Profile;
