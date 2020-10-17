import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      minHeight: "100vh",
      color: theme.palette.common.white,
      flexFlow: "1",
    },
    container: {
      padding: theme.spacing(2),
    },
    text: {},
    cards: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      borderRadius: "0.3px",
      border: "3px solid #8b96ac",
    },
    darkcard: {
      backgroundColor: " #8b96ac",
      padding: theme.spacing(4),
      borderRadius: "0.3px",
      boxShadow: "7px 7px rgba(155, 167, 192, .8)",
      // border: "3px solid #8b96ac",
      minHeight: "60vh",
      color: theme.palette.primary.light,
    },

    darkShadow: {
      minHeight: "25vh",
    },
    darkcardsSmall: {
      backgroundColor: "#8b96ac",
      padding: theme.spacing(2),
      minHeight: "25vh",
      color: theme.palette.primary.light,
    },
    header: {
      fontWeight: "bold",
      textAlign: "center",
    },
    section2: {
      margin: theme.spacing(2),
    },
    content: {
      paddingTop: "2%",
    },
    section3: {
      margin: theme.spacing(1, 1, 1),
    },
  })
);

export default useStyles;
