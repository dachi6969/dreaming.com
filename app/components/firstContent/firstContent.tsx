"use client";
import { Box, Typography } from "@mui/material";
import { useRef } from "react";

const images = [
  {
    url: "https://pub-static.fotor.com/assets/bg/49048260-583c-4945-a120-1df8c88e28ed.jpg",
    title: "NK's Flower Company",
    subtitle: "smell, touch and feel 🌸",
  },
  {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Fresh Blooms Daily",
    subtitle: "Beauty in every detail 💐",
  },

];

const FirstContent = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <Box
      ref={scrollRef}
      sx={{
        height: "400px",
        overflowY: "scroll",
        scrollbarWidth:"none",
        scrollSnapType: "y mandatory",
        scrollBehavior: "smooth",
      }}
    >
      {images.map((item, index) => (
        <Box
          key={index}
          sx={{
            scrollSnapAlign: "start",
            height: "400px",
            backgroundImage: `url(${item.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: "white",
            textShadow: "1px 1px 5px purple",
          }}
        >
          <Typography sx={{
            fontSize:{xs:"30px",md:"70px"},
            transition:"font-size 1s ease",
            fontFamily: "cursive",
            mb: 2
            }}>
            {item.title}
          </Typography>
          <Typography sx={{
            fontSize:{xs:"20px",md:"30px"},
            transition:"font-size 1s ease",
            fontFamily: "serif",
            }}>
            {item.subtitle}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default FirstContent;
