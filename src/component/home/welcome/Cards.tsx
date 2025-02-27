import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { ActiveButton } from "@/component/mui/Buttons";

const cardData = [
  {
    image: "/card1.png",
    alt: "card1",
    title: "Core Philosophies",
    profilePic: "user1.png",
    username: "Cameron Williamson",
    character: "Gillette",
  },
  {
    image: "/card2.png",
    alt: "card2",
    title: "Leadership Values",
    profilePic: "user2.png",
    username: "John Doe",
    character: "Manager",
  },
  {
    image: "/card3.png",
    alt: "card3",
    title: "Business Strategies",
    profilePic: "user3.png",
    username: "Jane Smith",
    character: "Entrepreneur",
  },
  {
    image: "/card4.png",
    alt: "card4",
    title: "Market Trends",
    profilePic: "user4.png",
    username: "Michael Brown",
    character: "Analyst",
  },
  {
    image: "/card5.png",
    alt: "card5",
    title: "Financial Planning",
    profilePic: "user5.png",
    username: "Sarah Wilson",
    character: "Investor",
  },
  {
    image: "/card6.png",
    alt: "card6",
    title: "Innovative Thinking",
    profilePic: "user6.png",
    username: "David Johnson",
    character: "Creative Director",
  },
];

const Cards = () => {
  return (
    <Box sx={{ maxWidth: "1270px", margin: "0 auto", padding: "20px" }}>
      <Grid container spacing={3}>
        {cardData.map((data, index) => (
          <Grid item key={index} xs={12} md={6} lg={4} sx={{ display:'flex', justifyContent:'center'}}>
            <Card
              sx={{
                width: {xs:'330px',sm:"397px"},
                background: "transparent",
                border: "1px solid #FFFFFF33",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(10px)",
                backgroundColor: "#552b80",
              }}
            >
              <CardMedia
                sx={{
                  height: {xs:"220px",sm:"265px"},
                  width: {xs:"300px",sm:"361px"},
                  margin: "20px 18px 30px",
                }}
                image={data.image}
                title={data.alt || "Card Image"}
              />
              <CardContent>
                <Typography sx={{ color: "white", fontWeight: 500, fontSize: "24px" }}>
                  {data.title}
                </Typography>
                <Box sx={{ display: "flex", gap: "20px", color: "white", margin: "18px 0" }}>
                  <Box>
                    <CardMedia
                      sx={{ height: "53px", width: "53px", borderRadius: "50%" }}
                      image={data.profilePic}
                      title={data.alt || "Profile Picture"}
                    />
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>{data.username}</Typography>
                    <Typography sx={{ fontWeight: 500, fontSize: "10px" }}>{data.character}</Typography>
                  </Box>
                </Box>
              </CardContent>
              <CardActions sx={{ margin: "0 18px 56px" }}>
                <ActiveButton sx={{ color: "white", width: "100%", height: "52px" }}>Live Demo</ActiveButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Cards;
