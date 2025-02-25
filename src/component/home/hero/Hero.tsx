import React from "react";
import {
  ButtonContainer,
  BuyButton,
  ExploreSpan,
  HeadingContainer,
  HeroContainer,
  HeroHeading,
  HeroParagraph,
  ParagraphContainer,
  PlayButton,
  ProjectDetail,
  ProjectsDetailContainer,
} from "./Hero.style";
import { Typography } from "@mui/material";
import MarqueeSwiper from "@/component/common/MarqueeSwiper";

const Hero = () => {
  return (
    <HeroContainer>
        <div className="absolute inset-0 bg-blue-500 opacity-50"></div>
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
        <ProjectDetail>
          <Typography sx={{ fontWeight: 800, fontSize: "30px" }}>
            300+
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "19px" }}>
            Unique style
          </Typography>
        </ProjectDetail>
        <ProjectDetail>
          <Typography sx={{ fontWeight: 800, fontSize: "30px" , background:
                "linear-gradient(135deg, #5d31d4 0%, #ff00ff 50%, #ff0080 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",}}>
            200+
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "19px" }}>
            Project finished
          </Typography>
        </ProjectDetail>
        <ProjectDetail>
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
        </ProjectDetail>
      </ProjectsDetailContainer>
      <MarqueeSwiper  speed={20_000} />
    </HeroContainer>
  );
};

export default Hero;
