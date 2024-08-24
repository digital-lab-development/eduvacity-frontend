import { Box } from "@mui/material";
import { Colors } from "../src/components/themes/colors";
import { Fonts } from "../src/components/themes/fonts";

export default function Error({ statusCode }) {
  return (
    <Box
      component="h1"
      sx={{
        color: Colors.buttonError,
        font: `normal normal 400 12px/18px, ${Fonts.primary}`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: 5,
      }}
    >
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred, Please contact the support team"}
    </Box>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
