import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ProfileIcons from "../components/ProfileIcons";
import ProfileAvatar from "../components/ProfileAvatar";
import Tag from "../components/Tag";
import Card from "../components/Card";
import { navigate } from "gatsby";

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

const handleAddProject = () => {
  if (DATA.projects.length >= 3) {
    alert('Cannot add more than 3 projects!')
  }
}

function Profile() {
  return (
    <Layout>
      <SEO title="Profile" />
      <div className="flex justify-center">
        <button onClick={() => navigate('/edit-profile')} className="bg-indigo-600 text-white py-1 px-2 text-xl font-semibold tracking-wide hover:bg-indigo-700 focus:outline-none m-2">Edit</button>
        <button className="bg-indigo-600 text-white py-1 px-2 text-xl font-semibold tracking-wide hover:bg-indigo-700 focus:outline-none m-2">Preview</button>
      </div>
      <div className="bg-white my-12 pb-6 w-full flex flex-col">
        <ProfileAvatar />
        <div className="flex flex-col items-center">
          <ProfileIcons />
          <div className="mt-6 pt-3 flex flex-wrap mx-6">
            {DATA.tags.map((obj, index) =>
              <Tag key={index} item={obj} />
            )}
          </div>
        </div>
      </div>
      <div className="text-center">
      <button onClick={handleAddProject} className="bg-indigo-600 text-white py-1 px-2 text-xl font-semibold tracking-wide hover:bg-indigo-700 focus:outline-none m-2">Add Project</button>
      </div>
      <div className="mt-16 flex flex-col">
        {DATA.projects.map((el, index) => <Card key={index} item={el} />)}
      </div>
    </Layout>
  );
}

export default Profile;
