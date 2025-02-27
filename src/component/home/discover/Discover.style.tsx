"use client";
import { Box, styled, Typography } from "@mui/material";

export const DiscoverContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1440px",
  margin: "40px auto 0",
  position: "relative",
  marginBottom: "84px",
  padding: "0 40px",
}));

export const DiscoverInnerCon = styled(Box)(({ theme }) => ({
  margin: "0 auto",
  maxWidth: "1240px",
  display: "flex",
  width: "100%",
  justifyContent: "end",
  border: "1px solid #FFFFFF33",
  padding: "65px 0",
  borderRadius: "10px",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(10px)",
  backgroundColor: " #552b80",
  [theme.breakpoints.down("md")]: {
    width: "80%",
    height: "710px",
    justifyContent: "center",
  },
  [theme.breakpoints.down("sm")]: {
    width:'330px'
  }
}));

export const LeftContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "0rem",
  bottom: "-1px",
  width: "60%",
  height: "120%",

  [theme.breakpoints.down("lg")]: {
    width: "44%",
  },
  [theme.breakpoints.down("md")]: {
    width: "362px",
    height: "50%",
    left:'25%'
  },
  [theme.breakpoints.down("sm")]: {
    width: "342px",
    height: "389px",
     left:'0'
  },
}));

export const RightContainer = styled(Box)(() => ({
  maxWidth: "532px",
}));

export const DisHeading = styled(Typography)(({ theme }) => ({
  maxWidth: "531px",
  fontSize: "48px",
  fontWeight: 800,
  textTransform: "uppercase",
  margin: "0px",
  lineHeight: "55px",
  [theme.breakpoints.down("md")]: {
    fontSize: "36px",
    lineHeight: "38px",
    maxWidth: "431px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "28px",
    maxWidth: "296px",
    padding:'0 22px',
    lineHeight: "31px",
  },
}));

export const DisSpan = styled("span")(({ theme }) => ({
  background: "linear-gradient(135deg, #6a11cb 0%, #ff00ff 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

export const Para = styled(Typography)(({theme}) => ({
  maxWidth: "463px",
  marginTop: "12px",
  fontSize: "16px",
  [theme.breakpoints.down("md")]: {
    maxWidth: "396px",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "296px",
    padding:'0 22px',
    lineHeight: "31px",
  },
}));

export const MarqueeContainer = styled(Box)(() => ({
  margin: "86px 0",
}));
