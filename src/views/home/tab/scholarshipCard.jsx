import React from "react";

import Image from "next/image";
import { useRouter } from "next/router";

import { Swiper, SwiperSlide } from "swiper/react";

import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { Colors } from "../../../components/themes/colors";
import { Fonts } from "../../../components/themes/fonts";
import "swiper/css";
import {
  ArrowBackward,
  ArrowForward,
  ClockIcon,
} from "../../../components/svg";
import { ArrowCircleRightOutlined } from "@mui/icons-material";

export default function ScholarshipProgramCard({ handleClick }) {
  const router = useRouter();
  const swiperRef = React.useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Card
        sx={{
          padding: "10px",
          borderRadius: "16px",
          width: "90%",
          height: "310px",
          backgroundColor: "#011B23",
          boxShadow: "0px 16px 16px 0px #0000000D",
          border: `1px solid ${Colors.grey}`,
          position: "relative",
        }}
      >
        <Box sx={{ position: 'relative', width: '100%', height:  '35%' , borderRadius: 3 }}>
          <Image
            src="/images/frameCard.svg"
            alt="Program Design, Data Analysis, Computer science"
            layout="fill"
            width={'100%'}
            height={'100%'}
            objectFit="cover"
            objectPosition={" top left"}
          />
        </Box>
       <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 2,
            position: "relative",
            flex: 1,
            height: "65%",
            mt: 1
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignContent: 'start',
                alignItems: 'flex-start'
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textAlign: "left",
                }}
              >
                <Typography
                  sx={{
                    font: {
                      xs: `10px/16px ${Fonts.primary}`,
                    },
                    color: Colors.greyText,
                  }}
                >
                  COURSE
                </Typography>
                <Typography
                  sx={{
                    font: {
                      xs: ` 12px/16px ${Fonts.primary}`,
                    },
                    color: Colors.light,
                    lineBreak: "loose",
                    width: "80%"
                  }}
                >
                  Product design course
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textAlign: "left",
                }}
              >
                <Typography
                  sx={{
                    font: {
                      xs: ` 10px/16px ${Fonts.primary}`,
                    },
                    color: Colors.greyText,
                  }}
                >
                  VALUE
                </Typography>
                <Typography
                  sx={{
                    font: {
                      xs: ` 12px/16px ${Fonts.primary}`,
                    },
                    color: Colors.light,
                  }}
                >
                  100% Tuition
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textAlign: "left",
                }}
              >
                <Typography
                  sx={{
                    font: {
                      xs: `10px/16px ${Fonts.primary}`,
                    },
                    color: Colors.greyText,
                  }}
                >
                  Program
                </Typography>
                <Typography
                  sx={{
                    font: {
                      xs: ` 12px/16px ${Fonts.primary}`,
                    },
                    color: Colors.light,
                    lineBreak: "loose",
                  }}
                >
                  Bootcamp
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textAlign: "left",
                }}
              >
                <Typography
                  sx={{
                    font: {
                      xs: ` 10px/16px ${Fonts.primary}`,
                    },
                    color: Colors.greyText,
                  }}
                >
                  Deadline
                </Typography>
                <Typography
                  sx={{
                    font: {
                      xs: ` 12px/16px ${Fonts.primary}`,
                    },
                    color: Colors.light,
                  }}
                >
                  30 - 04 - 2024
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 1,
              backgroundColor: Colors.primary,
              borderRadius: 2,
              textAlign: "center",
            }}
          >
            <Button
              size="small"
              //   onClick={() =>
              //     router.push(`/programs/technology/${card.programId}`)
              //   }
              endIcon={<ArrowCircleRightOutlined />}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                font: `normal 400 16px/24px ${Fonts.inter}`,
                textTransform: "none",
                color: Colors.light,
                justifyContent: "center",
                fontSize: 14,
                cursor: "pointer",
                "&:hover": {
                  background: "transparent",
                },
              }}
            >
              View courses
            </Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
