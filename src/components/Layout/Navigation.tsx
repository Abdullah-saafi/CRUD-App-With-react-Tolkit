import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Box,
  Typography,
} from "@mui/material";
import { Home, Info, ShoppingCart, ContactMail } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

interface Route {
  path: string;
  label: string;
  icon: React.ReactElement;
}

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const routes: Route[] = [
    { path: "/", label: "Home", icon: <Home /> },
    { path: "/about", label: "About", icon: <Info /> },
    { path: "/products", label: "Courses", icon: <ShoppingCart /> },
    { path: "/contact", label: "Contact", icon: <ContactMail /> },
  ];

  const currentRoute = routes.findIndex(
    (route) => route.path === location.pathname
  );

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <Box
        sx={{
          position: "absolute",
          top: -20,
          right: 16,
          zIndex: 1000,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "red",
            fontWeight: "bold",
            fontStyle: "italic",
            textShadow: "0.5px 0.5px 1px rgba(0,0,0,0.3)",
          }}
        >
          Made with ❤️ by Abdullah Saafi
        </Typography>
      </Box>

      <BottomNavigation
        showLabels
        value={currentRoute}
        onChange={(event: React.SyntheticEvent, newValue: number) => {
          navigate(routes[newValue].path);
        }}
      >
        {routes.map((route) => (
          <BottomNavigationAction
            key={route.path}
            label={route.label}
            icon={route.icon}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default Navigation;
