"use client";

import { useState } from "react";
import { Grid } from "@mui/material";
import FirstContent from "./components/firstContent/firstContent";
import MainContent from "./components/mainContent/MainContent";
import BestSellers from "./components/bestSellers/BestSellers";
import FriendlyMsg from "./components/friendlyMsg/FriendlyMsg";
import Filter from "./components/filter/Filter";
import Advert from "./components/Advert/Advert";
import Faq from "./components/Faq/Faq";

export default function Home() {
  const [language, setLanguage] = useState<"en" | "ka">("en");
  const [currency, setCurrency] = useState<"USD" | "GEL">("USD");

  return (
    <Grid container>
      <Grid item xs={12} sx={{ pt: "70px", pb: 0 }}>
        <FirstContent />
      </Grid>

      <Grid item xs={11} md={9} sx={{ m: "0 auto" }}>
        <Filter
          language={language}
          setLanguage={setLanguage}
          currency={currency}
          setCurrency={setCurrency}
        />
      </Grid>

      <Grid
        item
        xs={9}
        sx={{ height: "700px", m: "0 auto", display: { xs: "none", md: "flex" } }}
      >
        <MainContent language={language} currency={currency} />
      </Grid>

      <Grid item xs={12}>
        <BestSellers currency={currency} gelToUsdRate={3} language={language}/>
      </Grid>

      <Grid item xs={9} sx={{ m: "0 auto", mt: { xs: 5, md: 12 }, mb: { xs: 2, md: 7 } }}>
        <FriendlyMsg />
      </Grid>

      <Grid item xs={12} sx={{ m: "0 auto", mb: 10, display: "flex" }}>
        <Advert />
      </Grid>
      
      <Grid item sx={{ m: "0 auto" }}>
        <Faq />
      </Grid>
    </Grid>
  );
}
