import React from "react";
import {
  ButtonContainer,
  BuyButton,
  ExploreSpan,
  HeadingContainer,
  HeroContainer,
  HeroHeading,
  HeroParagraph,
  MarqueeContainer,
  ParagraphContainer,
  PlayButton,
  ProjectsDetailContainer,
  RightContainer,
} from "./Hero.style";
import { Box, Typography } from "@mui/material";
import MarqueeSwiper from "@/component/common/MarqueeSwiper";
import Image from "next/image";

const Hero = () => {
  return (
    <HeroContainer>
      <div className=" "></div>
      <HeadingContainer>
        <HeroHeading>
          Let your mind <ExploreSpan> explore </ExploreSpan> new world
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
        <BuyButton>Buy Now</BuyButton>
        <PlayButton>Play Now</PlayButton>
      </ButtonContainer>
      <ProjectsDetailContainer>
        <Box>
          <Typography sx={{ fontWeight: 800, fontSize: "30px" }}>
            300+
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "19px" }}>
            Unique style
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: "30px",
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
          <Typography sx={{ fontWeight: 400, fontSize: "19px" }}>
            Project finished
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: "30px",
            }}
          >
            500+
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "19px" }}>
            Happy customer
          </Typography>
        </Box>
      </ProjectsDetailContainer>
      <RightContainer>
        <Image
          src="/herobg.png"
          alt=""
          layout="responsive"
          width={100}
          height={960}
        />
      </RightContainer>
      <MarqueeContainer>
        <MarqueeSwiper speed={20_000} />
      </MarqueeContainer>
    </HeroContainer>
  );
};

export default Hero;
