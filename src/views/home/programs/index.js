import { Box, Button, Grid } from "@mui/material"
import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import * as React from "react"
import {
  ArrowForward,
  BootscampPeopleicon,
  DectorateIcon,
  DegreeIcon,
  DiplomaIcon,
  MastersIcon,
} from "../../../components/svg"
import { Colors } from "../../../components/themes/colors"
import { Fonts } from "../../../components/themes/fonts"
const cards = [
  {
    name: "Bootcamps",
    description:
      "Rapidly enhance skills in software development, UX/UI design, project management, and lots more. Our bootcamps provide a direct path to career success.",
    icon: <BootscampPeopleicon />,
    active: true,
    link: "/",
  },
  {
    name: "Diploma",
    description:
      "Explore focused diploma programs in data analytics, digital marketing, and cybersecurity. Swift and comprehensive, these diplomas are tailored for targeted expertise seekers.",
    icon: <DiplomaIcon />,
    active: true,
    link: "/",
  },
  {
    name: "Degrees",
    description:
      "Choose from accredited degree programs in computer science, business administration, and more. Align your education with aspirations for a thriving career.",
    icon: <DegreeIcon />,
    active: false,
    link: "",
  },
  {
    name: "Masters",
    description:
      "Tailored for professionals, our master's programs offer advanced skills in disciplines like artificial intelligence, business analytics, and more for career enhancement.",
    icon: <MastersIcon />,
    active: false,
    link: "",
  },
  {
    name: "Doctorate",
    description:
      "Unique executive Ph.D. program offers in-depth modern management theory knowledge, culminating in a focused dissertation or research for mastery in one's domain.",
    icon: <DectorateIcon />,
  },
]
export default function ProgramsCard() {
  return (
    <Box sx={{ width: "100%", display: "flex" }}>
      <Grid container spacing={3}>
        {cards.map((card, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={`card-index-${index}`}>
              <Card
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  height: { xs: "100%", sm: 420, lg: 389.33 },
                  display: "flex",
                  gap: { xs: "32px", sm: 0 },
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "24px",
                  border: "1px solid rgba(0, 0, 0, 0.03)",
                  borderRadius: "12px",
                  boxShadow: "none",
                  background: "#FFF",
                }}
              >
                <Box>{card.icon}</Box>
                <Box sx={{ width: "100%" }}>
                  <Typography
                    gutterBottom
                    variant="g"
                    component="div"
                    sx={{
                      font: `normal normal 700 normal 20px/30px ${Fonts.secondary}`,
                      color: Colors.dark,
                    }}
                  >
                    {card.name}
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      width: "100%",
                      font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                      color: "#868B93",
                    }}
                  >
                    {card.description}
                  </Typography>
                  <Box sx={{ width: 200, mt: 3 }}>
                    {card.active === true ? (
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
                        Get started
                      </Button>
                    ) : (
                      <Button
                        size="small"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          width: 140,
                          height: 40,
                          padding: "4px 13px 4px 13px",
                          gap: "10px",
                          borderRadius: "36px",
                          font: `normal normal 600 normal 16px/24px ${Fonts.inter}`,
                          textTransform: "none",
                          color: "#E3A229",
                          cursor: "pointer",
                          background: "rgba(227, 162, 41, 0.16)",
                          "&:hover": {
                            background: "rgba(227, 162, 41, 0.16)",
                          },
                        }}
                      >
                        Coming soon
                      </Button>
                    )}
                  </Box>
                </Box>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
