import { Typography } from "@mui/material";
import React from "react";

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Main content */}
      <main style={{ flexGrow: 1, padding: "1rem" }}>
        {children}
      </main>

      {/* footer */}
      <footer style={{ 
        borderTop: "2px solid #ddd",
        height: "80px",
        display: "flex",
        justifyContent: "center",
        paddingTop: "20px" }}>

        <Typography sx={{ pt: 2 }}>
          🛒 Your Choosen Flower's Cart
        </Typography>
        
      </footer>
    </div>
  );
}