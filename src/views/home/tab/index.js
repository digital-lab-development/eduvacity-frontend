import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { ABULogo, SchoolLogo } from '../../../components/svg/index.js';
import { Colors } from '../../../components/themes/colors';
import { Fonts } from '../../../components/themes/fonts';
import BootscampCards from './bootscamp/index.js';
import DegreeCards from './degree/index.js';
import DiplomaCards from './diploma/index.js';
import ProgramCard from './program-card.js';
import axios from 'axios';
import { apiEndpoint } from '../../../utils/index.js';

const StyledTabs = styled(Tabs)({
  borderBottom: '1px solid #EAECF0',
  '& .MuiTabs-indicator': {
    backgroundColor: Colors.primary,
  },
});
const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
      minWidth: 0,
    },
    marginRight: 8,
    color: '#667085',
    gap: 8,
    font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
    '&:hover': {
      color: Colors.primary,
      opacity: 1,
    },
    '&.Mui-selected': {
      color: Colors.primary,
    },
    '&.Mui-focusVisible': {
      backgroundColor: Colors.primary,
    },
  })
);
const cards = [
  {
    name: '',
    program: 'Diploma in Banking & Finance ',
    description:
      'Banking and finance are essential for economic advancement and stability. Our Banking and Finance program course is created to empower students with the expertise and abilities essential for excelling in this dynamic field, ensuring their readiness for success in the intricate realm of finance.',
    duration: '16 months',
    type: 'diploma',
    image: '/images/banking-finance.jpg',
    icon: '/images/eduvacity-logo.svg',
  },
  // {
  //   name: '',
  //   program: 'Diploma in Computer Science',
  //   description:
  //     'Our Marketing program is tailored to furnish students with the strategies and proficiencies crucial for thriving in this fast-paced domain, positioning them for success in marketing profession.',
  //   duration: '16 months',
  //   type: 'diploma',
  //   image: '/images/senatebuilding.png',
  //   icon: '/images/eduvacity-logo.svg',
  // },
  {
    name: '',
    program: 'Diploma in Computer Science',
    description:
      "Computer science stands as the backbone of innovation and technological advancement in today's digital era. This program is design to equip students with the theoretical knowledge and practical skills necessary to empower  them to excel in various computing domains and contribute meaningfully to the technological landscape.",
    duration: '16 months',
    type: 'diploma',
    image: '/images/computer-science.jpg',
    icon: '/images/eduvacity-logo.svg',
  },
  {
    name: '',
    program: 'Diploma in Computer Engineering',
    description:
      'Computer engineering plays a vital role in shaping the technological landscape and driving innovation. These course equip students with the necessary theoretical foundations and hands-on skills to excel.',
    duration: '16 months',
    type: 'diploma',
    image: '/images/computer-engineering.jpg',
    icon: '/images/eduvacity-logo.svg',
  },
  {
    name: '',
    program: 'Diploma in Business Administration',
    description:
      'Eduvacity business administration is designed to provide students with a comprehensive understanding of business principles and practices, preparing them to succeed in diverse corporate environments.',
    duration: '16 months',
    type: 'diploma',
    image: '/images/business-admin.jpg',
    icon: '/images/eduvacity-logo.svg',
  },
  //degree
  // {
  //   name: 'University of Lagos',
  //   program: 'Diploma in Computer Engineering',
  //   description:
  //     'The department of Business Administration has over the years developed a reputation for learning excellence, consistently producing excellent accounting graduates who are making notable contributions in both and private sectors of the Nigerian economy.',
  //   duration: '3 months',
  //   type: 'degree',
  //   image: '/images/castle-school.png',
  //   icon: '/images/eduvacity-logo.svg',
  // },
  // {
  //   name: 'University of Lagos',
  //   program: 'Diploma in Computer Engineering',
  //   description:
  //     'The department of Business Administration has over the years developed a reputation for learning excellence, consistently producing excellent accounting graduates who are making notable contributions in both and private sectors of the Nigerian economy.',
  //   duration: '3 months',
  //   type: 'degree',
  //   image: '/images/castle-school.png',
  //   icon: '/images/eduvacity-logo.svg',
  // },
  //bootcamp
  {
    name: '',
    program: 'Frontend Development',
    description:
      'Frontend development is pivotal in shaping user experiences and interfaces across digital platforms this Bootcamp program equips students with the latest tools and techniques in web development and responsive design principles.',
    duration: '6 weeks',
    type: 'bootscamp',
    image: '/images/front-end.jpg',
    icon: '/images/eduvacity-logo.svg',
  },
  {
    name: '',
    program: 'Backend Development',
    description:
      'Backend development serves as the foundation of dynamic and data-driven web applications. Our program is designed to provide students with a deep understanding of server-side programming languages, databases, and frameworks essential for building scalable and secure systems.',
    duration: '6 weeks',
    type: 'bootscamp',
    image: '/images/back-end.jpg',
    icon: '/images/eduvacity-logo.svg',
  },
  {
    name: '',
    program: 'Cloud Computing',
    description:
      'Cloud computing is revolutionizing the way businesses manage and deliver IT services. Our program is tailored to provide students with a comprehensive understanding of cloud technologies, including infrastructure as a service (IaaS), platform as a service (PaaS), and software as a service (SaaS).',
    duration: '6 weeks',
    type: 'bootscamp',
    image: '/images/cloud-computing.jpg',
    icon: '/images/eduvacity-logo.svg',
  },
  {
    name: '',
    program: 'UI/UX Design',
    description:
      'UI/UX design plays a crucial role in creating engaging and intuitive user experiences for digital products and services. Our program focuses on user-centered design principles, information architecture, user interface, and interactive prototyping techniques.',
    duration: '6 weeks',
    type: 'bootscamp',
    image: '/images/ui-ux.jpg',
    icon: '/images/eduvacity-logo.svg',
  },
  {
    name: '',
    program: 'Data Science',
    description:
      'Data science is at the forefront of leveraging data to extract insights and drive decision-making across industries. Our program is designed to equip students with the essential skills in statistical analysis, machine learning, and data visualization.',
    duration: '6 weeks',
    type: 'bootscamp',
    image: '/images/data-science.jpg',
    icon: '/images/eduvacity-logo.svg',
  },
];
// const degree = cards.filter((item) => item.type === 'degree');
// const diploma = cards.filter((item) => item.type === 'diploma');
// const bootscamp = cards.filter((item) => item.type === 'bootcamp');

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <Box component="div">{children}</Box>}
    </div>
  );
}

export function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function AcademicTabs({ handleClick }) {
  const [value, setValue] = React.useState(0);

  const [programs, setPrograms] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const res = await axios.get(`${apiEndpoint}/website/courses/`);
        // console.log('res', res.data);
        setPrograms(res.data.programs);
      } catch (error) {
        console.error(error);
        setError('Failed to load course data');
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  const degree =
    programs && programs.filter((item) => item.programType === 'degree');
  const diploma =
    programs && programs.filter((item) => item.programType === 'diploma');
  const bootscamp =
    programs && programs.filter((item) => item.programType === 'bootcamp');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Box
      sx={{
        width: '100%',
        // pl: { xs: 2, sm: 7.8, md: 7.4, lg: 6.2, xl: 14.5 },
        pl: { xs: '1rem', sm: '1rem', lg: 12.5, xl: 16 },
        pr: { xs: 2, sm: 0 },
      }}>
      <Box>
        <StyledTabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="ant example">
          <StyledTab label="All" />
          <StyledTab label="Diplomas" />
          <StyledTab label="Bootcamps" />
          {/* <StyledTab
            label="Degree"
            icon={
              <Box
                sx={{
                  width: 42,
                  height: 22,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `1px solid ${Colors.primaryLight}`,
                  borderRadius: '9999px',
                  background: Colors.primaryLight,
                  font: `normal normal 500 normal 12px/18px ${Fonts.primary}`,
                  padding: '2px 8px 2px 8px',

                  textAlign: 'center',
                }}>
                New
              </Box>
            }
            iconPosition="end"
          /> */}
        </StyledTabs>
      </Box>
      <Box sx={{ mt: { xs: 2, sm: 4 } }}>
        <TabPanel value={value} index={0}>
          <ProgramCard cards={programs || []} handleClick={handleClick} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ProgramCard cards={diploma} handleClick={handleClick} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ProgramCard cards={bootscamp} handleClick={handleClick} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <ProgramCard cards={degree} handleClick={handleClick} />
        </TabPanel>
      </Box>
    </Box>
  );
}
