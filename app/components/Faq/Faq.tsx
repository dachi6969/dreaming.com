"use client";

import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const questions = [
  {
    question: "🌸 How can I find the store?",
    answer: "Our store is located in Tbilisi. Use the Google Maps link in the footer.",
  },
  {
    question: "📦 Do you offer same-day delivery?",
    answer: "Yes, orders placed before 4PM are delivered the same day.",
  },
  {
    question: "💳 What payment methods do you accept?",
    answer: "We accept cash, Visa, Mastercard, and mobile payments.",
  },
  {
    question: "📞 Can I call before placing an order?",
    answer: "Of course! Call us at +995 597 99 00 02 anytime during working hours.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <Box sx={{ 
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 5, sm: 6 },
        maxWidth: { xs: '100%', sm: '90%', md: '800px', lg: '1000px' },
        mx: "auto",
        }}>
      <Typography variant="h4" fontWeight="bold" mb={4} textAlign="center">
        Frequently Asked Questions
      </Typography>

      {questions.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <Box
            key={index}
            sx={{
              borderBottom: "1px solid #555555",
              py: 2, 
              transition: "all 0.3s ease",
            }}
          >
            <Box
              onClick={() => handleToggle(index)}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
            >
              <Typography fontWeight="bold">{item.question}</Typography>
              <ExpandMoreIcon
                sx={{
                fontSize: 50,
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.5s",
                }}
              />
            </Box>

            {/* Answers */}
            <Box
              sx={{
                maxHeight: isOpen ? 200 : 0,
                opacity: isOpen ? 1 : 0,
                overflow: "hidden",
                transition: "all 0.5s ease",
              }}
            >
              <Typography sx={{ mt: 1, color: "#555555" }}>{item.answer}</Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Faq;
