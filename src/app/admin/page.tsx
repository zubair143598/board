import Sidebar from '@/component/sidebar/Sidebar'
import { Box } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <Box sx={{display:'flex'}}>
      <Sidebar/>
    </Box>
  )
}

export default page
