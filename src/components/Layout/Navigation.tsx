import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
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
    { path: "/products", label: "Products", icon: <ShoppingCart /> },
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
