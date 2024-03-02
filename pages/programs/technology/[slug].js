import {
  Box,
  Card,
  CardHeader,
  CssBaseline,
  Divider,
  IconButton,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import {
  ABULogo,
  Accreditation,
  ApplicationFeeIcon,
  ArrowUp,
  CertificationIcon,
  CheckCircled,
  LearningModeIcon,
  PlayButton,
} from '../../../src/components/svg';
import { Colors } from '../../../src/components/themes/colors';
import { Fonts } from '../../../src/components/themes/fonts';
import HomePageLayout from '../../../src/views/home/layout';
import AdmissionProcessCard from '../../../src/views/programs/admission-process';
import BillingProcessCard from '../../../src/views/programs/billing';
import DataAnalysis from '../../../src/views/programs/data-analysis';
import KeyFeaturesCard from '../../../src/views/programs/key-features';
import { goToPortal } from '../../../src/utils';

export default function CloudComputingPage() {
  const router = useRouter();
  const [scrollTop, setScrollTop] = React.useState(0);
  const [showCover, setShowCover] = React.useState(true);
  const scrollableDivRef = React.useRef(null);
  const videoId = 'qqMrLuVI3d0';

  const handleVideoClick = () => {
    setShowCover(!showCover);
  };

  const handleScroll = (event) => {
    const { deltaY } = event;
    setScrollTop((prevScrollTop) => prevScrollTop - deltaY);
  };
  React.useEffect(() => {
    const scrollableDiv = scrollableDivRef.current;
    if (scrollableDiv) {
      scrollableDiv.scrollTo(0, scrollableDiv.scrollHeight);
    }
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
      }}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexWrap: { xs: 'wrap', md: 'nowrap' },
          gap: 4,
          height: '100%',
          backgroundColor: Colors.secondary,
          pt: { xs: 8, md: 15.5 },
          pb: { xs: 8, md: 6.5 },
          px: { xs: '1rem', sm: 8.5, md: 5.5, lg: 7.2, xl: 12.5 },
        }}>
        <Box sx={{ flex: '1 1 50%' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: '1rem', md: '2rem' },
            }}>
            <ABULogo />
            <Typography
              sx={{
                width: '100%',
                font: {
                  xs: `normal normal 700 normal 36px/44px ${Fonts.secondary}`,
                  md: `normal normal 700 normal 40px/56px ${Fonts.inter}`,
                  lg: `normal normal 400 normal 50px/58px ${Fonts.inter}`,
                },
                color: Colors.light,
                letterSpacing: '-2%',
              }}>
              A.B.U school of SICT: Diploma in Backend engineering
            </Typography>
            <Typography
              variant="p"
              sx={{
                width: '100%',
                font: {
                  xs: `normal normal 400 normal 20px/28px ${Fonts.arial}`,
                  md: `normal normal 400 normal 20px/30px ${Fonts.arial}`,
                },
                color: Colors.textColor,
                letterSpacing: { xs: '0em' },
                maxWidth: 480,
              }}>
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more.
            </Typography>
          </Box>
          <Box
            sx={{
              //   maxWidth: 500,
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: '24px',
              mt: { xs: 4, md: 4 },
            }}>
            <Box
              onClick={() => router.push(goToPortal + 'signup')}
              sx={{
                padding: '12px 20px 12px 20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                font: `normal normal 500 normal 14px/[19.2px] ${Fonts.primary}`,
                cursor: 'pointer',
                color: 'rgba(230, 244, 237, 1)',
                borderRadius: '46px',

                background: Colors.primary,
                '&:hover': {
                  background: Colors.primary,
                },
              }}>
              Enroll now <ArrowUp />
            </Box>
          </Box>
        </Box>
        <Box sx={{ flex: '1 1 50%' }}>
          <Box
            sx={{
              backgroundColor: '#15272D',
              borderRadius: '12px',
              p: { xs: 1, md: 3 },
            }}>
            {showCover ? (
              <Box
                sx={{
                  height: { xs: '282.85px', md: '442px' },
                  backgroundImage: 'url(/images/videogirl.png)',
                  backgroundBlendMode: 'overlay',
                  backgroundSize: '100%',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  borderRadius: '12px',
                }}>
                <Box
                  sx={{
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <IconButton onClick={handleVideoClick}>
                    <PlayButton />
                  </IconButton>
                </Box>
              </Box>
            ) : (
              <Box sx={{ height: { xs: '282.85px', md: '442px' } }}>
                <iframe
                  title="YouTube video player"
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/x0v53kt1lSE?si=bsc8zteQZJdxbS87"
                  allowFullScreen
                  style={{
                    display: showCover ? 'none' : 'block',
                    border: 'none',
                    borderRadius: '12px',
                  }}></iframe>
              </Box>
            )}
          </Box>
        </Box>
      </Box>

      <Box
        component="section"
        id="access-section"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          pt: { xs: 6, md: 15.5 },
          pb: { xs: 2, md: 15.5 },
          gap: { xs: '30px', sm: '64px' },
          backgroundColor: 'rgba(246, 247, 247, 1)',
        }}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
            px: { xs: 4, sm: 8.5, md: 5.5, lg: 7.2, xl: 12.5 },
            gap: 8,
          }}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'center',
              alignItems: 'center',
              gap: '32px',
              borderRadius: '16px',
              background: 'rgba(246, 247, 247, 1)',
              maxWidth: 1216,
            }}>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '24px',
                borderRight: {
                  xs: 'none',
                  sm: `1px solid rgba(134, 139, 147, 0.5)`,
                },
                borderBottom: {
                  xs: `1px solid rgba(134, 139, 147, 0.5)`,
                  sm: 'none',
                },
                p: { xs: '24px 0', sm: '0 24px' },
              }}>
              <Typography
                variant="h6"
                sx={{
                  width: '100%',
                  maxWidth: { xs: '100%', sm: 570, md: 672 },
                  font: `normal normal 700 normal 27px/28px ${Fonts.secondary}`,
                  color: 'rgba(1, 27, 35, 1)',
                  m: 0,
                  p: 0,
                  letterSpacing: '0em',
                  textAlign: 'center',
                }}>
                10th Dec, 2024
              </Typography>
              <Box
                component="span"
                sx={{
                  font: `normal normal 500 normal 20px/24px ${Fonts.primary}`,
                  color: Colors.primary,
                  m: 0,
                  p: 0,
                  textAlign: 'left',
                }}>
                Next Cohort Starts
              </Box>
            </Box>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '24px',
                borderRight: {
                  xs: 'none',
                  sm: `1px solid rgba(134, 139, 147, 0.5)`,
                },
                borderBottom: {
                  xs: `1px solid rgba(134, 139, 147, 0.5)`,
                  sm: 'none',
                },
                p: { xs: '24px 0', sm: '0 24px' },
              }}>
              <Typography
                variant="h6"
                sx={{
                  width: '100%',
                  maxWidth: { xs: '100%', sm: 570, md: 672 },
                  font: `normal normal 700 normal 27px/28px ${Fonts.secondary}`,
                  color: 'rgba(1, 27, 35, 1)',
                  m: 0,
                  p: 0,
                  letterSpacing: '0em',
                  textAlign: 'center',
                }}>
                10th Dec, 2024
              </Typography>
              <Box
                component="span"
                sx={{
                  font: `normal normal 500 normal 20px/24px ${Fonts.primary}`,
                  color: Colors.primary,
                  m: 0,
                  p: 0,
                  textAlign: 'center',
                }}>
                Program Duration
              </Box>
            </Box>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '24px',
                p: { xs: '24px 0', sm: '0 24px' },
              }}>
              <Typography
                variant="h6"
                sx={{
                  width: '100%',
                  maxWidth: { xs: '100%', sm: 570, md: 672 },
                  font: `normal normal 700 normal 27px/28px ${Fonts.secondary}`,
                  color: 'rgba(1, 27, 35, 1)',
                  m: 0,
                  p: 0,
                  letterSpacing: '0em',
                  textAlign: 'center',
                }}>
                10th Dec, 2024
              </Typography>
              <Box
                component="span"
                sx={{
                  font: `normal normal 500 normal 20px/24px ${Fonts.primary}`,
                  color: Colors.primary,
                  m: 0,
                  p: 0,
                  textAlign: 'center',
                }}>
                Location
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        component="section"
        id="course-section"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          pt: { xs: 8, md: 12.5 },
          pb: { xs: 8, md: 12.5 },
          backgroundColor: Colors.light,
        }}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            px: { xs: '1rem', md: 5.5, lg: '5rem', xl: 12.5 },
            gap: 8,
          }}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: '20px', sm: '48px' },
            }}>
            <Typography
              variant="h2"
              sx={{
                maxWidth: 768,
                font: {
                  xs: `normal normal 600 normal 28.5px/36px ${Fonts.Demi}`,
                  md: `normal normal 600 normal 36px/44px ${Fonts.Demi}`,
                },
                color: Colors.dark,
                m: 0,
                p: 0,
                letterSpacing: '-0.02em',
                textAlign: 'left',
              }}>
              Course Overview
            </Typography>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: '48px', md: '64px', xl: '250px' },
              }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '48px',
                }}>
                <Typography
                  variant="p"
                  sx={{
                    width: { xs: '100%', md: 800, xl: 780 },
                    font: {
                      xs: `normal normal 400 normal 18px/30px ${Fonts.inter}`,
                      md: `normal normal 400 normal 20px/30px ${Fonts.inter}`,
                    },
                    color: Colors.grey,
                    textAlign: 'left',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 15,
                    WebkitBoxOrient: 'vertical',
                  }}>
                  Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Praesent auctor purus luctus
                  enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                  ex. Suspendisse ac rhoncus nisl, eu tempor urna.
                  <Box component="span" sx={{ display: 'block', mt: 2 }} />
                  Curabitur vel bibendum lorem. Morbi convallis convallis diam
                  sit amet lacinia. Aliquam in Read more Curabitur tempor quis
                  eros tempus lacinia. Nam bibendum pellentesque quam a
                  convallis. Sed ut vulputate nisi. Integer in felis sed leo
                  vestibulum venenatis. Suspendisse quis arcu sem. Aenean
                  feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna.
                  Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
                  Mauris sit amet magna non ligula vestibulum eleifend. Nulla
                  varius volutpat turpis sed lacinia. Nam eget mi in purus
                  lobortis eleifend. Sed nec ante dictum sem condimentum
                  ullamcorper quis venenatis nisi. Proin vitae facilisis nisi,
                  ac posuere leo.
                </Typography>
                <Box
                  //   onClick={() => router.push('/signup')}
                  sx={{
                    width: { xs: '100%', sm: 240 },
                    padding: '12px 20px 12px 20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    font: `normal normal 500 normal 16px/19.2px ${Fonts.primary}`,
                    cursor: 'pointer',
                    color: '#E6F4ED',
                    borderRadius: '46px',
                    background: Colors.primary,
                    '&:hover': {
                      background: Colors.primary,
                    },
                  }}>
                  Download Syllabus
                  <ArrowUp />
                </Box>
              </Box>
              <Box
                sx={{
                  width: { xs: '100%', sm: 436, md: 550, xl: 456 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                }}>
                <Card
                  sx={{
                    width: '100%',
                    maxWidth: 500,
                    border: `1px solid #EAECF0`,
                    borderRadius: '16px',
                    background: 'linear-gradient(0deg, #FFFFFF, #FFFFFF)',
                    boxShadow: '0px 12px 16px -4px #10182814',
                  }}>
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '32px',
                      padding: { xs: '25.7px', lg: '32px' },
                      border: '0px 0px 1px 0px',
                    }}>
                    <Typography
                      sx={{
                        font: `normal normal 700 normal 20px/28px ${Fonts.primary}`,
                        color: Colors.dark,
                        letterSpacing: '0em',
                        textAlign: 'left',
                      }}>
                      Programme Summary
                    </Typography>
                    <Box
                      sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                      }}>
                      <CardHeader
                        avatar={<CertificationIcon />}
                        title={
                          <Box
                            sx={{
                              font: `normal normal 500 normal 14px/24px ${Fonts.primary}`,
                              color: '#9BA1A3',
                              letterSpacing: '0em',
                              textAlign: 'left',
                            }}>
                            Certification
                          </Box>
                        }
                        subheader={
                          <Box
                            sx={{
                              font: {
                                xs: `normal normal 500 normal 12px/18px ${Fonts.primary}`,
                                sm: `normal normal 500 normal 18px/26px ${Fonts.primary}`,
                              },
                              color: Colors.dark,
                              letterSpacing: '0em',
                              textAlign: 'left',
                            }}>
                            Diploma in product design
                          </Box>
                        }
                        sx={{ gap: 0, m: 0, p: 0 }}
                      />
                      <CardHeader
                        avatar={<LearningModeIcon />}
                        title={
                          <Box
                            sx={{
                              font: `normal normal 500 normal 14px/24px ${Fonts.primary}`,
                              color: '#9BA1A3',
                              letterSpacing: '0em',
                              textAlign: 'left',
                            }}>
                            Learning mode
                          </Box>
                        }
                        subheader={
                          <Box
                            sx={{
                              font: {
                                xs: `normal normal 500 normal 12px/18px ${Fonts.primary}`,
                                sm: `normal normal 500 normal 18px/26px ${Fonts.primary}`,
                              },
                              color: Colors.dark,
                              letterSpacing: '0em',
                              textAlign: 'left',
                            }}>
                            Online
                          </Box>
                        }
                        sx={{ gap: 0, m: 0, p: 0 }}
                      />
                      <CardHeader
                        avatar={<ApplicationFeeIcon />}
                        title={
                          <Box
                            sx={{
                              font: `normal normal 500 normal 14px/24px ${Fonts.primary}`,
                              color: '#9BA1A3',
                              letterSpacing: '0em',
                              textAlign: 'left',
                            }}>
                            Application fee
                          </Box>
                        }
                        subheader={
                          <Box
                            sx={{
                              font: {
                                xs: `normal normal 500 normal 12px/18px ${Fonts.primary}`,
                                sm: `normal normal 500 normal 18px/26px ${Fonts.primary}`,
                              },
                              color: Colors.dark,
                              letterSpacing: '0em',
                              textAlign: 'left',
                            }}>
                            5,000 Naira
                          </Box>
                        }
                        sx={{ gap: 0, m: 0, p: 0 }}
                      />
                      <CardHeader
                        avatar={<Accreditation />}
                        title={
                          <Box
                            sx={{
                              font: `normal normal 500 normal 14px/24px ${Fonts.primary}`,
                              color: '#9BA1A3',
                              letterSpacing: '0em',
                              textAlign: 'left',
                            }}>
                            Accreditation
                          </Box>
                        }
                        subheader={
                          <Box
                            sx={{
                              font: {
                                xs: `normal normal 500 normal 12px/18px ${Fonts.primary}`,
                                sm: `normal normal 500 normal 18px/26px ${Fonts.primary}`,
                              },
                              color: Colors.dark,
                              letterSpacing: '0em',
                              textAlign: 'left',
                            }}>
                            Ahmadu Bello Universit
                          </Box>
                        }
                        sx={{ gap: 0, m: 0, p: 0 }}
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      background: 'linear-gradient(0deg, #F6F7F6, #F6F7F6)',
                      boxShadow: '0px 4px 6px -2px #10182808',
                      padding: '18.88px 18.88px 25.17px 18.88px',
                      gap: '18.88px',
                    }}>
                    <Box
                      onClick={() => router.push(goToPortal + '/program')}
                      sx={{
                        padding: '12.59px 15.73px 12.59px 15.73px',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        font: `normal normal 500 normal 12.59px/[15.1px] ${Fonts.primary}`,
                        cursor: 'pointer',
                        color: 'rgba(230, 244, 237, 1)',
                        borderRadius: '35.4px',
                        gap: '6.29px',
                        background: Colors.primary,
                        textTransform: 'none',
                        '&:hover': {
                          background: Colors.primary,
                        },
                      }}>
                      Start your Application
                    </Box>
                  </Box>
                </Card>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ px: { xs: '1rem', sm: '1rem', lg: '5rem' } }}>
        <Divider
          sx={{
            borderColor: '#EAECF0',
          }}
        />
      </Box>
      <Box
        component="section"
        id="academy-section"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          py: { xs: '65px', md: '97px' },
          backgroundColor: Colors.light,
        }}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: { xs: 4, sm: 8 },
          }}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: '40px', sm: '32px' },
              px: { xs: '1rem', sm: 8.5, md: '5rem' },
            }}>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}>
              <Typography
                variant="h1"
                sx={{
                  font: {
                    xs: `normal normal 600 normal 30px/36px ${Fonts.Demi}`,
                    md: `normal normal 600 normal 36px/44px ${Fonts.Demi}`,
                  },
                  color: Colors.dark,
                  m: 0,
                  p: 0,
                  letterSpacing: '-0.02em',
                }}>
                Data Analysis Certification Details
              </Typography>
              <Box
                component="span"
                sx={{
                  maxWidth: 840,
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                <Typography
                  variant="span"
                  sx={{
                    font: {
                      xs: `normal normal 500 normal 18px/28px ${Fonts.primary}`,
                      sm: `normal normal 500 normal 20px/30px ${Fonts.primary}`,
                    },
                    color: Colors.grey,
                  }}>
                  Enroll in our program for in-depth training on AWS, AZ-104,
                  AZ-305, and DevOps on AWS. Master cloud platforms,
                  architecture, infrastructure design, administration, and
                  automation. Gain industry-relevant practical skills, and
                  advance your cloud computing and DevOps career.
                </Typography>
              </Box>
              <Typography
                variant="h4"
                sx={{
                  font: `normal normal 700 normal 22px/27.5px ${Fonts.primary}`,
                  color: Colors.dark,
                  m: 0,
                  p: 0,
                  letterSpacing: '-0.03px',
                }}>
                Learning Path
              </Typography>
            </Box>
            {/* <DataAnalysis /> */}
            <DataAnalysis />
          </Box>
        </Box>
      </Box>
      <Box sx={{ px: { xs: 4, sm: 3, lg: 12.5, xl: 16 } }}>
        <Divider
          sx={{
            borderColor: '#EAECF0',
          }}
        />
      </Box>
      <Box
        component="section"
        id="feature-section"
        sx={{
          width: '100%',
          display: 'flex',

          flexDirection: 'column',
          pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 12 },
          backgroundColor: Colors.light,
        }}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            px: { xs: '1rem', sm: '1rem', md: '5rem' },
            gap: 8,
          }}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: '40px', sm: '80px' },
            }}>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}>
              <Typography
                variant="h2"
                sx={{
                  maxWidth: 768,
                  font: {
                    xs: `normal normal 600 normal 28.5px/36px ${Fonts.Demi}`,
                    md: `normal normal 600 normal 36px/44px ${Fonts.Demi}`,
                  },
                  color: Colors.dark,
                  m: 0,
                  p: 0,
                  letterSpacing: '-0.02em',
                  textAlign: 'left',
                }}>
                Key Features
              </Typography>
              <KeyFeaturesCard />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ px: { xs: 4, sm: 3, lg: 12.5, xl: 16 } }}>
        <Divider
          sx={{
            borderColor: '#EAECF0',
          }}
        />
      </Box>
      <Box
        component="section"
        id="certificate-section"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          py: { xs: 2, md: 12.5 },
          backgroundColor: '#F6F7F7',
          gap: { xs: 0, sm: 12 },
        }}>
        <Box
          sx={{
            width: '100%',
            height: { xs: 850, sm: 560 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            px: { xs: '1rem', sm: '1rem', md: '5rem' },
            gap: { xs: 4, sm: 8 },
          }}>
          <Box
            sx={{
              width: { xs: '100%', md: '55%' },
              pt: { xs: 6, md: 12.5 },
              display: 'flex',
              justifyContent: 'flex-start',
            }}>
            <Card
              sx={{
                boxShadow: 'none',
                width: '100%',
                maxWidth: { xs: '100%', sm: '90%' },
                display: 'flex',
                flexDirection: 'column',
                gap: '32px',
                background: 'transparent',
              }}>
              <Box sx={{ width: '100%' }}>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  sx={{
                    font: `normal normal 600 normal 30px/36px ${Fonts.Demi}`,
                    color: Colors.dark,
                    letterSpacing: '-0.02em',
                  }}>
                  Earn a certificate in Data Analysis
                </Typography>
                <Box
                  component="span"
                  sx={{
                    maxWidth: 840,
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                  <Typography
                    variant="span"
                    sx={{
                      font: {
                        xs: `normal normal 500 normal 18px/28px ${Fonts.primary}`,
                        sm: `normal normal 500 normal 20px/30px ${Fonts.primary}`,
                      },
                      color: Colors.grey,
                    }}>
                    Enroll in our program for in-depth training on AWS, AZ-104,
                    AZ-305, and DevOps on AWS. Master cloud platforms,
                    architecture, infrastructure design, administration, and
                    automation. Gain industry-relevant practical skills, and
                    advance your cloud computing and DevOps career.
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  width: '100%',
                  mt: 3,
                  display: 'flex',
                  justifyContent: { xs: 'center', sm: 'flex-start' },
                }}>
                <Box
                  onClick={() => router.push('/signup')}
                  sx={{
                    width: { xs: 159, sm: 159 },
                    padding: '12px 20px 12px 20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    font: `normal normal 500 normal 14px/19.2px ${Fonts.primary}`,
                    cursor: 'pointer',
                    color: 'rgba(230, 244, 237, 1)',
                    borderRadius: '46px',
                    background: Colors.primary,
                    '&:hover': {
                      background: Colors.primary,
                    },
                  }}>
                  Enroll now <ArrowUp />
                </Box>
              </Box>
            </Card>
          </Box>

          <Box
            sx={{
              width: { xs: '100%', sm: '45%' },
              height: { xs: 342, sm: '100%' },
              backgroundImage: {
                xs: 'url(/images/certificate.svg)',
                sm: 'url(/images/certificate.svg)',
              },
              backgroundSize: 'contain',
              backgroundPosition: { xs: 'top right', sm: 'top right' },
              backgroundRepeat: 'no-repeat',
            }}
          />
        </Box>
      </Box>
      <Box
        component="section"
        id="admission-section"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          py: { xs: 2, md: 12.5 },
          backgroundColor: Colors.light,
          gap: { xs: 0, sm: 12 },
        }}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            px: { xs: '1rem', sm: '1rem', md: '5rem' },
            gap: { xs: 4, sm: 8 },
          }}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
            }}>
            <Card
              sx={{
                boxShadow: 'none',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '32px',
                background: 'transparent',
              }}>
              <Box sx={{ width: '100%' }}>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  sx={{
                    font: `normal normal 600 normal 30px/36px ${Fonts.Demi}`,
                    color: Colors.dark,
                    letterSpacing: '-0.02em',
                  }}>
                  How the admission process works
                </Typography>
                <Box
                  component="span"
                  sx={{
                    maxWidth: 840,
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                  <Typography
                    variant="span"
                    sx={{
                      font: {
                        xs: `normal normal 500 normal 18px/28px ${Fonts.primary}`,
                        sm: `normal normal 500 normal 20px/30px ${Fonts.primary}`,
                      },
                      color: Colors.grey,
                    }}>
                    Vorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </Typography>
                </Box>
              </Box>
              <Box
                style={{
                  width: '100%',
                }}>
                <Box sx={{}}>
                  <AdmissionProcessCard />
                </Box>
              </Box>
            </Card>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          px: { xs: '1rem', sm: '1rem', lg: 12.5, xl: 16 },
          py: { xs: 4, md: 8 },
          pb: { xs: 6, md: 8 },
        }}>
        <Divider
          sx={{
            borderColor: '#EAECF0',
          }}
        />
      </Box>
      <Box
        component="section"
        id="billing-section"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          //   py: 5,
          backgroundColor: Colors.light,
          gap: { xs: 0, sm: 12 },
        }}>
        <Box
          sx={{
            width: '100%',
            height: { xs: 850, sm: 560 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            px: { xs: '1rem', sm: '1rem', md: '5rem' },
            gap: { xs: 4, sm: 8 },
          }}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
            }}>
            <Card
              sx={{
                boxShadow: 'none',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '32px',
                background: 'transparent',
              }}>
              <Box sx={{ width: '100%' }}>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  sx={{
                    font: `normal normal 600 normal 30px/36px ${Fonts.Demi}`,
                    color: Colors.dark,
                    letterSpacing: '-0.02em',
                  }}>
                  Qorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
                <Box
                  component="span"
                  sx={{
                    maxWidth: 840,
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                  <Typography
                    variant="span"
                    sx={{
                      font: {
                        xs: `normal normal 500 normal 18px/28px ${Fonts.primary}`,
                        sm: `normal normal 500 normal 20px/30px ${Fonts.primary}`,
                      },
                      color: Colors.grey,
                    }}>
                    Vorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </Typography>
                </Box>
              </Box>
              <Box style={{}}>
                <BillingProcessCard />
              </Box>
            </Card>
          </Box>
        </Box>
      </Box>
      <Box sx={{ px: { xs: 4, sm: 3, lg: 12.5, xl: 16 } }}>
        <Divider
          sx={{
            borderColor: '#EAECF0',
          }}
        />
      </Box>

      <Box
        component="section"
        id="admission-section"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          py: { xs: '65px', md: '96px' },
          backgroundColor: Colors.light,
          gap: { xs: 0, sm: 12 },
        }}>
        <Box
          sx={{
            width: '100%',
            // height: { xs: 850, sm: 560 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            px: { xs: '1rem', sm: '1rem', md: '5rem' },
            pb: 6,
            gap: { xs: 4, sm: 8 },
          }}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
            }}>
            <Card
              sx={{
                boxShadow: 'none',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '32px',
                background: 'transparent',
              }}>
              <Box sx={{ width: '100%' }}>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  sx={{
                    font: `normal normal 600 normal 30px/36px ${Fonts.Demi}`,
                    color: Colors.dark,
                    letterSpacing: '-0.02em',
                  }}>
                  Requirements
                </Typography>
                <Box
                  component="span"
                  sx={{
                    maxWidth: 840,
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                  <Typography
                    variant="span"
                    sx={{
                      font: {
                        xs: `normal normal 500 normal 18px/28px ${Fonts.primary}`,
                        sm: `normal normal 500 normal 20px/30px ${Fonts.primary}`,
                      },
                      color: Colors.grey,
                    }}>
                    The result must include a minimum of five credits in the
                    following subjects in not more than two sittings:
                  </Typography>
                </Box>
              </Box>
              <Card
                sx={{
                  boxShadow: 'none',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '32px',
                  background: 'transparent',
                }}>
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}>
                  <Box sx={{ width: '100%', display: 'flex', gap: '12px' }}>
                    <Box>
                      <CheckCircled />
                    </Box>{' '}
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{
                        font: `normal normal 400 normal 18px/28px ${Fonts.inter}`,
                        color: '#475467',
                        letterSpacing: '0em',
                        textAlign: 'left',
                      }}>
                      English language
                    </Typography>
                  </Box>
                  <Box sx={{ width: '100%', display: 'flex', gap: '12px' }}>
                    <Box>
                      <CheckCircled />
                    </Box>{' '}
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{
                        font: `normal normal 400 normal 18px/28px ${Fonts.inter}`,
                        color: '#475467',
                        letterSpacing: '0em',
                        textAlign: 'left',
                      }}>
                      Mathematics
                    </Typography>
                  </Box>
                  <Box sx={{ width: '100%', display: 'flex', gap: '12px' }}>
                    <Box>
                      <CheckCircled />
                    </Box>{' '}
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{
                        font: `normal normal 400 normal 18px/28px ${Fonts.inter}`,
                        color: '#475467',
                        letterSpacing: '0em',
                        textAlign: 'left',
                      }}>
                      Economics
                    </Typography>
                  </Box>
                  <Box sx={{ width: '100%', display: 'flex', gap: '12px' }}>
                    <Box>
                      <CheckCircled />
                    </Box>{' '}
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{
                        font: `normal normal 400 normal 18px/28px ${Fonts.inter}`,
                        color: '#475467',
                        letterSpacing: '0em',
                        textAlign: 'left',
                      }}>
                      Two other social science-related subjects
                    </Typography>
                  </Box>
                </Box>
                <Box
                  onClick={() => router.push(goToPortal + '/signup')}
                  sx={{
                    width: { xs: '100%', sm: 180 },
                    padding: '12px 20px 12px 20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    font: `normal normal 500 normal 14px/[19.2px] ${Fonts.primary}`,
                    cursor: 'pointer',
                    color: 'rgba(230, 244, 237, 1)',
                    borderRadius: '46px',

                    background: Colors.primary,
                    '&:hover': {
                      background: Colors.primary,
                    },
                  }}>
                  Enroll Now <ArrowUp />
                </Box>
              </Card>
            </Card>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: { xs: 850, sm: 456 },
          padding: '96px 0 96px 0',
          backgroundImage: {
            xs: "url('/images/graduate-sm.svg')",
            sm: "url('/images/graduate.svg')",
          },
          backgroundSize: { xs: 'cover', sm: 'cover' },
          backgroundRepeat: 'no-repeat',
          gap: { xs: '48px', sm: '64px' },
        }}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: '8px', sm: '16px' },
            px: { xs: 4, sm: 8.5, md: 5.5, lg: 7.2, xl: 12.5 },
          }}>
          <Typography
            variant="h6"
            sx={{
              font: `normal normal 600 normal 36px/44px ${Fonts.primary}`,
              color: Colors.light,
              mt: -3,
              p: 0,
              letterSpacing: '-0.02em',
              textAlign: { xs: 'center', sm: 'left' },
            }}>
            Eduvacity
          </Typography>
          <Typography
            variant="span"
            sx={{
              maxWidth: 665,
              font: {
                xs: `normal normal 400 normal 14px/20px ${Fonts.primary}`,
                md: `normal normal 400 normal 16px/24px ${Fonts.primary}`,
              },
              color: '#87A0A8',
              textAlign: { xs: 'center', sm: 'left' },
            }}>
            Engage in hands-on learning through cutting-edge simulations
            designed to replicate industry challenges. Sharpen your skills and
            apply theoretical knowledge in a practical, risk-free environment.
          </Typography>
          <Box
            sx={{
              width: '100%',
              mt: 3,
              display: 'flex',
              justifyContent: { xs: 'center', sm: 'flex-start' },
            }}>
            <Box
              onClick={() => router.push(goToPortal)}
              sx={{
                width: { xs: 159, sm: 159 },
                padding: '12px 20px 12px 20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                font: `normal normal 500 normal 14px/19.2px ${Fonts.primary}`,
                cursor: 'pointer',
                color: 'rgba(230, 244, 237, 1)',
                borderRadius: '46px',
                background: Colors.primary,
                '&:hover': {
                  background: Colors.primary,
                },
              }}>
              Get started <ArrowUp />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

CloudComputingPage.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>;
};
