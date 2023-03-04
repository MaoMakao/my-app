import { Container } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";

const Main = () => {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Новостной сайт
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            пізно побачив ваше тестове
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            Логіку зробив, за оформлення вибачте
          </Grid>
          <Grid item xs={12} md={4}>
            Дякую за змогу зробити тестове, навіть якщо не буде відповіді
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Main;
