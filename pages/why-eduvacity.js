import { useState } from "react"
import {
  Box,
  Card,
  CardHeader,
  CssBaseline,
  Divider,
  Typography,
} from "@mui/material"
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
} from "../src/components/svg"
import { Colors } from "../src/components/themes/colors"
import { Fonts } from "../src/components/themes/fonts"
import HomePageLayout from "../src/views/home/layout"
import digitalLeraning from "../public/images/digital-learning.svg"
import Image from "next/image"
import JoinWaitlistDialog from "../src/components/waitlistdialog"
import {
  EDUVACITY_VALUE,
  WHY_EDUVACITY_DESC,
  WHY_EDUVACITY_TITLE,
  WHY_EDUVACITY_VALUE,
  WHY_EDUVACITY_VALUE_DESC,
} from "../src/utils/contants"

export default function WhyEduvasityPage() {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

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
            px: { xs: 4, sm: 8.5, md: 5.5, lg: 7.2, xl: 12.5 },
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
                }}
              >
                <Box sx={{ width: 672 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      width: "100%",
                      maxWidth: { xs: 343, sm: 570, md: 672 },
                      font: {
                        xs: `normal normal 600 normal 36px/44px ${Fonts.inter}`,
                        md: `normal normal 600 normal 46px/60px ${Fonts.inter}`,
                      },
                      color: Colors.light,
                      m: 0,
                      p: 0,
                      letterSpacing: { xs: "-0.02em", sm: "-2%" },
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
                    maxWidth: { xs: 343, sm: 570, md: 672 },
                    font: {
                      xs: `normal normal 500 normal 18px/28px ${Fonts.primary}`,
                      md: `normal normal 500 normal 20px/30px ${Fonts.primary}`,
                    },
                    color: Colors.textColor,
                    m: 0,
                    p: 0,
                    letterSpacing: { xs: "0em" },
                    maxWidth: 480,
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
        id="access-section"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          pt: { xs: 6, md: 12.5 },
          pb: { xs: 2, md: 12.5 },
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
            px: { xs: 4, sm: 8.5, md: 5.5, lg: 7.2, xl: 12.5 },
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
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: "30px", sm: "64px" },
              }}
            >
              <Card
                sx={{
                  width: "100%",
                  background: Colors.secondary,
                  borderRadius: "12px",
                  boxShadow: "none",
                  px: { xs: 2, sm: 5 },
                  py: { xs: 2, sm: 8 },
                  display: { xs: "none", sm: "block" },
                }}
              >
                <Box
                  sx={{
                    maxWidth: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <CardHeader
                    avatar={<StackBookAvatar />}
                    title={
                      <Typography
                        variant="span"
                        sx={{
                          width: "100%",
                          font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                          color: Colors.light,
                          m: 0,
                          p: 0,
                          letterSpacing: "-2%",
                        }}
                      >
                        Collaborates with experts institutions to offer courses
                        aligned with industry needs.
                      </Typography>
                    }
                    sx={{
                      width: "100%",
                      maxWidth: { xs: 343, sm: 500 },
                      background: "rgba(255, 255, 255, 0.4)",
                      p: 2,
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      borderRadius: 1,
                    }}
                  />
                  <CardHeader
                    avatar={<MonitorIcon />}
                    title={
                      <Typography
                        variant="span"
                        sx={{
                          width: "100%",
                          font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                          color: Colors.light,
                          m: 0,
                          p: 0,
                          letterSpacing: "-2%",
                        }}
                      >
                        Leverage Convenience and Accessibility
                      </Typography>
                    }
                    sx={{
                      width: "100%",
                      maxWidth: { xs: 343, sm: 500 },
                      background: "rgba(255, 255, 255, 0.4)",
                      p: 2,
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      borderRadius: 1,
                    }}
                  />
                  <CardHeader
                    avatar={<PeopleAvarter />}
                    title={
                      <Typography
                        variant="span"
                        sx={{
                          width: "100%",
                          font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                          color: Colors.light,
                          m: 0,
                          p: 0,
                          letterSpacing: "-2%",
                        }}
                      >
                        Get a Personalize Learning Experience Tailored for You
                      </Typography>
                    }
                    sx={{
                      width: "100%",
                      maxWidth: { xs: 343, sm: 500 },
                      background: "rgba(255, 255, 255, 0.4)",
                      p: 2,
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      borderRadius: 1,
                    }}
                  />{" "}
                  <CardHeader
                    avatar={<PeopleCommunityAvater />}
                    title={
                      <Typography
                        variant="span"
                        sx={{
                          width: "100%",
                          font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                          color: Colors.light,
                          m: 0,
                          p: 0,
                          letterSpacing: "-2%",
                        }}
                      >
                        Enhanced Collaboration & Cost Effective Education
                      </Typography>
                    }
                    sx={{
                      width: "100%",
                      maxWidth: { xs: 343, sm: 500 },
                      background: "rgba(255, 255, 255, 0.4)",
                      p: 2,
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      borderRadius: 1,
                    }}
                  />{" "}
                </Box>
              </Card>
              <Box
                sx={{
                  maxWidth: 560,
                  height: 288,
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "12px",
                  mt: { xs: 0, sm: 5, md: 10 },
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    font: {
                      xs: `normal normal 600 normal 25px/36px ${Fonts.primary}`,
                      md: `normal normal 600 normal 36px/44px ${Fonts.primary}`,
                    },
                    color: Colors.dark,
                    m: 0,
                    p: 0,
                    letterSpacing: "-2%",
                  }}
                >
                  {WHY_EDUVACITY_VALUE}
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
                        xs: `normal normal 400 normal 18px/28px ${Fonts.inter}`,
                        sm: `normal normal 400 normal 20px/30px ${Fonts.inter}`,
                      },
                      color: Colors.textPrimaryDark,
                    }}
                  >
                    {WHY_EDUVACITY_VALUE_DESC}
                  </Typography>
                  <Box sx={{ width: 160, mt: 3 }}>
                    <Box
                      onClick={handleClickOpen}
                      sx={{
                        height: 48,
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
                </Box>
              </Box>
              <Card
                sx={{
                  width: "100%",
                  background: Colors.secondary,
                  borderRadius: "12px",
                  boxShadow: "none",
                  px: 4,
                  py: 4,
                  display: { xs: "block", sm: "none" },
                  my: 4,
                }}
              >
                <Box
                  sx={{
                    maxWidth: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <CardHeader
                    avatar={<StackBookAvatar />}
                    title={
                      <Typography
                        variant="span"
                        sx={{
                          font: `normal normal 500 normal 14px/18px ${Fonts.primary}`,
                          color: Colors.light,
                          letterSpacing: { xs: "0em", sm: "-2%" },
                          textAlign: "left",
                        }}
                      >
                        Collaborates with experts institutions to offer courses
                        aligned with industry needs
                      </Typography>
                    }
                    sx={{
                      width: 300,
                      background: "rgba(255, 255, 255, 0.4)",
                      p: 2,
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      borderRadius: 1,
                    }}
                  />
                  <CardHeader
                    avatar={<MonitorIcon />}
                    title={
                      <Typography
                        variant="span"
                        sx={{
                          width: "100%",
                          font: `normal normal 500 normal 14px/18px ${Fonts.primary}`,
                          color: Colors.light,
                          m: 0,
                          p: 0,
                          letterSpacing: "-2%",
                        }}
                      >
                        Leverage Convenience and Accessibility
                      </Typography>
                    }
                    sx={{
                      width: 300,
                      background: "rgba(255, 255, 255, 0.4)",
                      p: 2,
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      borderRadius: 1,
                    }}
                  />
                  <CardHeader
                    avatar={<PeopleAvarter />}
                    title={
                      <Typography
                        variant="span"
                        sx={{
                          width: "100%",
                          font: `normal normal 500 normal 14px/18px ${Fonts.primary}`,
                          color: Colors.light,
                          m: 0,
                          p: 0,
                          letterSpacing: "-2%",
                        }}
                      >
                        Get a Personalize Learning Experience Tailored for You
                      </Typography>
                    }
                    sx={{
                      width: 300,
                      background: "rgba(255, 255, 255, 0.4)",
                      p: 2,
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      borderRadius: 1,
                    }}
                  />{" "}
                  <CardHeader
                    avatar={<PeopleCommunityAvater />}
                    title={
                      <Typography
                        variant="span"
                        sx={{
                          font: `normal normal 500 normal 14px/18px ${Fonts.primary}`,
                          color: Colors.light,
                          m: 0,
                          p: 0,
                          letterSpacing: "-2%",
                        }}
                      >
                        Enhanced Collaboration & Cost Effective Education
                      </Typography>
                    }
                    sx={{
                      width: 300,
                      background: "rgba(255, 255, 255, 0.4)",
                      p: 2,
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      borderRadius: 1,
                    }}
                  />{" "}
                </Box>
              </Card>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* FEATURES SECTION */}
      <Box sx={{ px: { xs: 4, sm: 3, lg: 12.5, xl: 16 } }}>
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
          py: { xs: 2, md: 12.5 },
          backgroundColor: Colors.light,
          gap: { xs: 0, sm: 12 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: { xs: 850, sm: 560 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            px: { xs: 4, sm: 8.5, md: 5.5, lg: 7.2, xl: 12.5 },
            gap: { xs: 4, sm: 8 },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "55%" },
              pt: { xs: 6, md: 12.5 },
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Card
              sx={{
                boxShadow: "none",
                width: "100%",
                maxWidth: { xs: "100%", sm: "90%" },
                display: "flex",
                flexDirection: "column",
                gap: "32px",
                background: "transparent",
              }}
            >
              <Box>
                <InstitutionIcon />
              </Box>
              <Box sx={{ width: "100%" }}>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  sx={{
                    font: `normal normal 600 normal 30px/36px ${Fonts.Demi}`,
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
                      font: `normal normal 400 normal 18px/28px ${Fonts.inter}`,
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
                      font: `normal normal 400 normal 18px/28px ${Fonts.inter}`,
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
                      font: `normal normal 400 normal 18px/28px ${Fonts.inter}`,
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

          <Box
            sx={{
              width: { xs: "100%", sm: "45%" },
              height: { xs: 342, sm: "100%" },
              backgroundImage: {
                xs: "url(/images/access-building-xs.svg)",
                sm: "url(/images/access-building.svg)",
              },
              backgroundSize: "contain",
              backgroundPosition: { xs: "top right", sm: "top right" },
              backgroundRepeat: "no-repeat",
            }}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: { xs: 850, sm: 560 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            px: { xs: 4, sm: 8.5, md: 5.5, lg: 7.2, xl: 12.5 },
            gap: 8,
          }}
        >
          <Box
            sx={{
              width: { xs: 343, sm: "45%" },
              backgroundImage: "url(/images/lady-in-class.svg)",
              backgroundPosition: "top right",
              backgroundRepeat: "no-repeat",
              display: { xs: "none", sm: "block" },
            }}
          />
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
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
              <Box sx={{ width: "100%" }}>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  sx={{
                    font: {
                      xs: `normal normal 600 normal 26px/36px ${Fonts.Demi}`,
                      sm: `normal normal 600 normal 30px/36px ${Fonts.Demi}`,
                    },
                    color: Colors.dark,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Personalised Experience
                </Typography>
                <Box sx={{ width: "100%", display: "flex", gap: "12px" }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      font: `normal normal 400 normal 18px/28px ${Fonts.inter}`,
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
                      font: `normal normal 400 normal 18px/28px ${Fonts.inter}`,
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
                      font: `normal normal 400 normal 18px/28px ${Fonts.inter}`,
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
          <Box
            sx={{
              width: { xs: 343, sm: "45%" },
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
            px: { xs: 4, sm: 8.5, md: 5.5, lg: 7.2, xl: 12.5 },
            gap: 8,
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: 768,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: { xs: "8px", sm: "16px" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                font: {
                  xs: `normal normal 600 normal 30px/36px ${Fonts.Demi}`,
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
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="span"
                sx={{
                  font: {
                    xs: `normal normal 400 normal 18px/28px ${Fonts.inter}`,
                    sm: `normal normal 400 normal 20px/28px ${Fonts.inter}`,
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
            <Box sx={{ width: "100%", height: { xs: 200, sm: "100%" } }}>
              <Image
                src={digitalLeraning}
                alt="ipad landscape photo"
                layout="responsive"
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{ px: { xs: 4, sm: 3, lg: 12.5, xl: 16 } }}>
          <Divider
            sx={{
              borderColor: "#EAECF0",
            }}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: 579,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            px: { xs: 4, sm: 3, lg: 5, xl: 16 },
            gap: 8,
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                boxShadow: "none",
                width: "100%",
                maxWidth: 576,
                display: "flex",
                flexDirection: "column",
                gap: "32px",
                background: "transparent",
              }}
            >
              <Box>
                <PeopleIcon />
              </Box>
              <Box sx={{ width: "100%" }}>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  sx={{
                    font: `normal normal 600 normal 30px/36px ${Fonts.Demi}`,
                    color: Colors.dark,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Career Support
                </Typography>
                <Box sx={{ width: "100%", display: "flex", gap: "12px" }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      font: `normal normal 400 normal 18px/28px ${Fonts.inter}`,
                      color: "#475467",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Get personalized career advice through 1-1 sessions with
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
                      font: `normal normal 400 normal 18px/28px ${Fonts.inter}`,
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
                      font: `normal normal 400 normal 18px/28px ${Fonts.inter}`,
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
                  onClick={handleClickOpen}
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
          <Box
            sx={{
              width: "50%",
              height: "100%",
              backgroundImage: "url('/images/gallery.svg')",
              backgroundPosition: "top right",
              backgroundRepeat: "no-repeat",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: { xs: 850, sm: "100%" },
          padding: "96px 0 96px 0",
          backgroundImage: {
            xs: "url('/images/graduate-sm.svg')",
            sm: "url('/images/graduate.svg')",
          },
          backgroundSize: { xs: "cover", sm: "cover" },
          backgroundRepeat: "no-repeat",
          gap: { xs: "48px", sm: "64px" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: { xs: "8px", sm: "16px" },
            px: { xs: 4, sm: 8.5, md: 5.5, lg: 7.2, xl: 12.5 },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              font: `normal normal 600 normal 36px/44px ${Fonts.primary}`,
              color: Colors.light,
              mt: -3,
              p: 0,
              letterSpacing: "2%",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
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
              color: "#87A0A8",
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
              onClick={handleClickOpen}
              sx={{
                width: { xs: 159, sm: 159 },
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
              Get started <ArrowUp />
            </Box>
          </Box>
        </Box>
      </Box>
      <JoinWaitlistDialog open={open} handleClose={handleClose} />
    </Box>
  )
}

WhyEduvasityPage.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>
}
