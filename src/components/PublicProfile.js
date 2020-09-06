import React, { useState, useEffect } from "react";

import ProfileIcons from "./ProfileIcons";
import ProfileAvatar from "./ProfileAvatar";
import Tag from "./Tag";
import Card from "./Card";
import { navigate } from "gatsby";
import { getUserDetails, getUserProjects } from '../utils/firebaseActions';
import { useAuth } from "gatsby-theme-firebase";

const PublicProfile = ({profileID}) => {

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

  return (
    <div>
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
      <div className="mt-16 flex flex-col bg-gray-100">
        {projects.map((el, index) => <Card key={index} item={el} />)}
      </div>
    </div>
  );
}

export default PublicProfile;