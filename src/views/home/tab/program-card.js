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

export default function ProgramCard({ cards, handleClick }) {
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
      }}
    >
      <Swiper
        ref={swiperRef}
        spaceBetween={15}
        slidesPerView={1}
        navigation
        breakpoints={{
          540: {
            slidesPerView:2,
            
          },
          
          700: {
            slidesPerView: 3,
            spaceBetween: 2,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 2,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 1,
          },
          
        }}
        className="swiper"
        style={{ margin: 0, padding: 0 }}
      >
        {cards.map((card, i) => {
          return (
            <SwiperSlide key={`card-${i}`} style={{ margin: 0, padding: 0 }}>
              <Card
                sx={{
                  padding: "10px",
                  borderRadius: "16px",
                  width: "80%",
                  height: "410px",
                  backgroundColor: "#011B23",
                  boxShadow: "0px 16px 16px 0px #0000000D",
                  border: `1px solid #ffffff`,
                }}
              >
                <CardMedia
                  sx={{ height: { xs: 190, sm: 240 }, borderRadius: 3 }}
                  image={card.thumbnail || ""}
                  title={card.name}
                />
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",

                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        // alignItems: "flex-end",
                        gap: 1,
                      }}
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          color: "#fff",
                          gap: 1,
                          font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                          color: Colors.light,
                        }}
                      >{`${card.programName}`}</Typography>
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        font: {
                          xs: `normal normal 700 normal 12.67px/25.33px ${Fonts.secondary}`,
                          sm: `normal normal 700 normal 16px/32px ${Fonts.secondary}`,
                        },
                        color: "#fff",
                      }}
                    >
                      {card.program}
                    </Typography>
                  </Box>

                  <div
                    style={{
                      display: "flex",
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                        flex: 1,
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src={card.schoolLogo}
                        alt={card.program}
                        width={24}
                        height={24}
                      />
                      <Typography
                        variant="h6"
                        sx={{
                          font: {
                            xs: ` 400 normal 12px ${Fonts.secondary}`,
                            sm: ` 400 normal  ${Fonts.secondary}`,
                          },
                          color: "#fff",
                        }}
                      >
                        {card.schoolName}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                        flex: 1,
                        alignItems: "center",
                        justifyContent: 'end'
                      }}
                    >
                      <ClockIcon />
                      <Typography
                        variant="h6"
                        sx={{
                          font: {
                            xs: ` 400 normal 12px ${Fonts.secondary}`,
                            sm: ` 400 normal  ${Fonts.secondary}`,
                          },
                          color: "#fff",
                        }}
                      >
                        {card.programDuration} weeks
                      </Typography>
                    </Box>
                  </div>

                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      backgroundColor: Colors.primary,
                      borderRadius: 2,
                      textAlign: "center",
                      // justifyContent: "center",
                      // justifyItems: "center",
                      marginBottom: 0
                    }}
                  >
                    <Button
                      size="small"
                      onClick={() =>
                        router.push(`/programs/technology/${card.programId}`)
                      }
                      endIcon={<ArrowForward />}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        font: `normal 400 16px/24px ${Fonts.secondary}`,
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
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          gap: "12px",
          mt: 2,
        }}
      >
        <Button
          disableElevation
          disableRipple
          onClick={goPrev}
          sx={{
            width: 36,
            height: 36,
            borderRadius: "50px",
            border: "2px solid #EAECF0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            color: "#667085",
          }}
        >
          <ArrowBackward />
        </Button>
        <Button
          onClick={goNext}
          sx={{
            width: 36,
            height: 36,
            borderRadius: "50px",
            border: "2px solid #EAECF0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            color: "#667085",
          }}
        >
          <ArrowForward />
        </Button>
      </Box>
    </div>
  );
}
