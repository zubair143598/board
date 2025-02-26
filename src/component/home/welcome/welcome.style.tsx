"use client";

import { Box, styled, Typography } from "@mui/material";

export const WelcomeContainer = styled(Box)(() => ({
  maxWidth: "1440px",
  margin: "110px auto",
}));

export const HeadingContainer = styled(Box)(() => ({
  maxWidth: "718px",
  margin:'0 auto',
  textAlign:'center'
}));

export const Heading = styled(Typography)(() => ({
  fontSize: "66px",
  fontWeight: 800,
  lineHeight: "77px",
  textTransform: "uppercase",
  "& span": {
    background: "linear-gradient(135deg, #6a11cb 0%, #ff00ff 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }
}));

export const ButtonsContainer = styled(Typography)(() => ({
    margin:'40px auto 77px',
    display:'flex',
    gap:'20px',
    justifyContent:'center'
}))
export const MarqueeContainer = styled(Box)(()=>({
  margin:'86px 0',
}))