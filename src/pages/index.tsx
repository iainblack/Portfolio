import Head from "next/head";
import { Inter } from "next/font/google";
import { AppBar, Box, CssBaseline, styled, ThemeProvider } from "@mui/material";
import AllThemes, { defaultTheme } from "@/Theme";
import styles from "@/styles/Home.module.css";
import TitlePanel from "@/components/TitlePanel/TitlePanel";
import React, { useState, useEffect } from "react";
import ContentPanel from "@/components/ContentPanel/ContentPanel";
import { useRouter } from "next/router";
import { HideOnScroll } from "@/components/Utils/utils";
import Header, { DynamicTab } from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ThemeSelectDialog from "@/components/ThemeSelection/ThemeSelectDialog";
import OverviewPanel from "@/components/OverviewPanel/OverviewPanel";
import ContactDialog from "@/components/ContactDialog";

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
  const router = useRouter();
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

      // appBarState manipulation
      // if (window.visualViewport?.height && scrollPosition < 1) {
      //   setAppBarState({
      //     transparent: true,
      //     elevated: true,
      //     logo: false,
      //     display: true,
      //   });
      // } else if (
      //   window.visualViewport?.height &&
      //   scrollPosition > 5 &&
      //   scrollPosition < window.visualViewport?.height
      // ) {
      //   setAppBarState({
      //     ...appBarState,
      //     elevated: true,
      //     transparent: false,
      //     display: false,
      //   });
      // } else if (
      //   window.visualViewport?.height &&
      //   scrollPosition > window.visualViewport?.height
      // ) {
      //   setAppBarState({
      //     ...appBarState,
      //     logo: true,
      //     display: true,
      //   });
      // }

      // Panel transitions
      const aboutMeTop = aboutMeRef.current?.offsetTop;
      const experienceTop = experienceRef.current?.offsetTop;
      const portfolioTop = portfolioRef.current?.offsetTop;

      if (
        aboutMeTop &&
        !transitionState.transitionInOne &&
        scrollPosition > aboutMeTop - 500
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
        portfolioTop &&
        !transitionState.transitionInThree &&
        scrollPosition > portfolioTop - 500
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

  // scroll to content
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    switch (newValue) {
      case 0:
        aboutMeRef.current &&
          aboutMeRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        break;
      case 1:
        experienceRef.current &&
          experienceRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        break;
      case 2:
        portfolioRef.current &&
          portfolioRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
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
      name: "About Me",
    },
    {
      name: "Experience",
    },
    {
      name: "Projects",
    },
    {
      name: "Contact",
      onClick: () => {
        setContactDialogOpen(true);
      },
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
          />
        </AppBar>
        <Offset />
        <OverviewPanel openThemeDialog={openThemeDialog} />
        <Box ref={aboutMeRef}>
          <ContentPanel
            odd
            iterator={1}
            transitionIn={transitionState.transitionInOne}
          />
        </Box>
        <Box ref={experienceRef}>
          <ContentPanel
            iterator={2}
            transitionIn={transitionState.transitionInTwo}
          />
        </Box>
        <Box ref={portfolioRef}>
          <ContentPanel
            iterator={3}
            odd
            transitionIn={transitionState.transitionInThree}
          />
        </Box>
        <Footer odd={true} />
        <ThemeSelectDialog
          open={themeDialogOpen}
          onClose={handleClose}
          selectPresetTheme={mapPresetTheme}
          currentThemeName={currentTheme.name}
          setCurrentTheme={setCurrentTheme}
        />
        <ContactDialog
          open={contactDialogOpen}
          onClose={() => setContactDialogOpen(false)}
        />
      </main>
    </ThemeProvider>
  );
}
