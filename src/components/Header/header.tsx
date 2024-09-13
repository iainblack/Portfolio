import {
  Toolbar,
  Box,
  IconButton,
  Drawer,
  Tab,
  Tabs,
  useTheme,
  Slide,
  Button,
} from "@mui/material";
import React, { useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import DrawerList from "./DrawerList";
import styles from "@/styles/Home.module.css";
import ContactDialog from "../ContactDialog";

export interface DynamicTab {
  name: string;
  color?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  external?: boolean;
  subTabs?: DynamicTab[];
}

interface HeaderProps {
  handleTabChange?: (event: React.SyntheticEvent, newValue: number) => void;
  logo?: boolean;
  tabs: DynamicTab[];
  animate?: boolean;
  setContactDialogOpen: (open: boolean) => void;
  contactDialogOpen: boolean;
  tabValue: number | false;
}

const Header: React.FC<HeaderProps> = ({ ...props }) => {
  const theme = useTheme();
  let animateTimeout = 0;

  const [animateIn, setAnimateIn] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [expandableDrawerItemOpen, setExpandableDrawerItemOpen] =
    React.useState(false);

  const handleExpandableDrawerItemClick = () => {
    setExpandableDrawerItemOpen(!expandableDrawerItemOpen);
  };

  const [anchorEl, setAnchorEl] = React.useState<any | null>(null);

  const containerRef = React.useRef(null);

  const handleExpandableTabClick = (event: React.MouseEvent<any>) => {
    setAnchorEl(event.currentTarget);
  };

  const scrollAfterDrawerClose = React.useRef<Record<string, any> | undefined>(
    undefined
  );

  useEffect(() => {
    if (scrollAfterDrawerClose.current) {
      props.handleTabChange &&
        props.handleTabChange(
          scrollAfterDrawerClose.current.event,
          scrollAfterDrawerClose.current.index
        );
      scrollAfterDrawerClose.current = undefined;
    }
  }, [drawerOpen]);

  useEffect(() => {
    setTimeout(() => {
      setAnimateIn(true);
    }, 0);
  }, []);

  return (
    <>
      <Toolbar disableGutters>
        {props.logo && (
          <IconButton
            disableRipple={true}
            disableFocusRipple={true}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            sx={{
              p: 0,
            }}
          >
            <Image
              className={styles.logo}
              src="mainlogo.svg"
              alt="logo"
              width={75}
              height={75}
            />
          </IconButton>
        )}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", lg: "none" },
            justifyContent: "right",
          }}
        >
          <IconButton
            size="large"
            aria-haspopup="true"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon fontSize="medium" />
          </IconButton>
          <Drawer
            anchor="top"
            open={drawerOpen}
            onClose={() => {
              setDrawerOpen(false);
              expandableDrawerItemOpen && handleExpandableDrawerItemClick();
            }}
          >
            <DrawerList
              tabs={props.tabs}
              drawerOpen={drawerOpen}
              setDrawerOpen={setDrawerOpen}
              scrollAfterClose={scrollAfterDrawerClose}
              handleExpandableDrawerItemClick={handleExpandableDrawerItemClick}
              expandableDrawerItemOpen={expandableDrawerItemOpen}
              setExpandableDrawerItemOpen={setExpandableDrawerItemOpen}
              setContactDialogOpen={props.setContactDialogOpen}
            />
          </Drawer>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", lg: animateIn ? "flex" : "none" },
            overflow: "hidden",
            justifyContent: "right",
          }}
          id="tabs-container"
          ref={containerRef}
        >
          <Tabs
            ref={containerRef}
            value={props.tabValue}
            onChange={props.handleTabChange}
            TabIndicatorProps={{
              style: {
                backgroundColor: "transparent",
              },
            }}
          >
            {props.tabs?.map((tab, index) => {
              animateTimeout += 100;
              return (
                <Slide
                  key={index}
                  direction="up"
                  in={animateIn}
                  timeout={750}
                  style={{
                    transitionDelay: `${animateTimeout}ms`,
                  }}
                  container={containerRef.current}
                >
                  <Tab
                    label={tab.name}
                    onClick={(e) => {
                      tab.subTabs && tab.subTabs.length > 0
                        ? handleExpandableTabClick(e)
                        : tab.onClick && tab.onClick(e as any);
                    }}
                    sx={{
                      textTransform: "none",
                      color: tab.color || "text.primary",
                      fontFamily: theme.typography.body2.fontFamily,
                    }}
                  />
                </Slide>
              );
            })}
          </Tabs>
          <Slide
            direction="up"
            in={animateIn}
            timeout={400}
            style={{
              transitionDelay: `${animateTimeout + 700}ms`,
            }}
            container={containerRef.current}
          >
            <Button
              variant={"outlined"}
              color="info"
              sx={{
                ml: 2,
                textTransform: "none",
                fontFamily: theme.typography.body2.fontFamily,
              }}
              onClick={(e) => {
                props.setContactDialogOpen(true);
              }}
            >
              Contact
            </Button>
          </Slide>
        </Box>
      </Toolbar>
      <ContactDialog
        open={props.contactDialogOpen}
        onClose={() => props.setContactDialogOpen(false)}
      />
    </>
  );
};

export default Header;
