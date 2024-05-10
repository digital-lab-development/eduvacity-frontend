import React from "react";
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
import Image from "next/image";

export default function ProgramCard({ cards, handleClick }) {
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
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: "32px", sm: "16px" },
        flexWrap: "wrap",
      }}
    >
      {cards.map((card, i) => {
        const duration = card.duration;
        const [number, unit] = duration.split(" ");
        return (
          <Card
            key={i}
            variant="none"
            sx={{
              width: { xs: "100%", sm: "30%" },
              height: { xs: 100, sm: 120 },
              m: { xs: "20px 0px", sm: "16px 0" },
              display: "flex",
              flexDirection: "row",
              gap: "18px",
            }}
          >
            <Box
              sx={{
                border: "1px solid #EAECF0",
                width: "106px",
                height: "106px",
                borderRadius: "7px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <CardMedia component="img" image={card.image} alt={card.name} />
              </Box>
            </Box>

            <Box
              sx={{
                gap: "6px",
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

                    gap: 1,
                    // mt: { xs: '6.33px', sm: '20px' },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      font: `normal normal 500 normal 16px/24px ${Fonts.arial}`,
                      color: Colors.greyText,
                    }}
                  >{`${card.name}`}</Typography>
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    font: {
                      xs: `normal normal 700 normal 12.67px/25.33px ${Fonts.secondary}`,
                      sm: `normal normal 700 normal 16px/16px ${Fonts.secondary}`,
                    },
                    color: Colors.dark,
                  }}
                >
                  {card.program}
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: "3px",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                {/* <Typography
                      variant="p"
                      sx={{
                        hyphens: "auto",
                        font: {
                          xs: `normal normal 500 normal 14px/19px ${Fonts.primary}`,
                          sm: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                        },
                        color: Colors.textPrimaryDark,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {card.description}
                    </Typography> */}

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    gap: 1,
                  }}
                >
                  <Box sx={{ mt: 0.8 }}>
                    <ClockIcon />{" "}
                  </Box>
                  <Box
                    sx={{
                      font: {
                        xs: `normal normal 500 normal 11.08px/19px ${Fonts.tertiary}`,
                        sm: `normal normal 500 normal 14px/24px ${Fonts.tertiary}`,
                      },
                      color: Colors.textPrimaryDark,
                      mt: 0.45,
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        color: Colors.secondary,
                        font: `normal normal 400 normal 14px/24px ${Fonts.secondary}`,
                      }}
                    >
                      {number}
                    </span>{" "}
                    {unit}
                  </Box>
                </Box>
                <Button
                  size="small"
                  onClick={handleClick}
                  endIcon={<ArrowForward />}
                  sx={{
                    display: "flex",

                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: 1,
                    font: `normal normal 700 normal 14px/24px ${Fonts.secondary}`,
                    textTransform: "none",
                    color: Colors.primary,
                    cursor: "pointer",
                    "&:hover": {
                      background: "transparent",
                    },
                  }}
                >
                  View courses
                </Button>
              </Box>
            </Box>
          </Card>
        );
      })}
    </Box>
  );
}
