import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stat from "./Stat";
import { Button, IconButton } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { MoreHoriz } from "@material-ui/icons";

const useStyles = makeStyles({
  card: {
    width: "312px",
    height: "408px",
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
    marginTop: "4px",
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
  p: {
    marginTop: "16px",
    marginBottom: "5px",
    fontWeight: "bold",
  },
});

const ResultCard = (props) => {
  const classes = useStyles();
  console.log(props);
  return (
    <div className={classes.card}>
      <div className={classes.topCard}>
        <Stat title="Релевантность" data={props?.card?.bench + "%"} />
        <Button
          size="small"
          className={classes.moreButton}
          // onClick={
          // props.cardShown(props.index)
          // }
        >
          <MoreHoriz className={classes.horiz} />
        </Button>
      </div>
      <div className={classes?.logoTitle}>
        {/* <div>
          <img
            className={classes.logo}
            alt={props?.card?.name}
            src={
              props?.card?.logo === null
                ? "../static/default-logo.png"
                : props.card?.logo
            }
          />
        </div> */}
        <div className={classes.title}>
          {props?.card?.["publication URL"]?.length > 0 ? (
            <a href={props?.card?.["publication URL"]} target="_blank">
              {props?.card?.["utility model name"]}
            </a>
          ) : (
            props?.card?.["utility model name"]
          )}
        </div>
      </div>
      <p className={classes.p}>Авторы:</p>
      <div className={classes.contacts}>{props?.card?.["authors"]}</div>
      <p className={classes.p}>Владельцы:</p>
      <div className={classes.contacts}>{props?.card?.["patent holders"]}</div>
      {/* <div className={classes.contacts}>
        {props?.card?.contacts ? props?.card?.contacts?.map((c, index) => (
          <Stat title={c?.type} link={c?.link} data={c?.value} />
        )) : null}
      </div> */}
      {/* {props.card?.description?.map(
        (d, index) =>
          index < 1 && (
            <div
              className={classes.description}
              dangerouslySetInnerHTML={{
                __html: d.slice(0, 144) + "...",
              }}
            />
          )
      )} */}
    </div>
  );
};

export default ResultCard;
