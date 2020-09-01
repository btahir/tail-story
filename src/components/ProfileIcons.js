import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Tooltip from '@material-ui/core/Tooltip';

function ProfileIcons(props) {
  return (
    <div className="mt-6">
      <Tooltip title="LinkedIn Profile">
      <LinkedInIcon className="cursor-pointer mx-4" fontSize="large" />
      </Tooltip>
      <Tooltip title="Message Them">
      <MailIcon className="cursor-pointer mx-4" fontSize="large" />
      </Tooltip>
      <Tooltip title="Github Profile">
      <GitHubIcon className="cursor-pointer mx-4" fontSize="large" />
      </Tooltip>
    </div>
  )
}

export default ProfileIcons

