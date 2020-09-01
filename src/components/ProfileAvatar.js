import React from 'react';

const ProfileAvatar = (props) => {
  return (
    <div>
      <div className="shadow mx-auto h-32 w-32 border-white rounded-full overflow-hidden border-4">
        <img className="object-cover w-full h-full" alt="profile-avatar" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80" />
      </div>
      <div className="mt-4">
        <h1 className="text-lg text-center font-semibold">
          Cassie
          </h1>
        <p className="text-sm text-gray-600 text-center">
          Front End Developer
          </p>
      </div>
    </div>
  )
}

export default ProfileAvatar
