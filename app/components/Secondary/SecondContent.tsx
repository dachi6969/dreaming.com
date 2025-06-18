"use client"
import { Box, Typography } from "@mui/material"


const SecondContent = () => {
    return(
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "center",
            flexDirection: {xs: "column", md: "row"},
            gap: 1,
        }}>
            <Box sx={{
                backgroundColor: "#ad9affc5",
                display: "flex",
                justifyContent: "center",
                height: 130,
                width: 300,
                borderRadius: 4,
                p: 1,
            }}>
                <Typography variant="h5" alignSelf="center">
                Flowwow Gifting Marketplace
                </Typography>
            </Box>

            <Box sx={{
                backgroundColor: "#b7ffacc1",
                display: "flex",
                justifyContent: "center",
                height: 130,
                width: 300,
                borderRadius: 4,
            }}>
                dachi
            </Box>

            <Box sx={{
                backgroundColor: "#FAA1A1",
                display: "flex",
                justifyContent: "center",
                height: 130,
                width: 300,
                borderRadius: 4,
            }}>
                dachi
            </Box>

        </Box>
    )
}

export default SecondContent;