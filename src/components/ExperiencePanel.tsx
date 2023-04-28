import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Fade, Tab, Tabs, Theme, useMediaQuery, useTheme } from "@mui/material";

const exp = [
  {
    description: `In the Spring of 2020 I had just finished my last season as a linebacker for the Whitworth Pirates and received a Bachelor's degree in Computer Science with honors.
     I interned the previous summer at Verint who maintained a conversational AI platform, and received an offer for a full-time position as an Associate Software Engineer.`,
    description2: `Because of my internship, I had already learned the basics and was ready to hit the ground running. Instilled in me was the importance of integration testing, scalability of features, and thorough documentation.
    I was already using cutting edge tools like React, TypeScript, Azure, and much more. Could not have asked for a better place to get my foot in the door.`,
    description3: `In less than a year I was promoted to a mid level Software Engineer and was managing all development efforts for a delivery team. I was autonomously delivering full stack features which generally involved creating RESTful API requests in a .NET/C# backend and building reusable React components to display user-friendly data on the frontend.
    I also frequently met with development teams from client companies to troubleshoot website integration issues and discuss other technical topics.`,
    description4: `My features impacted a high volume of users via enterprise-level medical companies. Solutions primarily involved communicating sensitive data to both medical professionals and patients through a virtual assistant which we integrated on to the client's website.`,
  },
  {
    description: `After more than two years at Verint I had really come into my own as a developer. So, when I was presented with the opportunity to join a startup, I jumped at the chance. I joined a team of about 8 other developers at Juno - a virtual live events company in the process of transitioning to a SaaS modeled learning and community platform.
    As a Senior Software Developer, I was tasked primarily with assisting in the migration from a bloated, outdated codebase to a modern, scalable, and maintainable React-based solution.`,
    description2: `I was able to get up to speed quickly with minimal assistance, contributing within days on the job. Much of my initial work involved refactoring legacy code to use modularized React components.`,
    description3: `Soon I began to take on larger and more challenging tasks. The most notable of which was a social feed feature which allowed users to create and delete posts, reply to other user's posts, tag users from their community, and more. This feature was built from the ground up using React, TypeScript, React-Query, and a Python/Django backend.`,
    description4: `Juno, like many other startups, was an unfortunate victim of the Silicon Valley Bank collapse. I was laid off along with over half the company and 90% of the development team.`,
  },
];

interface ExperiencePanelProps {
  transitionIn: boolean;
}

export default function ExperiencePanel(props: ExperiencePanelProps) {
  const [value, setValue] = React.useState(0);
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Fade
      in={props.transitionIn}
      {...{ timeout: 2500 }}
      style={{ transitionDelay: "500ms" }}
    >
      <Box>
        <Typography
          variant="h4"
          sx={{ mb: 5, textAlign: isSmallScreen ? "center" : "left" }}
        >
          My Experience
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
            <Tab
              label="Freelance"
              sx={{ textTransform: "none", textAlign: "left" }}
            />
            <Tab
              label="Juno"
              sx={{ textTransform: "none", textAlign: "left" }}
            />
            <Tab label="Verint" sx={{ textTransform: "none" }} />
          </Tabs>

          <TabPanel value={value} index={0}>
            <Typography variant="h5">Freelance Developer</Typography>
            <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
              March 2023 - Present
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 500 }}>
              Developed a mobile responsive website for a popular Italian
              restaurant in Spokane, WA. Used React, Next.js, Material-UI,
              Google Maps API, and Firebase.
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Typography variant="h5">Senior Software Engineer</Typography>
            <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
              September 2022 - March 2023
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 500, mb: 1 }}>
              {exp[1].description}
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 500, mb: 1 }}>
              {exp[1].description2}
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 500, mb: 1 }}>
              {exp[1].description3}
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 500 }}>
              {exp[1].description4}
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Typography variant="h5">Software Engineer</Typography>
            <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
              January 2020 - September 2022
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 500, mb: 1 }}>
              {exp[0].description}
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 500, mb: 1 }}>
              {exp[0].description2}
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 500, mb: 1 }}>
              {exp[0].description3}
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 500 }}>
              {exp[0].description4}
            </Typography>
          </TabPanel>
        </Box>
      </Box>
    </Fade>
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
