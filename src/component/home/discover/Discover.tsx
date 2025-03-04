import React from "react";
import {
  DiscoverContainer,
  DiscoverInnerCon,
  DisHeading,
  DisSpan,
  LeftContainer,
  MarqueeContainer,
  Para,
  RightContainer,
} from "./Discover.style";
import { NonActiveButton } from "@/component/mui/Buttons";
import MarqueeSwiper from "@/component/common/MarqueeSwiper";
import { useMediaQuery } from "@mui/material";

const Discover = () => {
  const isMobile = useMediaQuery("(max-width: 900px)");
  return (
    <>
      <DiscoverContainer>
        <DiscoverInnerCon>
          <LeftContainer>
            <img
              src={isMobile ? "/DiscoverImage2.png" : "/DiscoverImage.png"}
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          </LeftContainer>
          <RightContainer>
            <DisHeading>
              Discover the <br />
              <DisSpan>Virtual</DisSpan> Reality Gaming
            </DisHeading>
            <Para>
              A well-designed gaming header often incorporates elements such as
              game characters, iconic symbols, vibrant colors, and dynamic
              visuals to convey excitement, adventure, and the immersive nature
              of gaming.
            </Para>
            <NonActiveButton sx={{ margin: "35px 20px 0" }}>
              Play Now
            </NonActiveButton>
          </RightContainer>
        </DiscoverInnerCon>
      </DiscoverContainer>
      <MarqueeContainer>
        <MarqueeSwiper />
      </MarqueeContainer>
    </>
  );
};

export default Discover;
