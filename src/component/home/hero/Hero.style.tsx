"use client";
import { Height } from "@mui/icons-material";
import { Box, styled, Typography, Button } from "@mui/material";

export const HeroContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1440px",
  margin: "100px auto",
  color: "white",
  position: "relative",
  paddingBottom: "100px",
  [theme.breakpoints.down("sm")]: {
    margin: "50px auto",
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
  paddingBottom: "20px",

  },
}));

export const HeadingContainer = styled(Box)(({ theme }) => ({
  maxWidth: "578px",
  marginLeft: "103px",
  [theme.breakpoints.down("md")]: {
    marginLeft: "26px",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "334px",
    marginLeft: "0px",
    display: "flex",
    justifyContent: "center",
  },
}));

export const HeroHeading = styled(Typography)(({ theme }) => ({
  fontSize: "68px",
  fontWeight: 800,
  textTransform: "uppercase",
  margin: "0px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "40px",
  },
}));

export const ExploreSpan = styled("span")(({ theme }) => ({
  background: "linear-gradient(135deg, #6a11cb 0%, #ff00ff 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

export const ParagraphContainer = styled(Box)(({ theme }) => ({
  maxWidth: "602px",
  marginLeft: "103px",
  marginTop: "14px",
  
  [theme.breakpoints.down("sm")]: {
    marginLeft: "0px",
    maxWidth: "329px",
    height:'550px'
  },
}));

export const HeroParagraph = styled(Typography)(({ theme }) => ({
  fontSize: "19px",
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  marginLeft: "103px",
  marginTop: "30px",
  gap: "20px",
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    marginLeft: "26px",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: "10px",
  },
}));

export const ProjectsDetailContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: "65px",
  marginLeft: "103px",
  gap: "30px",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    marginLeft: "26px",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: "10px",
  },
}));

export const MarqueeContainer = styled(Box)(({theme}) => ({
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
  bottom: "-12px",
  display: "flex",
  justifyContent: "center",
  padding: "10px 0",
  transform: "rotate(-1deg)",
  transformOrigin: "center",
  [theme.breakpoints.down("sm")]: {
    bottom: "16rem",
    padding: "13px 0",
  }
}));

export const RightContainer = styled(Box)(({theme}) => ({
  position: "absolute",
  left: "0",
  width: "100%",
  bottom: "0px",
  zIndex: "-1",
  top: "-11rem",
  height: "130%",
  [theme.breakpoints.down("sm")]: {
    zIndex: "-1",
    height:'46%',
    top: "15rem",
  },
}));
