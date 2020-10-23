import React, { createRef, useEffect, useState, useCallback } from "react";
import { findDOMNode } from "react-dom";
import Axios from "axios";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

import useStyles from "./HomePageStyles";
import OrderCard from "./OrderCard";
import InputOrders from "../InputOrders";

import Dragula from "react-dragula";
import DragulaStyles from "react-dragula/dist/dragula.min.css";
import useFetchTasks from "./UseFetch";

const HomePage = () => {
  const classes = useStyles();
  const { orders, error, isLoading, setOrders } = useFetchTasks();
  const [dragSource, setDragSource] = useState();

  const onChange = useCallback(
    (data) => {
      setOrders({
        init: orders.init.concat(data),
        delCenter: orders.delCenter,
        delProc: orders.delProc,
        complete: orders.complete,
        failed: orders.failed,
      });
    },
    [orders, setOrders]
  );

  async function sendRequest(id, location) {
    await Axios.post(`http://localhost:4000/update/${id}/${location}`);
  }

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

    Dragula([init, devlc, devProc, complete, failed], {
      moves: function (el, source) {
        setDragSource(source);
        if (source === complete || source === failed) {
          return false;
        }
        return true;
      },
      accepts: function (el, target) {
        let destiny = -1;

        if (target === init) {
          destiny = 1;
        } else if (target === devlc) {
          destiny = 2;
        } else if (target === devProc) {
          destiny = 3;
        } else if (target === complete) {
          destiny = 4;
        } else {
          destiny = 5;
        }

        if (destiny !== 1) {
          return true;
        }
        return false;
      },
    }).on("drop", async function (el, target) {
      let destiny = -1;

      if (target === init) {
        destiny = 1;
      } else if (target === devlc) {
        destiny = 2;
      } else if (target === devProc) {
        destiny = 3;
      } else if (target === complete) {
        destiny = 4;
      } else {
        destiny = 5;
      }

      await sendRequest(el.id, destiny);
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
            <InputOrders onChange={onChange} />
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
                        {orders.init.map((order, i) => (
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
                        {orders.delCenter.map((order, i) => (
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
                        {orders.delProc.map((order, i) => (
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
                              {orders.complete.map((order, i) => (
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
                              {orders.failed.map((order, i) => (
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
