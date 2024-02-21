import { Box } from "@mui/material"
import MuiAccordion from "@mui/material/Accordion"
import MuiAccordionDetails from "@mui/material/AccordionDetails"
import MuiAccordionSummary from "@mui/material/AccordionSummary"
import { styled } from "@mui/material/styles"
import React, { useState } from "react"
import { MinusIcon, PlusIcon } from "../../../components/svg"
import { Colors } from "../../../components/themes/colors"
import { Fonts } from "../../../components/themes/fonts"

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  background: Colors.light,
  borderBottom: "1px solid #EAECF0",
  padding: "14px 0 0 0",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}))

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  () => ({
    backgroundColor: Colors.light,
    textAlign: "left",
    font: `normal normal 400 18px/28px ${Fonts.secondary}`,
    letterSpacing: 0,
    color: "#011B23",
    padding: 0,
    paddingBottom: 24,
    minHeight: 10,
    "& .MuiAccordionSummary-content": {
      maxWidth: "100%",
    },
  })
)

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: 0,
  paddingBottom: 24,
  textAlign: "left",
  font: {
    xs: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
    sm: `normal normal 500 normal 18px/24px ${Fonts.primary}`,
  },
  letterSpacing: 0,
  color: "#868B93",
}))

const questions = [
  {
    question: "What types of courses does Eduvacity offer?",
    answer:
      "Eduvacity provides a diverse range of higher education courses, including degree, diploma, Masters and Doctorate programs, bootcamps in different domains, including, technology, finance, and business from renowned universities which allows you to earn quality certification as the one obtain in on campus studies. ",
  },
  {
    question: "How does the admission process work?",
    answer:
      "Eduvacity provides a diverse range of higher education courses, including degree, diploma, Masters and Doctorate programs, bootcamps in different domains, including, technology, finance, and business from renowned universities which allows you to earn quality certification as the one obtain in on campus studies. ",
  },
  {
    question:
      "What technology-related courses are available through Eduvacity?",
    answer:
      "Eduvacity provides a diverse range of higher education courses, including degree, diploma, Masters and Doctorate programs, bootcamps in different domains, including, technology, finance, and business from renowned universities which allows you to earn quality certification as the one obtain in on campus studies. ",
  },
  {
    question: "How are assessments and examinations conducted at eduvacity?",
    answer:
      "Eduvacity provides a diverse range of higher education courses, including degree, diploma, Masters and Doctorate programs, bootcamps in different domains, including, technology, finance, and business from renowned universities which allows you to earn quality certification as the one obtain in on campus studies. ",
  },
  {
    question: "How do I apply for a program?",
    answer:
      "Eduvacity provides a diverse range of higher education courses, including degree, diploma, Masters and Doctorate programs, bootcamps in different domains, including, technology, finance, and business from renowned universities which allows you to earn quality certification as the one obtain in on campus studies. ",
  },
  {
    question: "How much does tuition cost for Eduvacity programs?",
    answer:
      "Eduvacity provides a diverse range of higher education courses, including degree, diploma, Masters and Doctorate programs, bootcamps in different domains, including, technology, finance, and business from renowned universities which allows you to earn quality certification as the one obtain in on campus studies. ",
  },
]
export default function FrequentlyAskQuestions() {
  const [expanded, setExpanded] = useState("panel1")

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 768,
      }}
    >
      {questions?.map((quest, i) => (
        <Box key={`quest-${i}`} sx={{ width: "100%" }}>
          <Accordion
            expanded={expanded === `panel${i + 1}`}
            onChange={handleChange(`panel${i + 1}`)}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              expandIcon={
                expanded === `panel${i + 1}` ? <MinusIcon /> : <PlusIcon />
              }
            >
              {quest.question}
            </AccordionSummary>
            <AccordionDetails>{quest.answer}</AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </Box>
  )
}
