import React, { useState, useEffect, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slider from '@material-ui/core/Slider';
import Cropper from 'react-easy-crop';
import { getCroppedImg, readFile } from "../utils/canvasUtils";

export default function UpdateProjectBtn({ btnTitle, projectData, handleSubmit }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [github, setGithub] = useState('');
  const [demo, setDemo] = useState('');
  const [tags, setTags] = useState('');
  const [isTitleError, setIsTitleError] = useState(false);
  const [titleError, setTitleError] = useState('');
  const [isDescriptionError, setIsDescriptionError] = useState(false);
  const [descriptionError, setDescriptionError] = useState('');
  const [isGithubError, setIsGithubError] = useState(false);
  const [githubError, setGithubError] = useState('');
  const [isDemoError, setIsDemoError] = useState(false);
  const [demoError, setDemoError] = useState('');
  const [isTagsError, setIsTagsError] = useState(false);
  const [tagsError, setTagsError] = useState('');
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [projectImageId, setProjectImageId] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [imageSrc, setImageSrc] = useState(null);
  const [updateAvatar, setUpdateAvatar] = useState(false);  

  useEffect(() => {    
    if(projectData) {      
      setTitle(projectData.title)
      setDescription(projectData.description)
      setGithub(projectData.github)
      setDemo(projectData.demo)
      setTags(Object.keys(projectData.projectTags))
      setProjectImageId(projectData.projectImageId)
      setCroppedImage(projectData.projectImageSrc)
    }
  }, [projectData])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const clearForm = () => {
    setIsTitleError(false)
    setTitleError('')
    setIsDescriptionError(false)
    setDescriptionError('')
    setIsGithubError(false)
    setGithubError('')
    setIsDemoError(false)
    setDemoError('')
    setIsTagsError(false)
    setTagsError('')
  }

  const validate = () => {
    let err = false
    if (title.length < 1) {
      setIsTitleError(true)
      setTitleError('This can\'t be blank')
      err = true
    }
    if (description.length < 100) {
      setIsDescriptionError(true)
      setDescriptionError('Description needs to be at least 100 characters')
      err = true
    }
    if (demo.length < 1) {
      setIsDemoError(true)
      setDemoError('This can\'t be blank')
      err = true
    }
    if (tags.length < 1) {
      setIsTagsError(true)
      setTagsError('This can\'t be blank')
      err = true
    }
    if(typeof(tags) === 'string') {
      if (tags.split(',').length > 5) {
        setIsTagsError(true)
        setTagsError('Can\'t have more than 5 tags')
        err = true
      }  
    }
    if (github.length > 0 && !github.startsWith('https://www.github.com/') && !github.startsWith('https://github.com/')) {
      setIsGithubError(true)
      setGithubError('Invalid URL. Should be something like https://github.com/[USERNAME]')
      err = true
    }   
    if (!demo.startsWith('https://') && !github.startsWith('http://')) {
      setIsDemoError(true)
      setDemoError('Invalid URL. Should start with https/http')
      err = true
    }        
    return err
  }

  const handleSubmitForm = () => {
    clearForm()    
    const formErrors = validate()
    if(!formErrors) {
      handleClose()
      const tagArray = typeof(tags) === 'string' ? tags.split(",") : tags
      handleSubmit(title,description,github,demo,tagArray,projectImageId,croppedImage)
    }    
  };

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
      setUpdateAvatar(false)

      // update firebase storage
      const randomId = "img_" + Date.now().toString()
      setProjectImageId(randomId)
      // uploadProjectImage(randomId, , croppedImage)
    } catch (e) {
      console.error(e)
    }
  }, [imageSrc, croppedAreaPixels])

  const onFileChange = async e => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      let imageDataUrl = await readFile(file)
      setImageSrc(imageDataUrl)
    }
  }  

  return (
    <div className="bg-indigo-600 py-1 px-2 text-xl font-semibold tracking-wide hover:bg-indigo-700">
      <button className="text-white font-semibold focus:outline-none" onClick={handleClickOpen}>{btnTitle}</button>
      <Dialog 
        fullWidth maxWidth='lg' 
        open={open} 
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Project Info</DialogTitle>
        {updateAvatar ?
          (imageSrc ?
            <div className="flex flex-col mb-16 mx-auto">
              <div className="relative h-64 w-64">
                <Cropper
                  image={imageSrc}
                  crop={crop}
                  zoom={zoom}
                  cropSize={{ width: 128, height: 128 }}
                  // aspectRatio={4 / 3}
                  showGrid={false}
                  cropShape="rect"
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
            <input className="mb-16 ml-6" type="file" onChange={onFileChange} accept="image/*" />
          )
        :
          <button onClick={() => {setUpdateAvatar(true)}} className="shadow mx-auto h-32 w-32 mb-16 border-white overflow-hidden border-4">
            <img className="object-cover w-full h-full" alt="project-image" src={croppedImage} />
          </button>
        }        
        <DialogContent>
          <TextField
            margin="dense"
            label="Title"
            value={title}
            variant="outlined"
            error={isTitleError}
            helperText={titleError}
            fullWidth
            onChange={(event) => setTitle(event.target.value)}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            margin="dense"
            label="Description"
            variant="outlined"
            value={description}
            error={isDescriptionError}
            helperText={descriptionError}
            fullWidth
            multiline
            rows={4}
            onChange={(event) => setDescription(event.target.value)}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            margin="dense"
            label="Project URL"
            variant="outlined"
            value={demo}
            error={isDemoError}
            helperText={demoError}
            fullWidth
            onChange={(event) => setDemo(event.target.value)}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            margin="dense"
            label="Github URL (optional)"
            variant="outlined"
            value={github}
            error={isGithubError}
            helperText={githubError}
            fullWidth
            onChange={(event) => setGithub(event.target.value)}
          />    
        </DialogContent>          
        <DialogContent>
          <TextField
            margin="dense"
            label="Tags - Separate with commas (max 5)"
            variant="outlined"
            value={tags}
            error={isTagsError}
            helperText={tagsError}
            fullWidth
            onChange={(event) => setTags(event.target.value)}
          />
        </DialogContent>                        
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmitForm} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
