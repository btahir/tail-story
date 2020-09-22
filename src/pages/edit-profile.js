import React, { useState, useEffect, useCallback } from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import TextField from "@material-ui/core/TextField";
import { getProfileDetails, updateProfileDetails, uploadProfileImage } from "../utils/firebaseActions";
import { convertArrayToObject } from "../utils/helpers";
import { getCroppedImg, readFile } from "../utils/canvasUtils";
import { useAuth } from "gatsby-theme-firebase";
import { navigate } from "gatsby";
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import Cropper from 'react-easy-crop';

const EditProfile = () => {
  const { profile } = useAuth();

  const [name, setName] = useState('');
  const [profileId, setProfileId] = useState('');
  const [job, setJob] = useState('');
  const [linkedin, setLinkedIn] = useState('');
  const [github, setGithub] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState('');
  const [isNameError, setIsNameError] = useState(false);
  const [nameError, setNameError] = useState('');
  const [isJobError, setIsjobError] = useState(false);
  const [jobError, setJobError] = useState('');
  const [isLinkedInError, setIsLinkedInError] = useState(false);
  const [linkedInError, setLinkedInError] = useState('');
  const [isGithubError, setIsGithubError] = useState(false);
  const [githubError, setGithubError] = useState('');
  const [isEmailError, setIsEmailError] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [isDescriptionError, setIsDescriptionError] = useState(false);
  const [descriptionError, setDescriptionError] = useState('');
  const [isSkillsError, setIsSkillsError] = useState(false);
  const [skillsError, setSkillsError] = useState('');
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    if (profile) {
      const fireData = getProfileDetails(profile.uid)
      fireData.then(res => {
        if (res.displayName) {
          setName(res.displayName)
        }
        if (res.profileId) {
          setProfileId(res.profileId)
        }        
        if (res.jobTitle) {
          setJob(res.jobTitle)
        }
        if (res.description) {
          setDescription(res.description)
        }
        if (res.githubURL) {
          setGithub(res.githubURL)
        }
        if (res.linkedinURL) {
          setLinkedIn(res.linkedinURL)
        }
        if (res.profileImageSrc) {
          setCroppedImage(res.profileImageSrc)
        }        
        if (res.profileEmail) {
          setEmail(res.profileEmail)
        }
        if (res.skillTags) {
          setSkills(Object.keys(res.skillTags).join(','))
        }
      })
    }

  }, [profile])

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        0
      )
      setCroppedImage(croppedImage)

      // update firebase storage
      uploadProfileImage(profileId, croppedImage)
    } catch (e) {
      console.error(e)
    }
  }, [imageSrc, croppedAreaPixels, profileId])

  const onFileChange = async e => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      let imageDataUrl = await readFile(file)
      setImageSrc(imageDataUrl)
    }
  }

  const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const validate = () => {
    let err = false
    if (name.length < 1) {
      setIsNameError(true)
      setNameError('This can\'t be blank')
      err = true
    }
    if (job.length < 1) {
      setIsjobError(true)
      setJobError('This can\'t be blank')
      err = true
    }
    if (linkedin.length < 1) {
      setIsLinkedInError(true)
      setLinkedInError('This can\'t be blank')
      err = true
    }
    // if (github.length < 1) {
    //   setIsGithubError(true)
    //   setGithubError('This can\'t be blank')
    //   err = true
    // }
    if (description.length < 50) {
      setIsDescriptionError(true)
      setDescriptionError('Description needs to be at least 50 characters')
      err = true
    }

    if (!linkedin.startsWith('https://www.linkedin.com/in/') && !linkedin.startsWith('https://linkedin.com/in/')) {
      setIsLinkedInError(true)
      setLinkedInError('Invalid url. Should be something like https://www.linkedin.com/in/[USERNAME]')
      err = true
    }
    if (github.length > 0 && !github.startsWith('https://www.github.com/') && !github.startsWith('https://github.com/')) {
      setIsGithubError(true)
      setGithubError('Invalid url. Should be something like https://github.com/[USERNAME]')
      err = true
    }
    if (email.length > 0 && !validateEmail(email)) {
      setIsEmailError(true)
      setEmailError('Invalid email address')
      err = true
    }
    return err
  }

  const clearForm = () => {
    setIsNameError(false)
    setNameError('')
    setIsjobError(false)
    setJobError('')
    setIsLinkedInError(false)
    setLinkedInError('')
    setIsGithubError(false)
    setGithubError('')
    setIsEmailError(false)
    setEmailError('')
    setIsDescriptionError(false)
    setDescriptionError('')
    setIsSkillsError(false)
    setSkillsError('')

  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    clearForm()

    const skillObject = convertArrayToObject(skills.split(","))

    // validate
    const val = validate();
    if (!val) {
      await updateProfileDetails({
        id: profile.uid,
        name: name,
        jobTitle: job,
        description: description,
        githubURL: github,
        linkedinURL: linkedin,
        email: email,
        skillTags: skillObject
      })
      navigate('/profile')
    }
  }

  return (
    <Layout>
      <SEO title="Edit-Profile" />
      <form onSubmit={handleSubmit} className="flex flex-col mt-16 mx-auto max-w-lg">
        {imageSrc ?
            <div className="flex flex-col mb-16 mx-auto">
              <div className="relative h-64 w-64">
                <Cropper
                  image={imageSrc}
                  crop={crop}
                  zoom={zoom}
                  cropSize={{ width: 128, height: 128 }}
                  // aspectRatio={4 / 3}
                  showGrid={false}
                  cropShape="round"
                  onCropChange={setCrop}
                  onCropComplete={onCropComplete}
                  onZoomChange={setZoom}
                />
              </div>
              <div className="controls">
                <div className="text-xs text-center py-2 font-light text-gray-900"></div>
                <Slider
                  value={zoom}
                  min={0}
                  max={2}
                  step={0.1}
                  aria-labelledby="Zoom"
                  onChange={(e, zoom) => setZoom(zoom)}
                />                
                <div className="flex justify-evenly">                  
                  <Button
                    onClick={showCroppedImage}
                    variant="contained"
                    color="primary"
                  >
                    Save
                  </Button>
                  <Button
                    onClick={() => setImageSrc(null)}
                    variant="contained"
                    color="secondary"
                  >
                    Reset
                </Button>
                </div>
              </div>
            </div>
            : 
            <input className="mb-16" type="file" onChange={onFileChange} accept="image/*" />
        }
        <div className="mb-8">
          <TextField
            id="creator-name"
            fullWidth
            label="Name"
            value={name}
            error={isNameError}
            helperText={nameError}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="mb-8">
          <TextField
            id="job-title"
            fullWidth
            label="Job Title"
            value={job}
            error={isJobError}
            helperText={jobError}
            onChange={(event) => setJob(event.target.value)}
          />
        </div>
        <div className="mb-8">
          <TextField
            id="linkedin-profile"
            fullWidth
            label="Linkedin Profile"
            value={linkedin}
            error={isLinkedInError}
            helperText={linkedInError}
            onChange={(event) => setLinkedIn(event.target.value)}
          />
        </div>
        <div className="mb-8">
          <TextField
            id="github-profile"
            fullWidth
            label="Github Profile (optional)"
            value={github}
            error={isGithubError}
            helperText={githubError}
            onChange={(event) => setGithub(event.target.value)}
          />
        </div>
        <div className="mb-8">
          <TextField
            id="email"
            fullWidth
            label="Email (optional)"
            value={email}
            error={isEmailError}
            helperText={emailError}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-8">
          <TextField
            id="description"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            label="A Little Blurb About You"
            value={description}
            error={isDescriptionError}
            helperText={descriptionError}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="mb-8">
          <TextField
            id="description"
            fullWidth
            multiline
            rows={2}
            variant="outlined"
            label="Skills - Separate With Commas (Maximum: 5)"
            value={skills}
            error={isSkillsError}
            helperText={skillsError}
            onChange={(event) => setSkills(event.target.value)}
          />
        </div>
        <button type="submit" className="mt-16 w-32 bg-indigo-600 text-white py-1 px-2 rounded focus:outline-none">Save</button>
      </form>
    </Layout>
  );
}

export default EditProfile;