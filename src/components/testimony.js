'use client';

import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import { Fonts } from './themes/fonts';

const testimonies = [
  {
    name: '-Michelle Ademola (Diploma in Data Analysis)',
    avatar: '/images/michelle.jpeg',
    comment:
      'Eduvacity removed financial barriers and empowered me as a learner',
  },
  {
    name: '-Hassan Rufai(BSc, Business Administration)',
    avatar: '/images/hassan.jpeg',
    comment:
      'Studying at Eduvacity allows me to earn my B.sc while balancing my busy work schedule',
  },
];

export default function Testimony() {
  return (
    <Box sx={{ background: '#F6F7F7' }}>
      <Box
        sx={{
          // px: { xs: '1rem', sm: 8.5, md: 5.5, lg: 15.5 },
          px: { xs: '1rem', sm: '1rem', lg: 12.5, xl: 16 },
          py: { xs: '40px', lg: '96px' },
        }}
      >
        <Typography
          sx={{
            font: `normal normal 400 normal 36px/44px ${Fonts.primary}`,
            color: '#091E42',
          }}
        >
          Why{' '}
          <span style={{ color: '#41A36E', fontWeight: 700 }}>Learners</span>{' '}
          Love Eduvacity?
        </Typography>
        <Box sx={{ mt: '64px', width: '100%' }}>
          <Grid container spacing="20px">
            {testimonies.map((testimony, index) => (
              <Grid item xs={12} lg={6} key={`testimony_${index}`}>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '32px',
                    bgcolor: 'rgba(255, 255, 255, 0.3)',
                    py: '24px',
                    px: '20px',
                    maxHeight: '180px',
                    radius: '6px',
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      //   height: '180px',
                      width: '33%',
                    }}
                  >
                    <Image
                      src={testimony.avatar}
                      alt={testimony.name}
                      height={180}
                      width={180}
                      loading="lazy"
                      srcSet="..."
                      objectFit="cover"
                      borderRadius="20px"
                    />
                  </Box>
                  <Box
                    sx={{
                      width: '67%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '30px',
                        fontWeight: '600',
                        color: '#41A36E',
                      }}
                    >
                      &ldquo;
                    </Typography>
                    <Typography
                      sx={{
                        mt: 'auto',
                        font: `normal normal 600 normal 16px/19.2px ${Fonts.inter}`,
                        color: '#091E42',
                      }}
                    >
                      {testimony.comment}
                    </Typography>
                    <Typography
                      sx={{
                        mt: '18px',
                        font: `normal normal 500 normal 16px/19.2px ${Fonts.inter}`,
                        color: '#091E42',
                      }}
                    >
                      {testimony.name}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
