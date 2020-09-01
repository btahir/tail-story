import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ProfileIcons from "../components/ProfileIcons";
import ProfileAvatar from "../components/ProfileAvatar";
import Tag from "../components/Tag";

const DATA = {
  tags: ['User experience','VueJS','TailwindCSS','React','Painting']
}

function Profile() {
  return (
    <Layout>
      <SEO title="Profile" />
      <div className="bg-white my-12 pb-6 w-full flex justify-evenly">
        <ProfileAvatar />
        <div className="flex flex-col items-center">
          <ProfileIcons />
          <div className="mt-6 pt-3 flex flex-wrap mx-6">
            {DATA.tags.map((obj,index) => 
              <Tag key={index} item={obj} />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
