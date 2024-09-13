/* eslint-disable react/no-unescaped-entities */
import {
  Avatar,
  Box,
  Fade,
  Slide,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { useRef } from "react";
import { PanelContainer } from "./Utils/styles";

interface AboutMePanelProps {
  transitionIn: boolean;
  odd?: boolean;
}

export default function AboutMePanel(props: AboutMePanelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

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
            <Box
              sx={{
                display: "flex",
                flexDirection: isDesktop ? "row" : "column",
                alignItems: isDesktop ? "flex-start" : "center",
              }}
            >
              <Box sx={{ maxWidth: 800, mb: isDesktop ? 0 : 2 }}>
                <Typography variant="h4" sx={{ mb: 2 }}>
                  About Me
                </Typography>
                <Typography
                  sx={{
                    color: "text.secondary",
                    maxWidth: 800,
                  }}
                >
                  When I'm not coding, you'll probably find me golfing, rooting for my hometown Seattle Mariners, spending time with friends and family, or enjoying the outdoors. My passion is helping people improve their online footprint, which is why I've been steadily building a freelance business. I'm always looking for new opportunities to learn and grow, so if you have a project in mind, I'd love to hear about it!
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                  ml: isDesktop ? 4 : 0,
                  mt: isDesktop ? 0 : 6,
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    height: { xs: 250, md: 350 },
                    width: { xs: 250, md: 350 },
                    ml: isDesktop ? 12 : 0,
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
                      priority
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