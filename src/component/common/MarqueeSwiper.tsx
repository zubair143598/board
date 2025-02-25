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
    <div
      style={{
        maxWidth: "1440px",

        position: "absolute",
        backgroundColor: "rgba(61, 45, 116, 0.4)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(10px)",
        color: "white",
        width: "100%",
        whiteSpace: "nowrap",
        textAlign: "center",
        zIndex: 10,
        bottom: "16px",
        display: "flex",
        justifyContent: "center",
      }}
    >
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
                xs: "20px",
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
                  xs: "20px",
                  sm: "30px",
                },
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Image src="/star.png" alt="star" width={36} height={36} />
              MIND - BENDING
            </Box>

            <Box
              sx={{
                whiteSpace: "nowrap",
                fontWeight: 800,
                fontSize: {
                  xs: "20px",
                  sm: "30px",
                },
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Image src="/star.png" alt="star" width={36} height={36} />
              ACTION - PACKED
            </Box>

            <Box
              sx={{
                whiteSpace: "nowrap",
                fontWeight: 800,
                fontSize: {
                  xs: "20px",
                  sm: "30px",
                },
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Image src="/star.png" alt="star" width={36} height={36} />
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
                xs: "20px",
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
                  xs: "20px",
                  sm: "30px",
                },
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Image src="/star.png" alt="star" width={36} height={36} />
              MIND - BENDING
            </Box>

            <Box
              sx={{
                whiteSpace: "nowrap",
                fontWeight: 800,
                fontSize: {
                  xs: "20px",
                  sm: "30px",
                },
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Image src="/star.png" alt="star" width={36} height={36} />
              ACTION - PACKED
            </Box>

            <Box
              sx={{
                whiteSpace: "nowrap",
                fontWeight: 800,
                fontSize: {
                  xs: "20px",
                  sm: "30px",
                },
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Image src="/star.png" alt="star" width={36} height={36} />
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
    </div>
  );
};

export default MarqueeSwiper;
