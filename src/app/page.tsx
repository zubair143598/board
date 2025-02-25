import Hero from "@/component/home/hero/Hero";
import Navbar from "@/component/ui/Navbar";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          maxWidth: "1440px",
          margin: "0 auto",
          backgroundImage: 'url("/herobg.png")',
          backgroundSize: "auto",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
         
        }}
      >
        <Navbar />
        <Hero />
      </Box>
    </Box>
  );
}
