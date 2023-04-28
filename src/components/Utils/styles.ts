import { Box, Fab } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PanelContainer = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "backgroundColor" &&
    prop !== "marginTop" &&
    prop !== "minHeight" &&
    prop !== "odd",
})<{
  backgroundColor?: string;
  marginTop?: number;
  minHeight?: string;
  odd?: boolean;
}>(({ marginTop, backgroundColor, minHeight, theme, odd }) => ({
  marginTop: marginTop ? marginTop : 0,
  padding: theme.spacing(12),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(4),
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  minHeight: minHeight ? minHeight : "calc(100vh - 64px)",
  display: "flex",
  backgroundColor: backgroundColor
    ? backgroundColor
    : odd
    ? theme.palette.background.paper
    : theme.palette.background.default,
}));

export const InfoBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "backgroundColor",
})<{
  backgroundColor?: string;
}>(({ backgroundColor, theme }) => ({
  backgroundColor: backgroundColor
    ? backgroundColor
    : theme.palette.background.default,
  padding: theme.spacing(2),
  margin: theme.spacing(2),
  borderRadius: "12px",
  border: `1px solid ${theme.palette.divider}`,
}));

export const ThemeButton = styled(Fab, {
  shouldForwardProp: (prop) => prop !== "shouldPulse",
})<{
  shouldPulse: boolean;
}>(({ shouldPulse, theme }) => ({
  margin: 0,
  top: "auto",
  right: 25,
  bottom: 25,
  left: "auto",
  position: "fixed",

  boxShadow: `0 0 0 0 rgba(102,179,255, 1)`,
  transform: "scale(1)",
  animation: shouldPulse ? "pulse 2s infinite" : "none",

  "@keyframes pulse": {
    "0%": {
      transform: "scale(0.95)",
      boxShadow: `0 0 0 0 rgba(102,179,255, 0.7)`,
    },
    "70%": {
      transform: "scale(1.05)",
      boxShadow: `0 0 0 10px rgba(102,179,255, 0)`,
    },
    "100%": {
      transform: "scale(0.95)",
      boxShadow: `0 0 0 0 rgba(102,179,255, 0)`,
    },
  },
}));
