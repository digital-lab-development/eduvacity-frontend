import {
  Avatar,
  AvatarGroup,
  Box,
  CssBaseline,
  Divider,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { ArrowUp, PlayButton, WhatsApp } from '../src/components/svg';
import { Colors } from '../src/components/themes/colors';
import { Fonts } from '../src/components/themes/fonts';
import FrequentlyAskQuestions from '../src/views/home/faq';
import FeaturesCard from '../src/views/home/features';
import HomePageLayout from '../src/views/home/layout';
import ProgramsCard from '../src/views/home/programs';
import AcademicTabs from '../src/views/home/tab';

export default function HomePage() {
  const router = useRouter();
  const [showCover, setShowCover] = React.useState(true);
  const videoId = 'qqMrLuVI3d0';
  const handleVideoClick = () => {
    setShowCover(!showCover);
  };
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
        component="section"
        id="hero-section"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          pt: { xs: 8, md: 15.5 },
          pb: { xs: 8, md: 6.5 },
          backgroundImage: {
            xs: 'url(/images/hero-section-pattern-xs.svg)',
            sm: 'url(/images/hero.svg)',
          },
          backgroundRepeat: 'repeat',
          backgroundSize: 'cover',
          backgroundColor: Colors.secondary,
        }}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            px: { xs: 4, sm: 10, lg: 12.5, xl: 16 },
            gap: { xs: 4, sm: 8 },
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
                variant="h1"
                sx={{
                  maxWidth: { xs: 340, sm: 1260 },
                  font: {
                    xs: `normal normal 600 normal 32px/48px ${Fonts.primary}`,
                    md: `normal normal 600 normal 64px/77px ${Fonts.primary}`,
                  },
                  color: Colors.light,
                  m: 0,
                  p: 0,
                  letterSpacing: '-2%',
                }}>
                Giving you Access to{' '}
                <Typography variant="span" sx={{ color: Colors.primary }}>
                  Lifelong Learning From top Universities
                </Typography>{' '}
                in Nigeria.
              </Typography>
              <Box
                component="span"
                sx={{
                  maxWidth: 1050,
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
                    color: Colors.offWhite,
                  }}>
                  Choose a course that suits you from leading universities in
                  Nigeria & Africa, gaining valuable experience for today&apos;s
                  job market with certifications equivalent to on-campus studies
                </Typography>
                <Box
                  component="div"
                  sx={{
                    maxWidth: 500,
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: '24px',
                    mt: { xs: 4, md: 12 },
                  }}>
                  <Box
                    onClick={() => router.push('/signup')}
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
                    See All Courses <ArrowUp />
                  </Box>
                  <Box
                    onClick={() => router.push('https://wa.me/<number>')}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      font: `normal normal 500 normal 14px/16.8px ${Fonts.primary}`,
                      gap: '8px',
                      padding: '12px 20px 12px 20px',
                      color: Colors.primary,
                      border: `1px solid ${Colors.primary}`,
                      borderRadius: '46px',
                      cursor: 'pointer',
                      gap: '10px',
                      '&:hover': {
                        background: 'transparent',
                      },
                    }}>
                    <WhatsApp />
                    Get a one-on-one consultation
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                width: '100%',
                height: {
                  xs: 240,
                  sm: 516,
                },
                backgroundImage: {
                  xs: 'url(/images/hero-section-img-xs.svg)',
                  sm: 'url(/images/hero-pic.svg)',
                },
                backgroundSize: { xs: 'cover', sm: 'cover' },
                backgroundRepeat: 'no-repeat',
              }}
            />
          </Box>
        </Box>
      </Box>
      {/* ACADEMY PROGRAMS */}
      <Box
        component="section"
        id="academy-section"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          pt: { xs: 10, md: 15.5 },
          pb: { xs: 4, md: 6.5 },
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
            }}>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                px: { xs: 4, sm: 8.5, md: 8.5, lg: 7.2, xl: 15.5 },
              }}>
              <Typography
                variant="h4"
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                  color: Colors.primary,
                  m: 0,
                  p: 0,
                  letterSpacing: '1%',
                  textTransform: 'uppercase',
                }}>
                Academic Programs
              </Typography>
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
                  letterSpacing: '-2%',
                }}>
                Universities You Can Study From
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
                  We partner with the Universities of your choice to make
                  quality education accessible for anyone, from anywhere
                </Typography>
              </Box>
            </Box>

            <AcademicTabs />
          </Box>
        </Box>
      </Box>
      {/* FEATURES SESSION */}
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
          pt: { xs: 8, md: 15.5 },
          pb: { xs: 8, md: 6.5 },
          backgroundColor: Colors.light,
        }}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            px: { xs: 4, sm: 8.5, md: 8.5, lg: 7.2, xl: 15.5 },
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
                  letterSpacing: { xs: '-0.02em', sm: '-2%' },
                  textAlign: 'left',
                }}>
                We are transforming the accessibility of tertiary education in
                Africa.
              </Typography>
            </Box>
            <FeaturesCard />
          </Box>
        </Box>
      </Box>
      {/* PROGRAMS SESSION */}
      <Box
        component="section"
        id="program-section"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          pt: { xs: 8, md: 15.5 },
          pb: { xs: 8, md: 6.5 },
          backgroundColor: '#F6F7F7',
        }}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            px: { xs: 4, sm: 8.5, md: 8.5, lg: 7.2, xl: 15.5 },
            gap: { xs: '32px', sm: 8 },
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
                variant="h1"
                sx={{
                  font: {
                    xs: `normal normal 600 normal 28.5px/36px ${Fonts.primary}`,
                    md: `normal normal 600 normal 36px/44px ${Fonts.primary}`,
                  },
                  color: Colors.dark,
                  m: 0,
                  p: 0,
                  letterSpacing: '-2%',
                }}>
                How Eduvacity is Empowering African Youth for the Job Market
              </Typography>
              <Box
                component="span"
                sx={{
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
                  Break free from limitations! Eduvacity opens doors to
                  top-notch education from top universities around the globe.
                  Access world-class resources right from the heart of Africa,
                  bridging the gap between local talent and global
                  opportunities.
                </Typography>
              </Box>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                }}>
                {showCover && (
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      cursor: 'pointer',
                      top: '20px',
                    }}
                    onClick={handleVideoClick}>
                    <Box
                      sx={{
                        width: '100%',
                        height: { xs: 240, sm: 516 },
                        backgroundImage: {
                          xs: 'url(/images/video-guy-xs.svg)',
                          sm: 'url(/images/video-guy.svg)',
                        },
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: {
                          xs: '45px 0 0 0',
                          sm: '133px 0 0 0',
                          md: '173px 0 0 0',
                          lg: '200px 0 0 0',
                          xl: '250px 0 0 0',
                        },
                        display: 'flex',
                        justifyContent: 'center',
                      }}>
                      <PlayButton />
                    </Box>
                  </Box>
                )}
                <Box
                  sx={{
                    height: {
                      xs: showCover ? 0 : 240,
                      sm: showCover ? 0 : 516,
                    },
                  }}>
                  <iframe
                    title="How to be a school teacher"
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    allowFullScreen
                    style={{
                      display: showCover ? 'none' : 'block',
                      borderRadius: '24px',
                      position: 'relative',
                      width: '100%',
                      cursor: 'pointer',
                      top: '20px',
                    }}
                  />
                </Box>
              </div>
            </Box>
            <Box>
              <Divider
                sx={{
                  borderColor: '#EAECF0',
                  mt: { xs: showCover ? 10 : 8, sm: showCover ? 10 : 8 },
                }}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                // my: 8,
              }}>
              <Typography
                variant="h2"
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                  color: Colors.primary,
                  m: 0,
                  p: 0,
                  letterSpacing: '1%',
                  textTransform: 'uppercase',
                }}>
                Programs
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  font: {
                    xs: `normal normal 600 normal 28.5px/36px ${Fonts.primary}`,
                    md: `normal normal 600 normal 36px/44px ${Fonts.primary}`,
                  },
                  color: Colors.dark,
                  m: 0,
                  p: 0,
                  letterSpacing: '-2%',
                }}>
                Programs from leading universities.
              </Typography>
            </Box>

            <ProgramsCard />
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
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          gap: { xs: '48px', sm: '64px' },
        }}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: '8px', sm: '16px' },
            px: { xs: 4, sm: 8.5, md: 8.5, lg: 7.2, xl: 15.5 },
          }}>
          <Typography
            variant="h6"
            sx={{
              font: `normal normal 600 normal 36px/44px ${Fonts.primary}`,
              color: Colors.light,
              mt: -3,
              p: 0,
              letterSpacing: '2%',
              textAlign: { xs: 'center', sm: 'left' },
            }}>
            Eduvacity
          </Typography>
          <Typography
            variant="span"
            sx={{
              maxWidth: 665,
              font: {
                xs: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                md: `normal normal 500 normal 20px/30px ${Fonts.primary}`,
              },
              color: '#B9C8CD',
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
              Get started <ArrowUp />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* FREQUENTLY ASK QUESTION */}
      <Box
        component="section"
        id="hero-section"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          pt: { xs: 8, md: 15.5 },
          pb: { xs: 4, md: 6.5 },
          backgroundColor: Colors.light,
        }}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            px: { xs: 4, sm: 8.5, md: 8.5, lg: 7.2, xl: 15.5 },
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
                justifyContent: 'center',
                alignItems: 'center',
                gap: '16px',
              }}>
              <Typography
                variant="h2"
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                  color: Colors.primary,
                  m: 0,
                  p: 0,
                  letterSpacing: '1%',
                  textTransform: 'uppercase',
                }}>
                Faqs
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  textAlign: 'center',
                  font: {
                    xs: `normal normal 600 normal 30px/36px ${Fonts.primary}`,
                    md: `normal normal 600 normal 36px/44px ${Fonts.primary}`,
                  },
                  color: Colors.dark,
                  m: 0,
                  p: 0,
                  letterSpacing: '-2%',
                }}>
                Frequently asked questions
              </Typography>
            </Box>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '16px',
                px: 1,
              }}>
              <FrequentlyAskQuestions />
            </Box>
            <Box
              sx={{
                width: '100%',
                padding: {
                  xs: '32px 16px 32px 16px',
                  sm: '32px 32px 40px 32px',
                },
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '32px',
                background: '#F6F7F7',
              }}>
              <AvatarGroup max={4}>
                <Avatar alt="avatar 1" src="/images/Avatar1.png" />
                <Avatar
                  alt="Travis Howard"
                  src="/images/Avatar2.png"
                  sx={{
                    width: 60,
                    height: 60,
                    mt: -2,
                    zIndex: 200,
                    background: 'transparent',
                  }}
                />
                <Avatar alt="avatar 2" src="/images/Avatar3.png" />
              </AvatarGroup>
              <Typography
                variant="p"
                sx={{
                  font: `normal normal 700 normal 20px/30px ${Fonts.primary}`,
                  color: Colors.dark,
                  m: 0,
                  p: 0,
                  textTransform: 'capitalize',
                  alignItems: 'center',
                }}>
                Academic Programs
              </Typography>
              <Typography
                variant="span"
                sx={{
                  font: {
                    xs: `normal normal 500 normal 18px/28px ${Fonts.primary}`,
                    sm: `normal normal 500 normal 18px/28px ${Fonts.primary}`,
                  },
                  color: Colors.grey,
                  textAlign: 'center',
                }}>
                Can’t find the answer you’re looking for? Please chat to our
                friendly team.
              </Typography>
              <Box sx={{ width: 137 }}>
                <Box
                  onClick={() => router.push('/signup')}
                  sx={{
                    padding: '12px 20px 12px 20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    font: `normal normal 500 normal 14px/[19.2px] ${Fonts.primary}`,
                    cursor: 'pointer',
                    color: '#E6F4ED',
                    borderRadius: '46px',
                    background: Colors.primary,
                    '&:hover': {
                      background: Colors.primary,
                    },
                  }}>
                  Get in touch
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>;
};
