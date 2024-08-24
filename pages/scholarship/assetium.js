import { useRouter } from "next/router";
import HomePageLayout from "../../src/views/home/layout";
import {
  Avatar,
  AvatarGroup,
  Box,
  CssBaseline,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import {
  AllGenderIcon,
  ArrowUp,
  BoltsIcon,
  DocsIcon,
  EduLogo,
  PlayButton,
  WhatsApp,
  ZapIcon,
} from "../../src/components/svg";
// import { ArrowUp, PlayButton, WhatsApp, ZapIcon } from "../src/components/svg";
import { Colors } from "../../src/components/themes/colors";
import { Fonts } from "../../src/components/themes/fonts";
import {
  EDUVACITY_VALUE,
  EMPOWERMENT_DESC,
  EMPOWERMENT_TITLE,
  HERO_TEXT,
  PROGRAM_DESC,
  PROGRAM_TITLE,
} from "../../src/utils/contants";

import Intercom from "@intercom/messenger-js-sdk";
import { ChildCareRounded, DocumentScannerRounded } from "@mui/icons-material";
import Image from "next/image";
import AppLogo from "../../src/components/svg/applogo";

export default function Assetium() {
  const router = useRouter();
  Intercom({
    app_id: "y4ubjwyw",
  });

  return (
    <div className="h-full  bg-white text-black">
      <Box
        component="section"
        id="hero-section"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          pt: { xs: 8, md: 12.5 },
          pb: { xs: 8, md: 3.5 },
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          ustifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "80%" },
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            px: { xs: "1rem", sm: "1rem", lg: 12.5, xl: 16 },
            gap: { xs: 4, sm: 8 },
            backgroundColor: Colors.light,
            borderRadius: "10px",
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
            {/* logos */}
            <Box
              sx={{
                width: "40%",
                display: "flex",
                flexDirection: "row",
                mx: "auto",
                justifyContent: 'center', alignItems: 'center'
              }}
            >
              <Box
                sx={{
                  backgroundColor: Colors.primary,
                  px: 1.7,
                  py: 1,
                  borderRadius: "100%",
                }}
              >
                <EduLogo width="52" height="54" fill={Colors.light} />
              </Box>

              <Box
                sx={{
                  backgroundColor: Colors.light,
                  borderColor: Colors.primary,
                  px: 1.5,
                  py: 1,
                  borderRadius: "100%",
                  border: `solid 2px ${Colors.primary}`,
                  position: "relative",
                  left: '-10px'
                }}
              >
                <Image
                  src="/images/assetium-logo.png"
                  alt={"Assetium Capital Management Limited"}
                  width={44}
                  height={44}
                />
              </Box>
            </Box>
            {/* textsss */}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                ustifyContent: "center",
                alignItems: "center",
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
                    md: `normal normal 600 normal 64px/77px ${Fonts.primary}`,
                  },
                  color: Colors.secondary,
                  m: 0,
                  p: 0,
                  letterSpacing: "-2%",
                }}
              >
                Assetium{" "}
                <Typography variant="span" sx={{ color: Colors.primary }}>
                  100% Scholarship
                </Typography>{" "}
                Program
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
                      xs: `normal 400 18px/28px ${Fonts.secondary}`,
                      sm: `normal 400 20px/30px ${Fonts.secondary}`,
                    },
                    color: Colors.secondary,
                  }}
                >
                  Empower stay-at-home mothers and women in rural northern
                  communities to <br /> reach the top 1% by providing programs
                  that guarantee employability
                </Typography>
                <Box
                  component="div"
                  sx={{
                    // maxWidth: 500,
                    display: "flex",
                    flexDirection: { xs: "row", sm: "row" },

                    mt: { xs: 5, md: 10 },
                    justifyContent: "center",
                    alignItems: "center",
                    mb: { xs: 4, sm: 1 },
                  }}
                >
                  <Box
                    component="a"
                    target="_blank"
                    href="https://wa.link/3xhcsh"
                    // onClick={() => router.push(`https://wa.link/3xhcsh`)}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      font: `normal normal 500 normal 14px/16.8px ${Fonts.primary}`,
                      gap: "8px",
                      padding: "12px 20px 12px 20px",
                      color: Colors.primary,
                      border: `1px solid ${Colors.primary}`,
                      borderRadius: "46px",
                      cursor: "pointer",
                      gap: "10px",
                      "&:hover": {
                        background: "transparent",
                      },
                    }}
                  >
                    <WhatsApp />
                    Learn more
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "35px",
                mx: "auto",
                my: "auto",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  font: {
                    xs: `normal normal 400 normal 30px/36px ${Fonts.primary}`,
                    md: `normal normal 600 normal 36px/44px ${Fonts.primary}`,
                  },
                  color: Colors.secondary,
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
                      xs: `normal normal 400 normal 16px/28px ${Fonts.secondary}`,
                      sm: `normal normal 500 normal 20px/30px ${Fonts.secondary}`,
                    },
                    color: Colors.secondary,
                  }}
                >
                  {EMPOWERMENT_DESC}
                </Typography>
              </Box>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    height: {
                      xs: 240,
                      sm: 516,
                      // xs: showCover ? 0 : 240,
                      // sm: showCover ? 0 : 516,
                    },
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: 416,
                      // paddingBottom: '56.250%',
                    }}
                  >
                    <iframe
                      title="How to be a school teacher"
                      allow="fullscreen"
                      allowFullScreen
                      height="100%"
                      src="https://www.youtube.com/embed/la0ytnh7Gzg?si=sW7Yi9SqCjuOds4Y"
                      width="100%"
                      style={{
                        // display: showCover ? 'none' : 'block',
                        borderRadius: "24px",
                        border: "none",
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        cursor: "pointer",
                        aspectRatio: "video",
                      }}
                    ></iframe>
                  </div>
                </Box>
              </div>
            </Box>
          </Box>
        </Box>

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
            mt: { xs: 40, sm: 1 },
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
                width: "70%",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: "40px", sm: "10px" },
                alignItems: "center",
                justifyContent: { xs: "center", sm: "space-between" },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    font: {
                      xs: `normal normal 600 normal 32px/48px ${Fonts.primary}`,
                      md: `normal normal 600 normal 50px/77px ${Fonts.primary}`,
                    },
                    color: Colors.light,
                    width: "100%",
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  Our Goal
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h6"
                  sx={{
                    font: {
                      xs: `normal normal 400 normal 14px/29px ${Fonts.secondary}`,
                      sm: `normal normal 400 normal 14px/28px ${Fonts.secondary}`,
                    },
                    color: Colors.light,
                    width: "100%",
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  Our goal for the Educate Her scholarship program in the
                  upcoming five years is to empower 20,000 women in Northern
                  Nigeria to attain accredited certifications from their homes
                  and communities. This endeavour will create pathways to
                  international employment prospects.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* scholarship opp */}
        <Box
          sx={{
            background: Colors.secondary,
            width: "100%",
            display: "flex",
            py: 10,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              border: "1px solid yellow ",
              alignSelf: "center",
              display: "flex",
              width: "140px",
              justifyContent: "center",
              borderRadius: 5,
              mb: "16px",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: Fonts.primary,
                fontSize: 16,
                py: 1,
                color: Colors.light,
              }}
            >
              Our Courses
            </Typography>
          </Box>
          <Typography
            variant="h1"
            sx={{
              font: {
                xs: `normal normal 400 normal 14px/24px ${Fonts.secondary}`,
                sm: `normal normal 400 normal 28px ${Fonts.secondary}`,
              },
              color: Colors.light,
              letterSpacing: "0em",
            }}
          >
            Scholarship opportunities
          </Typography>
          <Typography
            variant="h1"
            sx={{
              font: {
                xs: `normal normal 400 normal 14px/18px ${Fonts.secondary}`,
                sm: `normal normal 400 normal 14px/18px ${Fonts.secondary}`,
              },
              color: Colors.light,
              width: "80%",
            }}
          >
            Explore various scholarships designed to support your educational
            journey. Find out if you qualify and learn how to apply today.
          </Typography>
        </Box>
        {/* eleigibility */}
        <Box
          sx={{
            alignSelf: "center",
            display: "flex",
            flexDirection: "column",
            width: { xs: "100%", sm: "80%" },
            mx: "auto",
            justifyContent: "center",
            mt: 8,
            backgroundColor: "#F6F7F7",
            py: 10,
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              border: `1px solid ${Colors.grey} `,
              alignSelf: "center",
              display: "flex",
              width: "140px",
              justifyContent: "center",
              borderRadius: 5,
              my: "16px",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: Fonts.primary,
                fontSize: 16,
                py: 1,
                color: Colors.secondary,
              }}
            >
              Eligibility
            </Typography>
          </Box>
          <Typography
            variant="h1"
            sx={{
              font: {
                xs: `normal normal 600 normal 25px/36px ${Fonts.primary}`,
                sm: `normal normal 600 normal 30px/36px ${Fonts.primary}`,
              },
              color: Colors.secondary,
              width: "80%",
              my: "10px",
              alignSelf: "center",
            }}
          >
            Scholarship Requirements
          </Typography>
          <Typography
            variant="h1"
            sx={{
              font: {
                xs: `normal normal 400 normal 14px/18px ${Fonts.secondary}`,
                sm: `normal normal 400 normal 14px/18px ${Fonts.secondary}`,
              },
              color: Colors.secondary,
              width: "80%",
              mx: "auto",
              mb: "16px",
            }}
          >
            Review the criteria needed to qualify for our scholarships. Ensure
            you meet all requirements before applying.
          </Typography>

          <Box
            sx={{
              width: "70%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              mb: "10",
              mt: "20",
              mx: "auto",
              py: 5,
              backgroundColor: Colors.light,
              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                width: "80%",
                display: "flex",
                flexDirection: "column",
                gap: "32px",
                mx: "auto",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  gap: "22px",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    border: `1px solid ${Colors.primary} `,
                    pb: 1,
                    px: 1,
                    pt: 1.5,
                    borderRadius: 3,
                    alignItems: "center",
                  }}
                >
                  <AllGenderIcon />
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
                    color: Colors.secondary,
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  All our Scholarsips are Available to both Male and Female
                  applicants from all Geo-political zones within Nigeria.
                </Typography>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  gap: "22px",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    border: `1px solid ${Colors.primary} `,
                    pb: 1,
                    px: 1,
                    pt: 1.5,
                    borderRadius: 3,
                    alignItems: "center",
                  }}
                >
                  <DocsIcon />
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
                    color: Colors.secondary,
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  All our Scholarships applicants must possess a minimum of
                  O’level certificate.
                </Typography>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  gap: "22px",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    border: `1px solid ${Colors.primary} `,
                    pb: 1,
                    px: 1,
                    pt: 1.5,
                    borderRadius: 3,
                    alignItems: "center",
                  }}
                >
                  <BoltsIcon width="20" />
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
                    color: Colors.secondary,
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  All applicants must be willing to commit and finish the
                  program.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

Assetium.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>;
};
