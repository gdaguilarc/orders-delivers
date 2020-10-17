import React, { createRef, useEffect, useCallback } from "react";
import { findDOMNode } from "react-dom";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

import useStyles from "./HomePageStyles";
import OrderCard from "./OrderCard";
import InputOrders from "../InputOrders";

import Dragula from "react-dragula";
import useFetchTasks from "./UseFetch";

const HomePage = () => {
  const classes = useStyles();

  const { orders, error, isLoading, setOrders } = useFetchTasks();

  let initRef = createRef();
  let delCenterRef = createRef();
  let delProcRef = createRef();
  let completeRef = createRef();
  let failedRef = createRef();

  useEffect(() => {
    let init = findDOMNode(initRef.current);
    let devlc = findDOMNode(delCenterRef.current);
    let devProc = findDOMNode(delProcRef.current);
    let complete = findDOMNode(completeRef.current);
    let failed = findDOMNode(failedRef.current);

    Dragula([init, devlc], {
      moves: function (el, source, handle, sibling) {
        if (source === init) {
          // aqui va axios
        }
        return true;
      },
      accepts: function (el, target) {
        return target !== init;
      },
    });

    Dragula([devlc, devProc], {
      moves: function (el, source, handle, sibling) {
        if (source === devlc) {
          // aqui va axios
        } else {
          // aqui va axios
        }
        return true;
      },
    });

    Dragula([devProc, complete], {
      accepts: function (el, target) {
        return target !== devProc;
      },
      moves: function (el, source, handle, sibling) {
        if (source === devProc) {
          // aqui va axios
        }
        return true;
      },
    });

    Dragula([devProc, failed], {
      accepts: function (el, target) {
        return target !== devProc;
      },
      moves: function (el, source, handle, sibling) {
        if (source === devProc) {
          // aqui va axios
        }
        return true;
      },
    });

    Dragula([devlc, complete], {
      accepts: function (el, target) {
        return target !== devlc;
      },
      moves: function (el, source, handle, sibling) {
        if (source === devlc) {
          // aqui va axios
        }
        return true;
      },
    });

    Dragula([devlc, failed], {
      accepts: function (el, target) {
        return target !== devlc;
      },
      moves: function (el, source, handle, sibling) {
        if (source === devlc) {
          // aqui va axios
        }
        return true;
      },
    });
  }, []);

  if (error) {
    return <>Something went wrong :( </>;
  }

  if (isLoading) {
    return <>Loading ... </>;
  }

  console.log(orders);

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
                      <Grid
                        container
                        spacing={3}
                        ref={initRef}
                        className={classes.darkShadow}
                      >
                        {orders
                          .filter((order) => order.location_id == 1)
                          .map((order) => (
                            <OrderCard
                              id={order.id}
                              name={order.name}
                              location={order.location_name}
                            />
                          ))}
                      </Grid>
                    </Box>
                  </Card>
                </Grid>
                <Grid item sm={12} md={3}>
                  <Card className={classes.darkcard}>
                    <Typography className={classes.header} variant="h5">
                      2. EN LOCAL DELIVERY CENTER
                    </Typography>

                    <Box className={classes.container}>
                      <Grid
                        container
                        spacing={3}
                        ref={delCenterRef}
                        className={classes.darkShadow}
                      ></Grid>
                    </Box>
                  </Card>
                </Grid>
                <Grid item sm={12} md={3}>
                  <Card className={classes.darkcard}>
                    <Typography className={classes.header} variant="h5">
                      3. EN PROCESO DE ENTREGA
                    </Typography>

                    <Box className={classes.container}>
                      <Grid
                        container
                        spacing={3}
                        ref={delProcRef}
                        className={classes.darkShadow}
                      ></Grid>
                    </Box>
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
                          <Box className={classes.container}>
                            <Grid
                              container
                              spacing={3}
                              ref={completeRef}
                              className={classes.darkShadow}
                            ></Grid>
                          </Box>
                        </Card>
                      </Grid>
                      <Grid item sm={12}>
                        <Card className={classes.darkcardsSmall}>
                          <Box className={classes.container}>
                            <Grid
                              container
                              spacing={3}
                              ref={failedRef}
                              className={classes.darkShadow}
                            ></Grid>
                          </Box>
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
