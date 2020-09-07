import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import PersonIcon from '@material-ui/icons/Person';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import Tooltip from '@material-ui/core/Tooltip';
import { navigate } from "gatsby";

function ProjectIcons({ profileId, github, demo }) {
  return (
    <div className="mt-6">
      <Tooltip title="Creator Profile">
        <PersonIcon onClick={() => navigate(`/profile/${profileId}`)} className="cursor-pointer mx-4" fontSize="large" />
      </Tooltip>
      <Tooltip title="Source Code">
        <a href={github} target="_blank" rel="noreferrer">
          <GitHubIcon className="cursor-pointer mx-4" fontSize="large" />
        </a>
      </Tooltip>
      <Tooltip title="Live Demo">
        <a href={demo} target="_blank" rel="noreferrer">
          <LiveTvIcon className="cursor-pointer mx-4" fontSize="large" />
        </a>
      </Tooltip>
    </div>
  )
}

export default ProjectIcons

