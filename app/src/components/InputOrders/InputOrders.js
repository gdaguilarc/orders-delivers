import React, { useCallback, useState } from "react";

import axios from "axios";

import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import useStyles from "./InputOrdersStyles";

const InputOrders = ({ onChange }) => {
  const classes = useStyles();

  const [todo, setTodo] = useState("");

  const onAdd = async () => {
    if (todo.replace(/\s/g, "") !== "") {
      const { data } = await axios.post("http://localhost:4000/", {
        name: todo,
      });
      //   onChange(data);
      setTodo("");
    }
  };

  const onTodoChange = useCallback(
    ({ target }) => {
      setTodo(target.value);
    },
    [setTodo]
  );

  return (
    <Card className={classes.cards}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={12} lg={10} xl={10}>
          <TextField
            id="outlined-basic"
            label="Write your order"
            variant="outlined"
            size="small"
            className={classes.textfield}
            value={todo}
            onChange={onTodoChange}
          />
        </Grid>
        <Grid item sm={12} md={12} lg={2} xl={2}>
          <Button
            color="primary"
            size="large"
            variant="outlined"
            onClick={onAdd}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default InputOrders;
