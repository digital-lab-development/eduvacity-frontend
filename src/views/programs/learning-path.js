import { Box } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import { MinusIcon, PlusIcon } from '../../components/svg';
import { Fonts } from '../../components/themes/fonts';
import { Colors } from '../../components/themes/colors';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  width: '100%',
  background: Colors.light,
  border: '1px solid #EAECF0',
  margin: '15px 0',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  () => ({
    backgroundColor: Colors.light,
    textAlign: 'left',
    font: `normal normal 700 16px/32px ${Fonts.secondary}`,
    letterSpacing: '0em',
    color: Colors.dark,
    padding: '0 24px',
    minHeight: 10,
    '& .MuiAccordionSummary-content': {
      maxWidth: '100%',
    },
  })
);

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: 0,
  m: 0,
  textAlign: 'left',
  font: {
    xs: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
    sm: `normal normal 500 normal 18px/24px ${Fonts.primary}`,
  },
  letterSpacing: 0,
  color: '#868B93',
}));

const learningPath = [
  {
    title: 'Python Basics',
    topics: [
      'Overview of Python',
      'Setting up Python environment',
      'Basic syntax and data types',
      'Conditional statements',
      'Loops in Python',
      'Functions and their usage',
      'Lists, tuples, and dictionaries',
      'Sets and their operations',
      'String manipulation',
      'Classes and objects',
    ],
  },
  {
    title: 'Induction for Caltech PGP Cloud Program',
    topics: [],
  },
  {
    title: 'Foundations and Preparatory Module - AWS & Azure',
    topics: [],
  },
  {
    title: 'PGP CC - AWS Cloud Fundamentals',
    topics: [],
  },
  {
    title: 'PGP CC - AWS Solutions Architect',
    topics: [],
  },
  {
    title: 'PGP CC - Microsoft Certified Azure Administrator: AZ:104',
    topics: [],
  },
  {
    title: 'PGP CC - Designing Microsoft Azure Infrastructure Solutions AZ:305',
    topics: [],
  },
  {
    title: 'PGP CC - DevOps on AWS',
    topics: [],
  },
  {
    title: 'PGP CC - Cloud Computing Capstone Project',
    topics: [],
  },
  {
    title: 'Electives:',
    topics: [],
  },
  {
    title: 'Generative AI Masterclass',
    topics: [],
  },
];
export default function LearningPath({ course }) {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        width: '100%',
      }}>
      {course &&
        course?.map((path, i) => (
          <Box key={`quest-${i}`} sx={{ width: '100%' }}>
            <Accordion
              expanded={expanded === `panel${i + 1}`}
              onChange={handleChange(`panel${i + 1}`)}>
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
                expandIcon={
                  expanded === `panel${i + 1}` ? <MinusIcon /> : <PlusIcon />
                }>
                {path.moduleName}
              </AccordionSummary>
              <AccordionDetails>
                <Box component="ul">
                  {path?.learningPathLessons?.map((topic, i) => {
                    return (
                      <Box
                        component="li"
                        key={`topic-${i}`}
                        sx={{
                          font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                          textAlign: 'left',
                          letterSpacing: '0em',
                          color: '#788B8F',
                        }}>
                        {topic.lessonName}
                      </Box>
                    );
                  })}
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        ))}
    </Box>
  );
}
