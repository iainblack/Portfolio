import { Box, styled } from "@mui/material";

export const FooterContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "odd",
})<{
  odd?: boolean;
}>(({ odd, theme }) => ({
  minHeight: "20vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "black",
  padding: theme.spacing(3),
}));
