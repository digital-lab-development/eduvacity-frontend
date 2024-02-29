import * as React from 'react';

import Box from '@mui/material/Box';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';

import { Colors } from '../../components/themes/colors';
import { Fonts } from '../../components/themes/fonts';
import {
  ArewaIcon,
  ClipBoardIcon,
  CommentIcon,
  PieIcon,
  SparkIcon,
  MinusIcon,
  PlusIcon,
} from '../../components/svg';

const cards = [
  {
    name: 'Care about our team',
    description:
      'Understand what matters to our employees. Give them what they need to do their best work.',
    icon: <CommentIcon />,
  },
  {
    name: 'Be excellent to each other',
    description:
      'No games, No shade. We rely on our peers to improve. Be open, honest and kind.',
    icon: <SparkIcon />,
  },
  {
    name: 'Pride in what we do',
    description:
      'Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    icon: <ClipBoardIcon />,
  },
  {
    name: 'Pride in what we do',
    description:
      'Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    icon: <ArewaIcon />,
  },
  {
    name: 'Pride in what we do',
    description:
      'Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    icon: <PieIcon />,
  },
  {
    name: 'Pride in what we do',
    description:
      'Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    icon: <ClipBoardIcon />,
  },
];

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

const ethics = [
  // {
  //   title: 'Welcome to the team!',
  //   topics:
  //     'We are an online platform for higher education that works with leading African universities to offer programs that are relevant to the industry.',
  // },
  // {
  //   title: 'Vision',
  //   topics:
  //     "To be the leading force in transforming Africa's education landscape, creating a future where every individual has the opportunity to thrive, through the power of knowledge and skills",
  // },
  // {
  //   title: 'Mission',
  //   topics:
  //     'To unlock the potential of every African by democratizing access to high-quality, industry-relevant education and fostering a generation of empowered learners who drive innovation and economic growth.',
  // },
  {
    title: 'Our Core Values',
    topics: [
      'Collaborative Spirit: We believe in the power of teamwork, open communication, and diverse perspectives to achieve shared goals and build a stronger community.',
      'Inclusion: We champion diversity and inclusion, fostering a welcoming environment where everyone feels valued, respected, and encouraged to contribute their unique talents.',
      'Lifelong Growth: We cultivate a culture of continuous learning and personal development, encouraging both employees and students to embrace new challenges and expand their horizons.',
      'Integrity: We hold ourselves to the highest moral standards and act with honesty and transparency.',
    ],
  },
  // {
  //   title: 'Transparent Communication',
  //   topics:
  //     'To guarantee that everyone feels heard and respected, the company maintains open-door policies, regular forums, and active feedback mechanisms.',
  // },
  // {
  //   title: 'Recognition',
  //   topics:
  //     'We celebrate individual and team achievements, both big and small, that uphold the core values and contribute to the bigger mission.',
  // },
  // {
  //   title: 'Professional Development ',
  //   topics:
  //     'We offer training programs, mentorship opportunities, and access to industry experts to support continuous learning and career growth.',
  // },
  // {
  //   title: 'Social Impact',
  //   topics:
  //     'We encourage team member engagement in volunteer projects and partnerships with NGOs, fostering a sense of social responsibility and community impact.',
  // },
  // {
  //   title: 'Work-life balance & well-being',
  //   topics:
  //     'We support initiatives that enhance general well-being, flexible work schedules, and healthy lifestyle choices.',
  // },
];

export default function EthicsCard() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        width: '100%',
      }}>
      {ethics?.map((ethic, i) => (
        <Box key={`quest-${i}`} sx={{ width: '100%' }}>
          <Accordion
            expanded={expanded === `panel${i + 1}`}
            onChange={handleChange(`panel${i + 1}`)}>
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              // expandIcon={
              //   expanded === `panel${i + 1}` ? <MinusIcon /> : <PlusIcon />
              // }
            >
              {ethic.title}
            </AccordionSummary>
            <AccordionDetails>
              {Array.isArray(ethic.topics) ? (
                <Box component="ul">
                  {ethic.topics?.map((topic, i) => {
                    return (
                      <Box
                        component="li"
                        key={`topic-${i}`}
                        sx={{
                          font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                          textAlign: 'left',
                          letterSpacing: '0em',
                          color: '#788B8F',
                          pr: '1.5rem',
                          pb: 2,
                        }}>
                        {topic}
                      </Box>
                    );
                  })}
                </Box>
              ) : (
                <Box
                  key={`topic-${i}`}
                  sx={{
                    font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                    textAlign: 'left',
                    letterSpacing: '0em',
                    color: '#788B8F',
                    p: '1.5rem',
                  }}>
                  {ethic.topics}
                </Box>
              )}
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </Box>
  );
}
