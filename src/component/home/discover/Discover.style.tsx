"use client"

import { Box, styled, Typography } from "@mui/material"

export const DiscoverContainer= styled(Box)(({theme})=>({
    maxWidth:'1440px',
    margin:'40px auto 0',
    position:'relative',
    marginBottom:"84px"
}))

export const DiscoverInnerCon=styled(Box)(()=>({
    margin:'0 auto',
    maxWidth:'1240px',
    display:"flex",
    width:"100%",
    justifyContent:'end',
    border:"1px solid #FFFFFF33",
    padding: "65px 0",
    borderRadius:'10px',
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(10px)",
    backgroundColor:' #552b80'
}))

export const LeftContainer = styled(Box)(()=>({
position:'absolute',
left:"0rem",
top:'-121px'
}))

export const RightContainer = styled(Box)(()=>({
maxWidth:'532px'
}))

  export const DisHeading = styled(Typography)(()=>({
    maxWidth: "531px",
    fontSize: "48px",
    fontWeight: 800,
    textTransform: "uppercase",
    margin:'0px',
    lineHeight:'55px',
    
  }))

  export const DisSpan = styled("span")(({ theme }) => ({
    background: "linear-gradient(135deg, #6a11cb 0%, #ff00ff 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }));

  export const Para = styled(Typography)(()=>({
    maxWidth:'463px',
    marginTop: "12px",
    fontSize: "16px",
  }))

  export const MarqueeContainer = styled(Box)(()=>({
    margin:'86px 0',
  }))