import {
  Card,
  Collapse,
  Grid,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import { styled } from "@mui/material/styles"
import { motion, useCycle } from "framer-motion"
import { useRouter } from "next/router"
import * as React from "react"
import {
  AngleDownWard,
  AngleUpwardIcon,
  UserIcon,
} from "../../../components/svg"
import { Colors } from "../../../components/themes/colors"
import { Fonts } from "../../../components/themes/fonts"
import { MenuToggle } from "../sidebar/menuToggle"

const StyledList = styled(List)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  "& .MuiListItemButton-root": {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    font: `normal normal normal 500 16px/24px ${Fonts.primaryMedium}`,
    color: Colors.secondary,
    padding: "10px 16px",
    backgroundColor: "transparent",
    "&:focused": {
      backgroundColor: "transparent",
      color: Colors.primary,
      borderRadius: 8,
      font: `normal normal normal 500 16px/24px ${Fonts.primaryExtraBold}`,
    },
    "&:hover": {
      backgroundColor: "transparent",
      color: Colors.primary,
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
})
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(() => ({
  "& .MuiPaper-root": {
    width: "100%",
    background: Colors.secondary,
    transition: "all 0.25s",
  },
}))

function updateKey(str) {
  if (typeof str !== "string") return ""
  const regex = / /g
  const newStr = str.toLowerCase()
  const update = newStr.replace(regex, "-")
  return update
}
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export default function MenuLists({ menu }) {
  const router = useRouter()
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = React.useRef(null)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [content, setContent] = React.useState(null)
  const [openNest, setOpenNest] = React.useState(-1)

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? "simple-popover" : undefined

  const handleClick = (item, index) => {
    setContent(item)
    setOpenNest((prevIndex) => (prevIndex === index ? -1 : index))
  }
  return (
    <div>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        ref={containerRef}
      >
        <Box
          sx={{
            position: "absolute",
          }}
        >
          <MenuToggle toggle={() => toggleOpen()} />
        </Box>
      </motion.nav>
      {isOpen ? (
        <motion.div variants={variants}>
          <Box
            sx={{
              background: "rgba(1, 27, 35, 1)",
              borderTop: "1px",
              padding: "16px 0px 16px 0px",
              display: "flex",
              gap: 24,
              position: "absolute",
              top: 60,
              left: "auto",
              right: -70,
            }}
          >
            <List
              component="nav"
              disablePadding
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {menu?.map((item, i) => {
                const selected = router.pathname.startsWith(
                  `/${updateKey(item.name.toLowerCase())}`
                )
                return (
                  <Box key={i}>
                    {item.children && item.children.length !== 0 ? (
                      <>
                        <ListItemButton
                          disableRipple
                          id="popover-button"
                          aria-controls={open ? "popover-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                          onClick={handleOpen}
                          key={item.label}
                          sx={{
                            py: 0,
                            minHeight: 48,
                          }}
                          selected={selected}
                        >
                          <Box
                            sx={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "space-between",
                              font: `normal normal 500 normal 14px/16.8px ${Fonts.primary}`,
                              gap: "10px",
                              color: Colors.offWhite,
                              "&:hover": { background: "transparent" },
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
                          </Box>
                        </ListItemButton>
                        <StyledMenu
                          id="popover-menu"
                          MenuListProps={{
                            "aria-labelledby": "popover-button",
                          }}
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                        >
                          <StyledList>
                            {item.children.map((child, index) => {
                              const selectedItem = content?.name === child.name
                              return (
                                <Box key={`item-${index}`}>
                                  <ListItemButton
                                    disableRipple
                                    onClick={() => handleClick(child, index)}
                                    alignItems="flex-start"
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
                                        color: selectedItem
                                          ? Colors.primary
                                          : "#9BA5A8",
                                      }}
                                    />
                                    {openNest === index ? (
                                      <AngleDownWard />
                                    ) : (
                                      <AngleUpwardIcon />
                                    )}
                                  </ListItemButton>
                                  <Collapse
                                    in={openNest === index}
                                    timeout="auto"
                                    unmountOnExit
                                  >
                                    {content !== null ? (
                                      <Box
                                        sx={{
                                          width: "100%",
                                          height: "100%",
                                          background: "rgba(249, 250, 251, 1)",
                                          display: "flex",
                                          flexDirection: "column",
                                          gap: "16px",
                                        }}
                                      >
                                        <Box
                                          sx={{
                                            width: "100%",
                                            padding: "12px 16px 12px 16px",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "24px",
                                          }}
                                        >
                                          {content?.subpages?.map(
                                            (cont, index) => {
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
                                                    {cont.name}
                                                  </Typography>

                                                  <Divider
                                                    sx={{
                                                      borderColor: "#EAECF0",
                                                    }}
                                                  />
                                                  <Grid
                                                    container
                                                    spacing={2}
                                                    sx={{ mt: 2 }}
                                                  >
                                                    {cont?.content?.map(
                                                      (sub, index) => {
                                                        return (
                                                          <Grid
                                                            item
                                                            xs={12}
                                                            key={`{sub - ${index}}`}
                                                          >
                                                            <Card
                                                              sx={{
                                                                width: "100%",
                                                                p: "14.81px",
                                                                borderRadius:
                                                                  "8.64px",
                                                                border:
                                                                  "1.23px solid #011B230F",
                                                                display: "flex",
                                                                flexDirection:
                                                                  "column",
                                                                gap: "8px",
                                                                boxShadow:
                                                                  "0px 4.9352521896362305px 7.4028778076171875px -2.4676260948181152px rgba(16, 24, 40, 0.03),0px 14.805755615234375px 19.741008758544922px -4.9352521896362305px rgba(16, 24, 40, 0.08)",
                                                                cursor:
                                                                  "pointer",
                                                                backgroundColor:
                                                                  "#FFF !important",
                                                              }}
                                                              onClick={() => {
                                                                router.push(
                                                                  sub.link
                                                                )
                                                                toggleOpen()
                                                              }}
                                                            >
                                                              <Box
                                                                sx={{
                                                                  width: "100%",
                                                                  display:
                                                                    "flex",
                                                                  justifyContent:
                                                                    "flex-end",
                                                                  alignItems:
                                                                    "flex-end",
                                                                }}
                                                              >
                                                                {sub.active ===
                                                                true ? (
                                                                  ""
                                                                ) : (
                                                                  <Box
                                                                    sx={{
                                                                      width: 130,
                                                                      padding:
                                                                        "2px 8px 2px 8px",
                                                                      borderRadius: 9999,
                                                                      border:
                                                                        "0.82px solid #FFFFFF4D",
                                                                      backgroundColor:
                                                                        "#FBF0DD",
                                                                      color:
                                                                        "#E3A229",
                                                                      font: `normal normal 500 normal 12/16px ${Fonts.inter}`,
                                                                    }}
                                                                  >
                                                                    Coming
                                                                    soon...
                                                                  </Box>
                                                                )}
                                                              </Box>

                                                              <Box
                                                                sx={{
                                                                  font: `normal normal 700 normal 12.85px/16px ${Fonts.secondary}`,
                                                                  letterSpacing:
                                                                    "0em",
                                                                  color:
                                                                    Colors.dark,
                                                                }}
                                                              >
                                                                {sub.title}
                                                              </Box>
                                                              <Box
                                                                sx={{
                                                                  width: "100%",
                                                                  display:
                                                                    "flex",
                                                                  gap: 0.5,
                                                                  mt: 3,
                                                                }}
                                                              >
                                                                <Typography
                                                                  sx={{
                                                                    font: `normal normal 500 normal 11px/14px ${Fonts.primary}`,
                                                                    textAlign:
                                                                      "left",
                                                                    letterSpacing:
                                                                      "0em",
                                                                    pr: 1,
                                                                    borderRight:
                                                                      "1px solid #D7DEE0",
                                                                  }}
                                                                >
                                                                  Cohort starts:{" "}
                                                                  {sub.starts}
                                                                </Typography>
                                                                <Typography
                                                                  sx={{
                                                                    font: `normal normal 500 normal 11px/14px ${Fonts.primary}`,
                                                                    textAlign:
                                                                      "left",
                                                                    letterSpacing:
                                                                      "0em",
                                                                  }}
                                                                >
                                                                  {sub.duration}
                                                                </Typography>
                                                              </Box>
                                                            </Card>
                                                          </Grid>
                                                        )
                                                      }
                                                    )}
                                                  </Grid>
                                                </Box>
                                              )
                                            }
                                          )}
                                        </Box>
                                      </Box>
                                    ) : null}
                                  </Collapse>
                                </Box>
                              )
                            })}
                          </StyledList>
                          <Divider sx={{ my: 0.5 }} />
                        </StyledMenu>
                      </>
                    ) : (
                      <>
                        <ListItemButton
                          onClick={() => {
                            router.push(
                              `/${updateKey(item.name.toLocaleLowerCase())}`
                            )
                            toggleOpen()
                          }}
                          key={item.label}
                          sx={{
                            py: 0,
                            minHeight: 48,
                          }}
                        >
                          <Typography
                            sx={{
                              width: 320,
                              font: `normal normal 500 normal 14px/16.8px ${Fonts.primary}`,
                              color: Colors.offWhite,
                            }}
                          >
                            {item.name}
                          </Typography>
                        </ListItemButton>
                      </>
                    )}
                  </Box>
                )
              })}
              <Divider sx={{ borderColor: "rgba(27, 49, 57, 1)", my: 0.5 }} />
              <MenuItem disableRipple>
                <Box
                  onClick={() => router.push("/auth/login")}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    font: `normal normal 500 normal 14px/16.8px ${Fonts.primary}`,
                    gap: "8px",
                    padding: "12px 20px 12px 20px",
                    color: "rgba(230, 244, 237, 1)",
                    cursor: "pointer",
                    gap: "10px",
                    "&:hover": {
                      background: "transparent",
                    },
                  }}
                >
                  <UserIcon /> Student portal
                </Box>
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <Box
                  onClick={() => router.push("/signup")}
                  sx={{
                    width: "100%",
                    padding: "12px 20px 12px 20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    font: `normal normal 500 normal 14px/[19.2px] ${Fonts.primary}`,
                    color: "rgba(230, 244, 237, 1)",
                    borderRadius: "46px",
                    background: Colors.primary,
                    "&:hover": {
                      background: Colors.primary,
                    },
                  }}
                >
                  Apply now
                </Box>
              </MenuItem>
            </List>
          </Box>
        </motion.div>
      ) : null}
    </div>
  )
}
