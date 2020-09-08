import React from 'react';

const ProfileAvatar = ({ name, jobTitle, description, profileImageSrc }) => {
  return (
    <div>
      <div className="shadow mx-auto h-32 w-32 border-white rounded-full overflow-hidden border-4">
        <img className="object-cover w-full h-full" alt="profile-avatar" src={profileImageSrc} />
      </div>
      <div className="mt-4">
        <h1 className="text-lg text-center font-semibold">
          {name}
        </h1>
        <p className="text-sm text-gray-600 text-center">
          {jobTitle}
        </p>
        <p className="text-gray-800 max-w-xl text-justify mx-auto my-4 px-4">
          {description}
        </p>        
      </div>
    </div>
  )
}

export default ProfileAvatar
