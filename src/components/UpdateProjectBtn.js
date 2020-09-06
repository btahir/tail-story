import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

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

  useEffect(() => {
    if(projectData) {
      setTitle(projectData.title)
      setDescription(projectData.description)
      setGithub(projectData.github)
      setDemo(projectData.demo)
      setTags(projectData.tagArray)
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
    if (!github.startsWith('https://www.github.com/') && !github.startsWith('https://github.com/')) {
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
      handleSubmit(title,description,github,demo,tagArray)
    }    
  };

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
            label="Github URL"
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
