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
import { Box, Card, CardMedia, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { ActiveButton, NonActiveButton } from "@/component/mui/Buttons";

const Favorite = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const images = [
    "/swiperimg1.png",
    "/swiperimg2.jfif",
    "/swiperimg3.jfif",
    "/swiperimg1.png",
    "/swiperimg2.jfif",
    "/swiperimg3.jfif",
  ];
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
      <Box sx={{ width: "100%", height:{xs:'260px',sm:'450px'}, maxWidth: 1400, mx: "auto", }}>
        <Swiper
          // modules={[Autoplay]}
          spaceBetween={50} 
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={3000} 
          grabCursor={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          style={{ paddingLeft: isMobile ? "10px" : "50px", paddingRight: isMobile ? "10px" : "50px" }}
          
        >
          {images.map((src, index) => (
            
            <SwiperSlide
              key={index}
              style={{
                width: isMobile ? (activeIndex === index ? "95%" : "70%") : (activeIndex === index ? 658 : 451),
                transition: "width 0.3s ease-in-out",
              }}
            >
              <Card
                sx={{
                  width: "100%",
                  height: isMobile ? (activeIndex === index ? "230px" : "188px") : (activeIndex === index ? '418px' : '366px'),
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
        <ActiveButton sx={{width:{xs:'120px',sm:"232px"}}}>View All</ActiveButton>
        <NonActiveButton sx={{width:{xs:'120px',sm:"232px"}}}>Play Now</NonActiveButton>
      </ButtonsContainer>
    </FavContainer>
  );
};

export default Favorite;
