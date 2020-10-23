import React from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import useStyles from "./HomePageStyles";
const OrderCard = ({ id, name, location }) => {
  const classes = useStyles();

  return (
    <Grid item sm={12} key={id}>
      <CardActionArea>
        <Card className={classes.cards}>
          <Typography
            className={classes.header}
            variant="subtitle1"
            color="textSecondary"
          >
            Order: {name}
          </Typography>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default OrderCard;
