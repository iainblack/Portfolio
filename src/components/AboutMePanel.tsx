import {
  Avatar,
  Box,
  Fade,
  Link,
  Slide,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { useRef } from "react";
import { ContentPanelContainer } from "./ContentPanel/styles";
import { PanelContainer } from "./Utils/styles";

interface AboutMePanelProps {
  transitionIn: boolean;
  odd?: boolean;
}

export default function AboutMePanel(props: AboutMePanelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <PanelContainer odd={props.odd}>
      <Fade
        in={props.transitionIn === undefined ? true : props.transitionIn}
        timeout={4000}
      >
        <Box ref={containerRef}>
          <Slide
            in={props.transitionIn === undefined ? true : props.transitionIn}
            timeout={1000}
            direction={"up"}
            container={containerRef.current}
          >
            <Box>
              <Box sx={{ maxWidth: 800 }}>
                <Typography variant="h4" sx={{ mb: 2 }}>
                  About Me
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "text.secondary",
                    maxWidth: 800,
                  }}
                >
                  I&apos;m a Software Engineer with 3+ years off full-stack
                  experience and a knack for learning. I have experience using
                  React, TypeScript, HTML, CSS, C#, Python, and popular testing
                  frameworks. I have a passion for creating elegant front-end
                  solutions, and am working on building my freelance web
                  development business.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    mt: 6,
                    height: { xs: 250, md: 350 },
                    width: { xs: 250, md: 350 },
                  }}
                >
                  <Avatar
                    sx={{
                      height: { xs: 250, md: 350 },
                      width: { xs: 250, md: 350 },
                    }}
                  >
                    <Image
                      src="/avatar.jpg"
                      alt="pic"
                      fill
                      style={{ borderRadius: 12 }}
                    />
                  </Avatar>
                </Box>
              </Box>
            </Box>
          </Slide>
        </Box>
      </Fade>
    </PanelContainer>
  );
}
