import React from 'react'
import Formulario from '../Components/Form/Form'
import { Box, Container, Grid } from '@mui/material'
import DatosPassagerDetails from '../Components/DatosBooking/DatosPassagerDetails'


const MyBooking = () => {
  return (
    <>
      <Grid container >
        <Grid item xs={12} sm={8} md={8} lg={8}>
          <Box >
            <DatosPassagerDetails/>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} >
          <Box >
      
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default MyBooking