import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../store/slices/appSlice";
import { RootState } from "../store";
import { User } from "../types";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state: RootState) => state.app);

  const simulateLoading = () => {
    dispatch(setLoading(true));
    setTimeout(() => dispatch(setLoading(false)), 2000);
  };

  const mockLogin = () => {
    const mockUser: User = {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
    };
    dispatch(setUser(mockUser));
  };

  const logout = () => {
    dispatch(setUser(null));
  };

  return (
    <Container sx={{ py: 4, pb: 8 }}>
      <Box textAlign="center">
        <Typography variant="h3" gutterBottom>
          Welcome to Our App
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          {user ? `Hello, ${user.name}!` : "Please sign in to get started"}
        </Typography>

        <Box
          sx={{
            mt: 3,
            gap: 2,
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={simulateLoading}
            disabled={loading}
          >
            {loading ? "Loading..." : "Simulate Loading"}
          </Button>

          {!user ? (
            <Button variant="outlined" color="secondary" onClick={mockLogin}>
              Mock Login
            </Button>
          ) : (
            <Button variant="outlined" color="error" onClick={logout}>
              Logout
            </Button>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
