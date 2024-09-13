import {
  Box,
  Button,
  Fade,
  Slide,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { PanelContainer } from "../Utils/styles";

interface OverviewPanelProps {
  openThemeDialog: () => void;
}

export default function OverviewPanel(props: OverviewPanelProps) {
  const [animate, setAnimate] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 1200);
  }, []);

  return (
    <PanelContainer
      sx={{
        mt: { xs: -5, sm: 0 },
      }}
    >
      <Fade in={isSmallScreen ? true : animate} timeout={4000}>
        <Box ref={containerRef}>
          <Slide
            in={isSmallScreen ? true : animate}
            timeout={1000}
            direction={"up"}
            container={containerRef.current}
          >
            <Box sx={{ position: "relative" }}>
              <Typography variant="body2" color="primary" sx={{ mb: 1 }}>
                Hi, my name is
              </Typography>
              <Typography variant="h1" fontWeight={700}>
                Iain Black.
              </Typography>
              <Typography
                variant="h1"
                fontWeight={700}
                sx={{ mb: 4, color: "text.secondary" }}
              >
                I build stuff for the internet.
              </Typography>

              <Typography
                variant="h5"
                fontWeight={200}
                color="text.secondary"
                sx={{ maxWidth: 800 }}
              >
                I&apos;m a software developer with over 4 years of full stack
                experience and a bachelor&apos;s degree in Computer Science. I help people achieve their goals through software.
                Welcome!
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "left", mt: 6 }}>
                <Button
                  variant="outlined"
                  color="info"
                  sx={{ textTransform: "none" }}
                  onClick={props.openThemeDialog}
                >
                  Select a theme
                </Button>
              </Box>
            </Box>
          </Slide>
        </Box>
      </Fade>
    </PanelContainer>
  );
}
