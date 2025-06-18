import React, { useEffect, useState } from "react";
import {
  Modal,
  Slide,
  Box,
  Typography,
  Button,
  CircularProgress,
  useTheme,
  useMediaQuery,
} from "@mui/material";

interface WeatherProps {
  open: boolean;
  onClose: () => void;
}

interface ForecastDay {
  date: string;
  temp: number;
  emoji: string;
  message: string;
  color: string;
}

const emojis = {
  hot: "☀️",
  warm: "🌤️",
  cold: "❄️",
};

const Weather: React.FC<WeatherProps> = ({ open, onClose }) => {
  const [loading, setLoading] = useState(true);
  const [forecast, setForecast] = useState<ForecastDay[]>([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (open) {
      const fetchWeather = async () => {
        setLoading(true);
        try {
          const res = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=41.7151&longitude=44.8271&daily=temperature_2m_max&timezone=auto`
          );
          const data = await res.json();
          const days = data.daily.time.map((date: string, i: number) => {
            const temp = data.daily.temperature_2m_max[i];
            let emoji = emojis.warm;
            let color = "orange";
            let message = "Moderate weather for deliveries";

            if (temp >= 28) {
              emoji = emojis.hot;
              color = "green";
              message = "Fast delivery ☀️";
            } else if (temp <= 15) {
              emoji = emojis.cold;
              color = "red";
              message = "+20% delivery fee due to cold ❄️";
            }

            return { date, temp, emoji, message, color };
          });

          setForecast(days);
        } catch (error) {
          console.error("Failed to fetch weather data:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchWeather();
    }
  }, [open]);

  return (
    <Modal open={open} onClose={onClose}>
      <Slide direction="up" in={open} mountOnEnter unmountOnExit timeout={{ enter: 400, exit: 300 }}>
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            height: "85vh",
            bgcolor: "white",
            zIndex: 1300,
            p: 3,
            overflowY: "auto",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            boxShadow: 6,
            display: "flex",
            flexDirection: "column",
            gap: 3,
            backgroundImage: 'url("rainy.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            scrollbarWidth: "none"
          }}
        >
          <Button
            onClick={onClose}
            variant="outlined"
            sx={{
              alignSelf: "flex-start",
              textTransform: "none",
              fontWeight: "bold",
              borderRadius: 2,
              px: 3,
              py: 1,
              mb: 1,
              color: "white",
              borderColor: "white",
            }}
          >
            Back
          </Button>

          {loading ? (
            <Box sx={{ textAlign: "center", mt: 5 }}>
              <CircularProgress color="secondary" />
              <Typography variant="h6" mt={2}>
                Loading forecast...
              </Typography>
            </Box>
          ) : (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {forecast.map((day, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    alignItems: isMobile ? "flex-start" : "center",
                    justifyContent: "space-between",
                    bgcolor: "#87cfebdc",
                    borderRadius: 6,
                    px: 4,
                    py: 2,
                    gap: 1.5,
                    height: isMobile ? "auto" : 180,
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ color: "white", flex: 1 }}
                  >
                    {day.date}
                  </Typography>

                  <Typography
                    fontSize={isMobile ? 25 : 35}
                    sx={{ color: "white", flex: 1 }}
                  >
                    {day.emoji} {day.temp}°C
                  </Typography>

                  <Typography
                    fontSize={isMobile ? 15 : 18}
                    color={day.color}
                    sx={{
                      flex: 2,
                      wordBreak: "break-word",
                      whiteSpace: "normal",
                      textAlign: isMobile ? "left" : "right",
                    }}
                  >
                    {day.message}
                  </Typography>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Slide>
    </Modal>
  );
};

export default Weather;
