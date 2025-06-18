"use client"

import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import styles from "./message.module.css";

const boxes = [
  {
    icon: <LocalShippingIcon sx={{ fontSize: 50, color: "black", p: 1 }} />,
    title: "Fast Delivery",
    message: "Get your flowers delivered within 2 hours in Tbilisi.",
    className: styles.firstBox,
  },
  {
    icon: <LocalOfferIcon sx={{ fontSize: 50, color: "black", p: 1 }} />,
    title: "Free Shipping",
    message: "Free delivery on orders over $50!",
    className: styles.secondBox,
  },
  {
    icon: <AccessAlarmIcon sx={{ fontSize: 50, color: "black", p: 1 }} />,
    title: "Timely Delivery",
    message: "Get it delivered within 2-3 business days.",
    className: styles.thirdBox,
  },
  {
    icon: <LocationOnIcon sx={{ fontSize: 55, color: "black", p: 1 }} />,
    title: "Package Tracking",
    message: "Track your package easily with our tracking system.",
    className: styles.fourthBox,
  },
  {
    icon: <ShoppingCartIcon sx={{ fontSize: 50, color: "black", p: 1 }} />,
    title: "Same-Day Dispatch",
    message: "Order before 5 PM for same-day dispatch.",
    className: styles.fifthBox,
  },
];

const FriendlyMsg = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <Box sx={{ width: "100%", p: 2 }}>
      {/* Desktop */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {boxes.map((box, i) => (
          <Box key={i} className={box.className}>
            {box.icon}
            <Box sx={{ pt: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {box.title}
              </Typography>
              <Typography variant="body1">{box.message}</Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Mobile View */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {(showAll ? boxes : boxes.slice(0, 2)).map((box, i) => (
          <Box key={i} className={box.className}>
            {box.icon}
            <Box sx={{ pt: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {box.title}
              </Typography>
              <Typography variant="body1">{box.message}</Typography>
            </Box>
          </Box>
        ))}

        <Box sx={{ width: "100%", textAlign: "center", mt: 1 }}>
          <Button onClick={() => setShowAll(!showAll)} variant="text">
            {showAll ? "Show Less" : "Show More"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FriendlyMsg;
