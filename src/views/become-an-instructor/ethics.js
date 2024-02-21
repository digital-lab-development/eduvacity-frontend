import { Box, Grid } from "@mui/material"
import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import * as React from "react"
import {
  ArewaIcon,
  ClipBoardIcon,
  CommentIcon,
  PieIcon,
  SparkIcon,
} from "../../components/svg"
import { Colors } from "../../components/themes/colors"
import { Fonts } from "../../components/themes/fonts"

const cards = [
  {
    name: "Care about our team",
    description:
      "Understand what matters to our employees. Give them what they need to do their best work.",
    icon: <CommentIcon />,
  },
  {
    name: "Be excellent to each other",
    description:
      "No games, No shade. We rely on our peers to improve. Be open, honest and kind.",
    icon: <SparkIcon />,
  },
  {
    name: "Pride in what we do",
    description:
      "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    icon: <ClipBoardIcon />,
  },
  {
    name: "Pride in what we do",
    description:
      "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    icon: <ArewaIcon />,
  },
  {
    name: "Pride in what we do",
    description:
      "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    icon: <PieIcon />,
  },
  {
    name: "Pride in what we do",
    description:
      "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    icon: <ClipBoardIcon />,
  },
]
export default function EthicsCard() {
  return (
    <Box sx={{ width: "100%", display: "flex" }}>
      <Grid container spacing={3}>
        {cards.map((card, index) => {
          return (
            <Grid item xs={12} sm={6} md={6} lg={4} key={`card-index-${index}`}>
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
