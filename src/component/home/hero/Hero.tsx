import React, { useState } from "react";
import {
  ButtonContainer,
  ExploreSpan,
  HeadingContainer,
  HeroContainer,
  HeroHeading,
  HeroParagraph,
  MarqueeContainer,
  ParagraphContainer,
  ProjectsDetailContainer,
  RightContainer,
} from "./Hero.style";
import { Box, Typography, useMediaQuery } from "@mui/material";
import MarqueeSwiper from "@/component/common/MarqueeSwiper";
import { ActiveButton, NonActiveButton } from "@/component/mui/Buttons";

const Hero = () => {
  const [activeBuyButton, setActiveBuyButton] = useState("Buy Now");
  const isMobile = useMediaQuery("(max-width: 900px)");
  return (
    <HeroContainer>
      <HeadingContainer>
        <HeroHeading variant="h1">
          Let your <br />
          mind<ExploreSpan> explore </ExploreSpan> new world
        </HeroHeading>
      </HeadingContainer>
      <ParagraphContainer>
        <HeroParagraph>
          Playing electronic games, whether through consoles, computers, mobile
          phones or another medium altogether. Gaming is a nuanced term that
          suggests regular gameplay, possibly as a hobby.
        </HeroParagraph>
      </ParagraphContainer>
      <ButtonContainer>
        {["Buy Now", "Play Now"].map((label) => {
          const isActive = activeBuyButton === label;
          const ButtonComponent = isActive ? ActiveButton : NonActiveButton;

          return (
            <ButtonComponent
              key={label}
              onClick={() => setActiveBuyButton(label)}
              sx={{ height: "74px", width: {xs:'120px',sm:"232px"} }}
            >
              {label}
            </ButtonComponent>
          );
        })}
      </ButtonContainer>
      <ProjectsDetailContainer>
        <Box>
          <Typography
            sx={{ fontWeight: 800, fontSize: { xs: "22px", sm: "30px" } }}
          >
            300+
          </Typography>
          <Typography
            sx={{ fontWeight: 400, fontSize: { xs: "14px", sm: "19px" } }}
          >
            Unique style
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: { xs: "22px", sm: "30px" },
              background:
                "linear-gradient(135deg, #5d31d4 0%, #ff00ff 50%, #ff0080 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            200+
          </Typography>
          <Typography
            sx={{ fontWeight: 400, fontSize: { xs: "14px", sm: "19px" } }}
          >
            Project finished
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: { xs: "22px", sm: "30px" },
            }}
          >
            500+
          </Typography>
          <Typography
            sx={{ fontWeight: 400, fontSize: { xs: "14px", sm: "19px" } }}
          >
            Happy customer
          </Typography>
        </Box>
      </ProjectsDetailContainer>
      <RightContainer>
        <img
          src={isMobile ? "/herobg2.png" : "/herobg.png"}
          alt=""
          style={{ height: "100%", width: "100%" }}
        />
      </RightContainer>
      <MarqueeContainer>
        <MarqueeSwiper speed={20_000} />
      </MarqueeContainer>
    </HeroContainer>
  );
};

export default Hero;
