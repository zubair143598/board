"use client";
import { Box, styled, Typography } from "@mui/material";

export const FavContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1440px",
  margin: "100px auto",
  color: "white",
  position: "relative",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    margin: "50px auto",
  },
}));

export const HeadingContainer = styled(Box)(({ theme }) => ({
  maxWidth: "578px",
  margin: "0 auto",
}));

export const FavHeading = styled(Typography)(({ theme }) => ({
  fontSize: "66px",
  fontWeight: 800,
  textTransform: "uppercase",
  margin: "0px",
  lineHeight: "77px",
  [theme.breakpoints.down("md")]: {
    fontSize: "35px",
    lineHeight: "38px",
  },
}));

export const FavSpan = styled("span")(({ theme }) => ({
  background: "linear-gradient(135deg, #6a11cb 0%, #ff00ff 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

export const ParagraphContainer = styled(Box)(({ theme }) => ({
  maxWidth: "518px",
  margin: "12px auto 70px",
  [theme.breakpoints.down("sm")]: {
    padding:'0 8px',
  }
}));

export const FavParagraph = styled(Typography)(({ theme }) => ({
  fontSize: "17px",
}));

export const ButtonsContainer = styled(Box)(({ theme }) => ({
  margin: "70px auto 110px",
  maxWidth: "470px",
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  [theme.breakpoints.down("md")]: {
  margin: "50px auto",
    marginLeft: "0px",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "center",
  },
}));
