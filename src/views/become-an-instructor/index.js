import { Box, Card, CardContent, CardHeader } from "@mui/material"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import React from "react"
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"
import {
  ArrowBackward,
  ArrowForward,
  WhiteLinkedIn,
} from "../../components/svg"
import { Colors } from "../../components/themes/colors"
import { Fonts } from "../../components/themes/fonts"

const cards = [
  {
    name: "Alisa Hester",
    program: "Product Marketing",
    description:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    icon: <WhiteLinkedIn />,
    image: "/images/teacher1.png",
  },
  {
    name: "Alisa Hester",
    program: "Product Marketing",
    description:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    icon: <WhiteLinkedIn />,
    image: "/images/teacher2.png",
  },
  {
    name: "Alisa Hester",
    program: "Product Marketing",
    description:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    icon: <WhiteLinkedIn />,
    image: "/images/teacher3.png",
  },
  {
    name: "Alisa Hester",
    program: "Product Marketing",
    description:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    icon: <WhiteLinkedIn />,
    image: "/images/teacher4.png",
  },
]
export default function InstructorsCards() {
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
        gap: { xs: "32px", sm: "64px" },
      }}
    >
      <Swiper
        ref={swiperRef}
        spaceBetween={15}
        slidesPerView={1}
        navigation
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2.2,
            spaceBetween: 20,
          },
          700: {
            slidesPerView: 1.35,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          900: {
            slidesPerView: 1,
            spaceBetween: 32,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 32,
          },
          1280: {
            slidesPerView: 2.5,
            spaceBetween: 32,
          },
          1500: {
            slidesPerView: 2.5,
            spaceBetween: 32,
          },
          1700: {
            slidesPerView: 3.5,
            spaceBetween: 32,
          },
        }}
        className="swiper"
        style={{ width: "100%", height: "100%", margin: 0, padding: 0 }}
      >
        {cards.map((card, i) => {
          return (
            <SwiperSlide key={`card-${i}`} style={{ margin: 0, padding: 0 }}>
              <Box
                sx={{
                  borderRadius: "16px",
                  height: { xs: 565.42, sm: 740, md: 1000, lg: 540, xl: 500 },
                  border: `1px solid #0000000D`,
                  backgroundImage: `url(${card.image})`,
                  backgroundSize: "cover",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%)",
                    height: "100%",
                    gap: "32px",
                  }}
                >
                  <Card
                    sx={{
                      background: "rgba(255, 255, 255, 0.3)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      boxShadow: "none",
                      position: "absolute",
                      bottom: 20,
                      borderRadius: "6px",
                      padding: "20px 24px 24px 24px",
                      width: "80%",
                    }}
                  >
                    <CardHeader
                      title={
                        <Typography
                          variant="h5"
                          sx={{
                            display: "flex",
                            // alignItems: "center",
                            gap: 1,
                            font: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
                            color: Colors.light,
                            textAlign: "left",
                          }}
                        >{`${card.name}`}</Typography>
                      }
                      action={<Box>{card.icon} </Box>}
                      sx={{ m: 0, p: 0, mb: 2 }}
                    />
                    <Box
                      sx={{
                        flexDirection: "column",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            font: {
                              xs: `normal normal 600 normal 14px/25px ${Fonts.inter}`,
                              sm: `normal normal 600 normal 18px/28px ${Fonts.inter}`,
                            },
                            textAlign: "left",
                            color: Colors.light,
                          }}
                        >
                          {card.program}
                        </Typography>
                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                          }}
                        >
                          <Typography
                            variant="p"
                            sx={{
                              textAlign: "left",
                              font: {
                                xs: `normal normal 400 normal 14px/19px ${Fonts.primary}`,
                                sm: `normal normal 400 normal 16px/24px ${Fonts.primary}`,
                              },
                              letterSpacing: "0em",
                              textAlign: "left",
                              color: Colors.light,
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "-webkit-box",
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: "vertical",
                            }}
                          >
                            {card.description}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Card>
                </Box>
              </Box>
            </SwiperSlide>
          )
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
      </Box>
    </div>
  )
}
