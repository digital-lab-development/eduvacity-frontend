import React from "react"
import { Container, Typography, Button, Grid, Box, CssBaseline } from '@mui/material';
import { Fonts } from "../src/components/themes/fonts";
import { Colors } from "../src/components/themes/colors";
import { ArrowBack, Home } from "@mui/icons-material";

export default function PageNotFound() {
  return (

    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexGrow: 1,
        flexDirection: 'column',
        backgroundColor: Colors.secondary,
        mx: 'auto',
        gap: 10
      }}>
          <Typography variant="h1" sx={{ fontFamily: Fonts.primary, textAlign: 'center'}} component="h1" color="primary">
            Oops !! <br /> Did you miss your way?
            {/* &apos;re  */}
          </Typography>
          <Typography sx={{ fontFamily: Fonts.primary, textAlign: 'center', color: Colors.light}} variant="h5" component="p" color="textSecondary">
            The page you are trying to access does not exist!<br />
            We Encourage you to click the Home button below to restart from our Homepage!
          </Typography>
        
        
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 10 }}>
            <Button href="./" variant="contained"><ArrowBack /> Go Back </Button>
            <Button href="/" variant="contained"><Home /> Go Back Home</Button>
          </Box>
    
        
          <Typography variant="body2" sx={{ fontFamily: Fonts.secondary, textAlign: 'center', color: Colors.light}} align="center">
            © {new Date().getFullYear()} Eduvacity
          </Typography>
        
     

    </Box>
  );
};

