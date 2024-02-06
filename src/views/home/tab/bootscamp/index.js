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

export default function BootscampCards({ cards }) {
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
        spaceBetween={20}
        slidesPerView={1.5}
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
                  width: "100%",
                  maxWidth: "100%",
                  padding: "0 0 24px 0",
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                  boxShadow: "0px 16px 16px 0px #0000000D",
                  m: { xs: "10px", sm: "20px" },
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
                    gap: 1,
                    p: "0 16px 0 16px",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      font: `normal normal 500 normal 16px/20px ${Fonts.primary}`,
                      color: Colors.greyText,
                      mt: "24px",
                    }}
                  >
                    {card.icon} {`${card.name}`}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="g"
                    component="div"
                    sx={{
                      font: `normal normal 700 normal 16px/32px ${Fonts.secondary}`,
                      color: Colors.dark,
                    }}
                  >
                    {card.program}
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      width: "95%",
                      font: `normal normal 500 normal 14px/24px ${Fonts.primary}`,
                      color: Colors.grey,
                    }}
                  >
                    {card.description}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      font: `normal normal 500 normal 14px/24px ${Fonts.tertiary}`,
                      color: Colors.grey,
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
            color:
              swiperRef?.current?.swiper?.slidePrev() === true
                ? Colors.primary
                : "#667085",
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
            color:
              swiperRef?.current?.swiper?.slideNext() === true
                ? Colors.primary
                : "#667085",
          }}
        >
          <ArrowForward />
        </Button>
      </div>
    </div>
  )
}
