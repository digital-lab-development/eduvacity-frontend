import React, { useState } from 'react';

import axios from 'axios';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  Button,
  MenuItem,
  InputAdornment,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Stack,
  Box,
  CircularProgress,
  FormControl,
  InputLabel,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MuiTextField from '@mui/material/TextField';

import AttachFileIcon from '@mui/icons-material/AttachFile';
import { ArrowUp } from './svg';
import { Fonts } from './themes/fonts';
import { Colors } from './themes/colors';
import { truncateText } from '../utils';
import { countryRegionData } from '../utils/countryRegionData';
import ResponseToast from './response-toast';

const TextField = styled(MuiTextField)({
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    color: '#505F79',
    backgroundColor: '#F5F6F7',
    borderRadius: '1rem',
    borderColor: 'transparent',
    outline: 'none',
    '&.Mui-focused fieldset': {
      borderColor: '#41A36E',
    },
  },
});

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
  age: yup.string().required('Required'),
  gender: yup.string().required('Required'),
  experienceLevel: yup.string().required('Required'),
  academicLevel: yup.string().required('Required'),
  country: yup.string().required('Required'),
  state: yup.string().required('Required'),
  city: yup.string().required('Required'),
  resume: yup
    .mixed()
    .test('fileType', 'Only PDF files allowed!', (value) => {
      const acceptedTypes = ['application/pdf'];
      return value && acceptedTypes.includes(value.type);
    })
    .test('fileSize', 'The file size is above 1mb', (value) => {
      return value && value.size < 10 * 1024 * 1024;
    })
    .required('Required'),
});

const countries = countryRegionData.map((countryRegion) => ({
  label: countryRegion.countryName,
  value: countryRegion.countryName,
}));

const InstructorApplicationDialog = ({
  selectedPosition,
  handleSelectPosition,
}) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);
  const [openToast, setOpenToast] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    watch,
    register,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleClickOpen = () => {
    handleSelectPosition();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
    const formData = new FormData();

    setIsSubmitting(true);
    setErrorMsg(null);

    for (const key in data) {
      formData.append(key, data[key]);
    }

    formData.append('courseId', selectedPosition.id);

    try {
      const response = await axios.post(
        'https://test-api.eduvacity.com/api/v1/applications/instructors',
        formData
      );

      if (response.status === 200 || response.status === 201) {
        setIsSubmissionSuccessful(true);
        setOpenToast(true);
        handleClose();
        reset();
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
    <Box>
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
          {`Apply for ${truncateText(selectedPosition.courseName, 25)}`}
        </DialogTitle>
        <DialogContent dividers sx={{ backgroundColor: '#fff' }}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <Controller
                name="firstName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <FormControl>
                    <label>First Name</label>
                    <TextField
                      {...field}
                      // label="First Name"
                      fullWidth
                      error={!!errors.firstName?.message}
                      helperText={errors.firstName?.message}
                    />
                  </FormControl>
                )}
              />
              <Controller
                name="lastName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <FormControl>
                    <label>Last Name</label>
                    <TextField
                      {...field}
                      // label="Last Name"
                      fullWidth
                      error={!!errors.lastName?.message}
                      helperText={errors.lastName?.message}
                    />
                  </FormControl>
                )}
              />
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <FormControl>
                    <label>Email</label>
                    <TextField
                      {...field}
                      // label="Email"
                      fullWidth
                      error={!!errors.email?.message}
                      helperText={errors.email?.message}
                    />
                  </FormControl>
                )}
              />
              <Controller
                name="phoneNumber"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <FormControl>
                    <label>Phone</label>
                    <TextField
                      {...field}
                      // label="Phone"
                      fullWidth
                      type="tel"
                      error={!!errors.phoneNumber?.message}
                      helperText={errors.phoneNumber?.message}
                    />
                  </FormControl>
                )}
              />
              <Controller
                name="gender"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <FormControl>
                    <label>Gender</label>
                    <TextField
                      {...field}
                      fullWidth
                      select
                      // label="Gender"
                      error={!!errors.gender?.message}
                      helperText={errors.gender?.message}>
                      <MenuItem value="female">Female</MenuItem>
                      <MenuItem value="male">Male</MenuItem>
                    </TextField>
                  </FormControl>
                )}
              />
              <Controller
                name="experienceLevel"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <FormControl>
                    <label>Experience Level</label>
                    <TextField
                      {...field}
                      fullWidth
                      select
                      // label="Experience Level"
                      error={!!errors.experienceLevel?.message}
                      helperText={errors.experienceLevel?.message}>
                      <MenuItem value="1-3">1-3</MenuItem>
                      <MenuItem value="4-6">4-6</MenuItem>
                      <MenuItem value="6-8">6-8</MenuItem>
                      <MenuItem value="8-10">8-10</MenuItem>
                      <MenuItem value="10+">10+</MenuItem>
                    </TextField>
                  </FormControl>
                )}
              />
              <Controller
                name="academicLevel"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <FormControl>
                    <label>Academic Level</label>
                    <TextField
                      {...field}
                      fullWidth
                      select
                      // label="Academic Level"
                      error={!!errors.academicLevel?.message}
                      helperText={errors.academicLevel?.message}>
                      <MenuItem value="PHD">PHD</MenuItem>
                      <MenuItem value="BSC">BSC</MenuItem>
                      <MenuItem value="MASTERS">MASTERS</MenuItem>
                    </TextField>
                  </FormControl>
                )}
              />
              <Controller
                name="age"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <FormControl>
                    <label>Age Range</label>
                    <TextField
                      {...field}
                      // label="Age Range"
                      fullWidth
                      select
                      error={!!errors.age?.message}
                      helperText={errors.age?.message}>
                      <MenuItem value="18-24">18-24</MenuItem>
                      <MenuItem value="24-30">25-30</MenuItem>
                      <MenuItem value="30-35">30-35</MenuItem>
                      <MenuItem value="35-40">35-40</MenuItem>
                      <MenuItem value="40+">40+</MenuItem>
                    </TextField>
                  </FormControl>
                )}
              />
              <Controller
                name="country"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <FormControl>
                    <label>Country</label>
                    <TextField
                      {...field}
                      // label="Country"
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
                  </FormControl>
                )}
              />
              <Controller
                name="state"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <FormControl>
                    <label>State</label>
                    <TextField
                      {...field}
                      // label="State"
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
                  </FormControl>
                )}
              />
              <Controller
                name="city"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <FormControl>
                    <label>City</label>
                    <TextField
                      {...field}
                      // label="City"
                      fullWidth
                      error={!!errors.city?.message}
                      helperText={errors.city?.message}
                    />
                  </FormControl>
                )}
              />
              <Controller
                name="resume"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <label
                    style={{ width: '100%' }}
                    onClick={() =>
                      document.getElementById('fileInput').click()
                    }>
                    <TextField
                      label="Resume"
                      fullWidth
                      error={!!errors.resume?.message}
                      helperText={errors.resume?.message}
                      InputProps={{
                        readOnly: true,
                        startAdornment: (
                          <InputAdornment>
                            <AttachFileIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <input
                      {...register}
                      id="fileInput"
                      style={{ display: 'none', width: '100%' }}
                      type="file"
                      hidden
                      onChange={(e) => {
                        setValue('resume', e.target.files[0], {
                          shouldValidate: true,
                        });
                      }}
                    />
                  </label>
                )}
              />
              {watch('resume')?.name && watch('resume').name}
            </Stack>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            type="submit"
            variant="contained"
            onClick={handleSubmit(onSubmit)}
            sx={{
              backgroundColor: Colors.primary,
              padding: '12px 30px 12px 30px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              font: `normal normal 500 normal 14px/[19.2px] ${Fonts.primary}`,
              color: 'rgba(230, 244, 237, 1)',
              borderRadius: '46px',
              '&:hover': {
                background: Colors.primary,
              },
            }}>
            {isSubmitting ? 'Loading...' : 'Apply'}
          </Button>
        </DialogActions>
      </Dialog>
      <ResponseToast
        open={openToast}
        handleClose={() => setOpenToast(false)}
        isSubmissionSuccessful={isSubmissionSuccessful}
        responseMsg={
          isSubmissionSuccessful ? "You've successfully applied" : errorMsg
        }
      />
    </Box>
  );
};

export default InstructorApplicationDialog;
