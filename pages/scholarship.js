import { useRouter } from "next/router";
import HomePageLayout from "../src/views/home/layout";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import {
  AllGenderIcon,
  ArrowUp,
  BoltsIcon,
  DocsIcon,
} from "../src/components/svg";
import { Colors } from "../src/components/themes/colors";
import { Fonts } from "../src/components/themes/fonts";

import Intercom from "@intercom/messenger-js-sdk";
import {
  ArrowCircleRightOutlined,
  ChildCareRounded,
  DocumentScannerRounded,
} from "@mui/icons-material";
import Image from "next/image";

export default function Scholarship() {
  const router = useRouter();
  Intercom({
    app_id: "y4ubjwyw",
  });

  return (
    <div className="h-full  bg-white text-black">
      <Box
        component="section"
        id="hero-section"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          pb: { xs: 8, md: 3.5 },
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          ustifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box
          component="section"
          id="hero-section"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: Colors.secondary,
            pt: { xs: 4, md: 12.5 },
            pb: { xs: 4, md: 6.5 },
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              px: { xs: 3, sm: 8.5, md: 5.5, lg: 7.2, xl: 12.5 },
              py: { xs: 4, sm: 3, xl: 4 },
              gap: { xs: "32px", sm: "64px" },
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: { xs: "40px", sm: "80px" },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "16px",
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    font: {
                      xs: `normal normal 500 normal 14px/20px ${Fonts.primary}`,
                      sm: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                    },
                    color: Colors.primary,
                    m: 0,
                    p: 0,
                    letterSpacing: "0em",
                    textTransform: "uppercase",
                    textAlign: "left",
                  }}
                >
                  vast scholarshop offers
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: { xs: "12px", sm: "64px" },
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box sx={{ width: "100%", maxWidth: 672 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        width: "100%",
                        maxWidth: { xs: "100%", sm: "98%", md: 672 },
                        font: {
                          xs: `normal normal 600 normal 32.5px/44px ${Fonts.inter}`,
                          md: `normal normal 600 normal 46px/60px ${Fonts.inter}`,
                        },
                        color: Colors.light,
                        m: 0,
                        p: 0,
                        letterSpacing: "-0.02em",
                        textAlign: "left",
                      }}
                    >
                      You are not left out, we&apos;ve got you covered
                    </Typography>
                  </Box>
                  <Typography
                    variant="p"
                    sx={{
                      width: "100%",
                      maxWidth: { xs: "100%", sm: "98%", md: 672 },
                      font: {
                        xs: `normal normal 500 normal 14px/18px ${Fonts.primary}`,
                        md: `normal normal 500 normal 14px/18px ${Fonts.primary}`,
                      },
                      color: Colors.textColor,
                      m: 0,
                      p: 0,
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    No matter your financial strength, we constantly seek to
                    have a scholarship that makes our vast library of courses
                    available to you
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            padding: "5px",
            width: { xs: "90%", sm: "80%" },
            mx: "auto",
            background: Colors.light,
          }}
        >
          <Box
            sx={{
              width: "100%",
              py: { xs: "40px", sm: "60px" },
            }}
          >
            <Box
              sx={{
                width: "100%",
                mx: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                pb: 4,
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  font: {
                    xs: `normal normal 600 normal 14px/16px ${Fonts.inter}`,
                    md: `normal normal 600 normal 14px/18px ${Fonts.inter}`,
                  },
                  color: Colors.primary,
                  m: 0,
                  pb: 0,
                  letterSpacing: "0em",
                  textTransform: "uppercase",
                  textAlign: "center",
                }}
              >
                Enroll for a scholarship
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  font: {
                    xs: `normal normal 600 normal 32.5px/44px ${Fonts.primary}`,
                    md: `normal normal 600 normal 46px/60px ${Fonts.primary}`,
                  },
                  color: Colors.dark,
                  m: 0,
                  py: 2,
                  letterSpacing: "0em",
                  textAlign: "center",
                }}
              >
                Open Scholarships
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  font: {
                    xs: `normal normal 600 normal 14px/16px ${Fonts.inter}`,
                    md: `normal normal 600 normal 14px/18px ${Fonts.inter}`,
                  },
                  color: Colors.dark,
                  m: 0,
                  pb: 0,
                  letterSpacing: "0em",
                  textAlign: "center",
                  width: { xs: "100%", sm: "70%" },
                  mx: "auto",
                }}
              >
                Check through our list of currently open scholarship for a
                perfect fit. We have a programme for designed for you
              </Typography>
            </Box>

            <Grid container spacing={{ xs: 3, lg: 8 }} sx={{ width: "100%" }}>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    padding: "4px",
                    borderRadius: "16px",
                    backgroundColor: "#011B23",
                    boxShadow: "0px 16px 16px 0px #0000000D",
                    border: `1px solid #ffffff`,
                  }}
                >
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Box
                        sx={{
                          backgroundColor: Colors.light,
                          borderColor: Colors.primary,
                          borderRadius: "100%",
                          border: `solid 2px ${Colors.secondary}`,
                          alignItems: "center",
                          display: "flex",
                          justifyContent: "center",
                          width: 40,
                          height: 40,
                        }}
                      >
                        <Image
                          src="/images/assetium-logo.png"
                          alt="Assetium Logo"
                          width={25}
                          height={23}
                        />
                      </Box>
                      <Box sx={{ textAlign: "left" }}>
                        <Typography
                          variant="body2"
                          sx={{ color: Colors.greyText }}
                        >
                          Sponsors
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ color: Colors.light }}
                        >
                          Assetium
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        borderTop: `1px solid ${Colors.grey}`,
                        pt: 1,
                        mt: 1,
                        borderBottom: `1px solid ${Colors.grey}`,
                        pb: 1,
                        mb: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          font: {
                            xs: ` 10px/16px ${Fonts.primary}`,
                          },
                          color: Colors.greyText,
                        }}
                      >
                        VALUE
                      </Typography>
                      <Typography
                        sx={{
                          font: {
                            xs: ` 12px/16px ${Fonts.primary}`,
                          },
                          color: Colors.light,
                        }}
                      >
                        100% Tuition
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          textAlign: "left",
                        }}
                      >
                        <Typography
                          sx={{
                            font: {
                              xs: `10px/16px ${Fonts.primary}`,
                            },
                            color: Colors.greyText,
                          }}
                        >
                          Program
                        </Typography>
                        <Typography
                          sx={{
                            font: {
                              xs: ` 12px/16px ${Fonts.primary}`,
                            },
                            color: Colors.light,
                            lineBreak: "loose",
                          }}
                        >
                          Bootcamp
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          textAlign: "left",
                        }}
                      >
                        <Typography
                          sx={{
                            font: {
                              xs: ` 10px/16px ${Fonts.primary}`,
                            },
                            color: Colors.greyText,
                          }}
                        >
                          DEADLINE
                        </Typography>
                        <Typography
                          sx={{
                            font: {
                              xs: ` 12px/16px ${Fonts.primary}`,
                            },
                            color: Colors.light,
                          }}
                        >
                          02-10-2024
                        </Typography>
                      </Box>
                    </Box>

                   
                    <Button
                      size="small"
                      onClick={() => router.push(`/scholarship/assetium`)}
                      endIcon={<ArrowCircleRightOutlined />}
                      sx={{
                        font: `normal 400 14px/24px ${Fonts.openSans}`,
                        textTransform: "none",
                        color: Colors.light,
                        marginTop: 3,
                        backgroundColor: Colors.primary
                      }}
                    >
                      View Scholarship
                    </Button>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    padding: "4px",
                    borderRadius: "16px",
                    backgroundColor: "#011B23",
                    boxShadow: "0px 16px 16px 0px #0000000D",
                    border: `1px solid #ffffff`,
                  }}
                >
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Box
                        sx={{
                          backgroundColor: Colors.light,
                          borderColor: Colors.primary,
                          borderRadius: "100%",
                          border: `solid 2px ${Colors.secondary}`,
                          alignItems: "center",
                          display: "flex",
                          justifyContent: "center",
                          width: 40,
                          height: 40,
                        }}
                      >
                        <Image
                          src="/images/zen.png"
                          alt="Zenith Bank Logo"
                          width={25}
                          height={23}
                        />
                      </Box>
                      <Box sx={{ textAlign: "left" }}>
                        <Typography
                          variant="body2"
                          sx={{ color: Colors.greyText }}
                        >
                          Sponsors
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ color: Colors.light }}
                        >
                          Zenith Bank
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        borderTop: `1px solid ${Colors.grey}`,
                        pt: 1,
                        mt: 1,
                        borderBottom: `1px solid ${Colors.grey}`,
                        pb: 1,
                        mb: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          font: {
                            xs: ` 10px/16px ${Fonts.primary}`,
                          },
                          color: Colors.greyText,
                        }}
                      >
                        VALUE
                      </Typography>
                      <Typography
                        sx={{
                          font: {
                            xs: ` 12px/16px ${Fonts.primary}`,
                          },
                          color: Colors.light,
                        }}
                      >
                        100% Tuition
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          textAlign: "left",
                        }}
                      >
                        <Typography
                          sx={{
                            font: {
                              xs: `10px/16px ${Fonts.primary}`,
                            },
                            color: Colors.greyText,
                          }}
                        >
                          Program
                        </Typography>
                        <Typography
                          sx={{
                            font: {
                              xs: ` 12px/16px ${Fonts.primary}`,
                            },
                            color: Colors.light,
                            lineBreak: "loose",
                          }}
                        >
                          Bootcamp
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          textAlign: "left",
                        }}
                      >
                        <Typography
                          sx={{
                            font: {
                              xs: ` 10px/16px ${Fonts.primary}`,
                            },
                            color: Colors.greyText,
                          }}
                        >
                          DEADLINE
                        </Typography>
                        <Typography
                          sx={{
                            font: {
                              xs: ` 12px/16px ${Fonts.primary}`,
                            },
                            color: Colors.light,
                          }}
                        >
                          --/ -- /--
                        </Typography>
                      </Box>
                    </Box>

                    <Button
                      size="small"
                      // onClick={() => router.push(`/scholarship/assetium`)}
                      endIcon={<ArrowCircleRightOutlined />}
                      sx={{
                        font: `normal 400 14px/24px ${Fonts.openSans}`,
                        textTransform: "none",
                        color: Colors.light,
                        marginTop: 3,
                        backgroundColor: Colors.primary
                      }}
                    >
                      Coming soon
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* eleigibility */}
        <Box
          sx={{
            alignSelf: "center",
            display: "flex",
            flexDirection: "column",
            width: { xs: "100%", sm: "80%" },
            mx: "auto",
            justifyContent: "center",
            mt: 8,
            backgroundColor: "#F6F7F7",
            py: 10,
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              border: `1px solid ${Colors.grey} `,
              alignSelf: "center",
              display: "flex",
              width: "140px",
              justifyContent: "center",
              borderRadius: 5,
              my: "16px",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: Fonts.primary,
                fontSize: 16,
                py: 1,
                color: Colors.secondary,
              }}
            >
              Eligibility
            </Typography>
          </Box>
          <Typography
            variant="h1"
            sx={{
              font: {
                xs: `normal normal 600 normal 25px/36px ${Fonts.primary}`,
                sm: `normal normal 600 normal 30px/36px ${Fonts.primary}`,
              },
              color: Colors.secondary,
              width: "80%",
              my: "10px",
              alignSelf: "center",
            }}
          >
            Scholarship Requirements
          </Typography>
          <Typography
            variant="h1"
            sx={{
              font: {
                xs: `normal normal 400 normal 14px/18px ${Fonts.secondary}`,
                sm: `normal normal 400 normal 14px/18px ${Fonts.secondary}`,
              },
              color: Colors.secondary,
              width: "80%",
              mx: "auto",
              mb: "16px",
            }}
          >
            Review the criteria needed to qualify for our scholarships. Ensure
            you meet all requirements before applying.
          </Typography>

          <Box
            sx={{
              width: "70%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              mb: "10",
              mt: "20",
              mx: "auto",
              py: 5,
              backgroundColor: Colors.light,
              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                width: "80%",
                display: "flex",
                flexDirection: "column",
                gap: "32px",
                mx: "auto",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  gap: "22px",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    border: `1px solid ${Colors.primary} `,
                    px: "3px",
                    pt: "2px",
                    borderRadius: "4px",
                    alignItems: "center",
                  }}
                >
                  <AllGenderIcon width="14px" />
                </Box>{" "}
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{
                    font: {
                      xs: `normal normal 400 normal 14px/18px ${Fonts.inter}`,
                      sm: `normal normal 400 normal 14px/18px ${Fonts.inter}`,
                    },
                    color: Colors.secondary,
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  All our Scholarsips are Available to both Male and Female
                  applicants from all Geo-political zones within Nigeria.
                </Typography>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  gap: "22px",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    border: `1px solid ${Colors.primary} `,
                    px: "3px",
                    pt: "2px",
                    borderRadius: "4px",
                    alignItems: "center",
                  }}
                >
                  <DocsIcon width="14px" />
                </Box>{" "}
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{
                    font: {
                      xs: `normal normal 400 normal 14px/18px ${Fonts.inter}`,
                      sm: `normal normal 400 normal 14px/18px ${Fonts.inter}`,
                    },
                    color: Colors.secondary,
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  All our Scholarships applicants must possess a minimum of
                  O’level certificate.
                </Typography>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  gap: "22px",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    border: `1px solid ${Colors.primary} `,
                    px: "3px",
                    pt: "2px",
                    borderRadius: "4px",
                    alignItems: "center",
                  }}
                >
                  <BoltsIcon width="14" />
                </Box>{" "}
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{
                    font: {
                      xs: `normal normal 400 normal 14px/18px ${Fonts.inter}`,
                      sm: `normal normal 400 normal 14px/18px ${Fonts.inter}`,
                    },
                    color: Colors.secondary,
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  All applicants must be willing to commit and finish the
                  program.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

Scholarship.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>;
};
