import React from "react";
import { Box, Typography } from "@mui/material";
import { Fonts } from "../../components/themes/fonts";
import { Colors } from "../../components/themes/colors";
import { BorderColor, Padding } from "@mui/icons-material";

export default function OurPartnerss() {
  const partners = [
    {
      name: "Corporate partners",
      desc: "Eduvacity collaborates with industry leaders to improve our online degrees. These companies offer internships and mentoring to give students real-world experience and boost their careers.",
    },
    {
      name: "Academic partners",
      desc: "Eduvacity collaborates with renowned global universities to offer our students exceptional opportunities. These partnerships enrich our online degrees with high-quality educational programs and research.",
    },
    {
      name: "Charitable partners",
      desc: "Eduvacity collaborates with leading foundations to advance our mission of delivering higher education online, anytime, anywhere. These partnerships provide students with financial support to complete their degrees and expand access to our programs.",
    },
  ];
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: 2,
      }}
    >
      {partners.map((partner, index) => (
        <Box
          key={index}
          border={"1px solid #EAECF0"}
          borderRadius={"24px"}
          padding={"50px"}
          sr={{
            width: "390px",
            height: "372px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sr={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
            justifyContent={"space-between"}
          >
            <Box pb={"16px"}>
              <Typography
                variant="h4"
                sx={{
                  font: `normal normal 700 normal 20px/30px ${Fonts.arial}`,
                  color: "#00191F",
                  m: 0,
                  p: 0,
                  letterSpacing: "1%",
                }}
              >
                {partner.name}
              </Typography>
            </Box>
            <Typography
              paddingTop={"4px"}
              variant="h4"
              sx={{
                font: `normal normal 400 normal 16px/28px ${Fonts.arial}`,
                color: Colors.grey,
                m: 0,
                p: 0,
                letterSpacing: "1%",
              }}
            >
              {partner.desc}
            </Typography>

            <Box paddingTop={"50px"}>
              <Box
                sx={{
                  width: 60,
                  height: {
                    xs: 44,
                    sm: 44,
                  },
                  backgroundImage: {
                    xs: "url(/images/assetium-logo.png)",
                    sm: "url(/images/assetium-logo.png)",
                  },
                  backgroundSize: { xs: "cover", sm: "fit" },
                  backgroundRepeat: "no-repeat",
                }}
              />
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
