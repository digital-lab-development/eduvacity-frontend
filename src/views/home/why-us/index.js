import { Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {
  AcademyCap,
  AnchorIcon,
  BadgeIcon,
  ComputerIcon,
  PeopleIcon,
  StackedCard,
} from "../../../components/svg";
import { Colors } from "../../../components/themes/colors";
import { Fonts } from "../../../components/themes/fonts";
const cards = [
  {
    name: "Flexible and focused degrees",
    description:
      "Choose when and where you learn. Fit your studies around your job so you can earn while you learn. You can select courses that focus on your chosen career from day one. Or, take your time to explore a range of courses before deciding.",
    icon: <AcademyCap />,
  },
  {
    name: "Your teachers",
    description:
      "Learn from experts who are changing the world one project at a time. Your lecturers, tutors, and mentors will inspire and prepare you for your career.",
    icon: <StackedCard />,
  },
  {
    name: "Well being",
    description:
      "We are committed to supporting the well-being of our students, offering free discounted services to help them achieve work and life balance.",
    icon: <AnchorIcon />,
  },
  {
    name: "Your network",
    description:
      "Eduvacity draws students from different locations, joins students from 5 current locations with a diversified culture, and expands your network.",
    icon: <PeopleIcon />,
  },
];
export default function WhyUs() {
  return (
    <Box sx={{ width: "100%", display: "flex" }}>
      <Grid container spacing={3}>
        {cards.map((card, index) => {
          return (
            <Grid item xs={12} sm={6} md={6} lg={3} key={`card-index-${index}`}>
              <Card
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  height: { xs: "100%", sm: 350, lg: 350, xl: 325 },
                  borderRadius: "12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  boxShadow: "none",
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
                        xs: `normal normal 700 normal 16px/32px ${Fonts.secondary}`,
                        sm: `normal normal 700 normal 16px/32px ${Fonts.secondary}`,
                        textTransform: "capitalize",
                      },
                      color: Colors.darkBlue,
                    }}
                  >
                    {card.name}
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      width: 341,
                      font: `normal normal 400 normal 14px/24px ${Fonts.primary}`,
                      color: Colors.grey,
                    }}
                  >
                    {card.description}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
