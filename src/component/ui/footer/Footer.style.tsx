"use client";

import { Box, styled } from "@mui/material";

export const FooterContainer = styled(Box)(() => ({
  maxWidth: "1440px",
  margin: "0 auto",
  position: "relative",
  backgroundImage: 'url("/footerbg.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}));

export const MarqueeContainer = styled(Box)(() => ({
  maxWidth: "1440px",
  position: "absolute",
  backgroundColor: "rgba(61, 45, 116, 0.4)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(10px)",
  color: "white",
  width: "100%",
  whiteSpace: "nowrap",
  textAlign: "center",
  zIndex: 10,
  top: "-80px",
  display: "flex",
  justifyContent: "center",
  padding: "20px 0",
}));

export const FooterInnerCon = styled(Box)(() => ({
  display: "flex",
  gap: "80px",
  padding: "100px 0 0px 120px",

}));

export const LogoContainer = styled(Box)(() => ({
  width: "315px",
}));

export const LinksContainer = styled(Box)(() => ({
    width: "125px",
    display:'flex',
    flexDirection:'column',
    gap:'18px'
}))

export const BrandsContainer = styled(Box)(()=>({
  padding: "0px 0 0px 120px",
    display:'flex',
    gap:'40px'
}))

export const SocialContainer = styled(Box)(()=>({
    display:'flex',
  padding: "60px 0 50px 120px",
    gap:'12px'
}))