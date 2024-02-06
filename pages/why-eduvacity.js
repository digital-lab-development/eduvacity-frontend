import {
  Box,
  Card,
  CardHeader,
  CssBaseline,
  Divider,
  Typography,
} from "@mui/material"
import { useRouter } from "next/router"
import React from "react"
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

export default function WhyEduvasityPage() {
  const router = useRouter()
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
          padding: "96px 0px 96px 0px",
          backgroundColor: Colors.primaryDark,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            px: { xs: 4, sm: 3, lg: 12.5, xl: 16 },
            py: { xs: 4, sm: 3, xl: 4 },
            gap: "64px",
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
                  font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                  color: Colors.primary,
                  m: 0,
                  p: 0,
                  letterSpacing: "1%",
                  textTransform: "uppercase",
                }}
              >
                Why Eduvacity
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: "64px",
                }}
              >
                <Box sx={{ width: 672 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      width: "100%",
                      font: {
                        xs: `normal normal 600 normal 30px/36px ${Fonts.primary}`,
                        md: `normal normal 600 normal 46px/60px ${Fonts.primary}`,
                      },
                      color: Colors.light,
                      m: 0,
                      p: 0,
                      letterSpacing: "-2%",
                    }}
                  >
                    Experience the future of tertiary education.
                  </Typography>
                </Box>
                <Typography
                  variant="p"
                  sx={{
                    font: {
                      xs: `normal normal 500 normal 18px/20px ${Fonts.primary}`,
                      md: `normal normal 500 normal 20px/30px ${Fonts.primary}`,
                    },
                    color: Colors.textColor,
                    m: 0,
                    p: 0,
                    maxWidth: 480,
                  }}
                >
                  We&apos;re redefining the way you learn, grow, and succeed.
                  Join us on a groundbreaking journey that brings innovation,
                  accessibility, and excellence to your career pursuits.
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
            px: { xs: 4, sm: 3, lg: 12.5, xl: 16 },
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
                          font: `normal normal 500 normal 14px/18px ${Fonts.primary}`,
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
                      xs: `normal normal 600 normal 30px/36px ${Fonts.primary}`,
                      md: `normal normal 600 normal 36px/44px ${Fonts.primary}`,
                    },
                    color: Colors.dark,
                    m: 0,
                    p: 0,
                    letterSpacing: "-2%",
                  }}
                >
                  Access industry-required experiences from your chosen
                  University, wherever you are
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
                        xs: `normal normal 500 normal 18px/28px ${Fonts.primary}`,
                        sm: `normal normal 500 normal 20px/30px ${Fonts.primary}`,
                      },
                      color: Colors.grey,
                    }}
                  >
                    Zero roadblocks left! Get the Degree you need with Eduvacity
                  </Typography>
                  <Box sx={{ width: { xs: "100%", sm: 160 }, mt: 3 }}>
                    <Box
                      onClick={() => router.push("/signup")}
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
          py: { xs: 4, md: 6.5 },
          backgroundColor: Colors.light,
          gap: 12,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: 560,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            px: { xs: 4, sm: 3, lg: 12.5, xl: 16 },
            gap: 8,
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "55%" },
              pt: { xs: 8, md: 15.5 },
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Card
              sx={{
                boxShadow: "none",
                width: "100%",
                maxWidth: "90%",
                // height: 352,
                display: "flex",
                flexDirection: "column",
                gap: "32px",
                p: 4,
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
              height: "100%",
              backgroundImage: "url('/images/access-building.svg')",
              backgroundPosition: "top right",
              backgroundRepeat: "no-repeat",
            }}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: 560,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            px: { xs: 4, sm: 3, lg: 12.5, xl: 16 },
            gap: 8,
          }}
        >
          <Box
            sx={{
              width: "50%",
              height: "100%",
              backgroundImage: "url('/images/lady-in-class.svg')",
              backgroundPosition: "top right",
              backgroundRepeat: "no-repeat",
            }}
          />
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              pt: { xs: 8, md: 8.5 },
            }}
          >
            <Card
              sx={{
                boxShadow: "none",
                width: "100%",
                maxWidth: 560,
                display: "flex",
                flexDirection: "column",
                gap: "32px",
                p: 4,
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
                    font: `normal normal 600 normal 30px/36px ${Fonts.Demi}`,
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
          py: { xs: 4, md: "64px" },
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
            px: { xs: 4, sm: 3, lg: 12.5, xl: 16 },
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
              gap: "16px",
            }}
          >
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
                    xs: `normal normal 500 normal 18px/28px ${Fonts.Demi}`,
                    sm: `normal normal 500 normal 20px/28px ${Fonts.Demi}`,
                  },
                  color: Colors.grey,
                  letterSpacing: "0em",
                  textAlign: "center",
                }}
              >
                Experience a transformative approach to education with the power
                of technology and digital tools. Enhance your learning journey
                through interactive resources, personalized feedback, and
                seamless collaboration, empowering you to thrive in a digital
                world.
              </Typography>
            </Box>
            <Box sx={{ width: "100%", height: "100%" }}>
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
              // pt: { xs: 8, md: 8 },
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
                p: 4,
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
                  onClick={() => router.push("/signup")}
                  sx={{
                    height: 48,
                    width: { xs: "100%", sm: 160 },
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
          padding: "96px 0 96px 0",
          backgroundImage: "url('/images/graduate.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          gap: "64px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            // p: "0 32px 0 32px",
            px: { xs: 4, sm: 3, lg: 12.5, xl: 16 },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              font: `normal normal 600 normal 36px/44px ${Fonts.primary}`,
              color: Colors.light,
              m: 0,
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
                xs: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
                md: `normal normal 500 normal 20px/30px ${Fonts.primary}`,
              },
              color: "#87A0A8",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Bridging the gap between skillsets and market-ready experiences...
          </Typography>
          <Box sx={{ width: { xs: "100%", sm: 159 }, mt: 3 }}>
            <Box
              onClick={() => router.push("/signup")}
              sx={{
                height: 40,
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
    </Box>
  )
}

WhyEduvasityPage.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>
}
