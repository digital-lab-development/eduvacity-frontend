import * as React from "react"
import Box from "@mui/material/Box"
import { styled, ThemeProvider, createTheme, alpha } from "@mui/material/styles"
import Divider from "@mui/material/Divider"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Paper from "@mui/material/Paper"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"
import ArrowRight from "@mui/icons-material/ArrowRight"
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown"
import Home from "@mui/icons-material/Home"
import Settings from "@mui/icons-material/Settings"
import People from "@mui/icons-material/People"
import PermMedia from "@mui/icons-material/PermMedia"
import Dns from "@mui/icons-material/Dns"
import Public from "@mui/icons-material/Public"
import { MenuToggle } from "../sidebar/menuToggle"
import { motion, useCycle } from "framer-motion"
import { useRef } from "react"
import { Colors } from "../../../components/themes/colors"
import {
  Button,
  Card,
  CardHeader,
  Menu,
  MenuItem,
  MenuList,
  Popover,
  Typography,
} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import ArchiveIcon from "@mui/icons-material/Archive"
import FileCopyIcon from "@mui/icons-material/FileCopy"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import { Fonts } from "../../../components/themes/fonts"
import { AngleDownWard, UserIcon } from "../../../components/svg"
import { StyledMenuTooltip } from "../../../components/tooltip"
import { ShowChart } from "@mui/icons-material"
import { useRouter } from "next/router"
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
))(({ theme }) => ({
  "& .MuiPaper-root": {
    marginTop: 8,
    minWidth: 180,
    color: Colors.offWhite,
    background: Colors.primaryDark,
    transition: "all 0.25s",
    boxShadow: "none",
    display: "flex",
    border: "1px 0px 0px 0px",
    padding: "16px 0px 16px 0px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}))

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}
const menu = [
  {
    name: "Why eduvacity",
    link: "/why-eduvacity",
  },
  {
    name: "Programs",
    children: [
      {
        title: "programs",
        link: "/programs",
      },
    ],
  },

  {
    name: "Become an Instructor",
    link: "/career",
  },
]
const data = [
  { icon: <People />, label: "Authentication" },
  { icon: <Dns />, label: "Database" },
  { icon: <PermMedia />, label: "Storage" },
  { icon: <Public />, label: "Hosting" },
]

const FireNav = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
})

export default function MenuLists() {
  const router = useRouter()
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = React.useRef(null)
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? "simple-popover" : undefined

  const handleClick = (item, index) => {
    item.children && openNest === index
      ? setOpenNest("")
      : item.children
      ? setOpenNest(index)
      : (router.push(item.link), setMobileOpen(false))
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
              border: "1px 0px 0px 0px",
              padding: "16px 0px 16px 0px",
              // maxWidth: 375,
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
              sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {menu?.map((item, i) => (
                <Box key={i}>
                  {item.children && item.children.length !== 0 ? (
                    <>
                      <ListItemButton
                        id="demo-customized-button"
                        aria-controls={
                          open ? "demo-customized-menu" : undefined
                        }
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleOpen}
                        key={item.label}
                        sx={{
                          py: 0,
                          minHeight: 48,
                        }}
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
                        id="demo-customized-menu"
                        MenuListProps={{
                          "aria-labelledby": "demo-customized-button",
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                      >
                        {item.children.map((child, index) => {
                          return (
                            <MenuItem
                              onClick={handleClose}
                              disableRipple
                              key={index}
                            >
                              {child.title}
                            </MenuItem>
                          )
                        })}
                        <Divider sx={{ my: 0.5 }} />
                      </StyledMenu>
                    </>
                  ) : (
                    <ListItemButton
                      onClick={() => handleClick(item)}
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
                  )}
                </Box>
              ))}
              <Divider sx={{ borderColor: "rgba(27, 49, 57, 1)", my: 0.5 }} />
              <MenuItem onClick={handleClose} disableRipple>
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
