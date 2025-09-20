import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  Avatar,
  CircularProgress,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../store/slices/appSlice";
import { RootState } from "../store";
import { User } from "../types";
import { AccountCircle, Login, Logout } from "@mui/icons-material";

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
    <Container
      maxWidth="md"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        py: 4,
      }}
    >
      <Paper
        elevation={8}
        sx={{
          p: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "500px",
          borderRadius: 3,
        }}
      >
        <Avatar
          sx={{
            width: 80,
            height: 80,
            mb: 2,
            bgcolor: user ? "primary.main" : "grey.400",
          }}
        >
          {user ? user.name.charAt(0) : <AccountCircle fontSize="large" />}
        </Avatar>

        <Typography variant="h3" align="center" gutterBottom fontWeight="600">
          Welcome to Baitussalam
        </Typography>

        <Typography
          variant="h6"
          color="textSecondary"
          align="center"
          paragraph
          sx={{ mb: 3 }}
        >
          {user ? `Hello, ${user.name}!` : "Please sign in to get started"}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={simulateLoading}
            disabled={loading}
            size="large"
            startIcon={
              loading ? <CircularProgress size={20} color="inherit" /> : null
            }
            fullWidth
            sx={{ py: 1.5 }}
          >
            {loading ? "Loading..." : "Simulate Loading"}
          </Button>

          {!user ? (
            <Button
              variant="outlined"
              color="secondary"
              onClick={mockLogin}
              size="large"
              startIcon={<Login />}
              fullWidth
              sx={{ py: 1.5 }}
            >
              Mock Login
            </Button>
          ) : (
            <Button
              variant="outlined"
              color="error"
              onClick={logout}
              size="large"
              startIcon={<Logout />}
              fullWidth
              sx={{ py: 1.5 }}
            >
              Logout
            </Button>
          )}
        </Box>

        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          sx={{ mt: 3 }}
        ></Typography>
      </Paper>
    </Container>
  );
};

export default Home;
