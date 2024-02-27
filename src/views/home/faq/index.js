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
    question: "What type of programs does eduvacity offers?",
    answer:
      "Eduvacity offers a diverse range of higher education courses, including degree, diploma, master's, and doctoral programs, as well as bootcamps in various domains such as technology, finance, and business from renowned universities. This enables you to obtain quality certifications equivalent to those earned through on-campus studies.",
  },
  {
    question: "How deos the admission process work?",
    answer:
      "Apply for a program by submitting your application requirements, undergo review by the eduvacity team for admission eligibility, and upon approval, receive orientation and course enrollment details to kick off your classes.",
  },
  {
    question: "What technology courses are available at eduvacity",
    answer:
      "Apply for a degree by submitting your application requirements, undergo review by the Miva team for admission eligibility, and upon approval, receive orientation and course enrollment details to kick off your classes.",
  },
  {
    question: "How are assessments and examinations conducted at Eduvacity?",
    answer:
      "Eduvacity conducts exams at its physical centers situated across various states in Nigeria, while For students located outside Nigeria, examinations are supervised remotely.",
  },
  {
    question: "Do I need to sit for the JAMB or UTME exams?",
    answer:
      "Applying to Eduvacity do not require JAMB resultt, it  is optional at this time. However, upon university admission, the authenticity of your WAEC, NECO, GCE, or NABTEB results will be verified.",
  },
  {
    question: "How much does tuition cost for eduvacity programs",
    answer:
      "The starting point for our tuition fees is just 120,000 Naira per year. We also offer flexible payment plans to make financing your education convenient and manageable.",
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
