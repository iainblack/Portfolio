import { Box, Grow, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";
import { downloadResume } from "../utils";

export default function ContactInfoPanel() {
  return (
    <Grow in={true} {...{ timeout: 1250 }}>
      <Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
        <Button
          variant="text"
          href="mailto:iainjblack20@gmail.com"
          target="_blank"
          rel="noopener"
          startIcon={<EmailIcon />}
          sx={{ color: "text.primary", textTransform: "none", mx: 1 }}
        >
          Email
        </Button>
        <Button
          href="https://www.linkedin.com/in/iain-black2020/"
          target="_blank"
          rel="noopener"
          startIcon={<LinkedInIcon />}
          sx={{ color: "text.primary", textTransform: "none", mx: 1 }}
        >
          LinkedIn
        </Button>
        <Button
          href="https://github.com/iainblack"
          target="_blank"
          rel="noopener"
          startIcon={<GitHubIcon />}
          sx={{ color: "text.primary", textTransform: "none", mx: 1 }}
        >
          GitHub
        </Button>
        <Button
          startIcon={<ArticleIcon />}
          sx={{ color: "text.primary", textTransform: "none", mx: 1 }}
          onClick={downloadResume}
        >
          Resume
        </Button>
      </Box>
    </Grow>
  );
}
