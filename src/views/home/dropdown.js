import {
  Box,
  Card,
  CardHeader,
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { AngleDownWard, AngleForward } from "../../components/svg";
import { Colors } from "../../components/themes/colors";
import { Fonts } from "../../components/themes/fonts";
import { StyledMenuTooltip } from "../../components/tooltip";

const StyledList = styled(List)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "& .MuiListItemButton-root": {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    font: `normal normal normal 500 16px/24px ${Fonts.primaryMedium}`,
    color: Colors.offWhite,
    padding: "10px 16px",
    "&:focused": {
      backgroundColor: "transparent",
      color: Colors.offWhite,
      borderRadius: 8,
      font: `normal normal normal 500 16px/24px ${Fonts.primaryExtraBold}`,
    },
    "&:hover": {
      backgroundColor: "transparent",
      color: Colors.offWhite,
      borderRadius: 8,
    },
  },
  "& .Mui-selected": {
    backgroundColor: "transparent",
    color: Colors.primary,
    borderRadius: 8,
    font: `normal normal normal 500 16px/24px ${Fonts.primaryExtraBold}`,
    "&:focused": {
      backgroundColor: "transparent",
      color: Colors.primary,
      borderRadius: 8,
    },
    "&:hover": {
      backgroundColor: "transparent",
      color: Colors.primary,
      borderRadius: 8,
    },
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 2,
  },
  "& .MuiSvgIcon-root": {
    fontSize: "20px",
  },
});

export default function MenuDropdown({ item, selected }) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [content, setContent] = React.useState(null);
  const [isAboutPage, setIsAboutPage] = useState(false);

  useEffect(() => {
    setIsAboutPage(router.pathname === "/about-us");
  }, [router.pathname]);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  return (
    <StyledMenuTooltip
      disableFocusListener
      disableTouchListener
      sx={{
        "& .MuiTooltip-tooltipPlacementBottom": {
          position: "relative",
          top: 6,
          backgroundColor: "transparent",
          border: `none`,
        },
      }}
      title={
        <Card
          sx={{
            width: 919,
            height: 460,
            display: "flex",
            borderRadius: "12px",
            backgroundColor: "transparent",
            boxShadow:
              "0px 4px 6px -2px #41A36E08,0px 12px 16px -4px #41A36E14,0px 0px 16px 0px #41A36E29",
            transition: "all 0.25s",
          }}
        >
          <Box
            sx={{
              width: 403,
              height: "100%",
              border: "1px solid #011B23",
              display: "flex",
              flexDirection: "column",
              backgroundColor: Colors.secondary,
              padding: "24px 20px",
              gap: "24px",
              boxShadow: "0px 0px 16px 0px #41A36E29",
            }}
          >
            <StyledList>
              {item.children.map((child, index) => {
                const selectedItem = content?.name === child.name;
                return (
                  <ListItemButton
                    disableRipple
                    alignItems="flex-start"
                    key={`item-${index}`}
                    onClick={() => setContent(child)}
                    selected={selectedItem}
                  >
                    <ListItemText
                      primary={child.name}
                      primaryTypographyProps={{
                        fontSize: 16,
                        fontWeight: "500",
                        lineHeight: "24px",
                        letterSpacing: "0em",
                        textAlign: "left",
                        fontFamily: Fonts.primary,
                        color: selectedItem ? Colors.primary : Colors.offWhite,
                      }}
                    />

                    <AngleForward />
                  </ListItemButton>
                );
              })}
            </StyledList>
          </Box>

          {content !== null ? (
            <Box
              sx={{
                width: 516,
                height: "100%",
                backgroundColor: Colors.light,
                padding: "24px 20px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                boxShadow: "0px 4px 6px -2px #41A36E08",
                overflow: "auto",
                WebkitOverflowScrolling: "touch",
                "&::-webkit-scrollbar": {
                  width: 4,
                  height: 4,
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: Colors.primary,
                  borderRadius: 30,
                  boxShadow: `inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),inset -2px -2px 2px rgba(0, 0, 0, 0.25)`,
                },
                "&::-webkit-scrollbar-track": {
                  backgroundColor: "#d1dadd",
                },
              }}
            >
              {content
                ? content?.subpages?.map((item, index) => {
                    return (
                      <Box key={`item-${index}`}>
                        <Typography
                          sx={{
                            font: `normal normal 600 normal 14px/20px ${Fonts.inter}`,
                            letterSpacing: "0em",
                            color: Colors.dark,
                            padding: "14px 0",
                            textAlign: "left",
                          }}
                        >
                          {item.name}
                        </Typography>

                        <Divider sx={{ borderColor: "#EAECF0" }} />
                        <Grid container spacing={2} sx={{ mt: 1 }}>
                          {item.content.map((cont, index) => {
                            return (
                              <Grid item xs={12} sm={6} key={`{cont-${index}}`}>
                                <Card
                                  sx={{
                                    width: "100%",
                                    height: 140,
                                    position: "relative",
                                    p: "10px",
                                    borderRadius: "5.43px",
                                    border: "0.78px solid #011B230F",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "4px",
                                    boxShadow:
                                      "0px 3.104477643966675px 4.656716346740723px -1.5522388219833374px #10182808, 0px 3.104477643966675px 4.656716346740723px -1.5522388219833374px #10182808,0px 9.313432693481445px 12.4179105758667px -3.104477643966675px #10182814",
                                    cursor: "pointer",
                                  }}
                                  onClick={() => {
                                    router.push(cont.link);
                                    setAnchorEl(null);
                                  }}
                                >
                                  <CardHeader
                                    action={
                                      cont.active === true ? (
                                        ""
                                      ) : (
                                        <Box
                                          sx={{
                                            width: 100,
                                            padding: "2px 8px 2px 8px",
                                            borderRadius: 9999,
                                            border: "0.82px solid #FFFFFF4D",
                                            backgroundColor: "#FBF0DD",
                                            color: "#E3A229",
                                            font: `normal normal 500 normal 12/16px ${Fonts.inter}`,
                                            letterSpacing: "0em",
                                          }}
                                        >
                                          Coming soon...
                                        </Box>
                                      )
                                    }
                                  />
                                  <Box
                                    sx={{
                                      font: `normal normal 700 normal 12.85px/16px ${Fonts.secondary}`,
                                      letterSpacing: "0em",
                                      color: Colors.dark,
                                    }}
                                  >
                                    {cont.title}
                                  </Box>
                                  <Box
                                    sx={{
                                      width: "100%",
                                      display: "flex",
                                      gap: 0.5,
                                      mt: 3,
                                    }}
                                  >
                                    <Typography
                                      sx={{
                                        font: `normal normal 500 normal 11px/14px ${Fonts.primary}`,
                                        textAlign: "left",
                                        letterSpacing: "0em",
                                        pr: 1,
                                        borderRight: "1px solid #D7DEE0",
                                      }}
                                    >
                                      Cohort starts: {cont.starts}
                                    </Typography>
                                    <Typography
                                      sx={{
                                        font: `normal normal 500 normal 11px/14px ${Fonts.primary}`,
                                        textAlign: "left",
                                        letterSpacing: "0em",
                                      }}
                                    >
                                      {cont.duration}
                                    </Typography>
                                  </Box>
                                </Card>
                              </Grid>
                            );
                          })}
                        </Grid>
                      </Box>
                    );
                  })
                : null}
            </Box>
          ) : null}
        </Card>
      }
    >
      <ListItemButton
        disableRipple
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        sx={{
          p: 0,
          m: 0,
          background: "transparent",
        }}
      >
        <Typography
          sx={{
            maxWidth: 150,
            width: 300,
            display: "flex",
            font: `normal normal 500 normal 14px/16.8px ${Fonts.primary}`,
            gap: "10px",
            color:
              selected && isAboutPage
                ? Colors.primary
                : isAboutPage
                ? Colors.primary
                : Colors.offWhite,
            cursor: "pointer",
            "&:hover": {
              background: "transparent",
              color: Colors.primary,
            },
          }}
        >
          {item.name}{" "}
          <AngleDownWard
            style={{
              mt: "-18px",
              ...(open && {
                transform: `rotate(-180deg)`,
              }),
            }}
          />{" "}
        </Typography>
      </ListItemButton>
    </StyledMenuTooltip>
  );
}
