import { Box, Button, CardHeader, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import * as React from 'react';
import { ArrowForward } from '../../components/svg';
import { Colors } from '../../components/themes/colors';
import { Fonts } from '../../components/themes/fonts';

const cards = [
  {
    title: 'Choose your Program',
    description:
      'Begin your academic journey by exploring the diverse range of programs offered by our institution. Browse through our catalog to find the program that aligns with your interests, goals, and career aspirations.',
  },
  {
    title: 'Start your application',
    description:
      "Once you've chosen your ideal program, it's time to kick-start the application process. Access our user-friendly online application portal and provide the required information, including personal details, academic history, and any supporting documentation. ",
  },
  {
    title: 'Application Review & Admission',
    description:
      "After submitting your application, our admissions team diligently reviews all submitted materials. This comprehensive evaluation ensures that you meet the program's prerequisites. You may be contacted for additional information or clarification.",
  },
  {
    title: 'Program Kick-off & Onboarding',
    description:
      "With your admission confirmed, it's time to embark on your educational journey. Your program kick-off will be marked by a detailed onboarding process, providing you with access to course materials, resources, and communication channels. ",
  },
];
export default function AdmissionProcessCard() {
  const router = useRouter();
  return (
    <Box sx={{ width: '100%', display: 'flex' }}>
      <Grid container spacing={'20px'}>
        {cards.map((card, index) => {
          return (
            <Grid item xs={12} key={`card-index-${index}`}>
              <Card
                sx={{
                  boxShadow: 'none',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '32px',
                  background: 'transparent',
                  borderLeft: `${
                    index === 0 ? '4px solid #41A36E' : '2px solid transparent'
                  }`,
                }}>
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    pl: '24px',
                  }}>
                  <CardHeader
                    title={
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{
                          font: `normal normal 700 normal 20px/32px ${Fonts.secondary}`,
                          color: Colors.dark,
                          letterSpacing: '0em',
                          textAlign: 'left',
                        }}>
                        {card.title}
                      </Typography>
                    }
                    subheader={
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{
                          font: `normal normal 400 normal 16px/24px ${Fonts.primary}`,
                          color: Colors.grey,
                          letterSpacing: '0em',
                          textAlign: 'left',
                        }}>
                        {card.description}
                      </Typography>
                    }
                    sx={{ m: 0, p: 0 }}
                  />
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
