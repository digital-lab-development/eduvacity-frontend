import Box from "@mui/material/Box"
import Tab from "@mui/material/Tab"
import Tabs from "@mui/material/Tabs"
import { styled } from "@mui/material/styles"
import * as React from "react"
import { ABULogo, SchoolLogo } from "../../../components/svg/index.js"
import { Colors } from "../../../components/themes/colors"
import { Fonts } from "../../../components/themes/fonts"
import AllAcademicsCards from "./allAcademics.js"
import BootscampCards from "./bootscamp/index.js"
import DegreeCards from "./degree/index.js"
import DiplomaCards from "./diploma/index.js"

const StyledTabs = styled(Tabs)({
  borderBottom: "1px solid #EAECF0",
  "& .MuiTabs-indicator": {
    backgroundColor: Colors.primary,
  },
})
const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    marginRight: 8,
    color: "#667085",
    gap: 8,
    font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
    "&:hover": {
      color: Colors.primary,
      opacity: 1,
    },
    "&.Mui-selected": {
      color: Colors.primary,
    },
    "&.Mui-focusVisible": {
      backgroundColor: Colors.primary,
    },
  })
)
const cards = [
  {
    name: "Business School ABU, Zaria",
    program: "Diploma in Banking & Finance ",
    description:
      "The department of Business Administration has over the years developed a reputation for learning excellence, consistently producing excellent accounting graduates who are making notable contributions in both and private sectors of the Nigerian economy.",
    duration: "3 months",
    type: "diploma",
    image: "/images/business-school.png",
    icon: <ABULogo />,
  },
  {
    name: "IAIICT Ahmadu Bello University, Zaria",
    program: "Diploma in Computer Engineering",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
    duration: "3 months",
    type: "diploma",
    image: "/images/senatebuilding.png",
    icon: <ABULogo />,
  },
  {
    name: "ABU Zaria",
    program: "Computer Engineering",
    description:
      "The department of Business Administration has over the years developed a reputation for learning excellence, consistently producing excellent accounting graduates who are making notable contributions in both and private sectors of the Nigerian economy.",
    duration: "3 months",
    type: "degree",
    image: "/images/welcome-to-abu.png",
    icon: <ABULogo />,
  },
  {
    name: "University of Lagos",
    program: "Diploma in Computer Engineering",
    description:
      "The department of Business Administration has over the years developed a reputation for learning excellence, consistently producing excellent accounting graduates who are making notable contributions in both and private sectors of the Nigerian economy.",
    duration: "3 months",
    type: "degree",
    image: "/images/castle-school.png",
    icon: <SchoolLogo />,
  },
  {
    name: "University of Lagos",
    program: "Diploma in Computer Engineering",
    description:
      "The department of Business Administration has over the years developed a reputation for learning excellence, consistently producing excellent accounting graduates who are making notable contributions in both and private sectors of the Nigerian economy.",
    duration: "3 months",
    type: "degree",
    image: "/images/castle-school.png",
    icon: <SchoolLogo />,
  },
  {
    name: "Kaduna state University",
    program: "Java summer bootscamp",
    description:
      "The department of Business Administration has over the years developed a reputation for learning excellence, consistently producing excellent accounting graduates who are making notable contributions in both and private sectors of the Nigerian economy.",
    duration: "3 months",
    type: "bootscamp",
    image: "/images/castle-school.png",
    icon: <ABULogo />,
  },
  {
    name: "University of Lagos",
    program: "Azure master class",
    description:
      "The department of Business Administration has over the years developed a reputation for learning excellence, consistently producing excellent accounting graduates who are making notable contributions in both and private sectors of the Nigerian economy.",
    duration: "3 months",
    type: "bootscamp",
    image: "/images/castle-school.png",
    icon: <SchoolLogo />,
  },
]
const degree = cards.filter((item) => item.type === "degree")
const diploma = cards.filter((item) => item.type === "diploma")
const bootscamp = cards.filter((item) => item.type === "bootscamp")

export function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box component="div">{children}</Box>}
    </div>
  )
}

export function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}
export default function AcademicTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <StyledTabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="ant example"
        >
          <StyledTab label="All" />
          <StyledTab label="Diplomas" />
          <StyledTab label="Bootcamps" />
          <StyledTab
            label="Degree"
            icon={
              <Box
                sx={{
                  width: 42,
                  height: 22,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: `1px solid ${Colors.primaryLight}`,
                  borderRadius: "9999px",
                  background: Colors.primaryLight,
                  font: `normal normal 500 normal 12px/18px ${Fonts.primary}`,
                  padding: "2px 8px 2px 8px",

                  textAlign: "center",
                }}
              >
                New
              </Box>
            }
            iconPosition="end"
          />
        </StyledTabs>
      </Box>
      <TabPanel value={value} index={0}>
        <AllAcademicsCards cards={cards} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DiplomaCards cards={diploma} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <BootscampCards cards={bootscamp} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <DegreeCards cards={degree} />
      </TabPanel>
    </Box>
  )
}
