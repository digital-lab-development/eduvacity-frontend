import { Box, Grid } from "@mui/material"
import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import * as React from "react"
import { CheckCircled } from "../../components/svg"
import { Fonts } from "../../components/themes/fonts"

const cards = [
  {
    title:
      "No certificate is required to apply for this diploma program. Anyone is welcome to enroll.",
  },
  {
    title: "Work experience is not required to pursue this track.",
  },
  {
    title:
      "No certificate is required to apply for this diploma program. Anyone is welcome to enroll.",
  },
  {
    title: "Work experience is not required to pursue this track.",
  },

  {
    title: "Sorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title:
      "No certificate is required to apply for this diploma program. Anyone is welcome to enroll.",
  },
  {
    title: "Work experience is not required to pursue this track.",
  },
  {
    title:
      "No certificate is required to apply for this diploma program. Anyone is welcome to enroll.",
  },
  {
    title: "Work experience is not required to pursue this track.",
  },
]
export default function KeyFeaturesCard() {
  return (
    <Box sx={{ width: "100%", display: "flex" }}>
      <Grid container spacing={3}>
        {cards.map((card, index) => {
          return (
            <Grid item xs={12} sm={6} lg={4} key={`card-index-${index}`}>
              <Card
                sx={{
                  boxShadow: "none",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                  background: "transparent",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <Box sx={{ width: "100%", display: "flex", gap: "12px" }}>
                    <Box>
                      <CheckCircled />
                    </Box>{" "}
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{
                        font: `normal normal 400 normal 18px/28px ${Fonts.inter}`,
                        color: "#475467",
                        letterSpacing: "0em",
                        textAlign: "left",
                      }}
                    >
                      {card.title}
                    </Typography>
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
