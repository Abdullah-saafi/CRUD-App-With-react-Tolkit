import React from "react";
import { Container, Typography, Paper, Box } from "@mui/material";

const About: React.FC = () => {
  return (
    <Container sx={{ py: 4, pb: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to our React TypeScript application! This project demonstrates
          modern web development practices using React, TypeScript, Redux
          Toolkit, React Router, and Material-UI.
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            Technologies Used:
          </Typography>
          <ul>
            <li>React 18 with TypeScript</li>
            <li>Redux Toolkit for state management</li>
            <li>React Router for navigation</li>
            <li>Material-UI for components and styling</li>
            <li>Vite for fast development and building</li>
          </ul>
        </Box>
      </Paper>
    </Container>
  );
};

export default About;
