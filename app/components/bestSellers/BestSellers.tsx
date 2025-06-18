"use client";

import {
  Box,
  Typography,
  IconButton,
  Modal,
  CardMedia,
  Rating,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { useRef, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import FlowerCard from "./FlowerCard";
import { Flower, flowers } from "./flowersData/flowers";


interface BestSellersProps {
  currency: "USD" | "GEL";
  language: "en" | "ka";
  gelToUsdRate?: number;
}

const BestSellers = ({ currency, language, gelToUsdRate = 3 }: BestSellersProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [selectedFlower, setSelectedFlower] = useState<Flower | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  const handleOpen = (flower: Flower) => {
    setSelectedFlower(flower);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const getPriceString = (priceUSD: number) => {
    return currency === "USD" ? `$${priceUSD}` : `${Math.round(priceUSD * gelToUsdRate)}₾`;
  };

  const handleAddToCart = (flower: Flower) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]") as Flower[];
    cart.push(flower);
    localStorage.setItem("cart", JSON.stringify(cart));
    setSnackbarMessage(`${flower.name[language]} added to cart!`);
    setSnackbarOpen(true);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: 600,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        position: "relative",
      }}
    >
      <Typography
        letterSpacing={5}
        color="secondary"
        sx={{ fontWeight: 700, fontFamily: "serif", fontSize: { xs: 30, md: 60 } }}
      >
        BEST SELLERS:
      </Typography>

      <IconButton
        onClick={() => scroll("left")}
        sx={{
          position: "absolute",
          left: 10,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          backgroundColor: "white",
          boxShadow: 2,
          "&:hover": { backgroundColor: "#ffe6f0" },
        }}
      >
        <ArrowBackIcon sx={{ fontSize: 40, p: 1 }} />
      </IconButton>

      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          overflowY: "hidden",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          width: "90%",
          gap: 2,
          p: 1,
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {flowers.map((flower, i) => (
          <FlowerCard
            key={i}
            flower={flower}
            language={language}
            getPriceString={getPriceString}
            onClick={() => handleOpen(flower)}
            onAddToCart={() => handleAddToCart(flower)}
          />
        ))}
      </Box>

      <IconButton
        onClick={() => scroll("right")}
        sx={{
          position: "absolute",
          right: 10,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          backgroundColor: "white",
          boxShadow: 2,
          "&:hover": { backgroundColor: "#ffe6f0" },
        }}
      >
        <ArrowForwardIcon sx={{ fontSize: 40, p: 1 }} />
      </IconButton>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: 350, md: 600 },
            bgcolor: "white",
            borderRadius: 4,
            boxShadow: 24,
            p: 4,
            outline: "none",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <IconButton onClick={handleClose} sx={{ position: "absolute", top: 0, right: 0 }}>
            <CloseIcon sx={{ fontSize: 50, p: 1, color: "grey", "&:hover": { color: "black" } }} />
          </IconButton>

          {selectedFlower && (
            <>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                {selectedFlower.name[language]}
              </Typography>
              <CardMedia
                component="img"
                image={selectedFlower.img}
                alt={selectedFlower.name[language]}
                sx={{ mb: 2, width: { xs: 300, md: 400 }, height: { xs: 300, md: 400 } }}
              />
              <Rating value={4.5} precision={0.5} readOnly sx={{ fontSize: 45, height: 40 }} />
              <Typography variant="h6">Price: {getPriceString(selectedFlower.priceUSD)}</Typography>
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  borderRadius: 10,
                  mb: 1,
                  height: 50,
                  color: "#e91e63",
                  borderColor: "#f8bbd0",
                  backgroundColor: "#fff0f5",
                  "&:hover": {
                    backgroundColor: "#fce4ec",
                    borderColor: "#f48fb1",
                    color: "#d81b60",
                  },
                }}
                onClick={() => selectedFlower && handleAddToCart(selectedFlower)}
              >
                buy now
              </Button>
            </>
          )}
        </Box>
      </Modal>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{
          left: "50%",
          transform: "translateX(-50%)",
          bottom: { xs: 70, sm: 50 },
          width: "auto",
        }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default BestSellers;
