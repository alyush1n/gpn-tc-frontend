import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stat from "./Stat";
import { Button, IconButton } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { MoreHoriz } from "@material-ui/icons";

const useStyles = makeStyles({
  card: {
    width: "224px",
    height: "256px",
    backgroundColor: "white",
    borderRadius: "16px",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    marginTop: "16px",
    boxShadow: "0px 0px 6px rgba(1, 0, 0, 0.25)",
    overflow: "hidden",
  },
  title: {
    fontSize: "16px",
    fontWeight: "bold",
    marginLeft: "8px",
    lineHeight: "24px",
  },
  logoTitle: {
    display: "flex",
    alignItems: "center",
    marginTop: "16px",
  },
  description: {
    fontSize: "12px",
    marginTop: "16px",
  },
  contacts: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "flex-start",
    alignItems: "start",
    marginTop: "16px",
    paddingRight: "20px",
    rowGap: "8px",
  },
  socials: {
    display: "flex",
    justifyContent: "start",
    marginTop: "8px",
  },
  logo: {
    height: "24px",
    width: "24px",
  },
  topCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  moreButton: {
    width: "16px",
    height: "32px",
    border: "solid 1px #f1f1f1",
  },
  horiz: {
    fontSize: "16px",
    color: "#999999",
  },
});

const ResultCard = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div className={classes.topCard}>
        <Stat title="Релевантность" data="100%" />
        <Button
          size="small"
          className={classes.moreButton}
          onClick={props.cardShown(props.index)}
        >
          <MoreHoriz className={classes.horiz} />
        </Button>
      </div>
      <div className={classes?.logoTitle}>
        <div>
          <img
            className={classes.logo}
            alt={props.card?.name}
            src={
              props.card.logo === null
                ? "../static/default-logo.png"
                : props.card.logo
            }
          />
        </div>
        <div className={classes.title}>{props.card?.name}</div>
      </div>
      <div className={classes.contacts}>
        {props.card?.contacts?.map((c, index) => (
          <Stat title={c.type} link={c.link} data={c.value} />
        ))}
      </div>
      {props.card?.description?.map(
        (d, index) =>
          index < 1 && (
            <div
              className={classes.description}
              dangerouslySetInnerHTML={{
                __html: d.slice(0, 144) + "...",
              }}
            />
          )
      )}
    </div>
  );
};

export default ResultCard;
