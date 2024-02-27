import { Box, Grid } from "@mui/material"
import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import * as React from "react"
import { OpenedBookIcon } from "../../components/svg"
import { Colors } from "../../components/themes/colors"
import { Fonts } from "../../components/themes/fonts"

const cards = [
  {
    name: "Foundations of Data Science",
    description: "Understand the basics of data science and analytics.",
    icon: <OpenedBookIcon />,
  },
  {
    name: "Statistical Methods",
    description: "Learn about statistical models and how to apply them.",
    icon: <OpenedBookIcon />,
  },
  {
    name: "Machine Learning Algorithms",
    description: "Dive into ML algorithms and their applications.",
    icon: <OpenedBookIcon />,
  },
  {
    name: "Real World Projects",
    description:
      "Work on actual data science projects to gain practical experience.",
    icon: <OpenedBookIcon />,
  },
]
export default function WhyJoinProgramCard() {
  return (
    <Box sx={{ width: "100%", display: "flex" }}>
      <Grid container spacing={3}>
        {cards.map((card, index) => {
          return (
            <Grid item xs={12} sm={6} lg={4} xl={3} key={`card-index-${index}`}>
              <Card
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  height: { xs: "100%", sm: 320, lg: 300, xl: 280 },
                  padding: "24px",
                  border: "1px solid #00000008",
                  borderRadius: "12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "64px",
                  boxShadow: "none",
                  background: "#F6F7F7",
                }}
              >
                <Box>{card.icon}</Box>
                <Box sx={{ width: "100%" }}>
                  <Typography
                    gutterBottom
                    variant="g"
                    component="div"
                    sx={{
                      font: {
                        xs: `normal normal 700 normal 18px/30px ${Fonts.secondary}`,
                        sm: `normal normal 700 normal 20px/30px ${Fonts.secondary}`,
                        textTransform: "capitalize",
                      },
                      color: Colors.dark,
                    }}
                  >
                    {card.name}
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      width: 341,
                      font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                      color: Colors.textColor,
                    }}
                  >
                    {card.description}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
