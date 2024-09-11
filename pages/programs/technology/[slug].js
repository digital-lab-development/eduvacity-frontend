import {
  Box,
  Card,
  CardHeader,
  CssBaseline,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {
  ABULogo,
  Accreditation,
  ApplicationFeeIcon,
  ArrowUp,
  CertificationIcon,
  ChatIcon,
  CheckCircled,
  CommandIcon,
  GhostCheckIcon,
  GraphIcon,
  HourLiveSessionIcon,
  LearningModeIcon,
  ListIcon,
  LiveSessionIcon,
  PlayButton,
  StudentRatioIcon,
  ZapIcon,
} from '../../../src/components/svg';
import { Colors } from '../../../src/components/themes/colors';
import { Fonts } from '../../../src/components/themes/fonts';
import HomePageLayout from '../../../src/views/home/layout';
import AdmissionProcessCard from '../../../src/views/programs/admission-process';
import BillingProcessCard from '../../../src/views/programs/billing';
import LearningPath from '../../../src/views/programs/learning-path';
import KeyFeaturesCard from '../../../src/views/programs/key-features';
import {
  apiEndpoint,
  goToPortal,
  isImageOrVideo,
  ngnCurrencyFormatter,
} from '../../../src/utils';
import Image from 'next/image';
import axios from 'axios';
import dayjs from 'dayjs';

import advancedFormat from 'dayjs/plugin/advancedFormat';
dayjs.extend(advancedFormat);

const overview = [
  {
    title: 'Duration:',
    content:
      'Immerse yourself in over 400 hours of immersive learning, designed to provide you with a comprehensive understanding and skill development of computer engineering principles and practices.',
  },
  {
    title: '24/7 Career Support:',
    content:
      'Receive comprehensive support throughout your career journey, including personalized 1:1 career coaching sessions and access to live sessions that cover industry-driven projects, case studies, and more.',
  },
  {
    title: 'Live Learning Sessions:',
    content:
      'Our live learning sessions are interactive educational experiences led by expert instructors, these sessions provide real-time engagement, fostering dynamic discussions and immediate feedback.',
  },
  {
    title: 'Career Growth Opportunities:',
    content:
      'Explore new horizons in your career journey with our dynamic growth opportunity. Whether scaling the corporate hierarchy, pivoting industries, or venturing into entrepreneurship, our program provides the essential tools and expertise for success.',
  },
  {
    title: 'Assessment:',
    content:
      "Demonstrate your understanding and skill development through various assessment methods, including assignments, projects, and written exams, ensuring that you're well-prepared to excel in the field.",
  },
];

const advantages = [
  {
    title: 'Integrated Curriculum:',
    content:
      'Seamlessly blend technical and business courses to provide a comprehensive understanding of computer engineering within a broader business context.',
    icon: ChatIcon,
  },
  {
    title: 'Handson Projects:',
    content:
      'Engage in practical, realworld projects that allow you to apply theoretical knowledge to solve complex problems and develop tangible skills.',
    icon: ZapIcon,
  },
  {
    title: 'Industry Relevant Skills:',
    content:
      "Acquire skills directly relevant to the demands of today's technology driven industries, including software development, IT and emerging technologies.",
    icon: ChatIcon,
  },
  {
    title: 'Expert Faculty:',
    content:
      'Learn from experienced faculty members who are industry professionals and academic experts, providing you with valuable insights and mentorship.',
    icon: CommandIcon,
  },
  {
    title: 'Networking Opportunities:',
    content:
      'Connect with peers, industry professionals, and alumni through networking events, guest lectures, and industry partnerships, fostering  connections for career opportunities.',
    icon: GraphIcon,
  },
  {
    title: 'Career Support Services:',
    content:
      'Access career support services, including resume building, interview preparation, and job placement assistance, to help you launch or advance your career.',
    icon: GraphIcon,
  },
  {
    title: 'Flexibility:',
    content:
      'Benefit from flexible learning options, including parttime and online courses, allowing you to balance your studies with work or other commitments.',
    icon: ListIcon,
  },
  {
    title: 'Cutting Edge Resources: ',
    content:
      'Utilize state of the art facilities, software tools, and technology resources to enhance your learning experience and stay updated with the latest industry trends.',
    icon: CommandIcon,
  },
  {
    title: 'Professional Development:',
    content:
      'Develop soft skills such as teamwork, leadership and more through workshops, seminars, and project collaborations, for success in diverse professional settings.',
    icon: GraphIcon,
  },
];

const careerPaths = [
  'Hardware Engineer',
  'Network Engineer',
  'Systems Analyst',
  'Embedded Systems Engineer',
  'Cybersecurity Analyst',
  'Data Scientist',
  'Artificial Intelligence/Machine Learning Engineer',
  'Cloud Engineer',
  'Robotics Engineer',
];
export default function CloudComputingPage() {
  const router = useRouter();
  const [scrollTop, setScrollTop] = React.useState(0);
  const [showCover, setShowCover] = React.useState(true);
  const scrollableDivRef = React.useRef(null);
  const videoId = 'qqMrLuVI3d0';

  const { slug } = router.query;
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    if (slug) {
      const fetchCourse = async () => {
        try {
          const programId = router.query.slug; // Extract the programId from the query parameters
          if (!programId) {
            setError('Program ID is missing');
            setLoading(false);
            return;
          }

          const res = await axios.get(
            `${apiEndpoint}/website/courses/${programId}`
          );
          // console.log('res', res.data);
          setCourse(res.data);
        } catch (error) {
          console.error(error);
          setError('Failed to load course data');
        } finally {
          setLoading(false);
        }
      };

      fetchCourse();
    }
  }, [slug, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!course) {
    return <div>No course found</div>;
  }

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
            <Box>
              <Image
                src={course.schoolLogo}
                alt="school logo"
                height={36}
                width={36}
              />
            </Box>
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
              {course.programType === 'diploma' && ' A.B.U Institute of ICICT:'}{' '}
              <span>{course.programName}</span>
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
              {`We provide an ideal opportunity for students that want to gain
              expertise in ${course.courseName}. You will gain practical experience
              and acquire the skills that employers seek.`}
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
              onClick={() => router.push(goToPortal + '/signup')}
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
            {course.syllabus && (
              <Box
                sx={{
                  padding: '12px 20px 12px 20px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  font: `normal normal 500 normal 14px/[19.2px] ${Fonts.primary}`,
                  cursor: 'pointer',
                  color: '#fff',
                  borderRadius: '46px',
                  border: '1px solid #fff',

                  // background: Colors.primary,
                  // '&:hover': {
                  //   background: Colors.primary,
                  // },
                }}>
                <a href={course.syllabus} target="_blank" rel="noreferrer">
                  Download Syllabus
                </a>
              </Box>
            )}
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
                  backgroundImage:
                    isImageOrVideo(course?.programClip) === 'video'
                      ? 'url(/images/videogirl.png)'
                      : `url(${course.programClip})`,
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
                  {isImageOrVideo(course?.programClip) === 'video' && (
                    <IconButton onClick={handleVideoClick}>
                      <PlayButton />
                    </IconButton>
                  )}
                </Box>
              </Box>
            ) : (
              <Box sx={{ height: { xs: '282.85px', md: '442px' } }}>
                <iframe
                  title="YouTube video player"
                  width="100%"
                  height="100%"
                  src={course.programClip || ''}
                  allowFullScreen
                  style={{
                    display: showCover ? 'none' : 'block',
                    border: 'none',
                    borderRadius: '12px',
                    aspectRatio: 'video',
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
          pt: { xs: 6, md: '21.5px' },
          pb: { xs: 2, md: '21.5px' },
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
                gap: '12px',
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
                  font: `normal normal 700 normal 24px/28px ${Fonts.secondary}`,
                  color: 'rgba(1, 27, 35, 1)',
                  m: 0,
                  p: 0,
                  letterSpacing: '0em',
                  textAlign: 'center',
                }}>
                {/* 10th Dec, 2024 */}
                {dayjs(course.startDate).format('Do MMM, YYYY')}
              </Typography>
              <Box
                component="span"
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
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
                gap: '12px',
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
                  font: `normal normal 700 normal 24px/28px ${Fonts.secondary}`,
                  color: 'rgba(1, 27, 35, 1)',
                  m: 0,
                  p: 0,
                  letterSpacing: '0em',
                  textAlign: 'center',
                }}>
                {course.programType === 'diploma'
                  ? '16 Months'
                  : `${course.programDuration} Weeks`}
              </Typography>
              <Box
                component="span"
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
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
                gap: '12px',
                p: { xs: '24px 0', sm: '0 24px' },
              }}>
              <Typography
                variant="h6"
                sx={{
                  width: '100%',
                  maxWidth: { xs: '100%', sm: 570, md: 672 },
                  font: `normal normal 700 normal 24px/28px ${Fonts.secondary}`,
                  color: 'rgba(1, 27, 35, 1)',
                  m: 0,
                  p: 0,
                  letterSpacing: '0em',
                  textAlign: 'center',
                }}>
                Online
              </Typography>
              <Box
                component="span"
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
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
              gap: { xs: '20px', sm: '48px', lg: '20px' },
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
                  maxWidth: '716px',
                }}>
                <List>
                  {overview.map((item, index) => (
                    <ListItem key={`overview_${index}`}>
                      <ListItemText
                        primary={
                          <Typography
                            variant="h6"
                            sx={{
                              fontSize: '20px',
                              fontWeight: 700,
                              color: '#101828',
                            }}>
                            {item.title}
                          </Typography>
                        }
                        secondary={
                          <Typography
                            variant="h6"
                            sx={{
                              fontSize: '16px',
                              fontWeight: 400,
                              color: '#868B93',
                            }}>
                            {item.content}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
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
                              textTransform: 'capitalize',
                            }}>
                            {/* this is to handle the mistake made while assigning program name */}
                            {`${course.programType} in ${
                              course.programName
                                ?.toLowerCase()
                                .endsWith('bootcamp ')
                                ? course.programName
                                    ?.toLowerCase()
                                    .replace('bootcamp ', '')
                                : course.programName
                                    ?.toLowerCase()
                                    .endsWith('bootcamp')
                                ? course.programName
                                    ?.toLowerCase()
                                    .replace('bootcamp', '')
                                : course.programName
                                    ?.toLowerCase()
                                    .startsWith('bootcamp in ')
                                ? course.programName
                                    ?.toLowerCase()
                                    .replace('bootcamp in', '')
                                : course.programName
                            }`}
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
                            {/* 5,000 Naira */}
                            {ngnCurrencyFormatter(course.applicationFee)}
                          </Box>
                        }
                        sx={{ gap: 0, m: 0, p: 0 }}
                      />
                      {course.programType === 'diploma' && (
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
                              Ahmadu Bello University
                            </Box>
                          }
                          sx={{ gap: 0, m: 0, p: 0 }}
                        />
                      )}
                      <CardHeader
                        avatar={<StudentRatioIcon />}
                        title={
                          <Box
                            sx={{
                              font: `normal normal 500 normal 14px/24px ${Fonts.primary}`,
                              color: '#9BA1A3',
                              letterSpacing: '0em',
                              textAlign: 'left',
                            }}>
                            Teacher Student Ratio
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
                            1:20
                          </Box>
                        }
                        sx={{ gap: 0, m: 0, p: 0 }}
                      />
                      <CardHeader
                        avatar={<LiveSessionIcon />}
                        title={
                          <Box
                            sx={{
                              font: `normal normal 500 normal 14px/24px ${Fonts.primary}`,
                              color: '#9BA1A3',
                              letterSpacing: '0em',
                              textAlign: 'left',
                            }}>
                            Hours of Live Sessions
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
                            200+
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
      <Box sx={{ backgroundColor: '#F6F7F7' }}>
        <Box
          sx={{
            py: { xs: '40px', xl: '96px' },
            px: { xs: '1rem', sm: '1rem', md: '5rem' },
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
          <Grid container spacing={4} sx={{ mt: '30px' }}>
            {advantages.map((advantage, index) => (
              <Grid key={`advantage_${index}`} item lg={4}>
                <Box
                  sx={{
                    p: '24px',
                    borderRadius: '12px',
                    border: '1px solid rgba(0, 0, 0, 0.03)',
                  }}>
                  <advantage.icon />
                  <Typography
                    sx={{
                      mt: '64px',
                      fontSize: '20px',
                      fontWeight: 400,
                      fontFamily: Fonts.secondary,
                      color: Colors.dark,
                    }}>
                    {advantage.title}
                  </Typography>
                  <Typography
                    sx={{
                      mt: '8px',
                      fontSize: '16px',
                      fontWeight: 400,
                      fontFamily: Fonts.primary,
                      color: '#868B93',
                    }}>
                    {advantage.content}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box sx={{ px: { xs: 4, sm: 3, lg: 12.5, xl: 16 } }}>
        <Divider
          sx={{
            borderColor: '#EAECF0',
          }}
        />
      </Box>

      {course.programType === 'diploma' && (
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
                      {/* Vorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. */}
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
      )}
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
                  {` Earn a certificate in ${course.courseName}`}
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
                    {course?.certificationDetails}
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
                xs:
                  course?.programType === 'diploma'
                    ? 'url(/images/certificate.svg)'
                    : 'url(/images/certificate-eduvacity.png)',
                sm:
                  course?.programType === 'diploma'
                    ? 'url(/images/certificate.svg)'
                    : 'url(/images/certificate-eduvacity.png)',
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
        id="billing-section"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          py: '96px',
          backgroundColor: '#011B23',
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
                    color: '#fff',
                    letterSpacing: '-0.02em',
                    textAlign: 'center',
                  }}>
                  Affordable Quality Education
                </Typography>
                <Box
                  component="span"
                  sx={{
                    maxWidth: 840,
                    display: 'flex',
                    flexDirection: 'column',
                    mt: '24px',
                    mx: 'auto',
                  }}>
                  <Typography
                    variant="span"
                    sx={{
                      font: {
                        xs: `normal normal 500 normal 18px/28px ${Fonts.primary}`,
                        sm: `normal normal 500 normal 20px/30px ${Fonts.primary}`,
                      },
                      color: Colors.textColor,
                      textAlign: 'center',
                    }}>
                    We offer cost effective programs, financial aid options, and
                    uncompromising standards of excellence, ensuring
                    accessibility and success for all students.
                  </Typography>
                </Box>
              </Box>
              <Box style={{}}>
                <BillingProcessCard course={course} />
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
                  textAlign: { xs: 'center', md: 'start' },
                }}>
                What will you learn
              </Typography>
              <Box
                component="span"
                sx={{
                  // maxWidth: 840,
                  display: 'flex',
                  flexDirection: 'column',
                  mb: '20px',
                }}>
                <Typography
                  variant="span"
                  sx={{
                    font: {
                      xs: `normal normal 500 normal 18px/28px ${Fonts.primary}`,
                      sm: `normal normal 500 normal 20px/30px ${Fonts.primary}`,
                    },
                    color: Colors.grey,
                    textAlign: { xs: 'justify', md: 'start' },
                  }}>
                  Upon successful completion of the Diploma in Computer Science
                  program at Ahmadu Bello University, Zaria, students will be
                  awarded a Certificate of Completion from the university. This
                  certificate serves as a testament to the student&apos;s
                  dedication and mastery of the knowledge and skills acquired
                  throughout the program.
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
            <LearningPath course={course.learningPathModule || []} />
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

      {/* <Box
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
      </Box> */}
      <Box sx={{ px: { xs: 4, sm: 3, lg: 12.5, xl: 16 } }}>
        <Divider
          sx={{
            borderColor: '#EAECF0',
          }}
        />
      </Box>

      {course.programType === 'diploma' && (
        <Box
          component="section"
          id="admission-section"
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            py: { xs: '65px', md: '96px' },
            backgroundColor: '#FFD993',
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
                        Three other related subjects
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
      )}

      <Box
        component="section"
        id="admission-section"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          py: { xs: '65px', md: '96px' },
          backgroundColor: '#fff',
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
                  Career path
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  gap: '40px',
                  flexDirection: { xs: 'column', lg: 'row' },
                  alignItems: 'center',
                }}>
                <Box sx={{}}>
                  <Image
                    src="/images/career.png"
                    alt="career"
                    height={400}
                    width={400}
                  />
                </Box>
                <Card
                  sx={{
                    boxShadow: 'none',
                    width: '100%',
                    maxWidth: '704px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '32px',
                    background: 'transparent',
                  }}>
                  <Grid container spacing="41px">
                    {careerPaths.map((path, index) => (
                      <Grid item xs={12} lg={6} key={`career_path_${index}`}>
                        <Box
                          sx={{ width: '100%', display: 'flex', gap: '12px' }}>
                          <Box>
                            <GhostCheckIcon />
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
                            {path}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Card>
              </Box>
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
