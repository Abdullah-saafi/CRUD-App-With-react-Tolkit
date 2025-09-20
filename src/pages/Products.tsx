import React, { useEffect } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  IconButton,
  Chip,
} from "@mui/material";
import { Add, Remove, AccessTime } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  setProducts,
  addToCart,
  updateCartItemQuantity,
} from "../store/slices/appSlice";
import { RootState } from "../store";
import { Product } from "../types";

const Products: React.FC = () => {
  const dispatch = useDispatch();
  const { products, cart } = useSelector((state: RootState) => state.app);

  useEffect(() => {
    const mockProducts: Product[] = [
      {
        id: 1,
        name: "Web Development Bootcamp",
        duration: "56 hours",
        description: "Complete course to become a full-stack developer",
        level: "Beginner",
      },
      {
        id: 2,
        name: "Data Science Masterclass",
        duration: "72 hours",
        description: "Learn data analysis, visualization and machine learning",
        level: "Intermediate",
      },
      {
        id: 3,
        name: "UI/UX Design Fundamentals",
        duration: "40 hours",
        description: "Master user interface and experience design principles",
        level: "Beginner",
      },
      {
        id: 4,
        name: "Advanced JavaScript Concepts",
        duration: "35 hours",
        description: "Deep dive into modern JavaScript and frameworks",
        level: "Advanced",
      },
      {
        id: 5,
        name: "Cloud Computing Essentials",
        duration: "45 hours",
        description: "Learn AWS, Azure and Google Cloud platforms",
        level: "Intermediate",
      },
      {
        id: 6,
        name: "Mobile App Development",
        duration: "60 hours",
        description: "Build iOS and Android apps with React Native",
        level: "Intermediate",
      },
    ];
    dispatch(setProducts(mockProducts));
  }, [dispatch]);

  const getCartItem = (productId: number) => {
    return cart.find((item) => item.id === productId);
  };

  const handleQuantityChange = (product: Product, change: number) => {
    const cartItem = getCartItem(product.id);
    if (cartItem) {
      dispatch(
        updateCartItemQuantity({
          id: product.id,
          quantity: cartItem.quantity + change,
        })
      );
    } else if (change > 0) {
      dispatch(addToCart(product));
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "success";
      case "Intermediate":
        return "warning";
      case "Advanced":
        return "error";
      default:
        return "default";
    }
  };

  return (
    <Container sx={{ py: 4, pb: 8 }}>
      <Typography variant="h3" align="center" gutterBottom fontWeight="bold">
        Available Courses
      </Typography>
      <Typography
        variant="h6"
        align="center"
        color="textSecondary"
        paragraph
        sx={{ mb: 4 }}
      >
        Browse our selection of learning programs
      </Typography>

      <Grid container spacing={3}>
        {products.map((product) => {
          const cartItem = getCartItem(product.id);
          const quantity = cartItem?.quantity || 0;

          return (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      mb: 2,
                    }}
                  >
                    {product.level && (
                      <Chip
                        label={product.level}
                        size="small"
                        color={getLevelColor(product.level)}
                        variant="outlined"
                      />
                    )}
                  </Box>

                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: "bold", minHeight: "64px" }}
                  >
                    {product.name}
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <AccessTime sx={{ mr: 1, color: "primary.main" }} />
                    <Typography color="primary" variant="h6" fontWeight="bold">
                      {product.duration}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ mb: 2 }}
                  >
                    {product.description}
                  </Typography>
                </CardContent>

                <CardActions>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    width="100%"
                  >
                    <Box display="flex" alignItems="center">
                      <IconButton
                        size="small"
                        onClick={() => handleQuantityChange(product, -1)}
                        disabled={quantity === 0}
                        color="primary"
                      >
                        <Remove />
                      </IconButton>
                      <Typography sx={{ mx: 2, fontWeight: "bold" }}>
                        {quantity}
                      </Typography>
                      <IconButton
                        size="small"
                        onClick={() => handleQuantityChange(product, 1)}
                        color="primary"
                      >
                        <Add />
                      </IconButton>
                    </Box>
                    <Button
                      size="small"
                      color="primary"
                      variant={quantity > 0 ? "outlined" : "contained"}
                      onClick={() => handleQuantityChange(product, 1)}
                      sx={{ borderRadius: 2 }}
                    >
                      {quantity > 0 ? "Add More" : "Enroll Now"}
                    </Button>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Products;
