"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Box } from "@mui/material";

import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";

const MarqueeSwiper = ({ speed = 30000 }) => {

  return (
   
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={50}
        loop={true}
        speed={speed}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        style={{
          padding: "10px auto",
          display: "flex",
          alignItems: "center",
        }}
      >
        <SwiperSlide
          style={{
            width: "auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              whiteSpace: "nowrap",
              fontSize: {
                xs: "17px",
                sm: "30px",
              },
              display: "flex",
              alignItems: "center",
              gap: "50px",
            }}
          >
            <Box
              sx={{
                whiteSpace: "nowrap",
                fontWeight: 800,
                fontSize: {
                  xs: "17px",
                  sm: "30px",
                },
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box sx={{width: {xs:'20px', sm:'36px'},height:{xs:'20px', sm:'36px'}}}>

              <Image src="/star.png" alt="star" width={3} height={3} layout="responsive" />
              </Box>
              MIND - BENDING
            </Box>

            <Box
              sx={{
                whiteSpace: "nowrap",
                fontWeight: 800,
                fontSize: {
                  xs: "17px",
                  sm: "30px",
                },
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box sx={{width: {xs:'20px', sm:'36px'},height:{xs:'20px', sm:'36px'}}}>

<Image src="/star.png" alt="star" width={3} height={3} layout="responsive" />
</Box>
              ACTION - PACKED
            </Box>

            <Box
              sx={{
                whiteSpace: "nowrap",
                fontWeight: 800,
                fontSize: {
                  xs: "17px",
                  sm: "30px",
                },
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
               <Box sx={{width: {xs:'20px', sm:'36px'},height:{xs:'20px', sm:'36px'}}}>

<Image src="/star.png" alt="star" width={3} height={3} layout="responsive" />
</Box>
              GAMING SPANING
            </Box>
          </Box>
          <Box
            sx={{
              width: {
                xs: "20px",
                sm: "30px",
                md: "50px",
                lg: "70px",
              },
            }}
          ></Box>
        </SwiperSlide>

        {/* Repeat texts for smooth infinite loop */}

        <SwiperSlide
          style={{
            width: "auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              whiteSpace: "nowrap",
              fontSize: {
                xs: "17px",
                sm: "30px",
              },
              display: "flex",
              alignItems: "center",
              gap: "50px",
            }}
          >
            <Box
              sx={{
                whiteSpace: "nowrap",
                fontWeight: 800,
                fontSize: {
                  xs: "17px",
                  sm: "30px",
                },
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
               <Box sx={{width: {xs:'20px', sm:'36px'},height:{xs:'20px', sm:'36px'}}}>

<Image src="/star.png" alt="star" width={3} height={3} layout="responsive" />
</Box>
              MIND - BENDING
            </Box>

            <Box
              sx={{
                whiteSpace: "nowrap",
                fontWeight: 800,
                fontSize: {
                  xs: "17px",
                  sm: "30px",
                },
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
               <Box sx={{width: {xs:'20px', sm:'36px'},height:{xs:'20px', sm:'36px'}}}>

<Image src="/star.png" alt="star" width={3} height={3} layout="responsive" />
</Box>
              ACTION - PACKED
            </Box>

            <Box
              sx={{
                whiteSpace: "nowrap",
                fontWeight: 800,
                fontSize: {
                  xs: "17px",
                  sm: "30px",
                },
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
               <Box sx={{width: {xs:'20px', sm:'36px'},height:{xs:'20px', sm:'36px'}}}>

<Image src="/star.png" alt="star" width={3} height={3} layout="responsive" />
</Box>
              GAMING SPANING
            </Box>
          </Box>
          <Box
            sx={{
              width: {
                xs: "20px",
                sm: "30px",
                md: "50px",
                lg: "70px",
              },
            }}
          ></Box>
        </SwiperSlide>
      </Swiper>
  );
};

export default MarqueeSwiper;
