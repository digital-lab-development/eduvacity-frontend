import { Box, Button, CardHeader, Grid } from "@mui/material"
import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import { useRouter } from "next/router"
import * as React from "react"
import { ArrowForward } from "../../components/svg"
import { Colors } from "../../components/themes/colors"
import { Fonts } from "../../components/themes/fonts"

const cards = [
  {
    title: "Choose your Program",
    description: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
    type: "quarterly",
    benefit: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
    popular: true,
    price: 20,
  },
  {
    title: "Start your application",
    description:
      "Once you've chosen your ideal program, it's time to kick-start the application process. Access our user-friendly online application portal and provide the required information, including personal details, academic history, and any supporting documentation. ",
    type: "once",
    benefit: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    popular: false,
    price: 100,
  },
]
export default function BillingProcessCard() {
  return (
    <Box sx={{ width: "100%", display: "flex" }}>
      <Grid container spacing={"20px"}>
        {cards.map((card, index) => {
          return (
            <Grid item xs={12} sm={6} key={`card-index-${index}`}>
              <Card
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "16px",
                  border: "1px solid #EAECF0",
                  boxShadow: "0px 4px 6px -2px #10182808",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "32px",
                    padding: "32px",
                    background: "#FFF",
                    borderBottom: "1px solid #EAECF0",
                  }}
                >
                  <CardHeader
                    title={
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{
                          font: `normal normal 500 normal 18px/24px ${Fonts.primary}`,
                          color: Colors.textPrimaryDark,
                          letterSpacing: "0em",
                          textAlign: "left",
                          textTransform: "capitalize",
                        }}
                      >
                        {card.type === "once" ? "Upfront" : card.type}
                      </Typography>
                    }
                    action={
                      card.popular === true && (
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="div"
                          sx={{
                            background: `linear-gradient(0deg, #D7FEE9, #D7FEE9),linear-gradient(0deg, #F5FFFA, #F5FFFA)`,
                            font: `normal normal 400 normal 14px/20px ${Fonts.inter}`,
                            padding: `4px 12px 4px 12px`,
                            borderRadius: "9999px",
                            border: "1px solid #D7FEE9",
                            color: Colors.primary,
                            letterSpacing: "0em",
                            textAlign: "center",
                            textTransform: "capitalize",
                          }}
                        >
                          popular
                        </Typography>
                      )
                    }
                    sx={{ m: 0, p: 0 }}
                  />
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        gap: "4px",
                        alignItems: "center",
                        font: `normal normal 700 normal 60px/72px ${Fonts.inter}`,
                        letterSpacing: "-0.02em",
                        textAlign: "left",
                        color: Colors.dark,
                      }}
                    >
                      ${card.price}{" "}
                      {card.type === "once" ? null : (
                        <Box
                          component="span"
                          sx={{
                            font: `normal normal 700 normal 16px/24px ${Fonts.inter}`,
                            letterSpacing: "-0.02em",
                            textAlign: "left",
                            color: Colors.textPrimaryDark,
                            mt: 3,
                          }}
                        >
                          per quarter
                        </Box>
                      )}
                    </Box>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{
                        font: `normal normal 500 normal 18px/24px ${Fonts.primary}`,
                        color: Colors.textPrimaryDark,
                        letterSpacing: "0em",
                        textAlign: "left",
                        textTransform: "capitalize",
                      }}
                    >
                      {card.type === "once"
                        ? "Billed once."
                        : "Billed annually."}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: "4px",
                    padding: "32px 32px 40px 32px",
                    background: "#F6F7F7",
                    boxShadow: "0px 12px 16px -4px #10182814",
                  }}
                >
                  <Box
                    sx={{
                      textTransform: "none",
                      font: `normal normal 700 normal 16px/24px ${Fonts.inter}`,
                      color: Colors.dark,
                      letterSpacing: "0em",
                      textAlign: "left",
                      m: 0,
                      p: 0,
                    }}
                  >
                    Benefits
                  </Box>
                  <Box
                    sx={{
                      textTransform: "none",
                      font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                      color: Colors.dark,
                      letterSpacing: "0em",
                      textAlign: "left",
                      m: 0,
                      p: 0,
                    }}
                  >
                    {card.benefit}
                  </Box>
                </Box>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
