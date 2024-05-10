import React from "react";
import { Colors } from "../../components/themes/colors";
import { Fonts } from "../../components/themes/fonts";
import { Box, Typography } from "@mui/material";

const programs = [
  {
    icon: "icon",
    name: "Bootcamps",
    desc: "Our bootcamps provide a direct path to career success to rapidly enhance skills",
  },
  {
    icon: "icon",
    name: "Certificate Programs",
    desc: "Short specialized programs are available in 11 fields designed for on-the-job applications.",
  },
  {
    icon: "icon",
    name: "Degrees",
    desc: "Choose from accredited degree that aligns with your education and aspirations for a thriving career.",
  },
  {
    icon: "icon",
    name: "Masters",
    desc: "Tailored for professionals, our masters programs offer advanced skills in lots of disciplines for career enhancement.",
  },
];
export default function AcademicPrograms() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: { xs: "30px", sm: "50px" },
        }}
      >
        {programs.map((program, index) => (
          <Box
            key={index}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                font: `normal normal 700 normal 20px/30px ${Fonts.secondary}`,
                color: Colors.darkBlue,
                m: 0,
                p: 0,
                letterSpacing: "1%",
              }}
            >
              {program.name}
            </Typography>
            <Typography
              variant="h1"
              sx={{
                font: `normal normal 400 normal 16px/24px ${Fonts.arial}`,
                color: Colors.grey,
                m: 0,
                p: 0,
              }}
            >
              {program.desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}
