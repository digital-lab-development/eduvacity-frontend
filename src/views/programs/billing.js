import { Box, CardHeader, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Colors } from '../../components/themes/colors';
import { Fonts } from '../../components/themes/fonts';
import { ngnCurrencyFormatter } from '../../utils';

const cards = [
  // {
  //   title: 'Choose your Program',
  //   description: 'Vorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //   type: 'quarterly',
  //   benefit: 'All available benefits',
  //   popular: true,
  //   price: '70,000',
  // },
  {
    title: 'Start your application',
    description:
      "Once you've chosen your ideal program, it's time to kick-start the application process. Access our user-friendly online application portal and provide the required information, including personal details, academic history, and any supporting documentation. ",
    type: 'once',
    benefit: 'All available benefits',
    popular: false,
    price: '210,000',
  },
];
export default function BillingProcessCard({ price }) {
  return (
    <Box sx={{ width: '100%', display: 'flex' }}>
      <Grid container spacing={'20px'}>
        {cards.map((card, index) => {
          return (
            <Grid item xs={12} sm={6} key={`card-index-${index}`}>
              <Card
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '16px',
                  // border: '1px solid #EAECF0',
                  boxShadow: 'inset -5px -5px 250px rgba(255, 255, 255, 0.02)',
                  background:
                    'radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%) ',
                  backdropFilter: 'blur(21px)',
                }}>
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '32px',
                    padding: '32px',
                    // background: '#FFF',
                    // borderBottom: '1px solid #EAECF0',
                  }}>
                  <CardHeader
                    title={
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{
                          font: `normal normal 500 normal 18px/24px ${Fonts.primary}`,
                          color: '#fff',
                          letterSpacing: '0em',
                          textAlign: 'left',
                          textTransform: 'capitalize',
                        }}>
                        {/* {card.type === 'once' ? 'Upfront' : card.type} */}
                      </Typography>
                    }
                    action={
                      card.popular === true && (
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="div"
                          sx={{
                            background: `linear-gradient(0deg, #D7FEE9, #D7FEE9),linear-gradient(0deg, #F5FFFA, #F5FFFA)`,
                            font: `normal normal 400 normal 14px/20px ${Fonts.inter}`,
                            padding: `4px 12px 4px 12px`,
                            borderRadius: '9999px',
                            border: '1px solid #D7FEE9',
                            color: Colors.primary,
                            letterSpacing: '0em',
                            textAlign: 'center',
                            textTransform: 'capitalize',
                          }}>
                          popular
                        </Typography>
                      )
                    }
                    sx={{ m: 0, p: 0 }}
                  />
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px',
                    }}>
                    <Box
                      sx={{
                        width: '100%',
                        display: 'flex',
                        gap: '4px',
                        alignItems: 'center',
                        font: `normal normal 700 normal 60px/72px ${Fonts.inter}`,
                        letterSpacing: '-0.02em',
                        textAlign: 'left',
                        color: '#fff',
                      }}>
                      {ngnCurrencyFormatter(price || 0)}
                      {card.type === 'once' ? null : (
                        <Box
                          component="span"
                          sx={{
                            font: `normal normal 700 normal 16px/24px ${Fonts.inter}`,
                            letterSpacing: '-0.02em',
                            textAlign: 'left',
                            color: Colors.textPrimaryDark,
                            mt: 3,
                          }}>
                          {/* per quarter */}
                        </Box>
                      )}
                    </Box>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{
                        font: `normal normal 500 normal 18px/24px ${Fonts.primary}`,
                        color: '#fff',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        textTransform: 'capitalize',
                      }}>
                      {card.type === 'once'
                        ? 'Billed once.'
                        : 'Billed annually.'}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: '4px',
                    padding: '32px 32px 40px 32px',
                    background: ' rgba(255, 255, 255, 0.2)',
                  }}>
                  <Box
                    sx={{
                      textTransform: 'none',
                      font: `normal normal 700 normal 16px/24px ${Fonts.inter}`,
                      color: '#fff',
                      letterSpacing: '0em',
                      textAlign: 'left',
                      m: 0,
                      p: 0,
                    }}>
                    Benefits
                  </Box>
                  <Box
                    sx={{
                      textTransform: 'none',
                      font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                      color: '#fff',
                      letterSpacing: '0em',
                      textAlign: 'left',
                      m: 0,
                      p: 0,
                    }}>
                    {card.benefit}
                  </Box>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
