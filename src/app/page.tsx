"use client";
import Discover from "@/component/home/discover/Discover";
import Favorite from "@/component/home/favorite/Favorite";
import Hero from "@/component/home/hero/Hero";
import Testimonial from "@/component/home/testimonial/Testimonial";
import Welcome from "@/component/home/welcome/Welcome";
import Navbar from "@/component/ui/Navbar";
import { Box, useTheme } from "@mui/material";

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <Hero />
      {/* <Favorite /> */}
      <Discover />
      <Welcome />
      <Testimonial />
    </>
  );
}
