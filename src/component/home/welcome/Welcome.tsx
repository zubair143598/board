import React, { useState } from "react";
import {
  ButtonsContainer,
  Heading,
  HeadingContainer,
  MarqueeContainer,
  WelcomeContainer,
} from "./welcome.style";
import { ActiveButton, NonActiveButton } from "@/component/mui/Buttons";
import MarqueeSwiper from "@/component/common/MarqueeSwiper";
import { Box, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { NewestGames, LatestGames, fightGames, sportGames } from "./Data";

const gamesData: { [key: string]: any[] } = {
  "Newest games": NewestGames,
  "Latest games": LatestGames,
  "Fight games": fightGames,
  "Sport games": sportGames,
};

const Welcome = () => {
  const [activeButton, setActiveButton] = useState("Newest games");

  return (
    <>
    <WelcomeContainer>
      <HeadingContainer>
        <Heading>
          Welcome to the <br />
          top <span>games</span>
        </Heading>
      </HeadingContainer>
      <ButtonsContainer>
        {Object.keys(gamesData).map((game) => {
          const isActive = activeButton === game;
          const ButtonComponent = isActive ? ActiveButton : NonActiveButton;

          return (
            <ButtonComponent
              key={game}
              onClick={() => setActiveButton(game)}
              sx={{
                width: { xs: "120px", sm: "232px" },
                height: { xs: "42px", md: "64px" },
                fontSize: { xs: "12px", md: "18px" },
              }}
            >
              {game}
            </ButtonComponent>
          );
        })}
      </ButtonsContainer>
      <Box sx={{ maxWidth: "1270px", margin: "0 auto", padding: { xs: "16px", sm: "20px" } }}>
        <Grid container spacing={3}>
          {gamesData[activeButton].map((data, index) => (
            <Grid item key={index} xs={12} md={6} lg={4} sx={{ display: "flex", justifyContent: "center" }}>
              <Card
                sx={{
                  width: { xs: "100%", sm: "397px" },
                  background: "transparent",
                  border: "1px solid #FFFFFF33",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(10px)",
                  backgroundColor: "#552b80",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <CardMedia
                    sx={{
                      height: { xs: "220px", sm: "265px" },
                      width: { xs: "90%", sm: "361px" },
                      marginTop: "20px",
                    }}
                    image={data.image}
                    title={data.alt || "Card Image"}
                  />
                </Box>
                <CardContent>
                  <Typography sx={{ color: "white", fontWeight: 500, fontSize: { xs: "18px", sm: "24px" } }}>
                    {data.title}
                  </Typography>
                  <Box sx={{ display: "flex", gap: { xs: "10px", sm: "20px" }, color: "white", margin: "18px 0" }}>
                    <Box>
                      <CardMedia
                        sx={{ height: "53px", width: "53px", borderRadius: "50%" }}
                        image={data.profilePic}
                        title={data.alt || "Profile Picture"}
                      />
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 500, fontSize: { xs: "14px", sm: "18px" } }}>{data.username}</Typography>
                      <Typography sx={{ fontWeight: 500, fontSize: "10px" }}>{data.character}</Typography>
                    </Box>
                  </Box>
                </CardContent>
                <CardActions sx={{ margin: "0 18px 56px" }}>
                  <ActiveButton sx={{ color: "white", width: { xs: "100%" }, height: "52px" }}>Live Demo</ActiveButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </WelcomeContainer>
      <MarqueeContainer>
        <MarqueeSwiper />
      </MarqueeContainer>
      </>
  );
};

export default Welcome;
