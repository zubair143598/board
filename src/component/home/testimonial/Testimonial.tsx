"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  Box,
  Card,
  CardMedia,
  Rating,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { RatingContainer } from "./Testimonial.style";

const Testimonial = () => {
  const data = [
    {
      description:
        "One of the standout features of this gaming website is its extensive library of game guides and tutorials. It has helped me level up my skills, conquer challenging quests, and discover hidden secrets within games. The guides are comprehensive, easy to follow, and have undoubtedly elevated my gaming performance.",
      userPic: "/user1.png",
      username: "John Doe",
      character: "Warrior",
    },
    {
      description:
        " Another aspect that sets this website apart is its vibrant and passionate community. The forum section provides a platform for gamers from all walks of life to connect, share their experiences, and discuss their favorite titles. I've made valuable friendships and found like-minded individuals who share my enthusiasm for gaming.",
      userPic: "/user2.png",
      username: "Jane Smith",
      character: "Mage",
    },
    {
      description:
        " Another aspect that sets this website apart is its vibrant and passionate community. The forum section provides a platform for gamers from all walks of life to connect, share their experiences, and discuss their favorite titles. I've made valuable friendships and found like-minded individuals who share my enthusiasm for gaming.",
      userPic: "/user3.png",
      username: "Alex Johnson",
      character: "Assassin",
    },
    {
      description:
        " Another aspect that sets this website apart is its vibrant and passionate community. The forum section provides a platform for gamers from all walks of life to connect, share their experiences, and discuss their favorite titles. I've made valuable friendships and found like-minded individuals who share my enthusiasm for gaming.",
      userPic: "/user4.png",
      username: "Emily Davis",
      character: "Commander",
    },
  ];

  const [ratings, setRatings] = useState<number[]>(
    new Array(data.length).fill(2)
  );

  const isMobile = useMediaQuery("(max-width: 900px)");

  return (
    <Box sx={{ marginBottom: "100px", margin: { xs: "10px", sm: "0 20px" } }}>
      <Box
        sx={{
          width: "100%",
          maxWidth: "1214px",
          mx: "auto",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={isMobile ? 1 : 2}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          grabCursor={true}
          style={{ width: "100%", paddingBottom: "100px" }} // Extra space for positioning pagination
        >
          {data.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  width: "607px",
                  boxShadow: 3,
                  padding: { xs: "40px 10px", sm: "58px 47px" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  color: "white",
                  border: "1px solid #FFFFFF33",
                  borderRadius: "10px",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(10px)",
                  backgroundColor: " #552b80",
                }}
              >
                <RatingContainer>
                  <Rating
                    name={`rating-${index}`}
                    value={ratings[index]}
                    onChange={(event, newValue) => {
                      const updatedRatings = [...ratings];
                      updatedRatings[index] = newValue || 0;
                      setRatings(updatedRatings);
                    }}
                  />
                </RatingContainer>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    margin: { xs: "0px", sm: "18px 0 30px" },
                    padding: { xs: "18px 23px", sm: "0px" },
                  }}
                >
                  {item.description}
                </Typography>
                <hr style={{ border: "0.5px solid white", margin: "10px 0" }} />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "16px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      color: "white",
                      margin: "18px 0",
                      gap: { xs: "10px", sm: "20px" },
                    }}
                  >
                    <CardMedia
                      sx={{
                        height: "53px",
                        width: "53px",
                        borderRadius: "50%",
                      }}
                      image={item.userPic}
                      title={item.username}
                    />
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: { xs: "14px", sm: "18px" },
                        }}
                      >
                        {item.username}
                      </Typography>
                      <Typography sx={{ fontWeight: 500, fontSize: "10px" }}>
                        {item.character}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src="/verified.png"
                      alt="verified"
                      width={24}
                      height={24}
                    />
                    <span style={{ fontSize: "14px" }}>verified</span>
                  </Box>
                </Box>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="custom-pagination"></div>

        <style jsx global>{`
          .custom-pagination {
            position: absolute;
            bottom: 0px; /* Move pagination 70px UP */
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 8px;
            z-index: 100;
          }
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background-color: white !important; /* Default dots in white */
            opacity: 1;
            transition: all 0.3s ease-in-out;
          }
          .swiper-pagination-bullet-active {
            background-color: red !important; /* Active dot in red */
            transform: scale(1.3); /* Slightly enlarge active dot */
          }
        `}</style>
      </Box>
    </Box>
  );
};

export default Testimonial;
