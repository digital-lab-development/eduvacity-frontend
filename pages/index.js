import { useState } from 'react';
import {
  Avatar,
  AvatarGroup,
  Box,
  CssBaseline,
  Divider,
  Grid,
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
import JoinWaitlistDialog from '../src/components/waitlistdialog';
import {
  EDUVACITY_VALUE,
  EMPOWERMENT_DESC,
  EMPOWERMENT_TITLE,
  HERO_TEXT,
  PROGRAM_DESC,
  PROGRAM_TITLE,
} from '../src/utils/contants';
import Image from 'next/image';
import Testimony from '../src/components/testimony';
import { goToPortal } from '../src/utils';
import Link from 'next/link';



export const partners = [
  {
    name: 'Assetium Capital Management Limited',
    logo: '/images/assetium-logo.png',
  },
];

const communityImages = [
  '/images/community3.jpg',
  '/images/community5.jpg',
  ['/images/community1.png', '/images/community4.png'], // max 2 images
  '/images/community2.png',
]; // max 4 items (images or an array of 2 images)

export default function HomePage() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [showCover, setShowCover] = useState(true);

 


  const handleVideoClick = () => {
    setShowCover(!showCover);
  };

  // const handleClickOpen = () => setOpen(true);
  const handleClickOpen = () => router.push(`${goToPortal}/signup`);
  const handleClose = () => setOpen(false);

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
            px: { xs: '1rem', sm: '1rem', lg: 12.5, xl: 16 },
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
                Achieve top 1% status{' '}
                <Typography variant="span" sx={{ color: Colors.primary }}>
                  with programs that ensures
                </Typography>{' '}
                employability.
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
                      xs: `normal normal 500 normal 18px/28px ${Fonts.secondary}`,
                      sm: `normal normal 500 normal 20px/30px ${Fonts.secondary}`,
                    },
                    color: Colors.offWhite,
                  }}>
                  {HERO_TEXT.secondary}
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
                    onClick={() => router.push(`${goToPortal}/signup`)}
                    sx={{
                      padding: '12px 20px 12px 20px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer',
                      color: 'rgba(230, 244, 237, 1)',
                      borderRadius: '46px',
                      font: `normal normal 500 normal 14px/16.8px ${Fonts.secondary}`,
                      background: Colors.primary,
                      '&:hover': {
                        background: Colors.primary,
                      },
                    }}>
                    See All Courses
                    <ArrowUp />
                  </Box>
                  <Box
                    component="a"
                    target="_blank"
                    href="https://wa.link/3xhcsh"
                    // onClick={() => router.push(`https://wa.link/3xhcsh`)}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      font: `normal normal 500 normal 14px/16.8px ${Fonts.secondary}`,
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
                boxSizing: 'border-box',
                width: '100%',
                height: {
                  xs: 280,
                  sm: 400,
                  md: 570,
                },
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                background: 'url(/images/hero-pix.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}>
            </Box>
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
          backgroundColor: "#011B23",

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
                // gap: '16px',
                // px: { xs: '1rem', sm: 8.5, md: 5.5, lg: 7.2, lg: 15.5 },
                px: { xs: '1rem', sm: '1rem', lg: 12.5, xl: 16 },
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
                    xs: `normal normal 400 normal 30px/36px ${Fonts.Demi}`,
                    md: `normal normal 600 normal 36px/44px ${Fonts.Demi}`,
                  },
                  color: Colors.primary,
                  m: 0,
                  p: 0,
                  letterSpacing: '-2%',
                }}>
                {PROGRAM_TITLE}
              </Typography>
            </Box>
            <AcademicTabs handleClick={handleClickOpen} />
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
            // px: { xs: '1rem', sm: '1rem', md: 5.5, lg: 7.2, lg: 15.5 },
            px: { xs: '1rem', sm: '1rem', lg: 12.5, xl: 16 },
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
                    xs: `normal normal 400 normal 30px/36px ${Fonts.primary}`,
                    md: `normal normal 600 normal 36px/44px ${Fonts.primary}`,
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
            // px: { xs: '1rem', sm: '1rem', md: 5.5, lg: 7.2, lg: 15.5 },
            px: { xs: '1rem', sm: '1rem', lg: 12.5, xl: 16 },
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
                    xs: `normal normal 400 normal 30px/36px ${Fonts.primary}`,
                    md: `normal normal 600 normal 36px/44px ${Fonts.primary}`,
                  },
                  color: Colors.dark,
                  m: 0,
                  p: 0,
                  letterSpacing: '-2%',
                }}>
                {EMPOWERMENT_TITLE}
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
                      xs: `normal normal 400 normal 16px/28px ${Fonts.secondary}`,
                      sm: `normal normal 500 normal 20px/30px ${Fonts.secondary}`,
                    },
                    color: Colors.grey,
                  }}>
                  {EMPOWERMENT_DESC}
                </Typography>
              </Box>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                }}>
                
                <Box
                  sx={{
                    height: {
                      xs: 240,
                      sm: 516,
                      // xs: showCover ? 0 : 240,
                      // sm: showCover ? 0 : 516,
                    },
                  }}>
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: 516,
                      // paddingBottom: '56.250%',
                    }}>
                    <iframe
                      title="How to be a school teacher"
                      allow="fullscreen"
                      allowFullScreen
                      height="100%"
                      src="https://www.youtube.com/embed/la0ytnh7Gzg?si=sW7Yi9SqCjuOds4Y"
                      width="100%"
                      style={{
                        // display: showCover ? 'none' : 'block',
                        borderRadius: '24px',
                        border: 'none',
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        aspectRatio: 'video',
                      }}></iframe>
                  </div>

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
              component="section"
              id="program-section"
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                pb: { xs: 4, md: 6.5 },
              }}>
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
                    mb: 4,
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
      </Box>

      {/* PARTNERS */}
      <Box
        sx={{
          bgcolor: '#fff',
        }}>
        <Box
          sx={{
            letterSpacing: '2%',
            px: { xs: '1rem', sm: 8.5, md: 5.5, lg: 15.5 },
            py: { xs: '40px', xl: '96px' },
          }}>
          <Typography
            sx={{
              textAlign: 'center',
              maxWidth: { lg: '750px' },
              mx: 'auto',
              mt: '20px',
              color: '#505F79',
              fontSize: ['18px', '20px'],
              font: `normal normal 600 normal 36px/44px ${Fonts.primary}`,
              fontWeight: 'bold',
            }}>
            Backed by the Best
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              maxWidth: { lg: '750px' },
              mx: 'auto',
              mt: '20px',
              color: '#505F79',
              font: `normal normal 600 normal 36px/44px ${Fonts.secondary}`,
              fontSize: ['18px', '20px'],
              fontWeight: 300,
            }}>
            Our investors believe in the transformative power of education and
            are committed to making a tangible impact.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              mt: '32px',
            }}>
            {partners.map((partner, index) => (
              <Box
                key={`partner_${index}`}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: { md: '28px', xs: '18px' },
                  fontWeight: 500,
                }}>
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={44}
                  height={44}
                />
                <Typography
                  sx={{
                    fontSize: { md: '28px', sm: '22px', xs: '17px' },
                    font: `normal normal 600 normal 36px/44px ${Fonts.secondary}`,
                  }}>
                  {partner.name}
                </Typography>
              </Box>
            ))}
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
            // px: { xs: 4, sm: 8.5, md: 5.5, lg: 7.2, lg: 15.5 },
            px: { xs: '1rem', sm: '1rem', lg: 12.5, xl: 16 },
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
              textTransform: 'capitalize'
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
              textTransform: 'none',
            }}>
            {EDUVACITY_VALUE.charAt(0).toUpperCase() + EDUVACITY_VALUE.slice(1).toLowerCase()}
          </Typography>
          <Box
            sx={{
              width: '100%',
              mt: 3,
              display: 'flex',
              justifyContent: { xs: 'center', sm: 'flex-start' },
            }}>
            <Box
              onClick={() => router.push(`${goToPortal}/signup`)}
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

      {/* TESTIMONY */}

      <Testimony />

      {/* FREQUENTLY ASK QUESTION */}
      <Box
        component="section"
        id="hero-section faqs "
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          pt: { xs: 8, md: 15.5 },
          pb: { xs: 4, md: 6.5 },
          backgroundColor: Colors.light,
        }}>
        <Box
        id="faqs "
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            px: { xs: '1rem', sm: '1rem', md: 5.5, lg: 7.2, lg: 15.5 },
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
                  font: `normal normal 500 normal 16px/24px ${Fonts.secondary}`,
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
                  font: `normal normal 700 normal 20px/30px ${Fonts.secondary}`,
                  color: Colors.dark,
                  m: 0,
                  p: 0,
                  textTransform: 'capitalize',
                  alignItems: 'center',
                }}>
                Do you have any inquiries?
              </Typography>
              <Typography
                variant="span"
                sx={{
                  font: {
                    xs: `normal normal 400 normal 18px/28px ${Fonts.secondary}`,
                    sm: `normal normal 400 normal 18px/28px ${Fonts.secondary}`,
                  },
                  color: Colors.grey,
                  textAlign: 'center',
                }}>
                Feel free to get in touch with our Success Advisors for
                assistance.
              </Typography>
              <Box sx={{ width: 137 }}>
                <Box
                  onClick={() => router.push(`${goToPortal}/signup`)}
                  sx={{
                    padding: '12px 20px 12px 20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    font: `normal normal 500 normal 14px/[19.2px] ${Fonts.secondary}`,
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
      <JoinWaitlistDialog open={open} handleClose={handleClose} />
    </Box>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>;
};
