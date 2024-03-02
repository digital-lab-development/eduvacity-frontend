import * as React from 'react';

import { Box, Button, Grid, Card, Typography } from '@mui/material';

import { ClockIcon, Locationicon } from '../../components/svg';
import { Colors } from '../../components/themes/colors';
import { Fonts } from '../../components/themes/fonts';
import InstructorApplicationDialog from '../../components/instructor-form-dialog';

const cards = [
  {
    id: 1,
    title: 'Software Engineering',
    category: 'instructor',
    location: 'remote',
    type: 'Full-time',
  },
  {
    id: 2,
    title: 'Product Design',
    category: 'Product Design',
    location: 'remote',
    type: 'Full-time',
  },
  {
    id: 3,
    title: 'Product Management',
    category: 'instructor',
    location: 'remote',
    type: 'Full-time',
  },
  {
    id: 4,
    title: 'Product Marketing',
    category: 'instructor',
    location: 'remote',
    type: 'Full-time',
  },
  {
    id: 5,
    title: 'Data Science',
    category: 'instructor',
    location: 'remote',
    type: 'Full-time',
  },
  {
    id: 6,
    courseName: 'Finance and Accounting',
    category: 'instructor',
    location: 'remote',
    type: 'Full-time',
  },
];
export default function PositionsCards({ courses }) {
  const [selectedPosition, setSelectedPosition] = React.useState({});

  const handleSelectPosition = (position) => {
    setSelectedPosition(position);
  };

  return (
    <Box sx={{ width: '100%', display: 'flex' }}>
      <Grid container spacing={3}>
        {courses &&
          courses.map((course, index) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={4}
                key={`card-index-${index}`}>
                <Card
                  sx={{
                    width: '100%',
                    height: { xs: 160, sm: 168, lg: 200, xl: 160 },
                    padding: '24px 24px 28px 24px',
                    border: '1px solid rgba(234, 236, 240, 1)',
                    borderRadius: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    boxShadow: 'none',
                    background: '#FFF',
                  }}>
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '24px',
                    }}>
                    <Box
                      sx={{
                        font: `normal normal 500 normal 14px/24px ${Fonts.primary}`,
                        letterSpacing: '0em',
                        textAlign: 'left',
                        color: Colors.primary,
                        textTransform: 'capitalize',
                      }}>
                      {/* {course.category} */}
                      Instructor
                    </Box>
                    <InstructorApplicationDialog
                      handleSelectPosition={() => handleSelectPosition(course)}
                      selectedPosition={selectedPosition}
                    />
                  </Box>
                  <Box sx={{ width: '100%' }}>
                    <Typography
                      gutterBottom
                      variant="g"
                      component="div"
                      sx={{
                        font: {
                          xs: `normal normal 700 normal 18px/28px ${Fonts.secondary}`,
                          sm: `normal normal 700 normal 18px/28px ${Fonts.secondary}`,
                          textTransform: 'capitalize',
                        },
                        color: Colors.dark,
                      }}>
                      {course.courseName}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: 300,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 3,
                      m: 0,
                    }}>
                    <Button
                      sx={{
                        font: `normal normal 500 normal 16px/24px ${Fonts.inter}`,
                        letterSpacing: '0em',
                        textAlign: 'left',
                        color: 'rgba(71, 84, 103, 1)',
                        textTransform: 'capitalize',
                      }}
                      startIcon={<Locationicon />}>
                      {/* {course.location} */}
                      remote
                    </Button>
                    <Button
                      sx={{
                        font: `normal normal 500 normal 16px/24px ${Fonts.inter}`,
                        letterSpacing: '0em',
                        textAlign: 'left',
                        color: 'rgba(71, 84, 103, 1)',
                        textTransform: 'capitalize',
                      }}
                      startIcon={<ClockIcon />}>
                      {/* {course.type} */}
                      Full-Time
                    </Button>
                  </Box>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
}
