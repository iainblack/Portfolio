import {
  Box,
  Fade,
  LinearProgress,
  Link,
  Slide,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { useRef } from "react";
import { PanelContainer } from "./Utils/styles";

interface ProjectsPanelProps {
  transitionIn: boolean;
  odd?: boolean;
}

export default function ProjectsPanel(props: ProjectsPanelProps) {
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
            <Box sx={{ width: "100%" }}>
              <Box>
                <Typography variant="h4" sx={{ mb: 5 }}>
                  Freelance Projects
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", lg: "row" },
                    alignItems: "center",
                  }}
                >
                  <a href="https://www.benniditos.com/" target={"_blank"}>
                    <Box
                      sx={{
                        transition: "all .2s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                        boxShadow: 15,
                        position: "relative",
                        borderRadius: 12,
                        mb: { xs: 3, lg: 0 },
                        height: { xs: 250, md: 400 },
                        width: { xs: "85vw", sm: "75vw", md: 600 },
                      }}
                    >
                      <Image
                        src="/ditos.png"
                        fill
                        alt="pic"
                        style={{
                          borderRadius: 12,
                        }}
                      />
                    </Box>
                  </a>
                  <Box
                    sx={{
                      px: { xs: 0, lg: 5 },
                      textAlign: "left",
                      maxWidth: 500,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        display: "block",
                        mb: 2,
                        color: "text.secondary",
                      }}
                    >
                      Bennidito&apos;s Pizza
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      Bennidito&apos;s Pizza is a local pizza shop in Spokane,
                      WA. I built them a modern website to bring in more
                      business and create a better customer experience. This
                      site was built using React, Next.js and Material-UI.
                    </Typography>
                    <Link href="https://www.benniditos.com/" target={"_blank"}>
                      www.benniditos.com
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Slide>
        </Box>
      </Fade>
    </PanelContainer>
  );
}
