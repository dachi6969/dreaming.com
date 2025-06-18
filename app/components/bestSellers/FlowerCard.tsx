"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface Flower {
  name: { en: string; ka: string };
  priceUSD: number;
  img: string;
}

interface FlowerCardProps {
  flower: Flower;
  language: "en" | "ka";
  getPriceString: (priceUSD: number) => string;
  onClick: () => void;
  onAddToCart: () => void;
}

const FlowerCard = ({
  flower,
  language,
  getPriceString,
  onClick,
  onAddToCart,
}: FlowerCardProps) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        flexShrink: 0,
        width: 300,
        height: 400,
        borderRadius: 4,
        boxShadow: 4,
        transition: "0.3s ease",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: 10,
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        height="230"
        image={flower.img}
        alt={flower.name[language]}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: "bold", fontFamily: "Georgia, serif" }}
        >
          {flower.name[language]}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <Typography
            variant="h6"
            sx={{ color: "crimson", fontWeight: "bold", fontSize: "1.2rem" }}
          >
            {getPriceString(flower.priceUSD)}
          </Typography>

          <Box sx={{ display: "flex", gap: 1 }}>
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
              onClick={onAddToCart}
            >
              Buy
            </Button>

            <Button
              variant="contained"
              color="secondary"
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                bgcolor: "pink",
                "&:hover": {
                  bgcolor: "#ff4081",
                },
              }}
              onClick={onAddToCart}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FlowerCard;
