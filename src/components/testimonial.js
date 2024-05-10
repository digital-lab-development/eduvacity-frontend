import React from "react";
import { Typography, Box } from "@mui/material";
import { Colors } from "./themes/colors";
import { Fonts } from "./themes/fonts";

const testimonials = [
  {
    image: "/images/testimonial-img.svg",
    comment:
      "Eduvacity removed financial barriers and empowered me as a learner",
    name: "Michelle Ademola",
    course: "Diploma in Data Analysis",
  },
  {
    image: "/images/testimonial-img.svg",
    comment:
      "Studying at Eduvacity allows me to earn my B.sc while balancing my busy work schedule",
    name: "-Hassan Rufa",
    course: "BSc, Business Administration",
  },
];
export default function Testimonial() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: "8px", sm: "28px" },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <>
            <Box
              key={index}
              sx={{
                width: "180px",
                height: {
                  xs: 180,
                  sm: 180,
                  borderRadius: "12px",
                },
                backgroundImage: {
                  xs: `url(${testimonial.image})`,
                  sm: `url(${testimonial.image})`,
                },
                backgroundSize: { xs: "fit", sm: "fit" },
                backgroundRepeat: "no-repeat",
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: "8px", sm: "12px" },
                alignItems: { xs: "center", sm: "flex-start" },
              }}
            >
              <Typography
                variant="span"
                sx={{
                  font: {
                    xs: `normal normal 400 normal 16px/24px ${Fonts.inter}`,
                    md: `normal normal 600 normal 30px/38px ${Fonts.inter}`,
                  },
                  color: "#41A36E",
                }}
              >
                “
              </Typography>
              <Typography
                variant="span"
                sx={{
                  font: {
                    xs: `normal normal 400 normal 16px/24px ${Fonts.inter}`,
                    md: `normal normal 600 normal 16px/34px ${Fonts.inter}`,
                  },
                  color: Colors.grey,
                }}
              >
                {testimonial.comment}
              </Typography>
              <Typography
                variant="span"
                sx={{
                  font: {
                    xs: `normal normal 400 normal 16px/16px ${Fonts.inter}`,
                    md: `normal normal 400 normal 16px/16px ${Fonts.inter}`,
                  },
                  color: Colors.darkBlue,
                }}
              >
                - {testimonial.name} ({testimonial.course})
              </Typography>
            </Box>
          </>
        ))}
      </Box>
    </>
  );
}
