import { ThemeObject } from "@/Theme";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Typography,
  Link,
  Box,
  Divider,
  useTheme,
  IconButton,
  Theme,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import CustomSelectAccordian from "./CustomSelectAccordian";
import ThemeSelector from "./ThemeSelector";
import CloseIcon from "@mui/icons-material/Close";

interface ThemeSelectDialogProps {
  open: boolean;
  onClose: () => void;
  selectPresetTheme: (newThemeName: string) => void;
  currentThemeName: string;
  setCurrentTheme: Dispatch<SetStateAction<ThemeObject>>;
}

export default function ThemeSelectDialog(props: ThemeSelectDialogProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      disableScrollLock
      fullScreen={isSmallScreen}
    >
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Image
          src="/mui.png"
          alt="MUI"
          width={35}
          height={35}
          style={{ marginRight: theme.spacing(2) }}
        />
        Theme Customization
        <IconButton
          onClick={props.onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 2, color: "text.primary" }}>
          Customize the theme of this site to your liking! You can select a
          preset theme, or choose your own colors.
        </DialogContentText>
        <Typography variant="body1" sx={{ mb: 1 }}>
          Select a Preset:{" "}
        </Typography>
        <Box sx={{ mb: 2 }}>
          <ThemeSelector
            handleThemeChange={props.selectPresetTheme}
            currentThemeName={props.currentThemeName}
          />
        </Box>
        <Divider />
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Customize:
          </Typography>
        </Box>
        <CustomSelectAccordian setTheme={props.setCurrentTheme} />
      </DialogContent>
    </Dialog>
  );
}
