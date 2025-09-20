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
          Welcome to Baitussalam Tech Park! We are a hub of innovation and
          learning, dedicated to empowering students and professionals with the
          latest skills in modern web and software development. Our projects and
          training programs focus on real-world applications, hands-on coding,
          and industry-standard tools.
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            Technologies & Skills We Focus On:
          </Typography>
          <ul>
            <li>PSDC Professional software development course</li>
            <li>Graphics Designing</li>
            <li>Amazone</li>
            <li>Web development</li>
            <li>Shopify</li>
          </ul>
        </Box>
      </Paper>
    </Container>
  );
};

export default About;
