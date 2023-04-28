import AllThemes from "@/Theme";
import { Select, MenuItem } from "@mui/material";

interface ThemeSelectorProps {
  handleThemeChange: (themeName: string) => void;
  currentThemeName: string;
}

export default function ThemeSelector(props: ThemeSelectorProps) {
  return (
    <Select
      id="theme-select"
      value={props.currentThemeName}
      variant="outlined"
      onChange={(e) => props.handleThemeChange(e.target.value)}
      inputProps={{ MenuProps: { disableScrollLock: true } }}
      sx={{ mr: 1 }}
    >
      {AllThemes.map((theme) => (
        <MenuItem key={theme.name} value={theme.name}>
          {theme.name}
        </MenuItem>
      ))}
      <MenuItem key={"Custom"} value={"Custom"} disabled>
        {"Custom"}
      </MenuItem>
    </Select>
  );
}
