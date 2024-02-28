import React, { useState } from 'react';
import {
  TextField,
  Button,
  MenuItem,
  InputAdornment,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Stack,
} from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { ArrowUp } from './svg';
import { Fonts } from './themes/fonts';
import { Colors } from './themes/colors';
import { truncateText } from '../utils';

const InstructorApplicationDialog = ({
  selectedPosition,
  handleSelectPosition,
}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    experienceLevel: '',
    resume: null,
    additionalInfo: '',
  });
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    handleSelectPosition();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setFormData({ ...formData, resume: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    handleClose();
  };

  return (
    <>
      <Button
        onClick={handleClickOpen}
        endIcon={<ArrowUp />}
        sx={{
          font: `normal normal 700 normal 14px/20px ${Fonts.secondary}`,
          letterSpacing: '0em',
          textAlign: 'left',
          color: Colors.primary,
          textTransform: 'capitalize',
        }}>
        Apply
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ fontSize: 'h5' }}>
          {`Apply for ${truncateText(selectedPosition.title, 25)}`}
        </DialogTitle>
        <DialogContent dividers sx={{ backgroundColor: '#f5f5f5' }}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <TextField
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                fullWidth
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton aria-label="email">
                        {/* Email icon */}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Phone Number"
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton aria-label="phone">
                        {/* Phone icon */}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Experience Level"
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleChange}
                fullWidth
                select>
                <MenuItem value="beginner">Beginner</MenuItem>
                <MenuItem value="intermediate">Intermediate</MenuItem>
                <MenuItem value="advanced">Advanced</MenuItem>
              </TextField>
              <Button
                variant="contained"
                component="label"
                fullWidth
                sx={{ backgroundColor: Colors.primary }}>
                <input type="file" hidden onChange={handleFileChange} />
                <AttachFileIcon sx={{ mr: 1 }} />
                {selectedFile ? selectedFile.name : 'Upload Resume'}
              </Button>
              <TextField
                label="Additional Information (Optional)"
                name="additionalInfo"
                multiline
                rows={4}
                value={formData.additionalInfo}
                onChange={handleChange}
                fullWidth
              />
            </Stack>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: Colors.primary }}>
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default InstructorApplicationDialog;
