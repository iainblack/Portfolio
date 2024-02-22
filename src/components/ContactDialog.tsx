import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import {
  Alert,
  DialogContent,
  Divider,
  Grow,
  IconButton,
  ListItemButton,
  ListItemIcon,
  Snackbar,
  Typography,
  useTheme,
} from "@mui/material";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import GitHubIcon from "@mui/icons-material/GitHub";
import DownloadIcon from "@mui/icons-material/Download";
import ArticleIcon from "@mui/icons-material/Article";
import { Box } from "@mui/system";
import { downloadResume } from "./Utils/utils";

export interface ContactDialogProps {
  open: boolean;
  onClose: () => void;
}

const phoneNumber = "(206)-795-7550";
const email = "iainjblack20@gmail.com";
const linkedIn = "https://www.linkedin.com/in/iain-black2020/";
const gitHub = "https://github.com/iainblack";

export default function ContactDialog(props: ContactDialogProps) {
  const theme = useTheme();
  const { onClose, open } = props;
  const [openSnackBar, setOpenSnackBar] = React.useState(false);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackBar(false);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setOpenSnackBar(true);
  };

  return (
    <Dialog open={open} onClose={onClose} disableScrollLock>
      <DialogTitle
        sx={{ textAlign: "center", fontSize: theme.typography.body2.fontSize }}
      >
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
        Get In Touch
      </DialogTitle>
      <Divider variant="middle" />
      <DialogContent>
        <List>
          <ContactRow
            startIcon={<PhoneIphoneIcon />}
            secondaryIcon={<ContentCopyIcon sx={{ height: 18, width: 18 }} />}
            text={phoneNumber}
            desktopClick={() => {
              handleCopy(phoneNumber);
            }}
            mobileClick={() => {
              window.open(`tel:${phoneNumber}`, "_self");
            }}
          />
          <ContactRow
            startIcon={<EmailIcon />}
            secondaryIcon={<ContentCopyIcon sx={{ height: 18, width: 18 }} />}
            text={email}
            desktopClick={() => {
              handleCopy(email);
            }}
            mobileClick={() => {
              window.open(`mailto:${email}`);
            }}
          />
          <ContactRow
            startIcon={<LinkedInIcon />}
            secondaryIcon={<OpenInNewIcon sx={{ height: 18, width: 18 }} />}
            text={"LinkedIn"}
            desktopClick={() => {
              window.open(linkedIn, "_blank");
            }}
            mobileClick={() => {
              window.open(linkedIn, "_blank");
            }}
          />
          <ContactRow
            startIcon={<GitHubIcon />}
            secondaryIcon={<OpenInNewIcon sx={{ height: 18, width: 18 }} />}
            text={"GitHub"}
            desktopClick={() => {
              window.open(gitHub, "_blank");
            }}
            mobileClick={() => {
              window.open(gitHub, "_blank");
            }}
          />
          <ContactRow
            startIcon={<ArticleIcon />}
            secondaryIcon={<DownloadIcon sx={{ height: 18, width: 18 }} />}
            text={"Resume"}
            desktopClick={downloadResume}
            mobileClick={downloadResume}
          />
        </List>
      </DialogContent>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        TransitionComponent={(props) => <Grow {...props} />}
        color="green"
      >
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%", alignItems: "center" }}
          variant="filled"
        >
          <Typography fontSize={18}>Copied to clipboard!</Typography>
        </Alert>
      </Snackbar>
    </Dialog>
  );
}

interface ContactRowProps {
  startIcon: JSX.Element;
  secondaryIcon: JSX.Element;
  text: string;
  desktopClick?: () => void;
  mobileClick?: () => void;
}

function ContactRow(props: ContactRowProps) {
  const theme = useTheme();
  return (
    <Box sx={{ px: { xs: 0, sm: 1 } }}>
      <ListItem
        sx={{ display: { xs: "none", sm: "flex" } }}
        disableGutters
        secondaryAction={
          props.desktopClick && (
            <IconButton onClick={props.desktopClick}>
              {props.secondaryIcon}
            </IconButton>
          )
        }
      >
        <ListItemIcon>{props.startIcon}</ListItemIcon>
        <ListItemText
          primary={props.text}
          primaryTypographyProps={{
            fontFamily: theme.typography.body2.fontFamily,
          }}
        />
      </ListItem>
      <ListItem sx={{ display: { xs: "flex", sm: "none" } }} disableGutters>
        <ListItemButton onClick={props.mobileClick}>
          <ListItemIcon>{props.startIcon}</ListItemIcon>
          <ListItemText primary={props.text} />
        </ListItemButton>
      </ListItem>
    </Box>
  );
}
