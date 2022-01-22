import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiPagination-ul": {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      padding: "36px 0",
      "& > li": {
        "& div": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: (props) => props.color,
        },
        "& button": {
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          boxShadow: "0 0 10px rgba(0,0,0, 0.15)",
        },
      },
    },
  },
}));

export default useStyles;
