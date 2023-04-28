import {
  Box,
  Fade,
  Link,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";

interface AboutMePanelProps {
  transitionIn: boolean;
}

export default function AboutMePanel(props: AboutMePanelProps) {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return (
    <Fade
      in={props.transitionIn}
      {...{ timeout: 2500 }}
      style={{ transitionDelay: "500ms" }}
    >
      <Box>
        <Box sx={{ maxWidth: 800 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            About Me
          </Typography>
        </Box>
        <Box
          sx={{
            display: { sm: "block", md: "flex" },
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "text.secondary",
                maxWidth: 800,
                display: "block",
                mb: 2,
              }}
            >
              I was introduced to the world programming in my Sophomore year at
              Whitworth University, on a friend&apos;s recommendation. &quot;I
              hate this CS-101 class... but I think you would like it.&quot; He
              said. He was right. I could tell right away that this was going to
              be my thing.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                maxWidth: 800,
                mb: 3,
                mr: { sm: 0, md: 10 },
              }}
            >
              Growing up I was really into art and design, so naturally I was
              drawn to front end development. While this is my personal
              preference, I also have years of experience in popular back end
              frameworks like{" "}
              <Link
                href="https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet"
                target="_blank"
              >
                .NET
              </Link>
              . On the front end, I&apos;ve been lucky enough to work with
              cutting edge tools like{" "}
              <Link href={"https://react.dev/"} target="_blank">
                React
              </Link>
              ,{" "}
              <Link href="https://www.typescriptlang.org/" target="_blank">
                TypeScript
              </Link>
              , and{" "}
              <Link href="https://mui.com/" target="_blank">
                Material-UI
              </Link>{" "}
              since my first day as a professional.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                maxWidth: 800,
                mb: 3,
                mr: { sm: 0, md: 10 },
              }}
            >
              I have also had the privilege of experiencing a wide range of work
              environments early on in my career. My first two years were at a{" "}
              <Link href="https://www.verint.com/" target="_blank">
                corporation
              </Link>{" "}
              where business practices, strict coding standards, thorough
              testing, documentation, etc. were a high priority. My very next
              job was at a{" "}
              <Link
                href="https://www.junolive.com/events-virtual?gclid=Cj0KCQjwiZqhBhCJARIsACHHEH9jqlmmBG1O3z4NHC2P-y7XtGRgLc-3SdiaIAxWkUb3cjjoYiwzukYaAs0gEALw_wcB"
                target={"_blank"}
              >
                start-up
              </Link>{" "}
              where all of that went out the window, because we needed our work
              done yesterday. I have learned a lot from both of these
              experiences and worked with some fantastic people.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            position: "relative",
            mt: 6,
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
        </Box>
      </Box>
    </Fade>
  );
}
