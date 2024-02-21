import { Box, CssBaseline, Typography } from "@mui/material"
import { useRouter } from "next/router"
import React from "react"
import { ArrowUp } from "../src/components/svg"
import { Colors } from "../src/components/themes/colors"
import { Fonts } from "../src/components/themes/fonts"
import InstructorsCards from "../src/views/become-an-instructor"
import EthicsCard from "../src/views/become-an-instructor/ethics"
import PositionsCards from "../src/views/become-an-instructor/positions"
import HomePageLayout from "../src/views/home/layout"

export default function BecomeAnInstructor() {
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
          backgroundColor: Colors.secondary,
          pt: { xs: 4, md: 15.5 },
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
                flexDirection: { xs: "column", lg: "row" },
                gap: { xs: "30px", sm: "64px" },
              }}
            >
              <Box
                sx={{
                  maxWidth: 705,
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "12px",
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
                      textAlign: "left",
                    }}
                  >
                    We&apos;re a fast-growing team
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
                          sm: `normal normal 500 normal 20px/28px ${Fonts.primary}`,
                        },
                        color: Colors.grey,
                        letterSpacing: "0em",
                      }}
                    >
                      We&apos;re always on the lookout for passionate, dynamic,
                      and talented individuals.
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: { xs: "100%", sm: 470 },
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box
                  onClick={() => router.push("/signup")}
                  sx={{
                    width: { xs: "100%", sm: 300 },
                    height: 48,
                    padding: "12px 20px 12px 20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    font: `normal normal 600 normal 16px/24px ${Fonts.primary}`,
                    cursor: "pointer",
                    color: "#344054",
                    border: "1px solid #D0D5DD",
                    boxShadow: "0px 1px 2px 0px #1018280D",
                    borderRadius: "46px",
                    background: Colors.light,
                    "&:hover": {
                      background: Colors.light,
                    },
                  }}
                >
                  Read our core values
                </Box>
                <Box
                  onClick={() => router.push("/signup")}
                  sx={{
                    width: { xs: "100%", sm: 300 },
                    padding: "12px 20px 12px 20px",
                    height: 48,
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
                  View open positions <ArrowUp />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            pl: { xs: 1, sm: 8.5, md: 5.5, lg: 7.2, xl: 12.5 },
          }}
        >
          <InstructorsCards />
        </Box>
      </Box>
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
            px: { xs: 4, sm: 8.5, md: 5.5, lg: 7.2, xl: 15.5 },
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
                Open positions
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
                We’re looking for talented individuals
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
                We operate in a hybrid setting spread all across the world. Join
                us!
              </Typography>
            </Box>
            <EthicsCard />
          </Box>
        </Box>
      </Box>
      <Box
        component="section"
        id="feature-section"
        sx={{
          width: "100%",
          display: "flex",

          flexDirection: "column",
          pt: { xs: 8, md: 12.5 },
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
            px: { xs: 4, sm: 6.5, md: 5.5, lg: 7.2, xl: 12.5 },
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
                Our ethics
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
            <PositionsCards />
          </Box>
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
            Engage in hands-on learning through cutting-edge simulations
            designed to replicate industry challenges. Sharpen your skills and
            apply theoretical knowledge in a practical, risk-free environment.
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
    </Box>
  )
}

BecomeAnInstructor.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>
}
