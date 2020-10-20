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
import Axios from "axios";

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
      accepts: function (el, target) {
        if (target === devlc) {
          // aqui va axios
          Axios.post(`http://localhost:4000/update/${el.id}/2`);
          return true;
        }
        return false;
      },
    });

    Dragula([devlc, devProc], {
      accepts: function (el, target) {
        console.log(el.id)
        if (target === devProc) {
          Axios.post(`http://localhost:4000/update/${el.id}/3`);
        } else {
          Axios.post(`http://localhost:4000/update/${el.id}/2`);
        }
        return true;
      },
    });

    Dragula([devProc, complete], {
      accepts: function (el, target) {
        if (target === complete) {
          Axios.post(`http://localhost:4000/update/${el.id}/4`);
          return true;
        }
        return false;
      },
    });

    Dragula([devProc, failed], {
      accepts: function (el, target) {
        if (target === failed) {
          Axios.post(`http://localhost:4000/update/${el.id}/5`);
          return true;
        }
        return false;
      },
    });

    Dragula([devlc, complete], {
      accepts: function (el, target) {
        if (target === complete) {
          Axios.post(`http://localhost:4000/update/${el.id}/4`);
          return true;
        }
        return false;
      },
    });

    Dragula([devlc, failed], {
      accepts: function (el, target) {
        if (target === failed) {
          Axios.post(`http://localhost:4000/update/${el.id}/5`);
          return true;
        }
        return false;
      },
    });
  }, []);

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
                          .filter((order) => order.location_id === 1)
                          .map((order, i) => (
                            <div id={order.id_order} key={i}>
                              <OrderCard
                                id={order.id_order}
                                name={order.name}
                                location={order.location_name}
                              />
                            </div>
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
                      >
                        {orders
                          .filter((order) => order.location_id === 2)
                          .map((order, i) => (
                            <div id={order.id_order} key={i}>
                              <OrderCard
                                id={order.id_order}
                                name={order.name}
                                location={order.location_name}
                              />
                            </div>
                          ))}
                      </Grid>
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
                      >
                        {orders
                          .filter((order) => order.location_id === 3)
                          .map((order, i) => (
                            <div id={order.id_order} key={i}>
                              <OrderCard
                                id={order.id_order}
                                name={order.name}
                                location={order.location_name}
                              />
                            </div>
                          ))}
                      </Grid>
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
                            >
                              {orders
                                .filter((order) => order.location_id === 4)
                                .map((order, i) => (
                                  <div id={order.id_order} key={i}>
                                    <OrderCard
                                      id={order.id_order}
                                      name={order.name}
                                      location={order.location_name}
                                    />
                                  </div>
                                ))}
                            </Grid>
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
                            >
                              {orders
                                .filter((order) => order.location_id === 5)
                                .map((order, i) => (
                                  <div id={order.id_order} key={i}>
                                    <OrderCard
                                      id={order.id_order}
                                      name={order.name}
                                      location={order.location_name}
                                    />
                                  </div>
                                ))}
                            </Grid>
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
