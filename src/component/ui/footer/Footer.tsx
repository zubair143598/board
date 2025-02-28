import React from "react";
import {
  LinksContainer,
  FooterContainer,
  FooterInnerCon,
  LogoContainer,
  MarqueeContainer,
  BrandsContainer,
  SocialContainer,
} from "./Footer.style";
import MarqueeSwiper from "@/component/common/MarqueeSwiper";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";

const Footer = () => {
  return (
    <FooterContainer>
      <MarqueeContainer>
        <MarqueeSwiper />
      </MarqueeContainer>
      <FooterInnerCon>
        <LogoContainer>
          <Box>
            <Image src="/logo.png" alt="logo" height={45} width={195} />
          </Box>
          <Typography
            sx={{ margin: "30px 0", fontSize: "17px", lineHeight: "30px" }}
          >
            A well-designed gaming header often incorporates elements such as
            game characters, iconic symbols, vibrant colors, and dynamic visuals
            .
          </Typography>
        </LogoContainer>
        <Box sx={{ display: "flex", gap: "80px" }}>
          <LinksContainer>
            <Typography sx={{ fontWeight: 800, fontSize: "18px" }}>
              Company
            </Typography>
            <List>
              <ListItem disablePadding sx={{ marginBottom: "16px" }}>
                <ListItemText
                  primaryTypographyProps={{ fontSize: "18px" }}
                  primary="Product"
                  sx={{ fontSize: "18px" }}
                />
              </ListItem>
              <ListItem disablePadding sx={{ marginBottom: "16px" }}>
                <ListItemText
                  primaryTypographyProps={{ fontSize: "18px" }}
                  primary="Apps & Games"
                  sx={{ fontSize: "18px" }}
                />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText
                  primaryTypographyProps={{ fontSize: "18px" }}
                  primary="Features"
                  sx={{ fontSize: "18px" }}
                />
              </ListItem>
            </List>
          </LinksContainer>
          <LinksContainer sx={{ width: "95px" }}>
            <Typography sx={{ fontWeight: 800, fontSize: "18px" }}>
              help
            </Typography>
            <List>
              <ListItem disablePadding sx={{ marginBottom: "16px" }}>
                <ListItemText
                  primaryTypographyProps={{ fontSize: "18px" }}
                  primary="support"
                  sx={{ fontSize: "18px" }}
                />
              </ListItem>
              <ListItem disablePadding sx={{ marginBottom: "16px" }}>
                <ListItemText
                  primaryTypographyProps={{ fontSize: "18px" }}
                  primary="about"
                  sx={{ fontSize: "18px" }}
                />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText
                  primaryTypographyProps={{ fontSize: "18px" }}
                  primary="contact us"
                  sx={{ fontSize: "18px" }}
                />
              </ListItem>
            </List>
          </LinksContainer>
        </Box>
        <LinksContainer sx={{ maxWidth: "167px" }}>
          <Typography sx={{ fontWeight: 800, fontSize: "18px" }}>
            resources
          </Typography>
          <List>
            <ListItem disablePadding sx={{ marginBottom: "16px" }}>
              <ListItemText
                primaryTypographyProps={{ fontSize: "18px" }}
                primary="youtube playlist"
                sx={{ fontSize: "18px" }}
              />
            </ListItem>
            <ListItem disablePadding sx={{ marginBottom: "16px" }}>
              <ListItemText
                primaryTypographyProps={{ fontSize: "18px" }}
                primary="how to - blog"
                sx={{ fontSize: "18px" }}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primaryTypographyProps={{ fontSize: "18px" }}
                primary="terms & conditions"
                sx={{ fontSize: "18px" }}
              />
            </ListItem>
          </List>
        </LinksContainer>
      </FooterInnerCon>
      <BrandsContainer>
        <Box sx={{width:{xs:'84px', sm:'99px'}, height:{xs:'28px', sm:'32px'}}}>
          <Image src="/twitch.png" alt="twitch" height={32} width={99} layout="responsive"/>
        </Box>
        <Box sx={{width:{xs:'140px', sm:'167px'}, height:{xs:'24px', sm:'29px'}}}>
          <Image src="/roblox.png" alt="roblox" height={29} width={167} layout="responsive" />
        </Box>
        <Box sx={{width:{xs:'118px', sm:'147px'}, height:{xs:'24px', sm:'29px'}}}>
          <Image src="/asus.png" alt="asus" height={29} width={147} layout="responsive"/>
        </Box>
        <Box sx={{width:{xs:'118px', sm:'147px'}, height:{xs:'25px', sm:'31px'}}}>
          <Image src="/canon.png" alt="canon" height={31} width={147} layout="responsive"/>
        </Box>
        <Box sx={{width:{xs:'133px', sm:'147px'}, height:{xs:'22px', sm:'24px'}}}>
          <Image src="/microsoft.png" alt="microsoft" height={24} width={147} layout="responsive"/>
        </Box>
        <Box sx={{display:{sm:"none", xs:'flex'}, gap:'10px',}}>
          
          <Image src="/twitter.png" alt="logo" height={28} width={28} />
          <Image src="/facebook.png" alt="logo" height={28} width={28} />
          <Image src="/insta.png" alt="logo" height={28} width={28} />
          <Image src="/github.png" alt="logo" height={28} width={28} />
        </Box>
      </BrandsContainer>
      <SocialContainer>
      <Box sx={{display:{xs:"none", sm:'flex'}, gap:'10px',}}>
        <Image src="/twitter.png" alt="logo" height={28} width={28} />
        <Image src="/facebook.png" alt="logo" height={28} width={28} />
        <Image src="/insta.png" alt="logo" height={28} width={28} />
        <Image src="/github.png" alt="logo" height={28} width={28} />
        </Box>
        <Typography sx={{ paddingLeft: {xs:'20px',sm:"30px"} }}>
          © Copyright 2023, All Rights Reserved by board
        </Typography>
      </SocialContainer>
    </FooterContainer>
  );
};

export default Footer;
