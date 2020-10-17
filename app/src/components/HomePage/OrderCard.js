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
const OrderCard = ({ id, name, location }) => {
  const classes = useStyles();

  return (
    <Grid item sm={12} key={id}>
      <Card className={classes.cards}>
        <Typography
          className={classes.header}
          variant="subtitle1"
          color="textSecondary"
        >
          Order: {name} | Location: {location}
        </Typography>
      </Card>
    </Grid>
  );
};

export default OrderCard;
