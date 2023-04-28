import {
  Box,
  Button,
  Fade,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { PanelContainer } from "../Utils/styles";

interface OverviewPanelProps {
  openThemeDialog: () => void;
}

export default function OverviewPanel(props: OverviewPanelProps) {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return (
    <PanelContainer
      sx={{
        mt: { xs: -5, sm: 0 },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Fade
          in={true}
          {...{ timeout: 3000 }}
          style={{ transitionDelay: isSmallScreen ? "0ms" : "1000ms" }}
        >
          <Typography variant="body2" color="primary" sx={{ mb: 1 }}>
            Hi, my name is
          </Typography>
        </Fade>
        <Fade
          in={true}
          {...{ timeout: 3000 }}
          style={{ transitionDelay: isSmallScreen ? "0ms" : "1000ms" }}
        >
          <Typography variant="h1" fontWeight={700}>
            Iain Black.
          </Typography>
        </Fade>
        <Fade
          in={true}
          {...{ timeout: 3000 }}
          style={{ transitionDelay: isSmallScreen ? "1000ms" : "2000ms" }}
        >
          <Typography
            variant="h1"
            fontWeight={700}
            sx={{ mb: 4, color: "text.secondary" }}
          >
            I build stuff for the internet.
          </Typography>
        </Fade>
        <Fade
          in={true}
          {...{ timeout: 3000 }}
          style={{ transitionDelay: isSmallScreen ? "1500ms" : "2500ms" }}
        >
          <Typography
            variant="h5"
            fontWeight={200}
            color="text.secondary"
            sx={{ maxWidth: 800 }}
          >
            I&apos;m a software developer with over 3 years of full stack
            experience and a bachelor&apos;s degree in Computer Science. I have
            a passion for creating elegant, user-friendly solutions. Welcome to
            my page!
          </Typography>
        </Fade>
        <Fade
          in={true}
          {...{ timeout: 3000 }}
          style={{ transitionDelay: isSmallScreen ? "1500ms" : "2500ms" }}
        >
          <Box sx={{ display: "flex", justifyContent: "left", mt: 6 }}>
            <Button
              variant="outlined"
              color="info"
              sx={{ textTransform: "none" }}
              onClick={props.openThemeDialog}
            >
              Try this out
            </Button>
          </Box>
        </Fade>
      </Box>
    </PanelContainer>
  );
}
