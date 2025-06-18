"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Modal,
  Rating,
  Snackbar,
  Alert,
} from "@mui/material";
import styles from "./main.module.css";
import { addToCart } from "../utils/cart";

type Props = {
  language: "en" | "ka";
  currency: "USD" | "GEL";
};

type Flower = {
  nameEN: string;
  nameKA: string;
  price: number; 
  img: string;
  quantity?: number;
};

const flowers: Flower[] = [
  { nameEN: "Rose", nameKA: "ვარდი", price: 15, img: "roses.jpg" },
  { nameEN: "Lily", nameKA: "შროშანი", price: 10, img: "lily.jpg" },
  { nameEN: "Tulip", nameKA: "ტიტა", price: 12, img: "tulip.jpg" },
  { nameEN: "Daisy", nameKA: "გვირილა", price: 11, img: "daisy.jpg" },
  { nameEN: "Chrysanthemum", nameKA: "ქრიზანთემა", price: 9, img: "Chrysanthemum.jpg" },
  { nameEN: "Carnation", nameKA: "მიხაკი", price: 18, img: "Carnation.jpg" },
  { nameEN: "Lavender", nameKA: "ლავანდა", price: 6, img: "Lavender.jpg" },
  { nameEN: "Orchid", nameKA: "ორქიდეა", price: 11, img: "Orchid.jpg" },
  { nameEN: "Sunflower", nameKA: "მზეაყვავილა", price: 12, img: "Sunflower.jpg" },
  { nameEN: "Bouquet", nameKA: "თაიგული", price: 22, img: "bouquet2.jpg" },
  { nameEN: "Sunkiss", nameKA: "მზის კოცნა", price: 19, img: "bouquet1.jpg" },
  { nameEN: "Spring", nameKA: "გაზაფხული", price: 25, img: "bouquet3.jpg" },
];

const MainContent = ({ language, currency }: Props) => {
  const [open, setOpen] = useState(false);
  const [selectedFlower, setSelectedFlower] = useState<Flower | null>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const gelRate = 3;

  const getPrice = (price: number) => {
    return currency === "USD"
      ? `$${price}`
      : `${(price * gelRate).toFixed(2)} ₾`;
  };

  const handleOpen = (flower: Flower) => {
    setSelectedFlower(flower);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedFlower(null);
  };

  const handleAddToCart = () => {
    if (selectedFlower) {
      addToCart(selectedFlower);
      setOpenSnackbar(true);
    }
  };

  return (
    <>
      <Box className={styles.main}>
        {flowers.map((item, index) => (
          <Card
            key={index}
            onClick={() => handleOpen(item)}
            sx={{
              width: 300,
              height: 400,
              borderRadius: 4,
              boxShadow: 6,
              transition: "0.3s ease",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: 10,
              },
            }}
          >
            <CardMedia
              component="img"
              height="230"
              image={item.img}
              alt={language === "en" ? item.nameEN : item.nameKA}
            />
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: "bold", fontFamily: "Georgia, serif" }}
              >
                {language === "en" ? item.nameEN : item.nameKA}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "crimson",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                  }}
                >
                  {getPrice(item.price)}
                </Typography>

                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "pink",
                    color: "pink",
                    textTransform: "none",
                    fontWeight: "bold",
                    "&:hover": {
                      borderColor: "#ff4081",
                      backgroundColor: "#ffe6f0",
                      color: "#ff4081",
                    },
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(item);
                    setOpenSnackbar(true);
                  }}
                >
                  Buy
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            p: 4,
            borderRadius: 7,
            boxShadow: 14,
            width: 700,
            maxHeight: "90vh",
            overflowX: "visible",
            border: "none",
            outline: "none"
          }}
        >
          {selectedFlower && (
            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 3 }}>
              <Box sx={{ flex: 1 }}>
                <Box
                  component="img"
                  src={selectedFlower.img}
                  alt={language === "en" ? selectedFlower.nameEN : selectedFlower.nameKA}
                  sx={{ width: 350, height: 400, objectFit: "cover" }}
                />

                <Typography variant="h6" sx={{ mt: 2, color: "crimson" }}>
                  Price: {getPrice(selectedFlower.price)}
                </Typography>

                <Typography variant="h6" sx={{ mt: 1 }}>
                  Rating:
                </Typography>
                <Rating value={4.5} precision={0.5} readOnly sx={{ fontSize: 45 }} />
              </Box>

              <Box sx={{ flex: 2 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
                  {language === "en" ? selectedFlower.nameEN : selectedFlower.nameKA}
                </Typography>

                <Typography sx={{ mb: 3, color: "gray" }}>
                  This flower is perfect for any occasion, with vibrant colors and a lovely fragrance.
                </Typography>

                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", flexDirection: "column" }}>
                  <Button variant="contained" color="primary" sx={{ borderRadius: 10, height: 45 }}>
                    Buy Now
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{ borderRadius: 10, height: 45 }}
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </Modal>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Added to cart!
        </Alert>
      </Snackbar>
    </>
  );
};

export default MainContent;
