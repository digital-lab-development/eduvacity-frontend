import { useRouter } from "next/router";
import HomePageLayout from "../src/views/home/layout";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import {
  AllGenderIcon,
  ArrowUp,
  BoltsIcon,
  DocsIcon,
} from "../src/components/svg";
import { Colors } from "../src/components/themes/colors";
import { Fonts } from "../src/components/themes/fonts";

import Intercom from "@intercom/messenger-js-sdk";
import {
  ArrowCircleRightOutlined,
  ChildCareRounded,
  DocumentScannerRounded,
} from "@mui/icons-material";
import Image from "next/image";

export default function Licenses() {
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
          pb: { xs: 8, md: 3.5 },
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          ustifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
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
                mx: 'auto'
              }}
            >
              <Box
                sx={{
                  width: "80%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "16px",
                }}
              >
                
                <Box
                  sx={{
                    width: "80%",
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: { xs: "12px", sm: "64px" },
                    alignItems: "center",
                    justifyContent: "center",
                    mx: 'auto'
                  }}
                >
                  <Box sx={{ width: "100%",}}>
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
                  License
                </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        width: "100%",
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
                      Read our license of operation
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            padding: "5px",
            width: { xs: "90%", sm: "80%" },
            mx: "auto",
            background: Colors.light,
          }}
        >
          <Box
            sx={{
              width: "100%",
              py: { xs: "40px", sm: "60px" },
            }}
          >
            <Box
              sx={{
                width: "100%",
                mx: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                pb: 4,
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  font: {
                    xs: `normal normal 600 normal 14px/16px ${Fonts.inter}`,
                    md: `normal normal 600 normal 14px/18px ${Fonts.inter}`,
                  },
                  color: Colors.primary,
                  m: 0,
                  pb: 0,
                  letterSpacing: "0em",
                  textTransform: "uppercase",
                  textAlign: "center",
                }}
              >
                Read abut our license
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  font: {
                    xs: `normal normal 600 normal 32.5px/44px ${Fonts.primary}`,
                    md: `normal normal 600 normal 46px/60px ${Fonts.primary}`,
                  },
                  color: Colors.dark,
                  m: 0,
                  py: 2,
                  letterSpacing: "0em",
                  textAlign: "center",
                }}
              >
                License Agreements
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  font: {
                    xs: `normal normal 600 normal 14px/16px ${Fonts.inter}`,
                    md: `normal normal 600 normal 14px/18px ${Fonts.inter}`,
                  },
                  color: Colors.dark,
                  m: 0,
                  pb: 0,
                  letterSpacing: "0em",
                  textAlign: "center",
                  width: { xs: "100%", sm: "70%" },
                  mx: "auto",
                }}
              >
                Check through our list of currently open scholarship for a
                perfect fit. We have a programme for designed for you
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

Licenses.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>;
};
