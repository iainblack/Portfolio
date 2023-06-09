import { Box, styled } from "@mui/material";

export const ContentPanelContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "odd",
})<{
  odd?: boolean;
}>(({ odd, theme }) => ({
  minHeight: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "left",
  alignItems: "center",
  backgroundColor: odd
    ? theme.palette.background.paper
    : theme.palette.background.default,
}));
