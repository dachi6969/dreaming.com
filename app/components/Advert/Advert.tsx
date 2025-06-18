"use client";

import { useEffect, useRef, useState } from "react";
import { Box, IconButton, Typography, Grid } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

const videos = ["/secondVid.mp4","/firstVid.mp4", "/thirdVid.mp4"];

const Advert = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const autoPlayRef = useRef(true);

  const handleVideoEnd = () => {
    if (autoPlayRef.current) {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }
  };

  const goToNext = () => {
    autoPlayRef.current = false;
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const goToPrev = () => {
    autoPlayRef.current = false;
    setCurrentIndex((prev) =>
      prev === 0 ? videos.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (video) {
        if (i === currentIndex) {
          video.currentTime = 0;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });
  }, [currentIndex]);

  return (
    <Grid container spacing={1} sx={{ mt: 5, px: { xs: 2, md: 6 } }}>
      {/* Text */}
      <Grid item xs={12} lg={6} sx={{ display: "flex", alignItems: "center" }}>
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#880e4f",
              mb: 2,
              fontFamily: "Georgia, serif",
            }}
          >
            🌸 Welcome to NkFlowers.ge
          </Typography>
          <Typography
            sx={{
              fontSize: "1.1rem",
              color: "#444",
              lineHeight: 1.8,
              fontFamily: "Georgia, serif",
            }}
          >
            Where every petal tells a story. <br />
            At NkFlowers.ge, we believe flowers speak louder than words. <br />
            Whether it’s a heartfelt gift, a romantic gesture, or simply a way
            to brighten someone’s day — our handpicked blooms are arranged with
            love, care, and Georgian soul.
            <br />
            <br />
            💐 <b>Fresh. Local. Beautiful.</b>
          </Typography>
        </Box>
      </Grid>

      {/* Video */}
      <Grid item xs={12} lg={6}>
        <Box
          sx={{
            width: "100%",
            height: { xs: 200, lg: 310, sm: 300, md: 400 },
            overflow: "hidden",
            borderRadius: 3,
            boxShadow: "0 12px 30px rgba(0, 0, 0, 0.2)",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: `${videos.length * 100}%`,
              transform: `translateX(-${currentIndex * (100 / videos.length)}%)`,
              transition: "transform 1s ease-in-out",
              
            }}
          >
            {videos.map((src, index) => (
              <Box
                key={index}
                sx={{
                  width: `${100 / videos.length}%`,
                  height: "100%",
                  flexShrink: 0,
                }}
              >
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[index] = el;
                  }}
                  src={src}
                  onEnded={handleVideoEnd}
                  muted
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />
              </Box>
            ))}
          </Box>

          {/* Arrows */}
          <IconButton
            onClick={goToPrev}
            sx={{
              position: "absolute",
              top: "50%",
              left: 10,
              transform: "translateY(-50%)",
              backgroundColor: "#ffffffcc",
              "&:hover": { backgroundColor: "#ffffff" },
            }}
          >
            <ArrowBackIosNew sx={{fontSize: {xs: 30, md: 40}, p: 1}}/>
          </IconButton>

          <IconButton
            onClick={goToNext}
            sx={{
              position: "absolute",
              top: "50%",
              right: 10,
              transform: "translateY(-50%)",
              backgroundColor: "#ffffffcc",
              "&:hover": { backgroundColor: "#ffffff" },
            }}
          >
            <ArrowForwardIos sx={{fontSize: {xs: 30, md: 40}, p: 1}}/>
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Advert;
