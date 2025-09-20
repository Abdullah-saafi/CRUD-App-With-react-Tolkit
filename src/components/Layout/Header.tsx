import React from "react";
import { AppBar, Toolbar, Typography, Switch, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../store/slices/appSlice";
import { RootState } from "../../store";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.app);

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTheme(event.target.checked ? "dark" : "light"));
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My React TS App
        </Typography>
        <Box display="flex" alignItems="center">
          <Switch
            checked={theme === "dark"}
            onChange={handleThemeChange}
            color="default"
          />
          <Typography variant="body2" sx={{ ml: 1 }}>
            {theme === "dark" ? "Dark" : "Light"} Mode
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
