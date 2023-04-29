import Head from "next/head";
import { Inter } from "next/font/google";
import { AppBar, Box, CssBaseline, styled, ThemeProvider } from "@mui/material";
import AllThemes, { defaultTheme } from "@/Theme";
import React, { useState, useEffect } from "react";
import ContentPanel from "@/components/ContentPanel/ContentPanel";
import { useRouter } from "next/router";
import Header, { DynamicTab } from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ThemeSelectDialog from "@/components/ThemeSelection/ThemeSelectDialog";
import OverviewPanel from "@/components/OverviewPanel/OverviewPanel";
import AboutMePanel from "@/components/AboutMePanel";
import ProjectsPanel from "@/components/ProjectsPanel";
import ExperiencePanel from "@/components/ExperiencePanel";

const inter = Inter({ subsets: ["latin"] });

interface AppBarState {
  transparent: boolean;
  elevated: boolean;
  logo: boolean;
  display: boolean;
}

interface TransitionState {
  transitionInOne: boolean;
  transitionInTwo: boolean;
  transitionInThree: boolean;
}

export default function Home() {
  const [appBarState, setAppBarState] = useState<AppBarState>({
    transparent: true,
    elevated: true,
    logo: true,
    display: true,
  });
  const [currentTheme, setCurrentTheme] = React.useState(defaultTheme);
  const [themeDialogOpen, setThemeDialogOpen] = React.useState(false);
  const [contactDialogOpen, setContactDialogOpen] = React.useState(false);

  const [transitionState, setTransitionState] = useState<TransitionState>({
    transitionInOne: false,
    transitionInTwo: false,
    transitionInThree: false,
  });
  const handleClose = () => {
    setThemeDialogOpen(false);
  };

  const openThemeDialog = () => {
    setThemeDialogOpen(true);
  };

  const aboutMeRef = React.useRef<HTMLDivElement>(null);
  const experienceRef = React.useRef<HTMLDivElement>(null);
  const portfolioRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Panel transitions
      const aboutMeTop = aboutMeRef.current?.offsetTop;
      const experienceTop = experienceRef.current?.offsetTop;
      const portfolioTop = portfolioRef.current?.offsetTop;

      if (
        portfolioTop &&
        !transitionState.transitionInOne &&
        scrollPosition > portfolioTop - 425
      ) {
        setTransitionState({
          ...transitionState,
          transitionInOne: true,
        });
      }
      if (
        experienceTop &&
        !transitionState.transitionInTwo &&
        scrollPosition > experienceTop - 500
      ) {
        setTransitionState({
          ...transitionState,
          transitionInTwo: true,
        });
      }
      if (
        aboutMeTop &&
        !transitionState.transitionInThree &&
        scrollPosition > aboutMeTop - 500
      ) {
        setTransitionState({
          ...transitionState,
          transitionInThree: true,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [appBarState, transitionState]);

  const scrollToPortfolio = () => {
    portfolioRef.current &&
      portfolioRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  const scrollToExperience = () => {
    experienceRef.current &&
      experienceRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  const scrollToAboutMe = () => {
    aboutMeRef.current &&
      aboutMeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  // scroll to content
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    switch (newValue) {
      case 0:
        scrollToPortfolio();
        break;
      case 1:
        scrollToExperience();
        break;
      case 2:
        scrollToAboutMe();
        break;
    }
  };

  const mapPresetTheme = (newThemeName: string) => {
    AllThemes.find((theme) => {
      if (theme.name === newThemeName) {
        setCurrentTheme(theme);
      }
    });
  };
  // create tabs for header and drawer
  const tabs: DynamicTab[] = [
    {
      name: "My Work",
    },
    {
      name: "Experience",
    },
    {
      name: "About Me",
    },
  ];

  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

  return (
    <ThemeProvider theme={currentTheme.theme}>
      <CssBaseline />
      <Head>
        <title>iainblack.dev</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AppBar
          position="fixed"
          enableColorOnDark
          color="transparent"
          sx={{
            backdropFilter: "blur(5px)",
            px: { xs: 4, sm: 4, md: 12 },
          }}
        >
          <Header
            tabs={tabs}
            handleTabChange={handleTabChange}
            logo={appBarState.logo}
            animate
            setContactDialogOpen={setContactDialogOpen}
            contactDialogOpen={contactDialogOpen}
          />
        </AppBar>
        <OverviewPanel openThemeDialog={openThemeDialog} />
        <Box ref={portfolioRef}>
          <ProjectsPanel transitionIn={transitionState.transitionInOne} odd />
        </Box>
        <Box ref={experienceRef}>
          <ExperiencePanel transitionIn={transitionState.transitionInTwo} />
        </Box>
        <Box ref={aboutMeRef}>
          <AboutMePanel transitionIn={transitionState.transitionInThree} odd />
        </Box>
        <Footer
          odd={true}
          scrollToPortfolio={scrollToPortfolio}
          scrollToExperience={scrollToExperience}
          scrollToAboutMe={scrollToAboutMe}
          openContactDialog={() => {
            setContactDialogOpen(true);
          }}
        />
        <ThemeSelectDialog
          open={themeDialogOpen}
          onClose={handleClose}
          selectPresetTheme={mapPresetTheme}
          currentThemeName={currentTheme.name}
          setCurrentTheme={setCurrentTheme}
        />
      </main>
    </ThemeProvider>
  );
}
