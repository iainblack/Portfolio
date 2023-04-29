import {
  Accordion,
  AccordionSummary,
  Box,
  Typography,
  AccordionDetails,
  AccordionActions,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { useTheme } from "@mui/material/styles";
import { ThemeObject } from "@/Theme";

interface CustomSelectAccordianProps {
  setTheme: (theme: ThemeObject) => void;
}

export default function CustomSelectAccordian(
  props: CustomSelectAccordianProps
) {
  const theme = useTheme();
  const [backgroundDefault, setBackgroundDefault] = useState(
    theme.palette.background.default
  );
  const [backgroundPaper, setBackgroundPaper] = useState(
    theme.palette.background.paper
  );
  const [primaryColor, setPrimaryColor] = useState(theme.palette.primary.main);
  const [secondaryColor, setSecondaryColor] = useState(
    theme.palette.secondary.main
  );

  const updateBackgroundDefault = () => {
    const newTheme: ThemeObject = {
      name: "Custom",
      theme: {
        ...theme,
        palette: {
          ...theme.palette,
          background: {
            ...theme.palette.background,
            default: backgroundDefault,
          },
        },
      },
    };
    props.setTheme(newTheme);
  };

  const updateBackgroundPaper = () => {
    const newTheme: ThemeObject = {
      name: "Custom",
      theme: {
        ...theme,
        palette: {
          ...theme.palette,
          background: {
            ...theme.palette.background,
            paper: backgroundPaper,
          },
        },
      },
    };
    props.setTheme(newTheme);
  };

  const updatePimaryColor = () => {
    const newTheme: ThemeObject = {
      name: "Custom",
      theme: {
        ...theme,
        palette: {
          ...theme.palette,
          primary: {
            ...theme.palette.primary,
            main: primaryColor,
          },
        },
      },
    };
    props.setTheme(newTheme);
  };

  const updateSecondaryColor = () => {
    const newTheme: ThemeObject = {
      name: "Custom",
      theme: {
        ...theme,
        palette: {
          ...theme.palette,
          primary: {
            ...theme.palette.primary,
            main: primaryColor,
          },
        },
      },
    };
    props.setTheme(newTheme);
  };

  return (
    <>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <Typography variant="body2" sx={{ width: "33%", flexShrink: 0 }}>
              Background 1
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              display: { xs: "block", md: "flex" },
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ mx: { xs: "auto", md: "unset" } }}>
              <HexColorPicker
                color={backgroundDefault}
                onChange={setBackgroundDefault}
              />
            </Box>
            <Typography
              variant="h5"
              sx={{
                mr: 5,
                ml: { xs: 2, md: 0 },
                borderLeft: 60,
                borderLeftColor: backgroundDefault,
                pl: 2,
                mt: { xs: 2, md: 0 },
              }}
            >
              {backgroundDefault}
            </Typography>
          </Box>
        </AccordionDetails>
        <AccordionActions>
          <Button color="info" onClick={updateBackgroundDefault}>
            Update
          </Button>
        </AccordionActions>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <Typography variant="body2" sx={{ width: "33%", flexShrink: 0 }}>
              Background 2
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              display: { xs: "block", md: "flex" },
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ mx: { xs: "auto", md: "unset" } }}>
              <HexColorPicker
                color={backgroundPaper}
                onChange={setBackgroundPaper}
              />
            </Box>
            <Typography
              variant="h5"
              sx={{
                mr: 5,
                ml: { xs: 2, md: 0 },
                borderLeft: 60,
                borderLeftColor: backgroundPaper,
                pl: 2,
                mt: { xs: 2, md: 0 },
              }}
            >
              {backgroundPaper}
            </Typography>
          </Box>
        </AccordionDetails>
        <AccordionActions>
          <Button color="info" onClick={updateBackgroundPaper}>
            Update
          </Button>
        </AccordionActions>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <Typography variant="body2" sx={{ width: "33%", flexShrink: 0 }}>
              Primary Color
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              display: { xs: "block", md: "flex" },
              alignItems: "center",
              justifyContent: "space-between",
              mx: "auto",
            }}
          >
            <Box sx={{ mx: { xs: "auto", md: "unset" } }}>
              <HexColorPicker color={primaryColor} onChange={setPrimaryColor} />
            </Box>
            <Typography
              variant="h5"
              sx={{
                mr: 5,
                ml: { xs: 2, md: 0 },
                borderLeft: 60,
                borderLeftColor: primaryColor,
                pl: 2,
                mt: { xs: 2, md: 0 },
              }}
            >
              {primaryColor}
            </Typography>
          </Box>
        </AccordionDetails>
        <AccordionActions>
          <Button color="info" onClick={updatePimaryColor}>
            Update
          </Button>
        </AccordionActions>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <Typography variant="body2" sx={{ width: "33%", flexShrink: 0 }}>
              Secondary Color
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              display: { xs: "block", md: "flex" },
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ mx: { xs: "auto", md: "unset" } }}>
              <HexColorPicker
                color={secondaryColor}
                onChange={setSecondaryColor}
              />
            </Box>
            <Typography
              variant="h5"
              sx={{
                mr: 5,
                ml: { xs: 2, md: 0 },
                borderLeft: 60,
                borderLeftColor: secondaryColor,
                pl: 2,
                mt: { xs: 2, md: 0 },
              }}
            >
              {secondaryColor}
            </Typography>
          </Box>
        </AccordionDetails>
        <AccordionActions>
          <Button color="info" onClick={updateSecondaryColor}>
            Update
          </Button>
        </AccordionActions>
      </Accordion>
    </>
  );
}
