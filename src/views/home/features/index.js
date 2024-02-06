import { Box, Grid } from "@mui/material"
import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import * as React from "react"
import {
  AcademyCap,
  AnchorIcon,
  BadgeIcon,
  ComputerIcon,
  PeopleIcon,
  StackedCard,
} from "../../../components/svg"
import { Colors } from "../../../components/themes/colors"
import { Fonts } from "../../../components/themes/fonts"
const cards = [
  {
    name: "University-Based Learning",
    description:
      "Completing a course at Eduvacity is equivalent to completing a course on campus. We collaborate with the world's best universities to offer you the best career path.",
    icon: <BadgeIcon />,
  },
  {
    name: "Industry-Relevant Curriculum",
    description:
      "Eduvacity collaborates with experts and institutions to offer courses aligned with industry needs. This ensure that the skills learned are up-to-date and applicable in the real world.",
    icon: <StackedCard />,
  },
  {
    name: "Flexible Learning Options",
    description:
      "Eduvacity are thought by experienced professionals and experts in their respective fields. Learning from industry leaders provide valuable insights and practical knowledge to our students.",
    icon: <AcademyCap />,
  },
  {
    name: "Mentorship Opportunities",
    description:
      "Eduvacity programs offer mentorship opportunities, allowing learners to connect with experienced professionals who can provide guidance, share insights, and help navigate the industry.",
    icon: <PeopleIcon />,
  },
  {
    name: "Professional Placement",
    description:
      "Eduvacity offers career support, aiding learners in job placement or transitions post-course completion, appealing to those seeking practical outcomes from their education.",
    icon: <ComputerIcon />,
  },
  {
    name: "Lifelong leaning",
    description:
      "The journey of learning never ends. Eduvacity empowers you with a wealth of knowledge from top-notch universities, ensuring that your educational journey is not limited by time or boundaries.",
    icon: <AnchorIcon />,
  },
]
export default function FeaturesCard() {
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
                  height: { xs: "100%", sm: 350, lg: 350, xl: 325 },
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
                      font: `normal normal 700 normal 20px/30px ${Fonts.secondary}`,
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
                      color: "#868B93",
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
