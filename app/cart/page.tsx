"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Divider,
} from "@mui/material";
import { getCart, removeFromCart, clearCart } from "../components/utils/cart";

interface Flower {
  nameEN: string;
  nameKA: string;
  price: string;
  img: string;
  quantity?: number;
}

const CartPage = () => {
  const [cart, setCart] = useState<Flower[]>([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleRemove = (name: string) => {
    removeFromCart(name);

    setCart((prev) => {
      const index = prev.findIndex((item) => item.nameEN === name);
      if (index !== -1) {
        const newCart = [...prev];
        newCart.splice(index, 1);
        return newCart;
      }
      return prev;
    });
  };

  const handleClear = () => {
    clearCart();
    setCart([]);
  };

  return (
    <Box
      sx={{
        mt: 12,
        px: { xs: 2, sm: 4, md: 8 },
        width: "100%",
        maxWidth: 1000,
        mx: "auto",
        pb: 10,
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        mb={5}
        sx={{ fontSize: { xs: 26, sm: 34 } }}
      >
        🛒 Your Cart
      </Typography>

      {cart.length === 0 ? (
        <Typography color="gray" textAlign="center" fontSize={18}>
          Your cart is empty.
        </Typography>
      ) : (
        <>
          <Box display="flex" flexDirection="column" gap={4}>
            {cart.map((item, index) => (
              <Card
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  p: 2,
                  boxShadow: 3,
                  borderRadius: 3,
                  gap: 4
                }}
              >
                <CardMedia
                  component="img"
                  image={item.img}
                  alt={item.nameEN}
                  sx={{
                    width: { xs: "100%", sm: 150 },
                    height: { xs: 300, sm: 150 },
                    objectFit: "cover",
                  }}
                />

                <Box
                  sx={{
                    flexGrow: 1,
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ fontSize: { xs: 18, sm: 20 } }}
                  >
                    {item.nameEN}
                  </Typography>
                  <Typography
                    color="crimson"
                    fontWeight="bold"
                    mt={1}
                    fontSize={17}
                  >
                    {item.quantity ? item.quantity + "x" : ""}
                  </Typography>
                </Box>

                <Button
                  onClick={() => handleRemove(item.nameEN)}
                  color="error"
                  variant="outlined"
                  sx={{
                    mt: { xs: 2, sm: 0 },
                    px: 3,
                    py: 1,
                    fontWeight: "bold",
                    borderRadius: 2,
                  }}
                >
                  Remove
                </Button>
              </Card>
            ))}
          </Box>

          <Divider sx={{ my: 5 }} />

          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="error"
              onClick={handleClear}
              sx={{
                px: 5,
                py: 1.5,
                fontWeight: "bold",
                borderRadius: 3,
                fontSize: 16,
              }}
            >
              Clear Cart
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default CartPage;
