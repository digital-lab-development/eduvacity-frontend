import {
  Box,
  CssBaseline,
  Grid,
  Hidden,
  Input,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ArrowUp, CheckCircled } from '../src/components/svg';
import { Colors } from '../src/components/themes/colors';
import { Fonts } from '../src/components/themes/fonts';
import { goToPortal } from '../src/utils';
import { VISION_AND_MISSION } from '../src/utils/contants';

import HomePageLayout from '../src/views/home/layout';

const staffsImage = [
  '/images/staff1.png',
  '/images/staff2.png',
  '/images/staff3.png',
  '/images/staff4.png',
];

const goals = [
  {
    text: 'Using the internet for distance learning: 100% online learning, Bringing our programs to places that need them most',
  },
  { text: 'Keeping costs low' },
  { text: 'Providing many ways to get financial help' },
  { text: 'Education focused on workplace skills' },
  { text: 'Emphasis on critical thinking and problem-solving' },
  { text: 'Global community using technology for support' },
  { text: 'Flexible, supportive, and affordable learning opportunities' },
];

const partners = [
  {
    title: 'Corporate partners',
    text: 'Eduvacity collaborates with industry leaders to improve our online degrees. These companies offer internships and mentoring to give students real-world experience and boost their careers.',
  },

  {
    title: 'Academic partners',
    text: 'Eduvacity collaborates with renowned global universities to offer our students exceptional opportunities. These partnerships enrich our online degrees with high-quality educational programs and research.',
  },
  {
    title: 'Charitable partners',
    text: 'Eduvacity collaborates with leading foundations to advance our mission of delivering higher education online, anytime, anywhere. These partnerships provide students with financial support to complete their degrees and expand access to our programs.',
  },
];

const experience = [
  { text: 'Gain practical skills through real-world projects' },
  { text: 'Start your program anytime, no waiting' },
  { text: 'Get 24/7 support from faculty, advisors, and coaches' },
  { text: 'Earn an accredited degree recognized by' },
  { text: 'Access learning resources for lifelong learning at no extra cost' },
  {
    text: 'Join a global community of learners, including professionals at top companies',
  },
];
const supporters = [
  {
    name: 'Assetium Capital Management Limited',
    logo: '/images/assetium-logo.png',
  },
  // { name: 'Ahmadu Bello University', logo: '/images/abu-logo.png' },
];

const stat = [
  { percent: '85', details: "of future jobs haven't been created yet" },
  {
    percent: '70',
    details: 'of professionals work from home at least one day a week.',
  },
  {
    percent: '74',
    details: ' of HR managers invest more in training new grads than before',
  },
];

export default function AboutUs() {
  const router = useRouter();
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
          pt: { xs: 4, md: 10 },
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
              gap: { xs: '40px', sm: '80px', md: '80px' },
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
                  pb: '50px',
                }}
              >
                {VISION_AND_MISSION.map((item, i) => (
                  <Box
                    key={`about_${i}`}
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
                        pl: { xs: 4, sm: 8 },
                        py: { xs: 3, sm: 6 },
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
                <Grid
                  container
                  // spacing={{ sx: 0.75, md: 1, lg: 1 }}
                  gap={{ sx: 0.5, md: 1, lg: 1 }}
                  justifyContent="space-between"
                >
                  {staffsImage.map((item, ind) => {
                    return (
                      <Grid
                        key={`community_${ind}`}
                        item
                        sx={{
                          position: 'relative',
                          width: {
                            xs: 'calc(25% - 4px)',
                            md: 'calc(25% - 8px)',
                            lg: 'calc(25% - 16px)',
                          },
                          paddingBottom: { xs: '35%', sm: '30%', md: '25%' },
                        }}
                      >
                        <Box
                          component="img"
                          src={item}
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: '50% 20%',
                          }}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Focus */}
      <Box
        component="section"
        id="focus"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: Colors.secondary,
          pt: { xs: 4, md: 10 },
          pb: { xs: 4, md: 6.5 },
          px: { xs: '1rem', sm: '1rem', md: 5.5, lg: 7.2, xl: 12.5 },
          py: { xs: 4, sm: 3, xl: 4 },
        }}
      >
        <Grid
          container
          sx={{
            width: '100%',
            display: { xs: 'flex', sm: 'grid' },
            flexDirection: 'column',
            gap: 4,
            gridTemplateColumns: '1fr 1.5fr',
            gridTemplateRows: '1fr 1.5fr',
            gridTemplateAreas: `
              'one two'
              'three two'
            `,
            '& > div': {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            },
          }}
        >
          <Grid item sx={{ gridArea: 'one' }}>
            <Typography
              variant="h4"
              sx={{
                width: '100%',
                maxWidth: { xs: '100%', sm: '98%', md: 672 },
                font: {
                  xs: `normal normal 400 normal 28px/38px ${Fonts.inter}`,
                  md: `normal normal 400 normal 40px/50px ${Fonts.inter}`,
                },
                color: Colors.light,
                m: 0,
                p: 0,
                letterSpacing: '-0.02em',
                textAlign: 'left',
              }}
            >
              We are Future&#8209;Focused
            </Typography>
          </Grid>
          <Grid
            item
            sx={{ gridArea: 'two', display: 'flex', flexDirection: 'column' }}
          >
            <Typography
              variant="p"
              sx={{
                width: '100%',
                maxWidth: { xs: '100%', sm: '98%', md: 672 },
                font: {
                  xs: `normal normal 500 normal 16px/28px ${Fonts.primary}`,
                  md: `normal normal 500 normal 20px/30px ${Fonts.primary}`,
                },
                color: Colors.textColor,
                m: 0,
                p: 0,
                letterSpacing: '0em',
                textAlign: 'left',
              }}
            >
              We are empowering 1,000,000,000 people in Africa with the tools
              and opportunities to become world-class. Eduvacity is where
              individuals from around Africa acquire the skills they need
              precisely when they need them most. We&apos;re here to propel
              people forward in their careers and personal journeys.
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              gridArea: 'three',
            }}
          >
            <Box
              onClick={() => router.push(`${goToPortal}/signup`)}
              sx={{
                padding: '12px 20px 12px 20px',
                // width: 'auto',
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
                whiteSpace: 'nowrap',
              }}
            >
              Join The Program <ArrowUp />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Goals Section */}
      <Box
        component="section"
        id="goals"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: Colors.light,
          gap: 2,
          pt: { xs: 4, md: 10 },
          pb: { xs: 4, md: 6.5 },
          px: { xs: '1rem', sm: '1rem', md: 5.5, lg: 7.2, xl: 12.5 },
          py: { xs: 4, sm: 3, xl: 4 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            w: '50%',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              width: '100%',
              font: {
                xs: `normal normal 400 normal 28px/38px ${Fonts.inter}`,
                md: `normal normal 400 normal 40px/50px ${Fonts.inter}`,
              },
              color: Colors.dark,
              letterSpacing: '-0.02em',
              textAlign: 'left',
            }}
          >
            Our Goal
          </Typography>
          <Typography
            variant="p"
            sx={{
              width: '100%',
              maxWidth: { sm: 570, md: 570 },
              font: {
                xs: `normal normal 500 normal 18px/28px ${Fonts.primary}`,
                md: `normal normal 500 normal 20px/30px ${Fonts.primary}`,
              },
              color: Colors.textColor,
            }}
          >
            We offer higher education to everyone, no matter where they come
            from, by:
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: 'flex', md: 'grid' },
            flexDirection: 'column',
            gridTemplateColumns: { md: '1.2fr 1.0fr', lg: '1.2fr 1fr' },
            w: '100%',
            gap: { xs: 4, md: 4, lg: 8 },
            pr: { xs: 0, sm: 8, md: 0 },
          }}
        >
          <Box
            sx={{
              gap: 2,
              boxSizing: 'border-box',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              pt: { lg: 4 },
              boxSizing: 'border-box',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                w: '100%',
                overflow: 'hidden',
                gap: 2,
              }}
            >
              <Box
                component="img"
                src="/images/goal1.png"
                alt="just"
                sx={{
                  w: '100%',
                }}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                w: '100%',
                overflow: 'hidden',
                gap: 2,
              }}
            >
              <Box
                component="img"
                src="/images/goal3.png"
                alt="just"
                sx={{
                  maxWidth: '90%',
                }}
              />
              <Box component="img" src="/images/goal2.png" alt="just" />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              w: '50%',
              gap: 4,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: { md: 0.5, lg: 2 },
              }}
            >
              {goals.map(({ text }, ind) => (
                <Box
                  key={`goal${ind}`}
                  sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}
                >
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
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Box
                onClick={() => router.push(`${goToPortal}/signup`)}
                sx={{
                  padding: '12px 20px 12px 20px',
                  // width: 'auto',
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
                  whiteSpace: 'nowrap',
                }}
              >
                Join Program <ArrowUp />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Partners */}
      <Box
        component="section"
        id="partners"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: Colors.primaryLight,
          gap: 4,
          px: { xs: '1rem', sm: '1rem', md: 5.5, lg: 7.2, xl: 12.5 },
          py: { xs: 4, sm: 3, xl: 4 },
          pt: { xs: 4, md: 10 },
          pb: { xs: 4, md: 6.5 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              width: '100%',
              font: {
                xs: `normal normal 400 normal 28px/38px ${Fonts.inter}`,
                md: `normal normal 400 normal 40px/50px ${Fonts.inter}`,
              },
              color: Colors.dark,
              letterSpacing: '-0.02em',
              textAlign: 'left',
            }}
          >
            Our Partners
          </Typography>
          <Typography
            variant="p"
            sx={{
              width: '100%',
              // maxWidth: { sm: 570, md: 570 },
              font: {
                xs: `normal normal 500 normal 18px/28px ${Fonts.primary}`,
                md: `normal normal 500 normal 20px/30px ${Fonts.primary}`,
              },
              color: Colors.textColor,
            }}
          >
            We partner with leading international organizations, corporations,
            and foundations to help enrich our degree programs and broaden
            student opportunities.
          </Typography>
        </Box>
        <Box>
          <Grid
            container
            sx={{
              display: { xs: 'flex', sm: 'grid' },
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: { xs: 2, md: 3, lg: 4 },
            }}
          >
            {partners.map(({ title, text }, ind) => (
              <Grid
                key={`partner${ind}`}
                item
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  p: 3,
                  borderRadius: '20px',
                  background: Colors.light,
                  gap: 2,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    width: '100%',
                    font: {
                      xs: `normal normal 500 normal 18px/28px ${Fonts.inter}`,
                      md: `normal normal 500 normal 20px/30px ${Fonts.inter}`,
                    },
                    color: Colors.dark,
                    letterSpacing: '-0.02em',
                    textAlign: 'left',
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{
                    font: `normal normal 400 normal 18px/28px ${Fonts.inter}`,
                    color: '#475467',
                    letterSpacing: '0em',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 7,
                    WebkitBoxOrient: 'vertical',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {text}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mt: 'auto' }}>
                  <Image
                    src="/images/assetium-logo.png"
                    alt="logo-assetium"
                    width={44}
                    height={44}
                  />
                  <Image
                    src="/images/assetium-logo.png"
                    alt="logo-assetium"
                    width={44}
                    height={44}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Experience */}
      <Box
        component="section"
        id="partners"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: Colors.light,
          gap: 4,
          px: { xs: '1rem', sm: '1rem', md: 5.5, lg: 7.2, xl: 12.5 },
          py: { xs: 4, sm: 3, xl: 4 },
          pt: { xs: 4, md: 10 },
          pb: { xs: 4, md: 6.5 },
        }}
      >
        <Box
          sx={{
            display: { xs: 'flex', sm: 'grid' },
            flexDirection: 'column',
            gridTemplateColumns: { xs: '1fr 1fr', md: '1.2fr 1fr' },
            gap: { xs: 2, md: 4, lg: 0 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: { xs: 2, sm: 2, lg: 5 },
              // background: 'blue',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                width: '100%',
                font: {
                  xs: `normal normal 300 normal 28px/38px ${Fonts.inter}`,
                  md: `normal normal 300 normal 40px/50px ${Fonts.inter}`,
                },
                color: Colors.dark,
                letterSpacing: '-0.02em',
                textAlign: 'left',
              }}
            >
              Your online learning experience
            </Typography>
            <Typography
              variant="p"
              sx={{
                width: '100%',
                // maxWidth: { sm: 570, md: 570 },
                font: {
                  xs: `normal normal 500 normal 18px/28px ${Fonts.primary}`,
                  md: `normal normal 500 normal 20px/30px ${Fonts.primary}`,
                },
                color: Colors.textColor,
              }}
            >
              We&apos;re here to prepare you for the future workplace, not the
              past, focusing on industries with the most growth potential. Stand
              out with Eduvacity.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: { md: 0.5, lg: 2 },
              }}
            >
              {experience.map(({ text }, ind) => (
                <Box
                  key={`goal${ind}`}
                  sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}
                >
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
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              pr: { xs: '20px', sm: '0' },
            }}
          >
            <Box
              component="img"
              src="/images/alhaja.jpeg"
              alt="Example"
              sx={{
                width: '100%',
                height: '100%',
                maxHeight: { xs: '400px', sm: '540px' },
                borderRadius: '20px',
                objectFit: 'cover',
                objectPosition: '50% 20%',
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography
            sx={{
              textAlign: 'center',
              maxWidth: { lg: '750px' },
              mx: 'auto',
              mt: '20px',
              color: '#505F79',
              fontSize: ['18px', '20px'],
              fontWeight: 'bold',
            }}
          >
            Backed by
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              mt: '32px',
            }}
          >
            {supporters.map((partner, index) => (
              <Box
                key={`partner_${index}`}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: { md: '28px', xs: '18px' },
                  fontWeight: 500,
                }}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={44}
                  height={44}
                />
                <Typography
                  sx={{
                    fontSize: { md: '28px', sm: '22px', xs: '17px' },
                  }}
                >
                  {partner.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Stat */}
      <Box
        component="section"
        id="stat"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#F6F7F7',
          gap: 4,
          px: { xs: '1rem', sm: '1rem', md: 5.5, lg: 7.2, xl: 12.5 },
          py: { xs: 4, sm: 3, xl: 4 },
          pt: { xs: 4, md: 10 },
          pb: { xs: 4, md: 6.5 },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            width: '100%',
            font: {
              xs: `normal normal 300 normal 28px/38px ${Fonts.inter}`,
              md: `normal normal 300 normal 35px/45px ${Fonts.inter}`,
            },
            color: Colors.dark,
            letterSpacing: '-0.03em',
            textAlign: 'left',
          }}
        >
          The world is changing. Shouldn&apos;t universities in Africa change
          too?
        </Typography>
        <Grid
          container
          sx={{
            display: { xs: 'flex', sm: 'grid' },
            flexDirection: 'column',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: { xs: 3, lg: 5 },
            '& > *:not(:last-child)': {
              // Apply styles to all children except the last one
              borderRight: { sm: '1px solid rgba(150, 150, 150, 0.5)' },
              borderBottom: {
                xs: '1px solid rgba(150, 150, 150, 0.3)',
                sm: 'none',
              },
            },
          }}
        >
          {stat.map(({ percent, details }, index) => (
            <Grid
              key={`stat${index}`}
              item
              sx={{
                pr: { sm: 3, lg: 5 },
                pb: { xs: 3, sm: 0 },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  width: '100%',
                  font: {
                    xs: `normal normal 300 normal 28px/38px ${Fonts.inter}`,
                    md: `normal normal 300 normal 40px/50px ${Fonts.inter}`,
                  },
                  color: Colors.dark,
                  letterSpacing: '-0.02em',
                  textAlign: 'left',
                }}
              >
                {percent} %
              </Typography>

              <Typography
                variant="p"
                sx={{
                  width: '100%',
                  // maxWidth: { sm: 570, md: 570 },
                  font: {
                    xs: `normal normal 500 normal 18px/28px ${Fonts.primary}`,
                    md: `normal normal 500 normal 20px/30px ${Fonts.primary}`,
                  },
                  color: Colors.textColor,
                }}
              >
                {details}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* newsletter */}
      <Box
        component="newsletter"
        id="stat"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#FFD993',
          gap: 4,
          px: { xs: '1rem', sm: '1rem', md: 5.5, lg: 7.2, xl: 12.5 },
          py: { xs: 4, sm: 3, xl: 4 },
          pt: { xs: 4, md: 10 },
          pb: { xs: 4, md: 6.5 },
        }}
      >
        <Grid
          container
          sx={{
            display: { xs: 'flex', md: 'grid' },
            gridTemplateColumns: '1.2fr 1fr',
            flexDirection: 'column',
            maxWidth: { xs: '100%', sm: '600px', md: '100%' },
            gap: 4,
          }}
        >
          <Grid item sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              variant="h4"
              sx={{
                width: '100%',
                font: {
                  xs: `normal normal 400 normal 28px/38px ${Fonts.inter}`,
                  md: `normal normal 400 normal 40px/50px ${Fonts.inter}`,
                },
                color: Colors.dark,
                letterSpacing: '-0.02em',
                textAlign: 'left',
              }}
            >
              Sign up for our newsletter
            </Typography>
            <Typography
              variant="p"
              sx={{
                width: '100%',
                // maxWidth: { sm: 570, md: 570 },
                font: {
                  xs: `normal normal 500 normal 18px/28px ${Fonts.primary}`,
                  md: `normal normal 500 normal 20px/30px ${Fonts.primary}`,
                },
                color: Colors.textColor,
              }}
            >
              Be the first to know about releases and industry news and
              insights.
            </Typography>
          </Grid>
          <Grid item sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: Colors.light,
                borderRadius: '9999px',
                pl: 2,
                '&:focus-within': {
                  boxShadow: '0 0 10px 5px rgba(200, 200, 200, 0.4)', // Custom focus-within shadow
                },
              }}
            >
              <input
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  outline: 'none',
                  font: `normal normal 400 normal 18px/28px ${Fonts.arial}`,
                  borderTopLeftRadius: '9999px',
                  borderBottomLeftRadius: '9999px',
                }}
              />
              <Box
                onClick={() => router.push(`${goToPortal}/signup`)}
                sx={{
                  padding: '12px 20px 12px 20px',
                  // width: 'auto',
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
                  whiteSpace: 'nowrap',
                }}
              >
                Subscribe <ArrowUp />
              </Box>
            </Box>
            <Typography
              variant="p"
              sx={{
                width: '100%',
                // maxWidth: { sm: 570, md: 570 },
                font: {
                  xs: `normal normal 500 normal 18px/28px ${Fonts.primary}`,
                  md: `normal normal 500 normal 20px/30px ${Fonts.primary}`,
                },
                color: Colors.textColor,
              }}
            >
              We care about your data in our privacy policy.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

AboutUs.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>;
};
