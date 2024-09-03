import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { Colors } from '../../../components/themes/colors';
import { Fonts } from '../../../components/themes/fonts';
import ProgramCard from './program-card.js';
import axios from 'axios';
import { apiEndpoint } from '../../../utils/index.js';

const StyledTabs = styled(Tabs)({
  borderBottom: '1px solid #EAECF0',
  '& .MuiTabs-indicator': {
    backgroundColor: Colors.primary,
    color: Colors.light
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
    color: '#fff',
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
        color: "#fff"
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
      </Box>
    </Box>
  );
}
