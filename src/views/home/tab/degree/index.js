import { Box, CardContent } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  ArrowBackward,
  ArrowForward,
  ClockIcon,
} from '../../../../components/svg';
import { Colors } from '../../../../components/themes/colors';
import { Fonts } from '../../../../components/themes/fonts';
import 'swiper/css';

export default function DegreeCards({ cards, handleClick }) {
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
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: '32px', sm: '64px' },
      }}>
      <Swiper
        ref={swiperRef}
        spaceBetween={15}
        slidesPerView={1}
        navigation
        breakpoints={{
          540: {
            slidesPerView: 1.4,
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
            slidesPerView: 1.4,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 1.7,
            spaceBetween: 32,
          },
          1024: {
            slidesPerView: 1.9,
            spaceBetween: 32,
          },
          1280: {
            slidesPerView: 2.4,
            spaceBetween: 32,
          },
          1500: {
            slidesPerView: 3.1,
            spaceBetween: 32,
          },
        }}
        className="swiper"
        style={{ margin: 0, padding: 0 }}>
        {cards.map((card, i) => {
          const duration = card.duration;
          const [number, unit] = duration.split(' ');
          return (
            <SwiperSlide key={`card-${i}`} style={{ margin: 0, padding: 0 }}>
              <Card
                sx={{
                  padding: '0 0 24px 0',
                  borderRadius: '16px',
                  width: '100%',
                  height: { xs: 405.42, sm: 510 },
                  boxShadow: '0px 16px 16px 0px #0000000D',
                  m: { xs: '20px 0px', sm: '20px 0' },
                  border: `1px solid #0000000D`,
                }}>
                <CardMedia
                  sx={{ height: { xs: 190, sm: 240 } }}
                  image={card.image}
                  title={card.name}
                />
                <CardContent
                  sx={{
                    width: '100%',
                    maxWidth: { xs: 330, sm: 450 },
                    display: 'flex',
                    flexDirection: 'column',
                    gap: { xs: '6.33px', sm: '8px' },
                    px: { xs: 1, sm: 2, md: 2, lg: 2.5, xl: 3 },
                  }}>
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        mt: { xs: '6.33px', sm: '20px' },
                      }}>
                      <Box>{card.icon} </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                          color: Colors.greyText,
                        }}>{`${card.name}`}</Typography>
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        font: {
                          xs: `normal normal 700 normal 14px/25.33px ${Fonts.inter}`,
                          sm: `normal normal 700 normal 16px/32px ${Fonts.inter}`,
                        },
                        color: Colors.dark,
                      }}>
                      {card.program}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1,
                    }}>
                    <Typography
                      variant="p"
                      sx={{
                        textAlign: 'left',
                        font: {
                          xs: `normal normal 500 normal 14px/19px ${Fonts.primary}`,
                          sm: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                        },
                        color: Colors.textPrimaryDark,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                      }}>
                      {card.description}
                    </Typography>

                    <Box
                      sx={{
                        width: '100%',
                        display: 'flex',
                        gap: 1,
                      }}>
                      <Box sx={{ mt: 0.8 }}>
                        <ClockIcon />{' '}
                      </Box>
                      <Box
                        sx={{
                          font: {
                            xs: `normal normal 500 normal 11.08px/19px ${Fonts.tertiary}`,
                            sm: `normal normal 500 normal 14px/24px ${Fonts.tertiary}`,
                          },
                          color: Colors.textPrimaryDark,
                          mt: 0.45,
                        }}>
                        <span
                          style={{
                            display: 'inline-flex',
                            color: Colors.secondary,
                            font: `normal normal 400 normal 14px/24px ${Fonts.secondary}`,
                          }}>
                          {number}
                        </span>{' '}
                        {unit}
                      </Box>
                    </Box>
                    <Button
                      size="small"
                      endIcon={<ArrowForward />}
                      onClick={handleClick}
                      sx={{
                        width: { xs: 160, sm: 140 },
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        font: `normal normal 700 normal 16px/24px ${Fonts.secondary}`,
                        textTransform: 'none',
                        color: Colors.primary,
                        cursor: 'pointer',
                        '&:hover': {
                          background: 'transparent',
                        },
                      }}>
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
          width: '100%',
          display: 'flex',
          gap: '12px',
          mt: 2,
        }}>
        <Button
          disableElevation
          disableRipple
          onClick={goPrev}
          sx={{
            width: 56,
            height: 56,
            borderRadius: '9999px',
            border: '2px solid #EAECF0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
            color: '#667085',
          }}>
          <ArrowBackward />
        </Button>
        <Button
          onClick={goNext}
          sx={{
            width: 56,
            height: 56,
            borderRadius: '9999px',
            border: '2px solid #EAECF0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
            color: '#667085',
          }}>
          <ArrowForward />
        </Button>
      </Box>
    </div>
  );
}
