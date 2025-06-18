"use client";

import { Box, Typography, Link, Stack } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  return (
    <Box
      component="footer"
      id="contact"
      sx={{
        mt: "auto",
        backgroundImage: "url('foni.jpg')",
        backgroundPosition: "left",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color: "#880e4f",
        py: 4,
        px: 2,
        textAlign: "center",
      }}
    >
      <Stack
        direction= "column"
        spacing={3}
        alignItems="center"
        justifyContent="center"
        sx={{ mb: 3 }}
      >
        <Typography variant="h3"
        letterSpacing={2}
        sx={{color: "black", fontWeight: 700, fontFamily: "serif"}}
        >
          Contact: 
        </Typography>
        {/* Phone */}
        <Link
          href="tel:+995597990002"
          underline="none"
          color="black"
          sx={{ display: "flex", alignItems: "center", gap: 1, height: 20, pt: 2 }}
        >
          Number: +995 - 597 - 99 - 00 - 02, +995 - (032) - 2 - 305 - 300
        </Link>

        {/* Instagram */}
        <Link
          href="https://www.instagram.com/Nkflowers.ge"
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
          color="black"
          sx={{ display: "flex", alignItems: "center", gap: 1, pt: 2 }}
        >
          <InstagramIcon sx={{fontSize: 60, p: 1}}/>
          Instagram: @Nkflowers.ge
        </Link>

        {/* Location */}
        <Link
            href="https://www.google.com/maps?q=41.709981,44.792998"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            color="inherit"
            sx={{ display: "flex", alignItems: "center", gap: 1, color: "black", flexDirection: "column" }}
          >
          <Box>
            <LocationOnIcon sx={{ fontSize: 70, p: 1 }} />
              <Typography variant="h5" color="black">
                Location: რომელაშვილის ქუჩა N24
              </Typography>
          </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <iframe
                title="Tbilisi Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5981.181657528085!2d44.792998!3d41.709981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd1a4f07d5b%3A0x4c8b5de5c5a93c25!2sVera%20Park!5e0!3m2!1sen!2sge!4v1718362598997!5m2!1sen!2sge"
                width="100%"
                height="250"
                style={{ border: 0, width: "250px", height: "250px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
              </Link>

      </Stack>

      <Typography fontSize="0.9rem" color="black">
        &copy; {new Date().getFullYear()} NkFlowers.ge • All rights reserved • Made with 💐 in Georgia
      </Typography>
    </Box>
  );
};

export default Footer;
