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
import React from "react";
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
            height: 260,
            display: "flex",
            borderRadius: "12px",
            backgroundColor: "transparent",
            boxShadow:
              "0px 4px 6px -2px #41A36E08,0px 12px 16px -4px #41A36E14,0px 0px 16px 0px #41A36E29",
            transition: "all 0.25s",
          }}
        >
          {content !== null ? (
            <Box
              sx={{
                width: 403,
                height: "100%",
                border: "1px solid #011B23",
                display: "flex",
                flexDirection: "column",
                backgroundColor: Colors.secondary,
                gap: "24px",
                boxShadow: "0px 0px 16px 0px #41A36E29",
              }}
            >
              {content
                ? content?.children.map((item, index) => {
                    return (
                      <Box
                        key={`item-${index}`}
                        sx={{
                          width: "100%",
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
                        <Typography
                          sx={{
                            fontSize: "14PX",
                            fontWeight: "600",
                            lineHeight: "24px",
                            letterSpacing: "0em",
                            textAlign: "left",
                            fontFamily: Fonts.secondary,
                            color: Colors.primary,
                          }}
                        >
                          {item.name}
                        </Typography>
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
            display: "flex",
            font: `normal normal 500 normal 14px/16.8px ${Fonts.primary}`,
            gap: "10px",
            color: selected ? Colors.primary : Colors.offWhite,
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
