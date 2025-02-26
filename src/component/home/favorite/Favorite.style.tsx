'use client'
import { Box, styled, Typography } from "@mui/material";

export const FavContainer = styled(Box)(({ theme }) => ({
    maxWidth: "1440px",
    margin: "100px auto",
    color:'white',
    position:'relative',
    textAlign:'center'
  }));

  export const HeadingContainer = styled(Box)(({ theme }) => ({
    maxWidth: "578px",
    margin:'0 auto'
  }));

  export const FavHeading = styled(Typography)(()=>({
    fontSize: "66px",
    fontWeight: 800,
    textTransform: "uppercase",
    margin:'0px',
    lineHeight:'77px'
  }))

  export const FavSpan = styled("span")(({ theme }) => ({
    background: "linear-gradient(135deg, #6a11cb 0%, #ff00ff 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }));

  export const ParagraphContainer = styled(Box)(({ theme }) => ({
    maxWidth: "518px",
    margin:'12px auto 70px',
  }));
  
  export const FavParagraph = styled(Typography)(({ theme }) => ({
    fontSize: "17px",
  }));

  export const ButtonsContainer = styled(Box)(()=>({
    margin:'70px auto 110px',
    maxWidth:'470px',
    display:'flex',
    gap:'20px'
  }))