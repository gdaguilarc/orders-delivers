import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    cards: {
      padding: theme.spacing(4),
      color: theme.palette.text.secondary,
      borderRadius: "0.3px",
      boxShadow: "7px 7px rgba(155, 167, 192, .8)",
      border: "3px solid #8b96ac",
      width: "66%",
      margin: "0 auto",
      maxHeight: "200px",
    },
    textfield: {
      width: "100%",
    },
  })
);

export default useStyles;
