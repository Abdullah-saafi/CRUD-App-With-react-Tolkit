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
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
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
    // Simulate fetching products
    const mockProducts: Product[] = [
      {
        id: 1,
        name: "Product 1",
        price: 29.99,
        description: "High-quality product with amazing features",
      },
      {
        id: 2,
        name: "Product 2",
        price: 49.99,
        description: "Premium product with advanced technology",
      },
      {
        id: 3,
        name: "Product 3",
        price: 19.99,
        description: "Affordable and reliable product",
      },
      {
        id: 4,
        name: "Product 4",
        price: 79.99,
        description: "Luxury product with exceptional quality",
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

  return (
    <Container sx={{ py: 4, pb: 8 }}>
      <Typography variant="h4" gutterBottom>
        Products
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
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography color="primary" variant="h6" gutterBottom>
                    ${product.price.toFixed(2)}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
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
                      >
                        <Remove />
                      </IconButton>
                      <Typography sx={{ mx: 2 }}>{quantity}</Typography>
                      <IconButton
                        size="small"
                        onClick={() => handleQuantityChange(product, 1)}
                      >
                        <Add />
                      </IconButton>
                    </Box>
                    <Button
                      size="small"
                      color="primary"
                      variant={quantity > 0 ? "outlined" : "contained"}
                      onClick={() => handleQuantityChange(product, 1)}
                    >
                      {quantity > 0 ? "Add More" : "Add to Cart"}
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
