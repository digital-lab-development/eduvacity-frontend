import { Box, Grid, IconButton, Link, Typography } from "@mui/material"
import React from "react"
import { Colors } from "../../components/themes/colors"
// import { AppLogo } from "../../components/svg/logo-dark-bg"
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  Youtube,
} from "../../components/svg"
import { Fonts } from "../../components/themes/fonts"
import AppLogo from "../../components/svg/applogo"

export default function FooterPage() {
  const today = new Date()
  const year = today.getFullYear()
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        background: Colors.primaryDark,
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        gap: 7.25,
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: 4, lg: 10, xl: 9 },
          pl: { xs: 4, sm: 3, lg: 5, xl: 16 },
          pr: { xs: 2, lg: 0, xl: 16 },
          py: { xs: 3, md: "56px" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 320,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Link underline="none" href="/">
            <AppLogo />
          </Link>
          <Typography
            variant="span"
            sx={{
              maxWidth: "100%",
              font: {
                xs: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
                md: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
              },
              color: "#87A0A8",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            We bridge the education gap and assist individuals in building their
            technical, business, and interpersonal skills to gaining job-ready
            experiences to excel in their careers or transition to new ones
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            maxWidth: 1616,
            flex: 1,
            display: "flex",
            justifyContent: { xs: "flex-start", sm: "flex-end" },
            alignItems: "center",
          }}
        >
          <Grid container spacing={{ xs: 3, lg: 8 }}>
            <Grid item xs={8} sm={3} md={4} lg={2.4}>
              <Box
                sx={{
                  width: { xs: "100%", sm: 205 },
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: "left",
                    color: Colors.primary,
                    font: `normal normal 600 normal 14px/20px ${Fonts.inter}`,
                  }}
                >
                  Courses
                </Typography>
                <Link
                  underline="hover"
                  href="#"
                  sx={{
                    textAlign: "left",
                    color: "#E6F4ED",
                    font: `normal normal 600 normal 14px/24px ${Fonts.inter}`,
                    letterSpacing: "0em",
                  }}
                >
                  Frontend Engineering
                </Link>{" "}
                <Link
                  underline="hover"
                  href="#"
                  sx={{
                    textAlign: "left",
                    color: "#E6F4ED",
                    font: `normal normal 600 normal 14px/24px ${Fonts.inter}`,
                    letterSpacing: "0em",
                  }}
                >
                  Backend Engineering
                </Link>
                <Link
                  underline="hover"
                  href="#"
                  sx={{
                    textAlign: "left",
                    color: "#E6F4ED",
                    font: `normal normal 600 normal 14px/24px ${Fonts.inter}`,
                    letterSpacing: "0em",
                  }}
                >
                  Cloud Engineering
                </Link>
                <Box
                  sx={{
                    display: "flex",
                    width: 210,
                    gap: "8px",
                    textAlign: "left",
                    color: "#E6F4ED",
                    font: `normal normal 600 normal 14px/24px ${Fonts.inter}`,
                    letterSpacing: "0em",
                  }}
                >
                  Product design{" "}
                  <Box
                    sx={{
                      width: 98,
                      height: 25,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "1px solid #FFFFFF4D",
                      padding: "2px 8px 2px 8px",
                      borderRadius: "9999px",
                      font: `normal normal 500 normal 12px/18px ${Fonts.inter}`,
                    }}
                  >
                    Coming soon
                  </Box>
                </Box>
                <Link
                  underline="hover"
                  href="#"
                  sx={{
                    textAlign: "left",
                    color: "#E6F4ED",
                    font: `normal normal 600 normal 14px/24px ${Fonts.inter}`,
                    letterSpacing: "0em",
                  }}
                >
                  Product Marketing
                </Link>
                <Link
                  underline="hover"
                  href="#"
                  sx={{
                    textAlign: "left",
                    color: "#E6F4ED",
                    font: `normal normal 600 normal 14px/24px ${Fonts.inter}`,
                    letterSpacing: "0em",
                  }}
                >
                  Product Manager
                </Link>
              </Box>
            </Grid>
            <Grid item xs={4} sm={3} md={4} lg={2.4}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  alignItems: "flex-start",
                  ml: { xs: 0, sm: 4, lg: 6 },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: "left",
                    color: Colors.primary,
                    font: `normal normal 600 normal 14px/20px ${Fonts.inter}`,
                  }}
                >
                  Company
                </Typography>
                <Link
                  underline="hover"
                  href="#"
                  sx={{
                    textAlign: "left",
                    color: "#E6F4ED",
                    font: `normal normal 600 normal 14px/24px ${Fonts.inter}`,
                    letterSpacing: "0em",
                  }}
                >
                  Who are we
                </Link>{" "}
                <Link
                  underline="hover"
                  href="#"
                  sx={{
                    textAlign: "left",
                    color: "#E6F4ED",
                    font: `normal normal 600 normal 14px/24px ${Fonts.inter}`,
                    letterSpacing: "0em",
                  }}
                >
                  Careers
                </Link>
                <Link
                  underline="hover"
                  href="#"
                  sx={{
                    textAlign: "left",
                    color: "#E6F4ED",
                    font: `normal normal 600 normal 14px/24px ${Fonts.inter}`,
                    letterSpacing: "0em",
                  }}
                >
                  Partners
                </Link>
                <Link
                  underline="hover"
                  href="#"
                  sx={{
                    textAlign: "left",
                    color: "#E6F4ED",
                    font: `normal normal 600 normal 14px/24px ${Fonts.inter}`,
                    letterSpacing: "0em",
                  }}
                >
                  Become an instructor
                </Link>
              </Box>
            </Grid>
            <Grid item xs={8} sm={3} md={4} lg={2.4}>
              <Box
                sx={{
                  width: { xs: "100%", sm: 146 },
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: "left",
                    color: Colors.primary,
                    font: `normal normal 600 normal 14px/20px ${Fonts.inter}`,
                  }}
                >
                  Academics
                </Typography>
                <Link
                  underline="hover"
                  href="#"
                  sx={{
                    textAlign: "left",
                    color: "#E6F4ED",
                    font: `normal normal 600 normal 14px/24px ${Fonts.inter}`,
                    letterSpacing: "0em",
                  }}
                >
                  Blogs
                </Link>{" "}
                <Link
                  underline="hover"
                  href="#"
                  sx={{
                    textAlign: "left",
                    color: "#E6F4ED",
                    font: `normal normal 600 normal 14px/24px ${Fonts.inter}`,
                    letterSpacing: "0em",
                  }}
                >
                  Idea hubs
                </Link>
                <Link
                  underline="hover"
                  href="#"
                  sx={{
                    textAlign: "left",
                    color: "#E6F4ED",
                    font: `normal normal 600 normal 14px/24px ${Fonts.inter}`,
                    letterSpacing: "0em",
                  }}
                >
                  Contact us
                </Link>
              </Box>
            </Grid>
            <Grid item xs={4} sm={3} md={4} lg={2.4}>
              <Box
                sx={{
                  width: { xs: "100%", sm: 146 },
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: "left",
                    color: Colors.primary,
                    font: `normal normal 600 normal 14px/20px ${Fonts.inter}`,
                  }}
                >
                  Resources
                </Typography>
                <Link
                  underline="hover"
                  href="#"
                  sx={{
                    textAlign: "left",
                    color: "#E6F4ED",
                    font: `normal normal 600 normal 14px/24px ${Fonts.inter}`,
                    letterSpacing: "0em",
                  }}
                >
                  Blogs
                </Link>{" "}
                <Link
                  underline="hover"
                  href="#"
                  sx={{
                    textAlign: "left",
                    color: "#E6F4ED",
                    font: `normal normal 600 normal 14px/24px ${Fonts.inter}`,
                    letterSpacing: "0em",
                  }}
                >
                  Idea hubs
                </Link>
                <Link
                  underline="hover"
                  href="#"
                  sx={{
                    textAlign: "left",
                    color: "#E6F4ED",
                    font: `normal normal 600 normal 14px/24px ${Fonts.inter}`,
                    letterSpacing: "0em",
                  }}
                >
                  E-library
                </Link>
                <Link
                  underline="hover"
                  href="#"
                  sx={{
                    textAlign: "left",
                    color: "#E6F4ED",
                    font: `normal normal 600 normal 14px/24px ${Fonts.inter}`,
                    letterSpacing: "0em",
                  }}
                >
                  FAQs
                </Link>
                <Link
                  underline="hover"
                  href="#"
                  sx={{
                    textAlign: "left",
                    color: "#E6F4ED",
                    font: `normal normal 600 normal 14px/24px ${Fonts.inter}`,
                    letterSpacing: "0em",
                  }}
                >
                  How to get started
                </Link>
              </Box>
            </Grid>
            <Grid item xs={8} sm={3} md={4} lg={2.4}>
              <Box
                sx={{
                  width: { xs: "100%", sm: 146 },
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: "left",
                    color: Colors.primary,
                    font: `normal normal 600 normal 14px/20px ${Fonts.inter}`,
                  }}
                >
                  Legal
                </Typography>
                <Link
                  underline="hover"
                  href="#"
                  sx={{
                    textAlign: "left",
                    color: "#E6F4ED",
                    font: `normal normal 600 normal 14px/24px ${Fonts.inter}`,
                    letterSpacing: "0em",
                  }}
                >
                  Terms
                </Link>{" "}
                <Link
                  underline="hover"
                  href="#"
                  sx={{
                    textAlign: "left",
                    color: "#E6F4ED",
                    font: `normal normal 600 normal 14px/24px ${Fonts.inter}`,
                    letterSpacing: "0em",
                  }}
                >
                  Privacy
                </Link>
                <Link
                  underline="hover"
                  href="#"
                  sx={{
                    textAlign: "left",
                    color: "#E6F4ED",
                    font: `normal normal 600 normal 14px/24px ${Fonts.inter}`,
                    letterSpacing: "0em",
                  }}
                >
                  Cookies
                </Link>
                <Link
                  underline="hover"
                  href="#"
                  sx={{
                    textAlign: "left",
                    color: "#E6F4ED",
                    font: `normal normal 600 normal 14px/24px ${Fonts.inter}`,
                    letterSpacing: "0em",
                  }}
                >
                  Licenses
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "64px",
          padding: "48px 0 48px 0",
          borderTop: `1px solid #1B3139`,
          background: Colors.primaryDark,
          mb: { xs: "45px", sm: 0 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            height: 24,
            px: { xs: 3, lg: 8, xl: 16 },
            gap: "10px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              textAlign: "left",
              color: Colors.light,
              display: { xs: "none", sm: "flex" },
              font: `normal normal 400 normal 16px/24px ${Fonts.inter}`,
              letterSpacing: "0em",
            }}
          >
            © {year} eduvacity. All rights reserved.
          </Typography>
          <Box sx={{ maxWidth: 500, display: "flex", gap: "24px" }}>
            {" "}
            <IconButton>
              <Link
                underline="none"
                href="https://twitter.com/eduvasity"
                target="_blank"
              >
                <Twitter />
              </Link>
            </IconButton>
            <IconButton>
              <Link
                underline="none"
                href="https://www.linkedin.com/eduvasity/"
                target="_blank"
              >
                <LinkedIn />
              </Link>
            </IconButton>
            <IconButton>
              <Link
                underline="none"
                href="https://www.facebook.com/eduvasity/"
                target="_blank"
              >
                <Facebook />
              </Link>
            </IconButton>
            <IconButton>
              <Link
                underline="none"
                href="https://www.youtube.com/eduvasity/"
                target="_blank"
              >
                <Youtube />
              </Link>
            </IconButton>
            <IconButton>
              <Link
                underline="none"
                href="https://www.instagram.com/eduvasity/"
                target="_blank"
              >
                <Instagram />
              </Link>
            </IconButton>
          </Box>
          <Typography
            variant="h4"
            sx={{
              textAlign: "left",
              color: Colors.light,
              display: { xs: "flex", sm: "none" },
              font: `normal normal 400 normal 16px/24px ${Fonts.inter}`,
              letterSpacing: "0em",
            }}
          >
            © {year} eduvacity. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
