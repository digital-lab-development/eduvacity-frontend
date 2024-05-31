import { Box, CssBaseline, Grid, Typography } from '@mui/material';
import { Colors } from '../src/components/themes/colors';
import { Fonts } from '../src/components/themes/fonts';
import { VISION_AND_MISSION } from '../src/utils/contants';

import HomePageLayout from '../src/views/home/layout';

export default function AboutUs() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexGrow: '1',
        flexDirection: 'column',
      }}
    >
      <CssBaseline />
      <Box
        component="section"
        id="hero-section"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: Colors.light,
          pt: { xs: 4, md: 15.5 },
          pb: { xs: 4, md: 6.5 },
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            px: { xs: '1rem', sm: '1rem', md: 5.5, lg: 7.2, xl: 12.5 },
            py: { xs: 4, sm: 3, xl: 4 },
            gap: { xs: '32px', sm: '64px' },
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: '40px', sm: '80px' },
            }}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  width: '100%',
                  maxWidth: { xs: '100%', sm: '98%' },
                  font: {
                    xs: `normal normal 600 normal 32.5px/44px ${Fonts.inter}`,
                    md: `normal normal 600 normal 46px/60px ${Fonts.inter}`,
                  },
                  color: Colors.dark,
                  m: 0,
                  p: 0,
                  letterSpacing: '-2%',
                }}
              >
                Redefining Higher Education:{' '}
                <Typography
                  variant="span"
                  sx={{
                    color: Colors.primary,
                  }}
                >
                  Shifting Paradigms!
                </Typography>
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {VISION_AND_MISSION.map((item, i) => (
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      pl: 4,
                      mt: 4,
                    }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        font: {
                          xs: `normal normal 400 normal 28px/38px ${Fonts.inter}`,
                          md: `normal normal 400 normal 40px/50px ${Fonts.inter}`,
                        },
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Box
                      sx={{
                        pl: 8,
                        py: 6,
                        mt: 2,
                        borderLeft: 4,
                        borderColor: Colors.primary,
                        borderRadius: 6,
                      }}
                    >
                      <Typography
                        variant="p"
                        sx={{
                          width: '100%',
                          maxWidth: { xs: 343, sm: 570, md: 480 },
                          font: {
                            xs: `normal normal 500 normal 18px/28px ${Fonts.primary}`,
                            md: `normal normal 500 normal 20px/30px ${Fonts.primary}`,
                          },
                          color: Colors.textColor,
                        }}
                      >
                        {item.text}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Grid container spacing={2}>
                  <Grid item></Grid>
                  <Grid item></Grid>
                  <Grid item></Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

AboutUs.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>;
};
