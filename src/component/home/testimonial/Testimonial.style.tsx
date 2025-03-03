'use client'
import { Box, styled } from "@mui/material";

export const RatingContainer = styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'start',
    [theme.breakpoints.down('sm')]:{
        justifyContent:'center',

    }
}))