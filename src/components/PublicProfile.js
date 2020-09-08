import React, { useState, useEffect } from "react";

import ProfileIcons from "./ProfileIcons";
import ProfileAvatar from "./ProfileAvatar";
import Tag from "./Tag";
import Card from "./Card";
import { getPublicUserKey, getProfileDetails, getUserProjects } from '../utils/firebaseActions';

const PublicProfile = ({ profileId }) => {
  const [name, setName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [description, setDescription] = useState('');
  const [github, setGithub] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [email, setEmail] = useState('');
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [profileImageSrc, setProfileImageSrc] = useState('');

  useEffect(() => {
    // get user data
    const profileKey = getPublicUserKey(profileId)
    profileKey.then(resKey => {
      if (resKey) {
        const fireUserData = getProfileDetails(resKey)
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
        getUserProjects(resKey).then(res => setProjects(res))
      }
    })
  }, [profileId])

  return (
    <div>
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
      <div className="mt-16 flex flex-col bg-gray-100">
        {projects.map((el, index) => <Card key={index} item={el} />)}
      </div>
    </div>
  );
}

export default PublicProfile;