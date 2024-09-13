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
import ProjectCard from "./ProjectCard";

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
                  Projects
                </Typography>

                <ProjectCard
                  href="https://www.healingwithmiracles.com/"
                  imagePath="/louBlog3.png"
                  title="Lou Fleming's Blog"
                  description="Lou Fleming is a personal blogger who wanted to tell his story online. I built a website that would allow him to share his experiences and knowledge with the world. Integrated with a headless CMS and email subscription service, this web application was built using Next.js 14, Sanity CMS, Tailwind CSS, Firebase Firestore, and SendGrid."
                  linkTitle="www.healingwithmiracles.com"
                />
                <ProjectCard
                  imagePath="/raysApp.png"
                  title="The 49 Rays of God"
                  description="The 49 Rays of God is a mobile application that serves as a reference to the teachings of a religious group called Namaste Inc. in the form of a virtual card deck. Users can scroll through the deck or shuffle the cards for daily inspiration. This application was built using React Native, Expo, and TypeScript. I also managed the deployment and billing set up on behalf of the organization. No personal affiliation with the organization."
                  linkTitle="Find it on the App Store or Google Play Store"
                />
                <ProjectCard
                  href="https://www.benniditos.com/"
                  imagePath="/ditos.png"
                  title="Bennidito's Pizza"
                  description="Bennidito's Pizza is popular neighborhood restaurant located in Spokane, WA. I built them a modern website to bring in more business and create a better customer experience. This web application was built using Next.js and Material-UI."
                  linkTitle="www.benniditos.com"
                />
              </Box>
            </Box>
          </Slide>
        </Box>
      </Fade>
    </PanelContainer>
  );
}
