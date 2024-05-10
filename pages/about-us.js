import React from "react";
import HomePageLayout from "../src/views/home/layout";
import { Box, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { CheckCircled } from "../src/components/svg";
import { Colors } from "../src/components/themes/colors";
import { Fonts } from "../src/components/themes/fonts";
import { ArrowUp } from "../src/components/svg";
import OurPartnerss from "../src/views/about-us/our-partners";

export default function AboutUs() {
  const instructorPoints1 = [
    "Using the internet for distance learning: 100% online learning, Bringing our programs to places that need them most",
    "Keeping costs low.",
    "Providing many ways to get financial help",
    "Education focused on workplace skills",
    "Emphasis on critical thinking and problem-solving",
    "Global community using technology for support",
    "Flexible, supportive, and affordable learning opportunities",
  ];
  const learningExperience = [
    "Gain practical skills through real-world projects",
    "Start your program anytime, no waiting",
    "Get 24/7 support from faculty, advisors, and coaches",
    "Earn an accredited degree recognized by ",
    "Access learning resources for lifelong learning at no extra cost",
    "Join a global community of learners, including professionals at top companies",
  ];

  const stat = [
    { percent: "85%", detail: " of future jobs haven't been created yet." },
    {
      percent: "70%",
      detail: "  of professionals work from home at least one day a week.",
    },
    {
      percent: "85%",
      detail: " of HR managers invest more in training new grads than before",
    },
  ];
  return (
    <>
      <Box
        component="section"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          pt: { xs: 8, md: 15.5 },
          pb: { xs: 8, md: 6.5 },
          backgroundColor: Colors.light,
          gap: { xs: "20px", sm: "68px" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "100%" },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: "8px", sm: "10px" },
            px: { xs: 2, sm: 8.5, md: 5.5, lg: 7.2, xl: 15.5 },
          }}
        >
          <Typography
            variant="span"
            sx={{
              font: {
                xs: `normal normal 500 normal 26px/30px ${Fonts.secondary}`,
                md: `normal normal 700 normal 48px/72px ${Fonts.secondary}`,
              },
              color: Colors.darkBlue,
            }}
          >
            Redefining Higher Education:
          </Typography>
          <Typography
            variant="span"
            sx={{
              font: {
                xs: `normal normal 500 normal 26px/30px ${Fonts.secondary}`,
                md: `normal normal 700 normal 48px/72px ${Fonts.secondary}`,
              },
              color: Colors.primary,
            }}
          >
            Shifting Paradigms!
          </Typography>
        </Box>
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
                gap: "36px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "26px",
                  mt: 2,
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    font: {
                      xs: `normal normal 400 normal 22px/24px ${Fonts.arial}`,
                      md: `normal normal 400 normal 36px/44px ${Fonts.arial}`,
                    },
                    color: Colors.darkBlue,
                    m: 0,
                    p: 0,
                    letterSpacing: "-2%",
                  }}
                >
                  Our Vision
                </Typography>
                <Box
                  component="span"
                  sx={{
                    maxWidth: 1017,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="span"
                    sx={{
                      font: {
                        xs: `normal normal 400 normal 16px/24px ${Fonts.secondary}`,
                        sm: `normal normal 400 normal 16px/24px ${Fonts.secondary}`,
                      },
                      color: Colors.grey,
                      border: `1px solid ${Colors.light}`,
                      borderRadius: "7px",
                      padding: "30px",
                      borderLeft: `3px solid ${Colors.primary}`,
                    }}
                  >
                    At Eduvacity, we dream of a world where everyone can pursue
                    higher education, no matter what. We believe in empowering
                    individuals to upscale their skills and achieve their dreams
                    through education that equips them for the global workforce.
                  </Typography>
                </Box>
              </Box>
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
                      xs: `normal normal 400 normal 22px/24px ${Fonts.arial}`,
                      md: `normal normal 400 normal 36px/44px ${Fonts.arial}`,
                    },
                    color: Colors.darkBlue,
                    m: 0,
                    p: 0,
                    letterSpacing: "-2%",
                  }}
                >
                  Our Mission
                </Typography>
                <Box
                  component="span"
                  sx={{
                    maxWidth: 1017,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="span"
                    sx={{
                      font: {
                        xs: `normal normal 400 normal 16px/24px ${Fonts.secondary}`,
                        sm: `normal normal 400 normal 16px/24px ${Fonts.secondary}`,
                      },
                      color: Colors.grey,
                      border: `1px solid ${Colors.light}`,
                      borderRadius: "7px",
                      padding: "30px",
                      borderLeft: `3px solid ${Colors.primary}`,
                    }}
                  >
                    Eduvacity’s is to give every African student a chance at a
                    good education. We offer online degree programs that are
                    flexible and affordable. We aim to empower graduates to
                    build successful lives and positively impact society
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* --------------WE ARE FUTURE FOCUSED------------- */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 400, sm: 350 },
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
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: "22px", sm: "0px" },
            px: { xs: 4, sm: 8.5, md: 5.5, lg: 7.2, xl: 15.5 },
            alignItems: { xs: "center", sm: "flex-start" },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "100%" },
              display: "flex",
              flexDirection: "column",
              gap: { xs: "8px", sm: "40px" },
              alignItems: { xs: "center", sm: "flex-start" },
            }}
          >
            <Typography
              variant="span"
              sx={{
                font: {
                  xs: `normal normal 400 normal 28px/24px ${Fonts.arial}`,
                  md: `normal normal 400 normal 36px/44px ${Fonts.arial}`,
                },
                color: Colors.light,
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              We are Future-Focused
            </Typography>{" "}
            <Box
              onClick={() => router.push("/signup")}
              sx={{
                padding: "12px 20px 12px 20px",
                display: { xs: "none", sm: "flex" },
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
              Join The Program <ArrowUp />
            </Box>
          </Box>
          <Typography
            variant="span"
            sx={{
              font: {
                xs: `normal normal 300 normal 16px/24px ${Fonts.secondary}`,
                md: `normal normal 300 normal 20px/30px ${Fonts.secondary}`,
              },
              color: Colors.light,
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            We are empowering 1,000,000,000 people in Africa with the tools and
            opportunities to become world-class. Eduvacity is where individuals
            from around Africa acquire the skills they need precisely when they
            need them most. We are here to propel people forward in their
            careers and personal journeys.
          </Typography>

          <Box
            onClick={() => router.push("/signup")}
            sx={{
              padding: "12px 20px 12px 20px",
              display: { xs: "flex", sm: "none" },
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
            Join The Program <ArrowUp />
          </Box>
        </Box>
      </Box>

      {/* ---------------OUR GOAL--------------- */}
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
            ></Box>
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
              Our Goal
            </Typography>
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
                  variant="h4"
                  sx={{
                    font: `normal normal 500 normal 16px/24px ${Fonts.arial}`,
                    color: Colors.grey,
                    letterSpacing: "1%",
                  }}
                >
                  We offer higher education to everyone, no matter where they
                  come from, by:
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "20px",
                  }}
                ></Box>
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
              <Box component="ul" sx={{ mt: 4 }}>
                {instructorPoints1.map((point, i) => (
                  <Box
                    key={`why_join_${i}`}
                    component="li"
                    sx={{
                      pl: { xs: 0, sm: "16px" },
                      pb: 2,
                      font: `normal normal 400 normal 20px/24px ${Fonts.arial}`,
                      color: "#505F79",
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <Box>
                      <CheckCircled />
                    </Box>
                    <Typography>{point}</Typography>
                  </Box>
                ))}
                <Box sx={{ pl: { xs: 0, sm: "16px" } }}>
                  <Box
                    onClick={() => router.push("/signup")}
                    sx={{
                      mt: "28px",
                      width: "200px",

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
                    Join Program <ArrowUp />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* -------------OUR PARTNERS------------ */}
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
            px: { xs: "1rem", sm: "1rem", md: 5.5, lg: 7.2, xl: 15.5 },
            gap: 4,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              font: `normal normal 700 normal 36px/44px ${Fonts.arial}`,
              color: Colors.darkBlue,
              m: 0,
              p: 0,
              letterSpacing: "1%",
            }}
          >
            Our Partners
          </Typography>
          <Typography
            variant="h4"
            sx={{
              font: `normal normal 400 normal 20px/28px ${Fonts.arial}`,
              color: Colors.grey,
              m: 0,
              p: 0,
              letterSpacing: "1%",
            }}
          >
            We partner with leading international organizations, corporations,
            and foundations to help enrich our degree programs and broaden
            student opportunities. 
          </Typography>

          <Box>
            <OurPartnerss />
          </Box>
        </Box>
      </Box>

      {/* -----------LEARNING EXPERIENCE------------ */}
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
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            alignItems: "center",
            px: { xs: "1rem", sm: "1rem", md: 5.5, lg: 7.2, xl: 15.5 },
            gap: 8,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                font: `normal normal 400 normal 36px/44px ${Fonts.arial}`,
                color: Colors.darkBlue,
                m: 0,
                p: 0,
                letterSpacing: "-2%",
              }}
            >
              Your online learning experience
            </Typography>
            <Typography
              variant="h1"
              sx={{
                font: `normal normal 400 normal 18px/28px ${Fonts.arial}`,
                color: Colors.grey,
                m: 0,
                p: 0,
              }}
            >
              We are here to prepare you for the future workplace, not the past,
              focusing on industries with the most growth potential. Stand out
              with Eduvacity.
            </Typography>

            <Box component="ul" sx={{ mt: 4 }}>
              {learningExperience.map((point, i) => (
                <Box
                  key={`why_join_${i}`}
                  component="li"
                  sx={{
                    pb: 2,
                    font: `normal normal 400 normal 20px/24px ${Fonts.arial}`,
                    color: "#505F79",
                    display: "flex",
                    gap: "20px",
                  }}
                >
                  <Box>
                    <CheckCircled />
                  </Box>
                  <Typography>{point}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              maxWidth: 576,
              width: "100%",
              height: {
                xs: 240,
                sm: 592,
              },
              backgroundImage: {
                xs: "url(/images/learning-experience.png)",
                sm: "url(/images/learning-experience.png)",
              },
              backgroundSize: { xs: "cover", sm: "fit" },
              backgroundRepeat: "no-repeat",
            }}
          />
        </Box>
      </Box>

      {/* -----------BACKED BY------------- */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 100, sm: 350 },
          padding: "70px 0",
          // backgroundColor: "#F6F7F7",
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
            gap: { xs: "8px", sm: "12px" },
            px: { xs: 4, sm: 8.5, md: 5.5, lg: 7.2, xl: 15.5 },
            alignItems: { xs: "center", sm: "center" },
          }}
        >
          <Typography
            variant="span"
            sx={{
              font: {
                xs: `normal normal 400 normal 20px/24px ${Fonts.arial}`,
                md: `normal normal 400 normal 20px/28px ${Fonts.arial}`,
              },
              color: "#505F79",
              textAlign: { xs: "center", sm: "center" },
            }}
          >
            Backed by:
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
            <Box
              sx={{
                width: 60,
                height: {
                  xs: 40,
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
                  xs: `normal normal 400 normal 16px/24px ${Fonts.arial}`,
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
        </Box>
      </Box>

      {/* -------------THE WORLD IS CHANGING-------------- */}
      <Box
        component="section"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          pt: { xs: 8, md: 15.5 },
          pb: { xs: 8, md: 6.5 },
          backgroundColor: "#F6F7F7",
          gap: "30px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            px: { xs: "1rem", sm: "1rem", md: 5.5, lg: 7.2, xl: 15.5 },
          }}
        >
          <Typography
            variant="span"
            sx={{
              pb: { xs: 2, md: 6.5 },
              font: {
                xs: `normal normal 400 normal 20px/36px ${Fonts.arial}`,
                md: `normal normal 400 normal 36px/44px ${Fonts.arial}`,
              },
              color: Colors.darkBlue,
              textAlign: "flex-start",
            }}
          >
            The world is changing. Shouldn`t universities in Africa change too?
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: "22px", sm: "20px" },
            justifyContent: "space-between",
            px: { xs: "1rem", sm: "1rem", md: 5.5, lg: 7.2, xl: 15.5 },
          }}
        >
          {stat.map((stats, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                width: "320px",
                gap: { xs: "8px", sm: "26px" },
                flexDirection: "column",
              }}
            >
              <Typography
                variant="span"
                sx={{
                  font: {
                    xs: `normal normal 400 normal 24px/24px ${Fonts.arial}`,
                    md: `normal normal 400 normal 36px/44px ${Fonts.arial}`,
                  },
                  color: Colors.darkBlue,
                  textAlign: "flex-start",
                }}
              >
                {stats.percent}
              </Typography>
              <Typography
                variant="span"
                sx={{
                  letterSpacing: "-2%",
                  font: {
                    xs: `normal normal 400 normal 20px/24px ${Fonts.arial}`,
                    md: `normal normal 400 normal 20px/44px ${Fonts.arial}`,
                  },
                  color: Colors.grey,
                  textAlign: "flex-start",
                }}
              >
                {stats.detail}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* -------------NEWSLETTER---------------- */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 290, sm: 350 },
          padding: "96px 0",
          backgroundColor: "#FFD993",
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
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: "8px", sm: "16px" },
            px: { xs: 4, sm: 8.5, md: 5.5, lg: 7.2, xl: 15.5 },
            alignItems: { xs: "center", sm: "flex-start" },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "100%" },
              display: "flex",
              flexDirection: "column",
              gap: { xs: "8px", sm: "16px" },

              alignItems: { xs: "center", sm: "flex-start" },
            }}
          >
            <Typography
              variant="span"
              sx={{
                font: {
                  xs: `normal normal 400 normal 24px/24px ${Fonts.inter}`,
                  md: `normal normal 600 normal 36px/44px ${Fonts.inter}`,
                },
                color: "#000000",
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              Sign up for our newsletter
            </Typography>{" "}
            <Typography
              variant="span"
              sx={{
                font: {
                  xs: `normal normal 300 normal 18px/24px ${Fonts.inter}`,
                  md: `normal normal 300 normal 20px/28px ${Fonts.inter}`,
                },
                color: "#101828",
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              Be the first to know about releases and industry news and
              insights.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "24px",
              justifyContent: "space-between",
            }}
          >
            <Box
              component="div"
              sx={{
                backgroundColor: "#ffffff",
                width: { xs: 350, sm: 500 },
                display: "flex",
                borderRadius: "46px",
                padding: "6px",
                gap: "24px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="span"
                sx={{
                  font: {
                    md: `normal normal 400 normal 16px ${Fonts.primary}`,
                    xs: `normal normal 300 normal 12px ${Fonts.primary}`,
                    sm: `normal normal 300 normal 12px ${Fonts.primary}`,
                  },
                  color: "#475467",
                  textAlign: "center",
                  paddingLeft: 3,
                }}
              >
                Enter your Email
              </Typography>
              <Box
                // onClick={handleClickOpen}
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
                Subscribe <ArrowUp />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

AboutUs.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>;
};
