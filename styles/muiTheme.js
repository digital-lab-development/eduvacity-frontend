import { createTheme } from "@mui/material/styles"
import { Colors } from "../src/components/themes/colors"

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
})

export default theme
