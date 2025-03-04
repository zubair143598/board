"use client";

import { Box, styled } from "@mui/material";

export const FooterContainer = styled(Box)(() => ({
  margin: "80px auto 0",
  position: "relative",
  backgroundImage: 'url("/footerbg.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}));

export const MarqueeContainer = styled(Box)(() => ({
  position: "absolute",
  backgroundColor: "rgba(61, 45, 116, 0.4)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(10px)",
  color: "white",
  width: "100%",
  whiteSpace: "nowrap",
  textAlign: "center",
  zIndex: 10,
  top: "-64px",
  display: "flex",
  justifyContent: "center",
  padding: "20px 0",
}));

export const FooterInnerCon = styled(Box)(({ theme }) => ({
  display: "grid",
  flexDirection: "row",
  gap: "80px",
  gridTemplateColumns: "repeat(3, 1fr)",
  
  padding: "100px 0 0px 120px",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns:"repeat(2,1fr)",
    gap: "20px",
    marginBottom:'10px'
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns:"repeat(1,1fr)",
    padding: "100px 20px 0px 24px",
    gap: "20px",
  },
}));

export const LogoContainer = styled(Box)(() => ({
  maxWidth: "315px",
}));

export const LinksContainer = styled(Box)(() => ({
  width: "125px",
  display: "flex",
  flexDirection: "column",
  gap: "18px",
}));

export const BrandsContainer = styled(Box)(({ theme }) => ({
  maxWidth:'60%',
  padding: "0px 0 0px 120px",
  display: "grid",
  flexDirection: "row",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "40px",
  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "20px 20px 0px 20px",
    flexDirection: "column",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
  },
}));

export const SocialContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "40px 0 50px 120px",
  gap: "12px",
  [theme.breakpoints.down("sm")]: {
    padding: "30px 0px",
  },
}));
