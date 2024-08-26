import {
  Box,
  Card,
  CssBaseline,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import digitalLeraning from "../public/images/learntool.png";
import {
  ArrowUp,
  CheckCircled,
  InstitutionIcon,
  MonitorIcon,
  PeopleAvarter,
  PeopleCommunityAvater,
  PeopleIcon,
  PersonCheckedIcon,
  StackBookAvatar,
} from "../src/components/svg";
import { Colors } from "../src/components/themes/colors";
import { Fonts } from "../src/components/themes/fonts";
import JoinWaitlistDialog from "../src/components/waitlistdialog";
import { goToPortal } from "../src/utils";
import {
  EDUVACITY_VALUE,
  WHY_EDUVACITY_DESC,
  WHY_EDUVACITY_TITLE,
  WHY_EDUVACITY_VALUE,
  WHY_EDUVACITY_VALUE_DESC,
} from "../src/utils/contants";
import HomePageLayout from "../src/views/home/layout";

export default function WhyEduvasityPage() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          backgroundColor: Colors.secondary,
          pt: { xs: 4, md: 12.5 },
          pb: { xs: 4, md: 6.5 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            px: { xs: 3, sm: 8.5, md: 5.5, lg: 7.2, xl: 12.5 },
            py: { xs: 4, sm: 3, xl: 4 },
            gap: { xs: "32px", sm: "64px" },
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
                gap: "16px",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  font: {
                    xs: `normal normal 500 normal 14px/20px ${Fonts.primary}`,
                    sm: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                  },
                  color: Colors.primary,
                  m: 0,
                  p: 0,
                  letterSpacing: "0em",
                  textTransform: "uppercase",
                  textAlign: "left",
                }}
              >
                Why Eduvacity
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: { xs: "12px", sm: "64px" },
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ width: "100%", maxWidth: 672 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      width: "100%",
                      maxWidth: { xs: "100%", sm: "98%", md: 672 },
                      font: {
                        xs: `normal normal 600 normal 32.5px/44px ${Fonts.inter}`,
                        md: `normal normal 600 normal 46px/60px ${Fonts.inter}`,
                      },
                      color: Colors.light,
                      m: 0,
                      p: 0,
                      letterSpacing: "-0.02em",
                      textAlign: "left",
                    }}
                  >
                    {WHY_EDUVACITY_TITLE}
                  </Typography>
                </Box>
                <Typography
                  variant="p"
                  sx={{
                    width: "100%",
                    maxWidth: { xs: "100%", sm: "98%", md: 672 },
                    font: {
                      xs: `normal normal 500 normal 14px/18px ${Fonts.primary}`,
                      md: `normal normal 500 normal 14px/18px ${Fonts.primary}`,
                    },
                    color: Colors.textColor,
                    m: 0,
                    p: 0,
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  {WHY_EDUVACITY_DESC}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* ACCESS SECTION */}

      <Box
        component="section"
        id="feature-section"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          px: "10%",
          my: 10,
          backgroundColor: Colors.light,
          gap: { xs: 2, sm: 12 },
        }}
      >
        <Box
          sx={{
            width: "80%",
            height: { xs: 650, sm: 460 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <Box
            sx={{
              width: { xs: "50%", sm: "50%" },
              display: { xs: "none", sm: "flex" },
              alignContent: "center",
            }}
          >
            <Grid sx={{ justifyContent: 'center',  alignItems: "center"}} container columnGap={10} rowSpacing={2} >
                <Grid xs={5} sm={3}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      p: 2,
                      border: "1px solid ",
                      borderColor: Colors.secondary,
                      borderRadius: 1,
                      alignItems: "center",
                    }}
                  >
                    <StackBookAvatar />
                    <Typography
                      variant="span"
                      sx={{
                        width: "100%",
                        font: `normal  900 14px/18px ${Fonts.primary}`,
                        color: Colors.secondary,
                        textAlign: "center",
                        fontFamily: Fonts.secondary
                      }}
                    >
                      Industry-aligned courses
                    </Typography>
                  </Box>
                </Grid>
                <Grid xs={3}>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      p: 2,
                      border: "1px solid ",
                      borderColor: Colors.secondary,
                      borderRadius: 1,
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <MonitorIcon />
                    </Box>
                    <Typography
                      variant="span"
                      sx={{
                        width: "100%",
                        font: `normal  900 14px/18px ${Fonts.primary}`,
                        color: Colors.secondary,
                        textAlign: "center",
                        fontFamily: Fonts.secondary
                      }}
                    >
                      Convenience and accessibility.
                    </Typography>
                  </Box>
                </Grid>
                <Grid xs={3}>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      p: 2,
                      border: "1px solid ",
                      borderColor: Colors.secondary,
                      borderRadius: 1,
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <PeopleAvarter />
                    </Box>
                    <Typography
                      variant="span"
                      sx={{
                        width: "100%",
                        font: `normal  900 14px/18px ${Fonts.primary}`,
                        color: Colors.secondary,
                        textAlign: "center",
                        fontFamily: Fonts.secondary
                      }}
                    >
                      Personalized Learning Experience
                    </Typography>
                  </Box>
                </Grid>
                <Grid xs={3}>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: 4,
                      p: 1,
                      border: "1px solid",
                      // borderColor: Colors.secondary,
                      borderRadius: 1,
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <PeopleCommunityAvater  />
                    </Box>
                    <Typography
                      variant="span"
                      sx={{
                        width: "100%",
                        font: `normal  900 14px/18px ${Fonts.primary}`,
                        color: Colors.secondary,
                        textAlign: "center",
                        fontFamily: Fonts.secondary
                      }}
                    >
                      Cost-Effective Education
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
          </Box>


          <Box
            sx={{
              width: { xs: "80%", md: "50%" },
              pt: { xs: 0, md: 8.5 },
            }}
          >
            <Card
              sx={{
                boxShadow: "none",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "32px",
                background: "transparent",
              }}
            >
              
              <Box sx={{ width: "100%" }}>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  sx={{
                    font: {
                      xs: `normal normal 600 normal 25px/36px ${Fonts.Demi}`,
                      sm: `normal normal 600 normal 30px/36px ${Fonts.Demi}`,
                    },
                    color: Colors.dark,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {WHY_EDUVACITY_VALUE}
                </Typography>
                
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <Box sx={{ width: "100%", display: "flex", gap: "12px" }}>
                  
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      font: {
                        xs: `normal normal 400 14px/18px ${Fonts.inter}`,
                        sm: `normal normal 400 14px/18px ${Fonts.inter}`,
                      },
                      color: "#475467",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    
                {WHY_EDUVACITY_VALUE_DESC}
        
                  </Typography>
                </Box>
               

                <Box
                  onClick={() => router.push(`${goToPortal}/signup`)}
                  sx={{
                    height: 48,
                    width: 160,
                    mt: 3,
                    padding: "12px 20px 12px 20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    font: `normal normal 500 normal 16px/19.2px ${Fonts.primary}`,
                    cursor: "pointer",
                    color: "rgba(230, 244, 237, 1)",
                    borderRadius: "46px",
                    background: Colors.primary,
                    "&:hover": {
                      background: Colors.primary,
                    },
                  }}
                >
                  Get started <ArrowUp />
                </Box>
              </Box>
            </Card>
          </Box>
        </Box>
      </Box>


      
      {/* FEATURES SECTION */}
      <Box sx={{ marginBottom: 10, px: { xs: 3, sm: 3, lg: 12.5, xl: 16 } }}>
        <Divider
          sx={{
            borderColor: "#EAECF0",
          }}
        />
      </Box>
      <Box
        component="section"
        id="feature-section"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          px: "10%",
          backgroundColor: Colors.light,
          gap: { xs: 2, sm: 12 },
        }}
      >
        {/*  Top Universities */}
        <Box
          sx={{
            width: "80%",
            height: { xs: 650, sm: 460 },
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row-reverse" },
            gap: 8,
            justifyContent: "center",
            alignContent: "center",
            margin: "auto",
          }}
        >
          <Box
            sx={{
              width: { xs: "50%", sm: "50%" },
              backgroundImage: {
                xs: "url(/images/access-building-xs.svg)",
                sm: "url(/images/access-building.svg)",
              },
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              display: { xs: "none", sm: "flex" },
              alignContent: "center",
            }}
          />
          <Box
            sx={{
              width: { xs: "80%", md: "50%" },
              pt: { xs: 0, md: 8.5 },
            }}
          >
            <Card
              sx={{
                boxShadow: "none",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "32px",
                background: "transparent",
              }}
            >
              <Box>
                <InstitutionIcon />
              </Box>
              <Box sx={{ width: "80%" }}>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  sx={{
                    font: {
                      xs: `normal normal 600 normal 25px/36px ${Fonts.Demi}`,
                      sm: `normal normal 600 normal 30px/36px ${Fonts.Demi}`,
                    },
                    color: Colors.dark,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Top Universities
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <Box sx={{ width: "100%", display: "flex", gap: "12px" }}>
                  <Box>
                    <CheckCircled />
                  </Box>{" "}
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      font: {
                        xs: `normal normal 400 14px/18px ${Fonts.inter}`,
                        sm: `normal normal 400 14px/18px ${Fonts.inter}`,
                      },
                      color: "#475467",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Learn concepts from the leading faculty in data, technology
                    and management
                  </Typography>
                </Box>
                <Box sx={{ width: "100%", display: "flex", gap: "12px" }}>
                  <Box>
                    <CheckCircled />
                  </Box>{" "}
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      font: {
                        xs: `normal normal 400 normal 14px/18px ${Fonts.inter}`,
                        sm: `normal normal 400 normal 14px/18px ${Fonts.inter}`,
                      },
                      color: "#475467",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Become an alumni of one of the top universities recognized
                    across industries
                  </Typography>
                </Box>
                <Box sx={{ width: "100%", display: "flex", gap: "12px" }}>
                  <Box>
                    <CheckCircled />
                  </Box>{" "}
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      font: {
                        xs: `normal normal 400 normal 14px/18px ${Fonts.inter}`,
                        sm: `normal normal 400 normal 14px/18px ${Fonts.inter}`,
                      },
                      color: "#475467",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Attend on-campus BaseCamps, hackathons and graduation
                    ceremonies
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Box>

          {/* no idea what this does so far */}
          <Box
            sx={{
              width: { xs: "100%", sm: "45%" },
              height: "100%",
              backgroundImage: "url(/images/lady-in-class-xs.svg)",
              backgroundPosition: { xs: "top center", sm: "top right" },
              backgroundRepeat: "no-repeat",
              display: { xs: "block", sm: "none" },
            }}
          />
        </Box>

        {/* personalised experience */}
        <Box
          sx={{
            width: "80%",
            height: { xs: 650, sm: 460 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 8,
            justifyContent: "center",
            alignContent: "center",
            margin: "auto",
          }}
        >
          <Box
            sx={{
              width: { xs: "50%", sm: "50%" },
              backgroundImage: "url(/images/lady-in-class.svg)",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              display: { xs: "none", sm: "flex" },
              alignContent: "center",
            }}
          />
          <Box
            sx={{
              width: { xs: "80%", md: "50%" },
              pt: { xs: 0, md: 8.5 },
            }}
          >
            <Card
              sx={{
                boxShadow: "none",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "32px",
                background: "transparent",
              }}
            >
              <Box>
                <PersonCheckedIcon />
              </Box>
              <Box sx={{ width: "80%" }}>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  sx={{
                    font: {
                      xs: `normal normal 600 normal 25px/36px ${Fonts.Demi}`,
                      sm: `normal normal 600 normal 30px/36px ${Fonts.Demi}`,
                    },
                    color: Colors.dark,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Personalised Experience
                </Typography>
                <Box sx={{ width: "80%", display: "flex", gap: "12px" }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      font: {
                        xs: `normal normal 400 14px/18px ${Fonts.secondary}`,
                        sm: `normal normal 400 14px/18px ${Fonts.secondary}`,
                      },
                      color: "#475467",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Stay on track with your dedicated personal student success
                    mentor
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <Box sx={{ width: "100%", display: "flex", gap: "12px" }}>
                  <Box>
                    <CheckCircled />
                  </Box>{" "}
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      font: {
                        xs: `normal normal 400 14px/18px ${Fonts.inter}`,
                        sm: `normal normal 400 14px/18px ${Fonts.inter}`,
                      },
                      color: "#475467",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Get answers to every doubt through a network of academic
                    fellows via live sessions and discussion forum
                  </Typography>
                </Box>
                <Box sx={{ width: "100%", display: "flex", gap: "12px" }}>
                  <Box>
                    <CheckCircled />
                  </Box>{" "}
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      font: {
                        xs: `normal normal 400 normal 14px/18px ${Fonts.inter}`,
                        sm: `normal normal 400 normal 14px/18px ${Fonts.inter}`,
                      },
                      color: "#475467",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Network, collaborate and learn together with your
                    batch-mates from your cohort
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Box>

          {/* no idea what this does so far */}
          <Box
            sx={{
              width: { xs: "100%", sm: "45%" },
              height: "100%",
              backgroundImage: "url(/images/lady-in-class-xs.svg)",
              backgroundPosition: { xs: "top center", sm: "top right" },
              backgroundRepeat: "no-repeat",
              display: { xs: "block", sm: "none" },
            }}
          />
        </Box>
      </Box>
      {/* DIGITAL LEARNING */}
      <Box
        component="section"
        id="feature-section"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          py: { xs: 8, md: "64px" },
          my: 10,
          backgroundColor: "#F6F7F7",
          gap: 12,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            px: { xs: 3, sm: 8.5, md: 5.5, lg: 7.2, xl: 12.5 },
            gap: 8,
          }}
        >
          <Box
            sx={{
              width: "90%",
              maxWidth: 768,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                font: {
                  xs: `normal normal 600 normal 25px/36px ${Fonts.Demi}`,
                  md: `normal normal 600 normal 36px/44px ${Fonts.Demi}`,
                },
                color: Colors.dark,
                m: 0,
                p: 0,
                letterSpacing: "-0.02em",
                textAlign: "center",
              }}
            >
              Digital Learning Tools
            </Typography>
            <Box
              component="span"
              sx={{
                width: "70%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="span"
                sx={{
                  font: {
                    xs: `normal normal 400 normal 14px/18px ${Fonts.inter}`,
                    sm: `normal normal 400 normal 14px/18px ${Fonts.inter}`,
                  },
                  color: Colors.textPrimaryDark,
                  letterSpacing: "0em",
                  textAlign: { xs: "left", sm: "center" },
                }}
              >
                Experience a transformative approach to education with the power
                of technology and digital tools. Enhance your learning journey
                through interactive resources, personalized feedback, and
                seamless collaboration, empowering you to thrive in a digital
                world.
              </Typography>
            </Box>
            <Box sx={{ width: "70%", height: { xs: 200, sm: "100%" }, mt: 2 }}>
              <Image
                src={digitalLeraning}
                alt="ipad landscape photo"
                layout="responsive"
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Career Support */}
      <Box
        component="section"
        id="feature-section"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          px: "10%",
          mb: 10,
          backgroundColor: Colors.light,
          gap: { xs: 2, sm: 12 },
        }}
      >
        <Box
          sx={{
            width: "80%",
            height: { xs: 650, sm: 460 },
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row-reverse" },
            gap: 8,
            justifyContent: "center",
            alignContent: "center",
            margin: "auto",
          }}
        >
          <Box
            sx={{
              width: { xs: "50%", sm: "50%" },
              backgroundImage: "url('/images/gallery.svg')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              display: { xs: "none", sm: "flex" },
              alignContent: "center",
            }}
          />
          <Box
            sx={{
              width: { xs: "80%", md: "50%" },
              pt: { xs: 0, md: 8.5 },
            }}
          >
            <Card
              sx={{
                boxShadow: "none",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "32px",
                background: "transparent",
              }}
            >
              <Box>
                <PeopleIcon />
              </Box>
              <Box sx={{ width: "80%" }}>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  sx={{
                    font: {
                      xs: `normal normal 600 normal 25px/36px ${Fonts.Demi}`,
                      sm: `normal normal 600 normal 30px/36px ${Fonts.Demi}`,
                    },
                    color: Colors.dark,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Career Support
                </Typography>
                <Box sx={{ width: "80%", display: "flex", gap: "12px" }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      font: {
                        xs: `normal normal 400 14px/18px ${Fonts.secondary}`,
                        sm: `normal normal 400 14px/18px ${Fonts.secondary}`,
                      },
                      color: "#475467",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Get personalised career advice through 1-1 sessions with
                    industry mentors
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <Box sx={{ width: "100%", display: "flex", gap: "12px" }}>
                  <Box>
                    <CheckCircled />
                  </Box>{" "}
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      font: {
                        xs: `normal normal 400 14px/18px ${Fonts.inter}`,
                        sm: `normal normal 400 14px/18px ${Fonts.inter}`,
                      },
                      color: "#475467",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Get interview ready via resume reviews, practice employment
                    tests and mock interviews
                  </Typography>
                </Box>
                <Box sx={{ width: "100%", display: "flex", gap: "12px" }}>
                  <Box>
                    <CheckCircled />
                  </Box>{" "}
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      font: {
                        xs: `normal normal 400 normal 14px/18px ${Fonts.inter}`,
                        sm: `normal normal 400 normal 14px/18px ${Fonts.inter}`,
                      },
                      color: "#475467",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Access to exclusive job opportunities through our partner
                    companies and hiring drives
                  </Typography>
                </Box>

                <Box
                  onClick={() => router.push(`${goToPortal}/signup`)}
                  sx={{
                    height: 48,
                    width: 160,
                    mt: 3,
                    padding: "12px 20px 12px 20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    font: `normal normal 500 normal 16px/19.2px ${Fonts.primary}`,
                    cursor: "pointer",
                    color: "rgba(230, 244, 237, 1)",
                    borderRadius: "46px",
                    background: Colors.primary,
                    "&:hover": {
                      background: Colors.primary,
                    },
                  }}
                >
                  Get started <ArrowUp />
                </Box>
              </Box>
            </Card>
          </Box>
        </Box>
      </Box>
      <JoinWaitlistDialog open={open} handleClose={handleClose} />
    </Box>
  );
}

WhyEduvasityPage.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>;
};
