import React, { useState } from 'react';

import axios from 'axios';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

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
import { countryRegionData } from '../utils/countryRegionData';

const schema = yup.object({
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  phoneNumber: yup
    .string()
    .required('Phone number is required')
    .typeError('Phone number not valid')
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\./0-9]*$/,
      'Invalid phone number format'
    )
    .min(10, 'Phone number not valid')
    .max(14, 'Phone number not valid'),
  email: yup.string().email('Invalid email').required('Required'),
  dob: yup.string().required('Required'),
  gender: yup.string().required('Required'),
  academicLevel: yup.string().required('Required'),
  resume: yup.string().required('Required'),
});

const countries = countryRegionData.map((countryRegion) => ({
  label: countryRegion.countryName,
  value: countryRegion.countryName,
}));

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

  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleClickOpen = () => {
    handleSelectPosition();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setFormData({ ...formData, resume: event.target.files[0] });
  };

  const getCountryRegions = (countryName) => {
    if (!countryName) return [];

    let regions = [];

    const countryData = countryRegionData.find(
      (countryRegion) => countryName === countryRegion.countryName
    );
    if (countryData) {
      regions = countryData.regions.map((region) => ({
        label: region.name,
        value: region.name,
      }));
    }

    return regions;
  };

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
        'https://test-api.eduvacity.com/api/v1/applications/instructors',
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

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('Form submitted:', formData);
  //   handleClose();
  // };

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
              <Controller
                name="firstName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="First Name"
                    fullWidth
                    error={!!errors.firstName?.message}
                    helperText={errors.firstName?.message}
                  />
                )}
              />
              <Controller
                name="lastName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Last Name"
                    fullWidth
                    error={!!errors.lastName?.message}
                    helperText={errors.lastName?.message}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    fullWidth
                    error={!!errors.email?.message}
                    helperText={errors.email?.message}
                  />
                )}
              />
              <Controller
                name="phoneNumber"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Phone"
                    fullWidth
                    type="tel"
                    error={!!errors.phoneNumber?.message}
                    helperText={errors.phoneNumber?.message}
                  />
                )}
              />
              <Controller
                name="academicLevel"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    required
                    select
                    label="Join as"
                    error={!!errors.academicLevel?.message}
                    helperText={errors.academicLevel?.message}>
                    <MenuItem value="PHD">PHD</MenuItem>
                    <MenuItem value="BSC">BSC</MenuItem>
                    <MenuItem value="MASTERS">MASTERS</MenuItem>
                  </TextField>
                )}
              />
              <Button
                variant="contained"
                component="label"
                fullWidth
                sx={{ backgroundColor: Colors.primary }}>
                <input type="file" hidden onChange={handleFileChange} />
                <AttachFileIcon sx={{ mr: 1 }} />
                {selectedFile ? selectedFile.name : 'Upload Resume'}
              </Button>
              <Controller
                name="dob"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="DOB"
                    fullWidth
                    error={!!errors.dob?.message}
                    helperText={errors.dob?.message}
                  />
                )}
              />
              <Controller
                name="country"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Country"
                    fullWidth
                    select
                    error={!!errors.country?.message}
                    helperText={errors.country?.message}>
                    {countries.map((country) => (
                      <MenuItem key={country.value} value={country.value}>
                        {country.label}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
              <Controller
                name="State"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="state"
                    fullWidth
                    select
                    error={!!errors.state?.message}
                    helperText={errors.state?.message}>
                    {getCountryRegions(watch('country')).map((region, i) => (
                      <MenuItem
                        key={`${region.value}_${i}`}
                        value={region.value}>
                        {region.label}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
              <Controller
                name="city"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="City"
                    fullWidth
                    error={!!errors.city?.message}
                    helperText={errors.city?.message}
                  />
                )}
              />
            </Stack>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            // type="submit"
            variant="contained"
            // onClick={handleSubmit(onSubmit)}
            sx={{ backgroundColor: Colors.primary }}>
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default InstructorApplicationDialog;
