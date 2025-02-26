import React from "react";
import {
  ButtonsContainer,
  Heading,
  HeadingContainer,
  MarqueeContainer,
  WelcomeContainer,
} from "./welcome.style";
import { ActiveButton, NonActiveButton } from "@/component/mui/Buttons";
import Cards from "./Cards";
import MarqueeSwiper from "@/component/common/MarqueeSwiper";

const Welcome = () => {
  return (
    <WelcomeContainer>
      <HeadingContainer>
        <Heading>
          Welcome to the <br />
          top <span>games</span>
        </Heading>
      </HeadingContainer>
      <ButtonsContainer>
        <ActiveButton sx={{hight:'64px', width:'241px', fontSize:'18px'}}>Mewest games</ActiveButton>
        <NonActiveButton sx={{hight:'64px', width:'221px',fontSize:'18px'}}>latest games</NonActiveButton>
        <NonActiveButton sx={{hight:'64px', width:'221px',fontSize:'18px'}}>Fight games</NonActiveButton>
        <NonActiveButton sx={{hight:'64px', width:'211px',fontSize:'18px'}}>sport games</NonActiveButton>
      </ButtonsContainer>
      <Cards/>
      <MarqueeContainer>
        <MarqueeSwiper/>
      </MarqueeContainer>
    </WelcomeContainer>
  );
};

export default Welcome;
