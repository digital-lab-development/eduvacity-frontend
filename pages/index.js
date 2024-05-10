import { useState } from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  CssBaseline,
  Divider,
  Typography,
  Grid,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { ArrowUp, PlayButton, WhatsApp } from "../src/components/svg";
import { Colors } from "../src/components/themes/colors";
import { Fonts } from "../src/components/themes/fonts";
import FrequentlyAskQuestions from "../src/views/home/faq";
import FeaturesCard from "../src/views/home/features";
import HomePageLayout from "../src/views/home/layout";
import ProgramsCard from "../src/views/home/programs";
import AcademicTabs from "../src/views/home/tab";
import JoinWaitlistDialog from "../src/components/waitlistdialog";
import {
  COMMUNITY_DESC,
  EDUVACITY_VALUE,
  EMPOWERMENT_DESC,
  EMPOWERMENT_DESC2,
  EMPOWERMENT_TITLE,
  HERO_TEXT,
  PROGRAM_DESC,
  PROGRAM_TITLE,
  WHYUS_DESC,
  WHYUS_TITLE,
} from "../src/utils/contants";
import WhyUs from "../src/views/home/why-us";
import AcademicPrograms from "../src/views/programs/academic-program";
import Testimonial from "../src/components/testimonial";

export default function HomePage() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [showCover, setShowCover] = useState(true);
  const videoId = "qqMrLuVI3d0";

  const handleVideoClick = () => {
    setShowCover(!showCover);
  };

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
      }}
    >
      <CssBaseline />
      <Box
        component="section"
        id="hero-section"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          pt: { xs: 8, md: 15.5 },
          pb: { xs: 8, md: 6.5 },
          backgroundImage: {
            xs: "url(/images/hero-section-pattern-xs.svg)",
            sm: "url(/images/hero.svg)",
          },
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          backgroundColor: Colors.secondary,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            px: { xs: "1rem", sm: "1rem", lg: 12.5, xl: 16 },
            gap: { xs: 4, sm: 8 },
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              gap: { xs: "40px", sm: "80px" },
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  maxWidth: { xs: 340, sm: 1260 },
                  font: {
                    xs: `normal normal 600 normal 32px/48px ${Fonts.primary}`,
                    md: `normal normal 400 normal 64px/77px ${Fonts.primary}`,
                  },
                  color: Colors.light,
                  m: 0,
                  p: 0,
                  letterSpacing: "-2%",
                }}
              >
                <Typography variant="span" sx={{ display: "inline" }}>
                  We are
                </Typography>{" "}
                <Typography
                  variant="span"
                  sx={{ display: "inline", color: Colors.primary }}
                >
                  Educating
                </Typography>
                <br />
                <Typography variant="span" sx={{ display: "initial" }}>
                  Africa's{" "}
                </Typography>
                <Typography variant="span" sx={{ color: Colors.primary }}>
                  Next Billion Workforce
                </Typography>
              </Typography>

              <Box
                component="span"
                sx={{
                  maxWidth: 1050,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="span"
                  sx={{
                    font: {
                      xs: `normal normal 500 normal 18px/28px ${Fonts.primary}`,
                      sm: `normal normal 500 normal 20px/30px ${Fonts.primary}`,
                    },
                    color: Colors.offWhite,
                  }}
                >
                  {HERO_TEXT.secondary}
                </Typography>
                <Box
                  component="div"
                  sx={{
                    backgroundColor: "grey",
                    maxWidth: 500,
                    display: "flex",
                    borderRadius: "46px",
                    padding: "2px",
                    gap: "24px",
                    mt: { xs: 4, md: 12 },
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="span"
                    sx={{
                      font: {
                        md: `normal normal 300 normal 16px ${Fonts.primary}`,
                        xs: `normal normal 300 normal 12px ${Fonts.primary}`,
                        sm: `normal normal 300 normal 12px ${Fonts.primary}`,
                      },
                      color: Colors.offWhite,
                      textAlign: "center",
                      paddingLeft: 3,
                    }}
                  >
                    What skill would you like to acquire?
                  </Typography>
                  <Box
                    onClick={handleClickOpen}
                    sx={{
                      padding: "12px 20px 12px 20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      font: `normal normal 500 normal 14px/[19.2px] ${Fonts.primary}`,
                      cursor: "pointer",
                      color: "rgba(230, 244, 237, 1)",
                      borderRadius: "46px",
                      background: Colors.primary,
                      "&:hover": {
                        background: Colors.primary,
                      },
                    }}
                  >
                    Apply Now <ArrowUp />
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                width: "100%",
                height: {
                  xs: 240,
                  sm: 516,
                  borderRadius: "12px",
                },
                backgroundImage: {
                  xs: "url(/images/eduvacity-home.png)",
                  sm: "url(/images/eduvacity-home.png)",
                },
                backgroundSize: { xs: "fit", sm: "fit" },
                backgroundRepeat: "no-repeat",
              }}
            />
          </Box>
        </Box>
      </Box>
      {/* --------------------------WHY US------------------------ */}
      <Box
        component="section"
        id="feature-section"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          pt: { xs: 8, md: 15.5 },
          pb: { xs: 8, md: 6.5 },
          backgroundColor: Colors.light,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            px: { xs: "1rem", sm: "1rem", md: 5.5, lg: 7.2, xl: 15.5 },
            gap: 8,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: { xs: "40px", sm: "80px" },
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.arial}`,
                  color: Colors.primary,
                  m: 0,
                  p: 0,
                  letterSpacing: "1%",
                  textTransform: "uppercase",
                }}
              >
                Why us
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  font: {
                    xs: `normal normal 400 normal 30px/36px ${Fonts.arial}`,
                    md: `normal normal 400 normal 36px/44px ${Fonts.arial}`,
                  },
                  color: Colors.darkBlue,
                  m: 0,
                  p: 0,
                  letterSpacing: "-2%",
                }}
              >
                {WHYUS_TITLE}
              </Typography>
              <Box
                component="span"
                sx={{
                  maxWidth: 840,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="span"
                  sx={{
                    font: {
                      xs: `normal normal 400 normal 14px/28px ${Fonts.arial}`,
                      sm: `normal normal 500 normal 20px/30px ${Fonts.arial}`,
                    },
                    color: Colors.grey,
                  }}
                >
                  {WHYUS_DESC}
                </Typography>
              </Box>
            </Box>
            <WhyUs />
          </Box>
        </Box>
      </Box>

      {/* -------------------Growing Community--------------------------- */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 850, sm: 450 },
          padding: "96px 0",
          backgroundColor: "#F6F7F7",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "70%" },
            display: "flex",
            flexDirection: "column",
            gap: { xs: "8px", sm: "16px" },
            px: { xs: 4, sm: 8.5, md: 5.5, lg: 7.2, xl: 15.5 },
            alignItems: { xs: "center", sm: "flex-start" },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              font: `normal normal 400 normal 38px/44px ${Fonts.arial}`,
              color: "#173927",
              mt: -3,
              p: 0,
              letterSpacing: "2%",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Join our Growing Community
          </Typography>
          <Typography
            variant="span"
            sx={{
              font: {
                xs: `normal normal 400 normal 16px/24px ${Fonts.arial}`,
                md: `normal normal 400 normal 20px/30px ${Fonts.arial}`,
              },
              color: "#505F79",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            {COMMUNITY_DESC}
          </Typography>
          <br />
          <Typography
            variant="span"
            sx={{
              maxWidth: 665,
              font: {
                xs: `normal normal 400 normal 16px/24px ${Fonts.arial}`,
                md: `normal normal 400 normal 20px/30px ${Fonts.arial}`,
              },
              color: "#505F79",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Join us to pave your path to success.
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "40%" },
            height: {
              xs: 240,
              sm: 450,
            },
            backgroundImage: {
              xs: "url(/images/grey-globe.svg)",
              sm: "url(/images/grey-globe.svg)",
            },
            backgroundSize: { xs: "fit", sm: "fit" },
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
          }}
        />
      </Box>

      {/* -----------------GRID IMAGES SECTION--------------- */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 850, sm: 450 },
          padding: "0 0 96px 0",
          backgroundColor: "#F6F7F7",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2} columns={{ xs: 6, sm: 12 }}>
          <Grid item xs={3} sm={3}>
            <Box
              sx={{
                width: "100%",
                height: {
                  xs: 240,
                  sm: 314,
                },
                backgroundImage: {
                  xs: "url(/images/home-grid/1.png)",
                  sm: "url(/images/home-grid/1.png)",
                },
                backgroundSize: { xs: "cover", sm: "cover" },
                backgroundRepeat: "no-repeat",
              }}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box
              sx={{
                width: "100%",
                height: {
                  xs: 240,
                  sm: 150,
                },
                backgroundImage: {
                  xs: "url(/images/home-grid/2.png)",
                  sm: "url(/images/home-grid/2.png)",
                },
                backgroundSize: { xs: "cover", sm: "cover" },
                backgroundRepeat: "no-repeat",
              }}
            />
            <Box
              sx={{
                width: "100%",
                height: {
                  xs: 240,
                  sm: 150,
                },
                mt: 2,
                backgroundImage: {
                  xs: "url(/images/home-grid/3.png)",
                  sm: "url(/images/home-grid/3.png)",
                },
                backgroundSize: { xs: "cover", sm: "cover" },
                backgroundRepeat: "no-repeat",
              }}
            />
          </Grid>
          <Grid item xs={3} sm={3}>
            <Box
              sx={{
                width: "100%",
                height: {
                  xs: 240,
                  sm: 314,
                },
                backgroundImage: {
                  xs: "url(/images/home-grid/4.png)",
                  sm: "url(/images/home-grid/4.png)",
                },
                backgroundSize: { xs: "cover", sm: "cover" },
                backgroundRepeat: "no-repeat",
              }}
            />
          </Grid>
          <Grid item xs={3} sm={3}>
            <Box
              sx={{
                width: "100%",
                height: {
                  xs: 240,
                  sm: 314,
                },
                backgroundImage: {
                  xs: "url(/images/home-grid/5.png)",
                  sm: "url(/images/home-grid/5.png)",
                },
                backgroundSize: { xs: "cover", sm: "cover" },
                backgroundRepeat: "no-repeat",
              }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* ----------------UNIVERSITIES YOU CAN STUDY FROM-------------- */}
      <Box
        component="section"
        id="academy-section"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          pt: { xs: 10, md: 15.5 },
          pb: { xs: 4, md: 6.5 },
          backgroundColor: Colors.light,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 4, sm: 8 },
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: { xs: "16px", sm: "32px" },
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                px: { xs: "1rem", sm: 8.5, md: 5.5, lg: 7.2, xl: 15.5 },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.arial}`,
                  color: Colors.primary,
                  m: 0,
                  p: 0,
                  letterSpacing: "1%",
                  textTransform: "uppercase",
                }}
              >
                Academic Programs
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  font: {
                    xs: `normal normal 400 normal 30px/36px ${Fonts.arial}`,
                    md: `normal normal 400 normal 36px/44px ${Fonts.arial}`,
                  },
                  color: Colors.dark,
                  m: 0,
                  p: 0,
                  letterSpacing: "-2%",
                }}
              >
                {PROGRAM_TITLE}
              </Typography>
              <Box
                component="span"
                sx={{
                  maxWidth: 840,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="span"
                  sx={{
                    font: {
                      xs: `normal normal 400 normal 14px/28px ${Fonts.arial}`,
                      sm: `normal normal 400 normal 20px/28px ${Fonts.arial}`,
                    },
                    color: Colors.grey,
                  }}
                >
                  {PROGRAM_DESC}
                </Typography>
              </Box>
            </Box>

            <AcademicTabs handleClick={handleClickOpen} />
          </Box>
        </Box>
      </Box>

      {/* -------------------YOUR FUTURE IN YOUR HANDS -----------------------------*/}
      <Box
        sx={{
          width: "100%",
          height: { xs: 850, sm: 456 },
          padding: { xs: "70px 0", sm: "96px 0" },
          backgroundImage: {
            xs: "url('/images/graduate-sm.svg')",
            sm: "url('/images/graduate.svg')",
          },
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: "48px", sm: "64px" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: { xs: "8px", sm: "16px" },
            px: { xs: 4, sm: 8.5, md: 5.5, lg: 7.2, xl: 15.5 },
            alignItems: { xs: "center", sm: "flex-start" },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              font: `normal normal 600 normal 36px/44px ${Fonts.arial}`,
              color: Colors.light,
              mt: -3,
              p: 0,
              letterSpacing: "2%",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Your Future in Your Hands
          </Typography>
          <Typography
            variant="span"
            sx={{
              maxWidth: 665,
              font: {
                xs: `normal normal 400 normal 12px/20px ${Fonts.arial}`,
                md: `normal normal 400 normal 14px/20px ${Fonts.arial}`,
              },
              color: "#B9C8CD",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            {EDUVACITY_VALUE}
          </Typography>
          <Box
            sx={{
              width: "100%",
              mt: 3,
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            <Box
              onClick={() => router.push("/signup")}
              sx={{
                padding: "12px 20px 12px 20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                font: `normal normal 500 normal 14px/19.2px ${Fonts.arial}`,
                cursor: "pointer",
                color: "rgba(230, 244, 237, 1)",
                borderRadius: "46px",
                background: Colors.primary,
                "&:hover": {
                  background: Colors.primary,
                },
              }}
            >
              Book Consultation <ArrowUp />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ----------------WHY LEARN AT EDUVACITY-------------*/}
      <Box
        component="section"
        id="program-section"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          pt: { xs: 8, md: 15.5 },
          pb: { xs: 8, md: 6.5 },
          backgroundColor: "#F6F7F7",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            px: { xs: "1rem", sm: "1rem", md: 5.5, lg: 7.2, xl: 15.5 },
            gap: { xs: "32px", sm: 8 },
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: { xs: "40px", sm: "80px" },
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  font: {
                    xs: `normal normal 400 normal 30px/36px ${Fonts.arial}`,
                    md: `normal normal 400 normal 36px/44px ${Fonts.arial}`,
                  },
                  color: "#011B23",
                  m: 0,
                  p: 0,
                  letterSpacing: "-2%",
                }}
              >
                {EMPOWERMENT_TITLE}
              </Typography>
              <Box
                component="span"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="span"
                  sx={{
                    font: {
                      xs: `normal normal 400 normal 16px/28px ${Fonts.arial}`,
                      sm: `normal normal 400 normal 20px/28px ${Fonts.arial}`,
                    },
                    color: Colors.grey,
                  }}
                >
                  {EMPOWERMENT_DESC}
                </Typography>
                <br />
                <Typography
                  variant="span"
                  sx={{
                    font: {
                      xs: `normal normal 400 normal 16px/28px ${Fonts.arial}`,
                      sm: `normal normal 400 normal 20px/28px ${Fonts.arial}`,
                    },
                    color: Colors.grey,
                    mt: 2,
                  }}
                >
                  {EMPOWERMENT_DESC2}
                </Typography>
              </Box>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                }}
              >
                {showCover && (
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      cursor: "pointer",
                      top: "20px",
                    }}
                    onClick={handleVideoClick}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: { xs: 240, sm: 516 },
                        backgroundImage: {
                          xs: "url(/images/video-guy-xs.svg)",
                          sm: "url(/images/video-guy.svg)",
                        },
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        borderRadius: { md: "24px" },
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        inset: {
                          xs: "45px 0 0 0",
                          sm: "133px 0 0 0",
                          md: "173px 0 0 0",
                          lg: "200px 0 0 0",
                          xl: "250px 0 0 0",
                        },
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
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
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "0px",
                      paddingBottom: "56.250%",
                    }}
                  >
                    <iframe
                      title="How to be a school teacher"
                      allow="fullscreen"
                      allowFullScreen
                      height="100%"
                      src="https://streamable.com/e/m2a6rc"
                      width="100%"
                      style={{
                        display: showCover ? "none" : "block",
                        borderRadius: "24px",
                        border: "none",
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        left: "0px",
                        top: "0px",
                        overflow: "hidden",
                        cursor: "pointer",
                      }}
                    ></iframe>
                  </div>
                  {/* <iframe
                    title="How to be a school teacher"
                    width="100%"
                    height="100%"
                    src={`https://streamable.com/m2a6rc`}
                    allowFullScreen
                    style={{
                      display: showCover ? 'none' : 'block',
                      borderRadius: '24px',
                      position: 'relative',
                      width: '100%',
                      cursor: 'pointer',
                      top: '20px',
                    }}
                  /> */}
                </Box>
              </div>
            </Box>
            {/* <Box>
              <Divider
                sx={{
                  borderColor: "#EAECF0",
                  mt: { xs: showCover ? 10 : 8, sm: showCover ? 10 : 8 },
                }}
              />
            </Box> */}
            {/* <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                // my: 8,
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                  color: Colors.primary,
                  m: 0,
                  p: 0,
                  letterSpacing: "1%",
                  textTransform: "uppercase",
                }}
              >
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
                  letterSpacing: "-2%",
                }}
              >
                Programs from leading universities.
              </Typography>
            </Box> */}

            {/* <ProgramsCard /> */}
          </Box>
        </Box>
      </Box>

      {/* --------------COLLABORATING------------- */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 400, sm: 350 },
          padding: "96px 0",
          backgroundColor: "#F6F7F7",
          backgroundSize: "cover",
          gap: { xs: "8px", sm: "38px" },
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          display: "flex",
          flexDirection: { xs: "column", sm: "column" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "70%" },
            display: "flex",
            flexDirection: "column",
            gap: { xs: "8px", sm: "16px" },
            px: { xs: 2, sm: 8.5, md: 5.5, lg: 7.2, xl: 15.5 },
            alignItems: { xs: "center", sm: "flex-start" },
          }}
        >
          <Typography
            variant="span"
            sx={{
              font: {
                xs: `normal normal 500 normal 20px/24px ${Fonts.arial}`,
                md: `normal normal 400 normal 20px/28px ${Fonts.arial}`,
              },
              color: "#505F79",
              textAlign: { xs: "center", sm: "center" },
            }}
          >
            Proudly collaborating with academic institutions and innovative
            organisations to foster excellence and drive positive impact.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: "8px", sm: "26px" },
            px: { xs: 4, sm: 8.5, md: 5.5, lg: 7.2, xl: 15.5 },
            alignItems: { xs: "flex-start", sm: "flex-start" },
            mt: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: { xs: "8px", sm: "7px" },
              alignItems: { xs: "center", sm: "flex-start" },
            }}
          >
            <Box
              sx={{
                width: 60,
                height: {
                  xs: 50,
                  sm: 44,
                },
                backgroundImage: {
                  xs: "url(/images/assetium-logo.png)",
                  sm: "url(/images/assetium-logo.png)",
                },
                backgroundSize: { xs: "cover", sm: "fit" },
                backgroundRepeat: "no-repeat",
              }}
            />
            <Typography
              variant="span"
              sx={{
                font: {
                  xs: `normal normal 500 normal 16px/24px ${Fonts.arial}`,
                  md: `normal normal 700 normal 28px/24px ${Fonts.arial}`,
                },
                color: "#000000",
                textAlign: { xs: "center", sm: "left" },
                alignSelf: "center",
              }}
            >
              Assetium Capital Management Limited
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: { xs: "8px", sm: "7px" },
              alignItems: { xs: "flex-start", sm: "flex-start" },
            }}
          >
            <Box
              sx={{
                width: 59,
                height: {
                  xs: 57,
                  sm: 59,
                },
                backgroundImage: {
                  xs: "url(/images/abu-logo.png)",
                  sm: "url(/images/abu-logo.png)",
                },
                backgroundSize: { xs: "cover", sm: "fit" },
                backgroundRepeat: "no-repeat",
              }}
            />
            <Typography
              variant="span"
              sx={{
                font: {
                  xs: `normal normal 400 normal 16px/24px ${Fonts.arial}`,
                  md: `normal normal 700 normal 28px/24px ${Fonts.arial}`,
                },
                color: "#000000",
                textAlign: { xs: "left", sm: "left" },
                alignSelf: "center",
              }}
            >
              Ahmadu Bello University
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* -------------EDUVACITY MASTERCLASS--------------- */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 300, sm: 350 },
          padding: "96px 0",
          backgroundColor: "#011B23",
          backgroundSize: "cover",
          gap: { xs: "8px", sm: "38px" },
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          display: "flex",
          flexDirection: { xs: "column", sm: "column" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "100%" },
            display: "flex",
            flexDirection: "column",
            gap: { xs: "16px", sm: "16px" },
            px: { xs: 4, sm: 8.5, md: 5.5, lg: 7.2, xl: 15.5 },
            alignItems: { xs: "center", sm: "flex-start" },
          }}
        >
          <Typography
            variant="span"
            sx={{
              font: {
                xs: `normal normal 400 normal 26px/24px ${Fonts.arial}`,
                md: `normal normal 400 normal 36px/44px ${Fonts.arial}`,
              },
              color: Colors.light,
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Eduvacity Masterclassess
          </Typography>{" "}
          <Typography
            variant="span"
            sx={{
              font: {
                xs: `normal normal 300 normal 16px/24px ${Fonts.arial}`,
                md: `normal normal 300 normal 20px/28px ${Fonts.arial}`,
              },
              color: Colors.light,
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Our Masterclasses offer an unparalleled opportunity for students to
            learn from industry experts, bridging the gap between academic
            theory and real-world practice.
          </Typography>
          <Box
            onClick={() => router.push("/signup")}
            sx={{
              padding: "12px 20px 12px 20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              font: `normal normal 500 normal 14px/19.2px ${Fonts.primary}`,
              cursor: "pointer",
              color: "rgba(230, 244, 237, 1)",
              borderRadius: "46px",
              background: Colors.primary,
              "&:hover": {
                background: Colors.primary,
              },
            }}
          >
            Watch More <ArrowUp />
          </Box>
        </Box>
      </Box>

      {/* -----------------ACADEMIC PROGRAMS---------------*/}
      <Box
        component="section"
        id="feature-section"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          pt: { xs: 8, md: 15.5 },
          pb: { xs: 8, md: 6.5 },
          backgroundColor: Colors.light,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            px: { xs: "1rem", sm: "1rem", md: 5.5, lg: 7.2, xl: 15.5 },
            gap: 8,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: { xs: "5px", sm: "16px" },
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.arial}`,
                  color: Colors.primary,
                  m: 0,
                  p: 0,
                  letterSpacing: "1%",
                  textTransform: "uppercase",
                }}
              >
                PROGRAMS
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: "40px", sm: "60px" },
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "28px",
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    font: `normal normal 500 normal 36px/44px ${Fonts.arial}`,
                    color: Colors.darkBlue,
                    m: 0,
                    p: 0,
                    letterSpacing: "1%",
                  }}
                >
                  Academic Programs
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    font: `normal normal 500 normal 16px/24px ${Fonts.arial}`,
                    color: Colors.grey,
                    letterSpacing: "1%",
                  }}
                >
                  Prominent academics and industry leaders have joined to create
                  high-quality, affordable programs that will prepare you for
                  success in the job market
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: "20px",
                  }}
                >
                  <Box
                    onClick={() => router.push("/signup")}
                    sx={{
                      padding: "12px 20px 12px 20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      font: `normal normal 500 normal 14px/19.2px ${Fonts.primary}`,
                      cursor: "pointer",
                      color: "rgba(230, 244, 237, 1)",
                      borderRadius: "46px",
                      background: Colors.primary,
                      "&:hover": {
                        background: Colors.primary,
                      },
                    }}
                  >
                    Apply Now <ArrowUp />
                  </Box>
                  <Box
                    onClick={() => router.push("/signup")}
                    sx={{
                      padding: "12px 20px 12px 20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: `2px solid ${Colors.primary}`,
                      font: `normal normal 500 normal 14px/19.2px ${Fonts.primary}`,
                      cursor: "pointer",
                      color: Colors.primary,
                      borderRadius: "46px",
                      background: Colors.light,
                      // "&:hover": {
                      //   background: Colors.primary,
                      // },
                    }}
                  >
                    View Admission Requirements
                  </Box>
                </Box>
                <Box
                  sx={{
                    height: {
                      xs: 240,
                      sm: 550,
                    },
                    backgroundImage: {
                      xs: "url(/images/gallery.svg)",
                      sm: "url(/images/gallery.svg)",
                    },
                    backgroundSize: { xs: "fit", sm: "fit" },
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top",
                  }}
                />
              </Box>
              <Box sx={{}}>
                <AcademicPrograms />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* -----------LOVERS OF EDUVACITY--------- */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 850, sm: 450 },
          padding: "50px 0",
          backgroundColor: "#F6F7F7",
          backgroundSize: "cover",
          gap: { xs: "8px", sm: "38px" },
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          display: "flex",
          flexDirection: { xs: "column", sm: "column" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "100%" },
            display: "flex",
            flexDirection: "row",
            gap: { xs: "8px", sm: "10px" },
            px: { xs: 4, sm: 8.5, md: 5.5, lg: 7.2, xl: 15.5 },
          }}
        >
          <Typography
            variant="span"
            sx={{
              font: {
                xs: `normal normal 400 normal 16px/24px ${Fonts.arial}`,
                md: `normal normal 400 normal 36px/44px ${Fonts.arial}`,
              },
              color: Colors.darkBlue,
            }}
          >
            Why
          </Typography>
          <Typography
            variant="span"
            sx={{
              font: {
                xs: `normal normal 700 normal 16px/24px ${Fonts.arial}`,
                md: `normal normal 700 normal 36px/44px ${Fonts.arial}`,
              },
              color: Colors.primary,
            }}
          >
            Learners
          </Typography>
          <Typography
            variant="span"
            sx={{
              font: {
                xs: `normal normal 400 normal 16px/24px ${Fonts.arial}`,
                md: `normal normal 400 normal 36px/44px ${Fonts.arial}`,
              },
              color: Colors.darkBlue,
            }}
          >
            Love Eduvacity
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: { xs: "8px", sm: "26px" },
            px: { xs: 4, sm: 8.5, md: 5.5, lg: 7.2, xl: 15.5 },
            alignItems: { xs: "center", sm: "flex-start" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: { xs: "8px", sm: "7px" },
              alignItems: { xs: "center", sm: "flex-start" },
            }}
          >
            <Testimonial />
          </Box>
        </Box>
      </Box>

      {/* FREQUENTLY ASK QUESTION */}
      <Box
        component="section"
        id="hero-section"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          pt: { xs: 8, md: 15.5 },
          pb: { xs: 4, md: 6.5 },
          backgroundColor: Colors.light,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            px: { xs: "1rem", sm: "1rem", md: 5.5, lg: 7.2, xl: 15.5 },
            gap: 8,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: { xs: "40px", sm: "80px" },
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                  color: Colors.primary,
                  m: 0,
                  p: 0,
                  letterSpacing: "1%",
                  textTransform: "uppercase",
                }}
              >
                Faqs
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  textAlign: "center",
                  font: {
                    xs: `normal normal 600 normal 30px/36px ${Fonts.primary}`,
                    md: `normal normal 600 normal 36px/44px ${Fonts.primary}`,
                  },
                  color: Colors.dark,
                  m: 0,
                  p: 0,
                  letterSpacing: "-2%",
                }}
              >
                Frequently asked questions
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
                px: 1,
              }}
            >
              <FrequentlyAskQuestions />
            </Box>
            <Box
              sx={{
                width: "100%",
                padding: {
                  xs: "32px 16px 32px 16px",
                  sm: "32px 32px 40px 32px",
                },
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "32px",
                background: "#F6F7F7",
              }}
            >
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
                    background: "transparent",
                  }}
                />
                <Avatar alt="avatar 2" src="/images/Avatar3.png" />
              </AvatarGroup>
              <Box
                sx={{
                  width: { xs: "100%", sm: "100%" },
                  display: "flex",
                  flexDirection: "row",
                  gap: { xs: "8px", sm: "10px" },
                  px: { xs: 4, sm: 8.5, md: 5.5, lg: 7.2, xl: 15.5 },
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="span"
                  sx={{
                    font: {
                      xs: `normal normal 600 normal 16px/24px ${Fonts.inter}`,
                      md: `normal normal 600 normal 36px/44px ${Fonts.inter}`,
                    },
                    color: Colors.darkBlue,
                  }}
                >
                  Join Eduvacity
                </Typography>
                <Typography
                  variant="span"
                  sx={{
                    font: {
                      xs: `normal normal 600 normal 16px/24px ${Fonts.inter}`,
                      md: `normal normal 600 normal 36px/44px ${Fonts.inter}`,
                    },
                    color: "#E3A229",
                  }}
                >
                  Referral
                </Typography>
                <Typography
                  variant="span"
                  sx={{
                    font: {
                      xs: `normal normal 600 normal 16px/24px ${Fonts.inter}`,
                      md: `normal normal 600 normal 36px/44px ${Fonts.inter}`,
                    },
                    color: Colors.darkBlue,
                  }}
                >
                  Program
                </Typography>
              </Box>
              <Typography
                variant="span"
                sx={{
                  font: {
                    xs: `normal normal 400 normal 18px/28px ${Fonts.arial}`,
                    sm: `normal normal 400 normal 18px/28px ${Fonts.arial}`,
                  },
                  color: Colors.grey,
                }}
              >
                Monetize your influence; Refer students to Eduvacity and earn
                25,000
              </Typography>
              <Box>
                <Box
                  onClick={handleClickOpen}
                  sx={{
                    padding: "12px 20px 12px 20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    font: `normal normal 500 normal 14px/[19.2px] ${Fonts.primary}`,
                    cursor: "pointer",
                    color: "#E6F4ED",
                    borderRadius: "46px",
                    background: Colors.primary,
                    "&:hover": {
                      background: Colors.primary,
                    },
                  }}
                >
                  Register and Start Earning <ArrowUp />
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
