import { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  Button,
  Checkbox,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import ResponseToast from './response-toast';
import { apiEndpoint } from '../utils';

const schema = yup.object({
  name: yup
    .string()
    .required('Full name is required')
    .matches(/^[a-zA-Z]+ [a-zA-Z]+$/, 'Please enter first and last name'),
  phone: yup
    .string()
    .required('Phone number is required')
    .typeError('Phone number not valid')
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\./0-9]*$/,
      'Invalid phone number format'
    )
    .min(10, 'Phone number not valid')
    .max(14, 'Phone number not valid'),
  email: yup.string().email('Invalid email').required('Email is required'),
  role: yup.string().required('Please select your role'),
});

function JoinWaitlistDialog({ handleClose, open }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);
  const [openToast, setOpenToast] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const firstName = data.name.split(' ')[0];
    const lastName = data.name.substring(firstName.length)?.trim();

    setIsSubmitting(true);
    setErrorMsg(null);

    const formData = {
      firstName,
      lastName,
      phoneNumber: data.phone,
      email: data.email,
      type: data.role,
    };

    try {
      const response = await axios.post(
        `${apiEndpoint}/applications/waiting-list`,
        formData
      );

      if (response.status === 200 || response.status === 201) {
        setIsSubmissionSuccessful(true);
        setOpenToast(true);
        handleClose();
        reset({
          name: '',
          role: '',
          phone: '',
          email: '',
        });
      } else {
        throw new Error(`API request failed with status ${response.status}`);
      }
    } catch (error) {
      setIsSubmissionSuccessful(false);
      setOpenToast(true);
      setErrorMsg('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Join the Waitlist</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Don&apos;t Wait - Get Notified When Our Platform Launches!
          </DialogContentText>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    autoFocus
                    fullWidth
                    label="Full Name"
                    margin="normal"
                    error={!!errors.name?.message}
                    helperText={errors.name?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    margin="normal"
                    label="Email Address"
                    error={!!errors.email?.message}
                    helperText={errors.email?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="phone"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    margin="normal"
                    label="Phone"
                    type="tel"
                    error={!!errors.phone?.message}
                    helperText={errors.phone?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="role"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    required
                    select
                    // labelId="role-select-label"
                    // id="role-select"
                    label="Join as"
                    error={!!errors.role?.message}
                    helperText={errors.role?.message}>
                    <MenuItem value="student">Student</MenuItem>
                    <MenuItem value="instructor">Instructor</MenuItem>
                  </TextField>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption">
                <Checkbox color="primary" />I agree to receive email updates and
                marketing messages.
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit(onSubmit)}>
            {isSubmitting ? <CircularProgress /> : 'Join Waitlist'}
          </Button>
        </DialogActions>
      </Dialog>
      <ResponseToast
        open={openToast}
        handleClose={() => setOpenToast(false)}
        isSubmissionSuccessful={isSubmissionSuccessful}
        responseMsg={
          isSubmissionSuccessful
            ? "You've been added to the waitlist!"
            : errorMsg
        }
      />
    </div>
  );
}

export default JoinWaitlistDialog;
