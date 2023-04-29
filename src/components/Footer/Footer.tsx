import {
  Fade,
  Box,
  Slide,
  Divider,
  Button,
  IconButton,
  useTheme,
} from "@mui/material";
import React from "react";
import { FooterContainer } from "./styles";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import {
  FacebookOutlined,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";

interface ContentPanelProps {
  odd?: boolean;
  scrollToExperience: () => void;
  scrollToPortfolio: () => void;
  scrollToAboutMe: () => void;
  openContactDialog: () => void;
}
const linkedIn = "https://www.linkedin.com/in/iain-black2020/";
const gitHub = "https://github.com/iainblack";

const Footer: React.FC<ContentPanelProps> = ({ ...props }) => {
  const theme = useTheme();
  const links = [
    {
      label: "Home",
      onClick: () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
    },
    { label: "Projects", onClick: props.scrollToPortfolio },
    { label: "Experience", onClick: props.scrollToExperience },
    { label: "About", onClick: props.scrollToAboutMe },
  ];
  return (
    <FooterContainer odd={props.odd}>
      <Box
        sx={{
          display: { xs: "column", sm: "flex" },
          justifyContent: "space-between",
          width: "90%",
          textAlign: "center",
        }}
      >
        <Box>
          <Image
            className={styles.logo}
            src="/mainlogo.svg"
            alt="logo"
            width={100}
            height={30}
            style={{
              objectFit: "contain",
            }}
          />
        </Box>
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex" }}>
            {links.map((link, index) => (
              <Button
                onClick={link.onClick}
                key={index}
                sx={{
                  color: theme.palette.text.primary,
                  mx: 1,
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <IconButton
              onClick={() => {
                window.open(linkedIn, "_blank");
              }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              onClick={() => {
                window.open(gitHub, "_blank");
              }}
            >
              <GitHub />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ my: 2, width: "90%" }} variant="middle" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box sx={{ color: theme.palette.text.secondary, fontSize: 12 }}>
          ©Copyright. All rights reserved.
        </Box>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
