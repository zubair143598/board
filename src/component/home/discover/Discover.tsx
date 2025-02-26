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
import Image from "next/image";
import { NonActiveButton } from "@/component/mui/Buttons";
import MarqueeSwiper from "@/component/common/MarqueeSwiper";

const Discover = () => {
  return (
    <DiscoverContainer>
      <DiscoverInnerCon>
        <LeftContainer>
          <Image src="/DiscoverImage.png" alt="" width={725} height={639} />
        </LeftContainer>
        <RightContainer>
          <DisHeading>
            Discover the <DisSpan>Virtual</DisSpan> Reality Gaming
          </DisHeading>
          <Para>
            A well-designed gaming header often incorporates elements such as
            game characters, iconic symbols, vibrant colors, and dynamic visuals
            to convey excitement, adventure, and the immersive nature of gaming.
          </Para>
          <NonActiveButton sx={{marginTop:'35px'}}>Play Now</NonActiveButton>
        </RightContainer>
      </DiscoverInnerCon>
      <MarqueeContainer>
      <MarqueeSwiper/>
      </MarqueeContainer>
    </DiscoverContainer>
  );
};

export default Discover;
