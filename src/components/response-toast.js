import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
// import CloseIcon from '@mui/icons-material/CloseIcon';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const StyledAlert = styled(MuiAlert)(({ theme, severity }) => ({
  background:
    severity === 'success'
      ? theme.palette.success.main
      : theme.palette.error.main,
  color:
    severity === 'success'
      ? theme.palette.success.contrastText
      : theme.palette.error.contrastText,
  '& .MuiAlert-icon': {
    fontSize: 20,
  },
  '& .MuiAlert-message': {
    fontSize: 16,
    fontWeight: 'medium',
  },
}));

const ResponseToast = ({
  open,
  handleClose,
  isSubmissionSuccessful,
  responseMsg,
}) => {
  const status = isSubmissionSuccessful ? 'success' : 'error';

  return (
    <Stack spacing={0} sx={{ width: '100%' }}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <StyledAlert onClose={handleClose} severity={status}>
          {responseMsg}
        </StyledAlert>
      </Snackbar>
    </Stack>
  );
};

export default ResponseToast;
