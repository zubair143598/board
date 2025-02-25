'use client'
import { Button, styled } from "@mui/material";

export const ActiveButton = styled(Button)(({ theme }) => ({
    background: "linear-gradient(135deg, #5d31d4 0%, #ff00ff 50%, #ff0080 100%)",
    color: "white",
    height:'75px',
    width:'180px',
    fontSize: "20px",
    fontWeight: 800,
    textTransform: "uppercase",
    borderRadius: "0px",
    transform: "skewX(-15deg)", // Skew effect to match the image
    transition: "all 0.3s ease-in-out",
    border: "none",
    "&:hover": {
      background:
        "linear-gradient(135deg,rgb(97, 77, 144) 0%,rgb(93, 40, 93) 50%,rgb(179, 46, 110) 100%)",
      transform: "skewX(-15deg)", 
    },
  }));
  
  export const NonActiveButton = styled(Button)(({ theme }) => ({
      position: "relative",
      padding: "20px 50px",
      fontSize: "20px",
      fontWeight: 800,
      textTransform: "uppercase",
      background: "transparent",
      transform: "skewX(-15deg)",
      transition: "all 0.3s ease-in-out",
      border: "2px solid transparent",
      "&::before": {
        content: '""',
        position: "absolute",
        inset: 0,
        padding: "2px",
        borderRadius: "5px",
        background: "linear-gradient(135deg, #5d31d4, #ff00ff, #ff0080)",
        "-webkit-mask": "linear-gradient(white, white) content-box, linear-gradient(white, white)",
        mask: "linear-gradient(white, white) content-box, linear-gradient(white, white)",
        "-webkit-mask-composite": "destination-out",
        maskComposite: "exclude",
      },
      "& span": {
        background: "linear-gradient(135deg, #5d31d4, #ff00ff, #ff0080)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
      },
      "&:hover": {
        transform: "skewX(-15deg)",
      },
    }));