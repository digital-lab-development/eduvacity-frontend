import { Box } from "@mui/material"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import {
  ArrowBackward,
  ArrowForward,
  ClockIcon,
} from "../../../../components/svg"
import { Colors } from "../../../../components/themes/colors"
import { Fonts } from "../../../../components/themes/fonts"
import "swiper/css"

export default function DegreeCards({ cards }) {
  const swiperRef = React.useRef(null)

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "64px",
      }}
    >
      <Swiper
        ref={swiperRef}
        spaceBetween={15}
        slidesPerView={1.1}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 2.5,
            spaceBetween: 32,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 32,
          },
          1280: {
            slidesPerView: 3.5,
            spaceBetween: 32,
          },
        }}
        className="swiper"
      >
        {cards.map((card, i) => {
          const duration = card.duration
          const [number, unit] = duration.split(" ")
          return (
            <SwiperSlide key={`card-${i}`}>
              <Card
                sx={{
                  padding: "0 0 24px 0",
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: "6.33px", sm: "8px" },
                  boxShadow: "0px 16px 16px 0px #0000000D",
                  m: { xs: "10px 0", sm: "20px 0" },
                }}
              >
                <CardMedia
                  sx={{ height: 240 }}
                  image={card.image}
                  title={card.name}
                />
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
                      alignItems: "center",
                      gap: 1,
                      mt: { xs: 0, sm: 3 },
                      px: 2,
                    }}
                  >
                    {card.icon}{" "}
                    <Typography
                      gutterBottom
                      variant="h5"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        font: `normal normal 500 normal 16px/20px ${Fonts.primary}`,
                        color: Colors.greyText,
                        mt: { xs: 2, sm: 1 },
                        px: 2,
                      }}
                    >{`${card.name}`}</Typography>
                  </Box>
                  <Typography
                    gutterBottom
                    variant="p"
                    component="div"
                    sx={{
                      font: {
                        xs: `normal normal 700 normal 12px/25.33px ${Fonts.secondary}`,
                        sm: `normal normal 700 normal 16px/32px ${Fonts.secondary}`,
                      },
                      color: Colors.dark,
                      px: 2,
                    }}
                  >
                    {card.program}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      textAlign: "justify",
                      font: {
                        xs: `normal normal 500 normal 11.08px/19px ${Fonts.primary}`,
                        sm: `normal normal 500 normal 14px/24px ${Fonts.primary}`,
                      },
                      color: Colors.grey,
                      px: { xs: 2, sm: 2 },
                    }}
                  >
                    {card.description}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      font: {
                        xs: `normal normal 500 normal 11.08px/19px ${Fonts.primary}`,
                        sm: `normal normal 500 normal 14px/24px ${Fonts.primary}`,
                      },
                      color: Colors.grey,
                      px: { xs: 2, sm: 2 },
                    }}
                  >
                    <ClockIcon />{" "}
                    <span
                      style={{
                        display: "inline-flex",
                        color: Colors.secondary,
                        font: `normal normal 500 normal 14px/24px ${Fonts.secondary}`,
                      }}
                    >
                      {number}
                    </span>{" "}
                    {unit}
                  </Box>
                  <Box sx={{ width: 200 }}>
                    <Button
                      size="small"
                      endIcon={<ArrowForward />}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        font: `normal normal 700 normal 16px/24px ${Fonts.secondary}`,
                        textTransform: "none",
                        color: Colors.primary,
                        cursor: "pointer",
                        px: { xs: 2, sm: 2 },
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
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: 12,
        }}
      >
        <Button
          disableElevation
          disableRipple
          onClick={goPrev}
          sx={{
            width: 56,
            height: 56,
            borderRadius: "9999px",
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
            width: 56,
            height: 56,
            borderRadius: "9999px",
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
      </div>
    </div>
  )
}
