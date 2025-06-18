import React from "react";
import { Modal, Slide, Box, Typography, Button } from "@mui/material";
import styles from "./About.module.css";

interface AboutProps {
  open: boolean;
  onClose: () => void;
}

const About: React.FC<AboutProps> = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Slide direction="up" in={open} mountOnEnter unmountOnExit timeout={{ enter: 400, exit: 300 }}>
        <Box className={styles.container}>
          <Box>
            <Typography variant="h4" gutterBottom className={styles.title}>
              About NK's Flowers
            </Typography>

            <Typography variant="body1" className={styles.text}>
              NK's Flowers is a trusted company established in 1995, proudly serving our community for over 25 years.
            </Typography>

            <Typography variant="body1" className={styles.text}>
              We specialize in elegant, hand-picked floral arrangements for every occasion. Our mission is to bring
              natural beauty and joy to your life through carefully crafted floral designs.
            </Typography>

            <Typography variant="body1" className={styles.text}>
              Thank you for visiting us!
            </Typography>
          </Box>

          <Button variant="contained" onClick={onClose} className={styles.backButton}>
            Back
          </Button>
        </Box>
      </Slide>
    </Modal>
  );
};

export default About;
