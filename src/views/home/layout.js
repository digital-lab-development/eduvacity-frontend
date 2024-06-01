import {
  CssBaseline,
  Link,
  ListItemButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import { Box } from '@mui/system';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import Router, { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { UserIcon } from '../../components/svg';
import { Colors } from '../../components/themes/colors';
import { Fonts } from '../../components/themes/fonts';
import MenuDropdown from './dropdown';
import FooterPage from './footer';
import MenuLists from './popover';
import JoinWaitlistDialog from '../../components/waitlistdialog';
import { apiEndpoint, goToPortal } from '../../utils';
import axios from 'axios';
import dayjs from 'dayjs';

import advancedFormat from 'dayjs/plugin/advancedFormat';
dayjs.extend(advancedFormat);

const appHeight = 95;

function updateKey(str) {
  if (typeof str !== 'string') return '';
  const regex = / /g;
  const newStr = str.toLowerCase();
  const update = newStr.replace(regex, '-');
  return update;
}
export default function HomeLayout({ children }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openWaitlistDialog, setOpenWaitlistDialog] = React.useState(false);
  const open = Boolean(anchorEl);

  const [subpages, setSubpages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(`${apiEndpoint}/website/courses`);
        const data = res.data;

        const groupedPrograms = data.programs.reduce((acc, program) => {
          const programType =
            program.programType.charAt(0).toUpperCase() +
            program.programType.slice(1);
          if (!acc[programType]) {
            acc[programType] = {
              name: programType,
              content: [],
            };
          }

          acc[programType].content.push({
            title: program.programName,
            starts: dayjs(program.startDate).format('Do MMM, YYYY'),
            duration: program.programDuration || '16 months',
            active: true, // Assuming you have an `active` field
            link: `/programs/technology/${program.programId}`,
          });

          return acc;
        }, {});

        // console.log('==>>', Object.values(groupedPrograms));

        setSubpages(Object.values(groupedPrograms));
      } catch (error) {
        setError('Failed to load programs');
        console.error(error);
      }
    };

    fetchCourses();
  }, []);

  const menu = [
    {
      name: 'Why eduvacity',
    },
    {
      name: 'Programs',
      children: [
        {
          name: 'Technology',
          subpages: subpages || [],
        },
        // {
        //   name: 'Business',
        //   subpages: [
        //     {
        //       name: 'Diploma in Technology',
        //       content: [
        //         {
        //           title: 'Content marketing',
        //           starts: '15 Feb, 2024',
        //           duration: '6 months',
        //           active: true,
        //           link: '/programs/business/content-marketing',
        //         },
        //         {
        //           title: 'Cloud computing',
        //           starts: '15 Feb, 2024',
        //           duration: '4 months',
        //           active: false,
        //           link: '/programs/business/cloud-computing',
        //         },
        //         {
        //           title: 'Product design',
        //           starts: '15 Feb, 2024',
        //           duration: '4 months',
        //           active: true,
        //           link: '/programs/business/product-design',
        //         },
        //         {
        //           title: 'Frontend engineering',
        //           starts: '15 Feb, 2024',
        //           duration: '4 months',
        //           active: false,
        //           link: '/programs/business/frontend-engineering',
        //         },
        //         {
        //           title: 'Backend engineering',
        //           starts: '15 Feb, 2024',
        //           duration: '4 months',
        //           active: false,
        //           link: '/programs/business/backend-engineering',
        //         },
        //       ],
        //     },
        //     {
        //       name: 'Degree',
        //       content: [
        //         {
        //           title: 'Content marketing',
        //           starts: '15 Feb, 2024',
        //           duration: '6 months',
        //           active: true,
        //           link: '/programs/business/content-marketing',
        //         },
        //         {
        //           title: 'Cloud computing',
        //           starts: '15 Feb, 2024',
        //           duration: '4 months',
        //           active: false,
        //           link: '/programs/business/cloud-computing',
        //         },
        //         {
        //           title: 'Product design',
        //           starts: '15 Feb, 2024',
        //           duration: '4 months',
        //           active: true,
        //           link: '/programs/business/product-design',
        //         },
        //         {
        //           title: 'Frontend engineering',
        //           starts: '15 Feb, 2024',
        //           duration: '4 months',
        //           active: false,
        //           link: '/programs/business/frontend-engineering',
        //         },
        //         {
        //           title: 'Backend engineering',
        //           starts: '15 Feb, 2024',
        //           duration: '4 months',
        //           active: false,
        //           link: '/programs/business/backend-engineering',
        //         },
        //       ],
        //     },
        //     {
        //       name: 'Bootcamps',
        //       content: [
        //         {
        //           title: 'Content marketing',
        //           starts: '15 Feb, 2024',
        //           duration: '6 months',
        //           active: true,
        //           link: '/programs/business/content-marketing',
        //         },
        //         {
        //           title: 'Cloud computing',
        //           starts: '15 Feb, 2024',
        //           duration: '4 months',
        //           active: false,
        //           link: '/programs/business/cloud-computing',
        //         },
        //         {
        //           title: 'Product design',
        //           starts: '15 Feb, 2024',
        //           duration: '4 months',
        //           active: true,
        //           link: '/programs/business/product-design',
        //         },
        //         {
        //           title: 'Frontend engineering',
        //           starts: '15 Feb, 2024',
        //           duration: '4 months',
        //           active: false,
        //           link: '/programs/business/frontend-engineering',
        //         },
        //         {
        //           title: 'Backend engineering',
        //           starts: '15 Feb, 2024',
        //           duration: '4 months',
        //           active: false,
        //           link: '/programs/business/backend-engineering',
        //         },
        //       ],
        //     },
        //   ],
        // },
      ],
    },

    {
      name: 'Become an Instructor',
    },
    {
      name: 'About Us',
    },
  ];
  React.useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  React.useEffect(() => {
    Router.events.on('routeChangeStart', () => setLoading(true));
    Router.events.on('routeChangeComplete', () => setLoading(false));
    Router.events.on('routeChangeError', () => setLoading(false));
    return () => {
      Router.events.off('routeChangeStart', () => setLoading(true));
      Router.events.off('routeChangeComplete', () => setLoading(false));
      Router.events.off('routeChangeError', () => setLoading(false));
    };
  }, []);

  const handleClickOpen = () => setOpenWaitlistDialog(true);
  const handleClose = () => setOpenWaitlistDialog(false);

  const isProduction = process.env.NODE_ENV === 'production';
  const baseUrl = isProduction
    ? 'https://portal.eduvacity.com'
    : 'http://portal.localhost:3000';

  const handleSignIn = () => {
    router.push(`${baseUrl}/signin`);
  };

  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
      }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}>
        <CssBaseline />
        <MuiAppBar
          position="fixed"
          open={open}
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: Colors.secondary,
            height: appHeight,
            boxShadow: 'none',
            px: { xs: '1rem', sm: '1rem', lg: '5rem' },
            py: { xs: 2, sm: 3, lg: '18px' },
          }}>
          <Toolbar
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '12px',
            }}>
            <Link underline="none" href="/" sx={{ width: 200 }}>
              <Image
                src="/images/logo.png"
                width={150}
                height={28}
                alt="logo"
                layout="fixed"
              />
            </Link>
            <Box
              sx={{
                display: { lg: 'none' },
                position: 'relative',
                top: -12,
                right: 30,
              }}>
              <MenuLists menu={menu} />
            </Box>
            <Box
              sx={{
                mt: 0,
                display: { xs: 'none', lg: 'flex' },
                justifyContent: 'center',
                textAlign: 'center',
                alignItems: 'center',
                minWidth: 650,
                boxSizing: 'border-box',
              }}>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '12px',
                  height: '59px',
                  borderRadius: '47px',
                  border: '1.5px solid rgba(27, 49, 57, 1)',
                  padding: '21px 35px 21px 35px',
                }}>
                {menu?.map((item, i) => {
                  const selected = router.pathname.startsWith(
                    `/${updateKey(item.name.toLowerCase())}`
                  );
                  return (
                    <Box
                      key={i}
                      sx={
                        {
                          // width: '100%',
                        }
                      }>
                      {item && item.children ? (
                        <MenuDropdown
                          name={item.name}
                          item={item}
                          selected={selected}
                        />
                      ) : (
                        // <div></div>
                        <ListItemButton
                          disableRipple
                          sx={{
                            p: 0,
                            m: 0,
                          }}
                          onClick={() =>
                            router.push(
                              `/${updateKey(item.name.toLocaleLowerCase())}`
                            )
                          }>
                          <Typography
                            sx={{
                              // maxWidth: 150,
                              // width: 300,
                              whiteSpace: 'no-wrap',
                              font: `normal normal 500 normal 14px/16.8px ${Fonts.primary}`,
                              color: selected
                                ? Colors.primary
                                : Colors.offWhite,
                              cursor: 'pointer',
                              '&:hover': {
                                color: Colors.primary,
                              },
                            }}>
                            {item.name}
                          </Typography>
                        </ListItemButton>
                      )}
                    </Box>
                  );
                })}
              </Box>
            </Box>
            <Box
              component="div"
              sx={{
                width: 309,
                display: { xs: 'none', lg: 'flex' },
                gap: '20px',
              }}>
              <Box
                onClick={() => router.push(`${goToPortal}/signup`)}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  font: `normal normal 500 normal 14px/16.8px ${Fonts.primary}`,
                  gap: '8px',
                  padding: '12px 20px 12px 20px',
                  color: 'rgba(230, 244, 237, 1)',
                  cursor: 'pointer',
                  textWrap: 'nowrap',
                  gap: '10px',
                  '&:hover': {
                    background: 'transparent',
                  },
                }}>
                <UserIcon /> Student portal
              </Box>
              <Box
                onClick={() => router.push(`${goToPortal}/signup`)}
                sx={{
                  padding: '12px 20px 12px 20px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  font: `normal normal 500 normal 14px/[19.2px] ${Fonts.primary}`,
                  color: 'rgba(230, 244, 237, 1)',
                  borderRadius: '46px',
                  cursor: 'pointer',
                  textWrap: 'nowrap',
                  background: Colors.primary,
                  '&:hover': {
                    background: Colors.primary,
                  },
                }}>
                Apply now
              </Box>
            </Box>
          </Toolbar>
        </MuiAppBar>
        <Box
          component="main"
          sx={{
            width: '100%',
          }}>
          <Toolbar />
          {children}
          <FooterPage />
        </Box>
      </motion.div>

      <JoinWaitlistDialog open={openWaitlistDialog} handleClose={handleClose} />
    </div>
  );
}
