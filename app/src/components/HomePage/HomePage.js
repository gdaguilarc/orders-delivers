import React from "react";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";

import useStyles from "./HomePageStyles";
import OrderCard from "./OrderCard";
import InputOrders from "../InputOrders";

const HomePage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          <Grid item sm={12}>
            <Box className={classes.container}>
              <Typography
                variant="h4"
                className={classes.header}
                align="center"
              >
                DASHBOARD
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12}>
            <InputOrders />
          </Grid>
          <Grid item sm={12}>
            <Box className={classes.content}>
              <Grid container spacing={3}>
                <Grid item sm={12} md={3}>
                  <Card className={classes.darkcard}>
                    <Typography className={classes.header} variant="h5">
                      1. SALIDA DE LA PLANTA
                    </Typography>
                    <Box className={classes.container}>
                      <Grid container spacing={3}>
                        <OrderCard
                          name={"Pasito perron"}
                          location={"start"}
                          id={1}
                        />
                      </Grid>
                    </Box>
                  </Card>
                </Grid>
                <Grid item sm={12} md={3}>
                  <Card className={classes.darkcard}>
                    <Typography className={classes.header} variant="h5">
                      2. EN LOCAL DELIVERY CENTER
                    </Typography>
                  </Card>
                </Grid>
                <Grid item sm={12} md={3}>
                  <Card className={classes.darkcard}>
                    <Typography className={classes.header} variant="h5">
                      3. EN PROCESO DE ENTREGA
                    </Typography>
                  </Card>
                </Grid>
                <Grid item sm={12} md={3}>
                  <Card className={classes.darkcard}>
                    <Typography className={classes.header} variant="h5">
                      4. ENTREGADO
                    </Typography>

                    <Grid container spacing={1}>
                      <Grid item sm={12}>
                        <Card className={classes.darkcardsSmall}>
                          sfdfdsfsdfsdf
                        </Card>
                      </Grid>
                      <Grid item sm={12}>
                        <Card className={classes.darkcardsSmall}>
                          sfdfdsfsdfsdf
                        </Card>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
