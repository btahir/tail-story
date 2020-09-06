import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Tooltip from '@material-ui/core/Tooltip';

function ProfileIcons({ github, linkedin, email }) {
  return (
    <div className="mt-6">
      <Tooltip title="LinkedIn Profile">
        <a href={linkedin} target="_blank" rel="noreferrer">
          <LinkedInIcon className="cursor-pointer mx-4" fontSize="large" />
        </a>
      </Tooltip>
      {email === '' ?
        null
        :
        <Tooltip title="Message Them">
          <a href={`mailto:${email}`}>
            <MailIcon className="cursor-pointer mx-4" fontSize="large" />
          </a>
        </Tooltip>
      }
      <Tooltip title="Github Profile">
        <a href={github} target="_blank" rel="noreferrer">
          <GitHubIcon className="cursor-pointer mx-4" fontSize="large" />
        </a>
      </Tooltip>
    </div>
  )
}

export default ProfileIcons

