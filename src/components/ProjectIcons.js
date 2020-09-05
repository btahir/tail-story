import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import PersonIcon from '@material-ui/icons/Person';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import Tooltip from '@material-ui/core/Tooltip';

function ProjectIcons(props) {
  return (
    <div className="mt-6">
      <Tooltip title="Creator Profile">
      <PersonIcon className="cursor-pointer mx-4" fontSize="large" />
      </Tooltip>
      <Tooltip title="Source Code">
      <GitHubIcon className="cursor-pointer mx-4" fontSize="large" />
      </Tooltip>
      <Tooltip title="Live Demo">
      <LiveTvIcon className="cursor-pointer mx-4" fontSize="large" />
      </Tooltip>      
    </div>
  )
}

export default ProjectIcons

