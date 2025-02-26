"use client";
import React from "react";
import {
    ButtonsContainer,
  FavContainer,
  FavHeading,
  FavParagraph,
  FavSpan,
  HeadingContainer,
  ParagraphContainer,
} from "./Favorite.style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Box, Card, CardMedia } from "@mui/material";
import { useState } from "react";
import { ActiveButton, NonActiveButton } from "@/component/mui/Buttons";

const Favorite = () => {
  const images = [
    "/swiperimg1.png",
    "/swiperimg2.jfif",
    "/swiperimg3.jfif",
    "/swiperimg1.png",
    "/swiperimg2.jfif",
    "/swiperimg3.jfif",
  ];
  const [activeIndex, setActiveIndex] = useState(2);
  return (
    <FavContainer>
      <HeadingContainer>
        <FavHeading>
          choose your <FavSpan>favorite</FavSpan> games
        </FavHeading>
      </HeadingContainer>
      <ParagraphContainer>
        <FavParagraph>
          Offer sneak peeks and previews of upcoming games, including trailers,
          screenshots, and information about release.
        </FavParagraph>
      </ParagraphContainer>
      <Box sx={{ width: "100%", height:'450px', maxWidth: 1400, mx: "auto", }}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50} 
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={3000} 
          grabCursor={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          style={{ paddingLeft: "50px", paddingRight: "50px" }}
        >
          {images.map((src, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: activeIndex === index ? 658 : 451,
                transition: "width 0.3s ease-in-out",
              }}
            >
              <Card
                sx={{
                  width: "100%",
                  height: activeIndex === index ? 418 : 366,
                  borderRadius: 3,
                  boxShadow: 3,
                  transition: "all 0.3s ease-in-out", // Smooth transition effect
                }}
              >
                <CardMedia
                  component="img"
                  image={src}
                  alt={`Slide ${index + 1}`}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "all 0.8s ease-in-out",
                  }}
                />
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <ButtonsContainer>
        <ActiveButton>View All</ActiveButton>
        <NonActiveButton>Play Now</NonActiveButton>
      </ButtonsContainer>
    </FavContainer>
  );
};

export default Favorite;
