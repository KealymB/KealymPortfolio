import "./Face.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
  },
  image: {
    position: "relative",
    height: 60,
    marginTop: 50,
    color: "black",
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
    display: "inline-block",
    fontSize: 25,
    width: 180,
  },
}));

function Face(props) {
  const classes = useStyles();
  return (
    <div className="Face">
      <header className="App-header">
        <div className="Lead">
          {props.start}
          <div className="My-Name">{props.name}</div>.
        </div>
        {props.end}
        <div>
          <ButtonBase
            focusRipple
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: 245,
              height: 80,
            }}
          >
            <span className={classes.imageButton} className="btn-Text">
              <Typography
                component="span"
                variant="subtitle1"
                className={classes.imageTitle}
              >
                View My Work
              </Typography>
            </span>
          </ButtonBase>
        </div>
      </header>
    </div>
  );
}

export default Face;
