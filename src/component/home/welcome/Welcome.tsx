import React, { useState } from "react";
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
  const [activeButton, setActiveButton] = useState("Mewest games");
  return (
    <WelcomeContainer>
      <HeadingContainer>
        <Heading>
          Welcome to the <br />
          top <span>games</span>
        </Heading>
      </HeadingContainer>
      <ButtonsContainer>
        {["Mewest games", "Latest games", "Fight games", "Sport games"].map(
          (game) => {
            const isActive = activeButton === game;
            const ButtonComponent = isActive ? ActiveButton : NonActiveButton;

            return (
              <ButtonComponent
                key={game}
                onClick={() => setActiveButton(game)}
                sx={{
                  height: { xs: "42px", md: "64px" },
                  width: { xs: "160px", md: "241px" },
                  fontSize: { xs: "12px", md: "18px" },
                }}
              >
                {game}
              </ButtonComponent>
            );
          }
        )}
      </ButtonsContainer>
      <Cards />
      <MarqueeContainer>
        <MarqueeSwiper />
      </MarqueeContainer>
    </WelcomeContainer>
  );
};

export default Welcome;
