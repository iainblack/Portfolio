import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  Fade,
  Slide,
  Tab,
  Tabs,
  Theme,
  useMediaQuery,

} from "@mui/material";
import { PanelContainer } from "./Utils/styles";

const exp = [
  {
    description: `At Accruent I work on a central authentication product that serves as an identity provider for numerous applications accross the company. Our tech stack includes .NET for the back end, where our solution integrates with Duende Identity server, and React on the front end. I have also been involved in application security, leading our integration with Veracode to address CWE findings and ensure safe coding practices throughout the development process.`,
  },
  {
    description: `As a Senior Software Developer at a tech start-up called Juno, I played a key role in migrating an outdated codebase to a modern, scalable React-based solution. I started by refactoring legacy code into modularized React components and quickly took on more complex tasks. Notably, I led the development of a social feed feature, allowing users to create and interact with posts, using React, TypeScript, React-Query, and a Python/Django backend`,
  },
  {
    description: `In Spring 2020, I graduated with honors in Computer Science while playing linebacker for the Whitworth Pirates. I interned at Verint, working on a conversational AI platform, and transitioned to a full-time role as an Associate Software Engineer.`,
    description2: `Early in my career, I gained experience with integration testing, feature scalability, and tools like React, TypeScript, and Azure. Less than a year later, I was promoted to mid-level Software Engineer, where I led development efforts for a delivery team, building full-stack features and collaborating with clients to integrate solutions. My work impacted enterprise-level medical companies, delivering sensitive data through virtual assistant integrations on client websites.`,
  }
];

interface ExperiencePanelProps {
  transitionIn: boolean;
  odd?: boolean;
}

export default function ExperiencePanel(props: ExperiencePanelProps) {
  const [value, setValue] = React.useState(0);
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
              <Typography
                variant="h4"
                sx={{ mb: 5, textAlign: isSmallScreen ? "center" : "left" }}
              >
                Experience
              </Typography>
              <Box sx={{ display: isSmallScreen ? "block" : "flex" }}>
                <Tabs
                  orientation={isSmallScreen ? "horizontal" : "vertical"}
                  variant={isSmallScreen ? "fullWidth" : "standard"}
                  value={value}
                  onChange={handleChange}
                  TabIndicatorProps={{ sx: { left: 0 } }}
                  sx={{
                    borderLeft: isSmallScreen ? 0 : 1,
                    borderColor: "divider",
                    mb: isSmallScreen ? 2 : 0,
                  }}
                >
                  <Tab label="Accruent" sx={{ textTransform: "none" }} />
                  <Tab label="Juno" sx={{ textTransform: "none" }} />
                  <Tab label="Verint" sx={{ textTransform: "none" }} />
                </Tabs>
                <TabPanel value={value} index={0}>
                  <Typography variant="h5">Software Engineer II</Typography>
                  <Typography
                    variant="body2"
                    sx={{ mb: 2, color: "text.secondary" }}
                  >
                    May 2023 - Present
                  </Typography>
                  <Typography variant="body1" sx={{ maxWidth: 800, mb: 1 }}>
                    {exp[0].description}
                  </Typography>
                  <Typography variant="body1" sx={{ maxWidth: 800, mb: 1 }}>
                    {exp[0].description2}
                  </Typography>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Typography variant="h5">Senior Software Engineer</Typography>
                  <Typography
                    variant="body2"
                    sx={{ mb: 2, color: "text.secondary" }}
                  >
                    September 2022 - April 2023
                  </Typography>
                  <Typography variant="body1" sx={{ maxWidth: 800, mb: 1 }}>
                    {exp[1].description}
                  </Typography>
                  <Typography variant="body1" sx={{ maxWidth: 800, mb: 1 }}>
                    {exp[1].description2}
                  </Typography>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <Typography variant="h5">Software Engineer</Typography>
                  <Typography
                    variant="body2"
                    sx={{ mb: 2, color: "text.secondary" }}
                  >
                    January 2020 - September 2022
                  </Typography>
                  <Typography variant="body1" sx={{ maxWidth: 800, mb: 1 }}>
                    {exp[2].description}
                  </Typography>
                  <Typography variant="body1" sx={{ maxWidth: 800, mb: 1 }}>
                    {exp[2].description2}
                  </Typography>
                </TabPanel>
              </Box>
            </Box>
          </Slide>
        </Box>
      </Fade>
    </PanelContainer>
  );
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1, ml: 2 }}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}
