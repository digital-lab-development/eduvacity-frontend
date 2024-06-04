import React from 'react';
import { Container, Typography, Button, Grid, Box } from '@mui/material';

const ComingSoon = () => {
  return (
    <Container maxWidth="md" className="coming-soon-container">
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        minHeight="100vh">
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Typography variant="h1" component="h1" color="primary">
            We&apos;re Under Construction!
          </Typography>
          <Typography variant="h5" component="p" color="textSecondary">
            Our website is currently undergoing some exciting improvements.
            We&apos;ll be back soon with something amazing!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained">Get Notified</Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" color="textSecondary" align="center">
            © {new Date().getFullYear()} Your Company Name
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ComingSoon;
