import {
  Card,
  CardHeader,
  CssBaseline,
  Link,
  ListItemButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import { Box } from '@mui/system';
import { motion, useAnimation, useInView } from 'framer-motion';
import Router, { useRouter } from 'next/router';
import React from 'react';
import { AngleDownWard, UserIcon } from '../../components/svg';
// import AppLogo from "../../components/svg/applogo"
import { Colors } from '../../components/themes/colors';
import { Fonts } from '../../components/themes/fonts';
import { StyledMenuTooltip } from '../../components/tooltip';
import FooterPage from './footer';
import MenuLists from './popover';
import Image from 'next/image';
import JoinWaitlistDialog from '../../components/waitlistdialog';

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

  const menu = [
    {
      name: 'Why eduvacity',
    },
    {
      name: 'Programs',
      children: [
        {
          title: 'programs',
        },
      ],
    },

    {
      name: 'Become an Instructor',
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
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleClickOpen = () => setOpenWaitlistDialog(true);

  const handleClose = () => setOpenWaitlistDialog(false);

  const isProduction = process.env.NODE_ENV === 'production';
  const baseUrl = isProduction
    ? 'https://portal.eduvacity.com'
    : 'http://portal.localhost:3000';

  const handleSignIn = () => {
    router.push(`${baseUrl}/signin`);
  };

  const handleSignUp = () => {
    router.push(`${baseUrl}/signup`);
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
            px: { xs: 2, sm: 3, lg: '10px', xl: '80px' },
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
              <MenuLists />
            </Box>
            <Box
              sx={{
                mt: 0,
                display: { xs: 'none', lg: 'flex' },
                width: 542,
              }}>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
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
                    <Box key={i} sx={{ width: '100%' }}>
                      {item && item.children ? (
                        <StyledMenuTooltip
                          placement="bottom-start"
                          disableFocusListener
                          disableTouchListener
                          sx={{
                            '& .MuiTooltip-tooltipPlacementBottom': {
                              position: 'relative',
                              top: 6,
                              minWidth: 375,
                              backgroundColor: Colors.secondary,
                              border: 0,
                            },
                          }}
                          title={
                            <Card
                              sx={{
                                boxShadow: 'none',
                                p: '16px 0px 16px 0px',
                                backgroundColor: 'transparent',
                              }}>
                              {item.children.map((child, index) => {
                                return (
                                  <CardHeader
                                    onClick={() =>
                                      router.push(
                                        `/${updateKey(
                                          item.name?.toLowerCase()
                                        )}/${updateKey(
                                          child.name?.toLowerCase()
                                        )}`
                                      )
                                    }
                                    sx={{
                                      gap: 2,
                                      height: 48,
                                      cursor: 'pointer',
                                      borderBottom: `1px solid rgba(27, 49, 57, 1)`,
                                      textTransform: 'capitalize',
                                    }}
                                    key={index}
                                    title={
                                      <Box
                                        sx={{
                                          font: `normal normal 600 normal 16px/24px ${Fonts.primary}`,
                                          color: Colors.textColor,
                                          '&:hover': {
                                            textDecoration: 'underline',

                                            color: Colors.primary,
                                          },
                                        }}>
                                        {child.title}
                                      </Box>
                                    }
                                  />
                                );
                              })}
                            </Card>
                          }>
                          <ListItemButton
                            disableTouchRipple
                            onMouseEnter={handlePopoverOpen}
                            onMouseLeave={handlePopoverClose}
                            sx={{
                              p: 0,
                              m: 0,
                            }}>
                            <Typography
                              sx={{
                                maxWidth: 150,
                                width: 300,
                                display: 'flex',
                                font: `normal normal 500 normal 14px/16.8px ${Fonts.primary}`,
                                gap: '10px',
                                color: selected
                                  ? Colors.primary
                                  : Colors.offWhite,
                                cursor: 'pointer',
                                '&:hover': {
                                  background: 'transparent',
                                  color: Colors.primary,
                                },
                              }}>
                              {item.name}{' '}
                              <AngleDownWard
                                style={{
                                  mt: '-18px',
                                  ...(open && {
                                    transform: `rotate(-180deg)`,
                                  }),
                                }}
                              />{' '}
                            </Typography>
                          </ListItemButton>
                        </StyledMenuTooltip>
                      ) : (
                        <ListItemButton
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
                              maxWidth: 150,
                              width: 300,
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
                onClick={handleSignIn}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  font: `normal normal 500 normal 14px/16.8px ${Fonts.primary}`,
                  gap: '8px',
                  padding: '12px 20px 12px 20px',
                  color: 'rgba(230, 244, 237, 1)',
                  cursor: 'pointer',
                  gap: '10px',
                  '&:hover': {
                    background: 'transparent',
                  },
                }}>
                <UserIcon /> Student portal
              </Box>
              <Box
                onClick={handleClickOpen}
                sx={{
                  padding: '12px 20px 12px 20px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  font: `normal normal 500 normal 14px/[19.2px] ${Fonts.primary}`,
                  color: 'rgba(230, 244, 237, 1)',
                  borderRadius: '46px',
                  cursor: 'pointer',
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
            flexGrow: 1,
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
