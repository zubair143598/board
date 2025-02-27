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

export const Heading = styled(Typography)(({theme}) => ({
  fontSize: "66px",
  fontWeight: 800,
  lineHeight: "77px",
  margin:'0 auto',
  textTransform: "uppercase",
  "& span": {
    background: "linear-gradient(135deg, #6a11cb 0%, #ff00ff 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "36px",
    lineHeight: "38px",
    maxWidth: "431px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "34px",
    maxWidth: "296px",
    padding:'0 22px',
    lineHeight: "38px",
  },
}));

export const ButtonsContainer = styled(Box)(({theme}) => ({
  margin: "40px auto 77px",
  display: "grid",
  gap: "20px",
  justifyContent: "center",
  maxWidth: "920px",
  gridTemplateColumns: "repeat(4, 1fr)",
  [theme.breakpoints.down(1080)]: {
    placeItems: "center",
    gridTemplateColumns: "repeat(2, 1fr)",
    maxWidth: "300px",
  },
}))

export const MarqueeContainer = styled(Box)(()=>({
  margin:'86px 0',
}))