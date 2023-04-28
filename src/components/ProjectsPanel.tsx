import {
  Box,
  Fade,
  LinearProgress,
  Link,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";

interface ProjectsPanelProps {
  transitionIn: boolean;
}

export default function ProjectsPanel(props: ProjectsPanelProps) {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return (
    <Fade in={props.transitionIn} {...{ timeout: 2500 }}>
      <Box sx={{ width: "100%" }}>
        <Box>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Projects
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
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
                  mb: { xs: 3, md: 0 },
                  height: { xs: 250, md: 400 },
                  width: { xs: "90vw", md: 600 },
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
                px: { xs: 0, md: 5 },
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
                Bennidito&apos;s Pizza is a local pizza shop in Spokane, WA. I
                built them a modern website to bring in more business and create
                a better customer experience. This site was built using React,
                Next.js and Material-UI.
              </Typography>
              <Link href="https://www.benniditos.com/" target={"_blank"}>
                www.benniditos.com
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}
