import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import TextField from '@material-ui/core/TextField';

const EditProfile = () => {

  const fileSelectedHandler = event => {
    console.log(event.target.files[0])
  }

  return (
    <Layout>
      <SEO title="Edit-Profile" />
      <div>Edit Profile</div>
      <div className="mt-4 flex justify-center items-center">
        <input className="" type="file" onChange={fileSelectedHandler} />
        <button className="bg-gray-300 py-1 px-2 rounded focus:outline-none m-2">Upload</button>
      </div>
      <form className="flex flex-col mt-16 max-w-sm" noValidate autoComplete="off">
        <TextField error helperText="Incorrect entry." id="creator-name" label="Name" />
        <TextField id="job-title" label="Job Title" />
        <TextField id="linkedin-profile" label="Linkedin Profile" />
      </form>
    </Layout>
  );
}

export default EditProfile;