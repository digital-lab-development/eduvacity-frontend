import {
  Box,
  Card,
  CssBaseline,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ArrowUp, CheckCircled } from "../src/components/svg";
import { Colors } from "../src/components/themes/colors";
import { Fonts } from "../src/components/themes/fonts";
import InstructorsCards from "../src/views/become-an-instructor";
import EthicsCard from "../src/views/become-an-instructor/ethics";
import PositionsCards from "../src/views/become-an-instructor/positions";
import HomePageLayout from "../src/views/home/layout";
import axios from "axios";

const instructorPoints1 = [
  "You will be contributing to shaping the future of African education by equipping learners with the skills they need to succeed in the job market.",
  "Inspire and guide the next generation of professionals by sharing your expertise in a dynamic online learning environment.",
  "Work on your own terms and create a teaching schedule that fits your lifestyle.",
  "Join a network of passionate educators and industry experts who share your commitment to excellence.",
  "Earn competitive rates for your contributions and enjoy access to benefit packages.",
];

const instructorPoints2 = [
  "A genuine enthusiasm for sharing knowledge and inspiring learners.",
  "The ability to clearly and effectively communicate complex concepts in a way that resonates with diverse learners.",
  "Familiarity with online learning platforms and comfortable creating engaging content.",
];

export default function BecomeAnInstructor() {
  const router = useRouter();
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.eduvacity.com/api/v1/courses/"
        );
        setCourses(response.data);
        setLoading(false);
      } catch (error) {
        // setError(error);
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
      {/* hero section */}
      <Box
        component="section"
        id="hero-section"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: Colors.secondary,
          pt: { xs: 4, md: 15.5 },
          pb: { xs: 4, md: 6.5 },
        }}
      >
        <Box
          sx={{
            width: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            px: { xs: "1rem", sm: "1rem", md: 5.5, lg: 7.2, xl: 12.5 },
            py: { xs: 4, sm: 3, xl: 4 },
            gap: { xs: "32px", sm: "64px" },
            mx: "auto",
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
                Work At Eduvacity
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 1216,
                  display: "flex",
                  flexDirection: { xs: "column", lg: "row" },
                  gap: { xs: "12px", sm: "64px" },
                }}
              >
                <Box sx={{ width: "100%" }}>
                  <Typography
                    variant="h4"
                    sx={{
                      width: "100%",
                      maxWidth: { xs: "100%", sm: 570, md: 672 },
                      font: {
                        xs: `normal normal 700 normal 30px/40px ${Fonts.inter}`,
                        md: `normal normal 700 normal 40px/56px ${Fonts.inter}`,
                        lg: `normal normal 700 normal 48px/60px ${Fonts.inter}`,
                      },
                      color: Colors.light,
                      m: 0,
                      p: 0,
                      letterSpacing: "-0.02em",
                      textAlign: "left",
                    }}
                  >
                    Make quality education accessible, become an Instructor on
                    Eduvacity
                  </Typography>
                </Box>
                <Typography
                  variant="p"
                  sx={{
                    width: "100%",
                    maxWidth: { xs: 343, sm: 570, md: 480 },
                    font: {
                      xs: `normal normal 500 normal 18px/28px ${Fonts.primary}`,
                      md: `normal normal 500 normal 20px/30px ${Fonts.primary}`,
                    },
                    color: Colors.textColor,
                    m: 0,
                    p: 0,
                    letterSpacing: { xs: "0em" },
                  }}
                >
                  Join a team of goal-driven talents, passionately bridging the
                  gaps in African tertiary education.
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
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          pt: { xs: 6, md: 15.5 },
          pb: { xs: 2, md: 15.5 },
          gap: { xs: "30px", sm: "64px" },
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
            px: { xs: "1rem", sm: "1rem", md: 5.5, lg: 7.2, xl: 12.5 },
            gap: 8,
          }}
        >
          <Box>
            <Typography
              sx={{
                font: {
                  xs: `normal normal 600 normal 25px/36px ${Fonts.primary}`,
                  md: `normal normal 600 normal 36px/44px ${Fonts.primary}`,
                },
                color: Colors.dark,
                m: 0,
                p: 0,
                letterSpacing: "-0.02em",
                // textAlign: "left",
              }}
            >
              Shape The Future of African Education
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
                    xs: `normal  500  14px/18px ${Fonts.secondary}`,
                    sm: `normal 500  14px/18px ${Fonts.secondary}`,
                  },
                  color: Colors.grey,
                  letterSpacing: "0em",
                }}
              >
                We&apos;re searching for passionate and experienced instructors
                like you to join our growing community and contribute to this
                exciting journey.
              </Typography>
            </Box>
          </Box>
        </Box>

      
      </Box>

      {/* brought in 1  */}
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
              width: { xs: "50%", sm: "55%" },
              backgroundImage: "url('/images/ourteam.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
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
                  Why you should join us?
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
                    You will be contributing to shaping the future of African
                    education by equipping learners with the skills they need to
                    succeed in the job market.
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
                    Inspire and guide the next generation of professionals by
                    sharing your expertise in a dynamic online learning
                    environment.
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
                    Work on your own terms and create a teaching schedule that
                    fits your lifestyle.
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
                    Earn competitive rates for your contributions and enjoy
                    access to benefit packages.
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
                    Join a network of passionate educators and industry experts
                    who share your commitment to excellence.
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Box>
        </Box>
      </Box>
      {/* brought in 2 */}
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
              backgroundImage: "url('/images/leaders.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              display: { xs: "none", sm: "flex" },
              alignContent: "center",
            }}
          />
          <Box
            sx={{
              width: { xs: "80%", md: "50%" },
              my: "auto",
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
                  We are looking for leaders with proven experience in their
                  field and with
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
                    A genuine enthusiasm for sharing knowledge and inspiring
                    learners
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
                    The ability to clearly and effectively communicate complex
                    concepts in a way that resonates with diverse learners.
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
                    The ability to clearly and effectively communicate complex
                    concepts in a way that resonates with diverse learners.
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
                    Familiarity with online learning platforms and comfortable
                    creating engaging content.
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Box>
        </Box>
      </Box>
      {/* open position */}
      <Box
        component="section"
        id="position"
        sx={{
          width: { xs: "90%", sm: "60%" },
          display: "flex",
          mx: "auto",
          flexDirection: "column",
          // pt: { xs: 6, md: 15.5 },
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
                OPEN INSTRUCTOR POSITIONS
              </Typography>
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
                  letterSpacing: { xs: "-0.02em", sm: "-2%" },
                  textAlign: "left",
                }}
              >
                Join us to transform the education landscape in Africa
              </Typography>
              <Typography
                variant="span"
                sx={{
                  font: {
                    xs: `normal normal 500 normal 18px/28px ${Fonts.primary}`,
                    sm: `normal normal 500 normal 18px/28px ${Fonts.primary}`,
                  },
                  color: Colors.grey,
                  textAlign: "left",
                }}
              >
                We offer a streamlined process and provide ongoing support to
                help you succeed as an instructor.
              </Typography>
            </Box>
            {/* <PositionsCards courses={courses} /> */}
          </Box>
        </Box>
      </Box>
      {/* Our Ethics */}
      <Box
        component="section"
        id="ethics"
        sx={{
          width: "60%",
          display: "flex",
          mx: "auto",
          flexDirection: "column",
          pt: { xs: 2, md: 12.5 },
          pb: { xs: 8, md: 12.5 },
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
            px: { xs: "1rem", sm: "1rem", md: 5.5, lg: 7.2, xl: 12.5 },
            gap: 8,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: { xs: "40px", sm: "60px" },
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
                OUR ETHICS
              </Typography>
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
                  letterSpacing: { xs: "-0.02em", sm: "-2%" },
                  textAlign: "left",
                }}
              >
                Ready to make an impact?
              </Typography>
              <Typography
                variant="span"
                sx={{
                  font: {
                    xs: `normal normal 500 normal 18px/28px ${Fonts.primary}`,
                    sm: `normal normal 500 normal 18px/28px ${Fonts.primary}`,
                  },
                  color: Colors.grey,
                  textAlign: "left",
                }}
              >
                Our ethics keep us connected and guide us as one team.
              </Typography>
            </Box>
            {/* <PositionsCards /> */}
            <EthicsCard />
          </Box>
        </Box>
      </Box>
      {/* banner */}
     
    </Box>
  );
}

BecomeAnInstructor.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>;
};
