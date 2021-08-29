import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stat from "./Stat";
import { Button, IconButton } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { MoreHoriz } from "@material-ui/icons";

const useStyles = makeStyles({
  cardStyle: {
    width: "312px",
    height: "408px",
    backgroundColor: "white",
    borderRadius: "16px",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
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
    fontSize: "14px",
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

const ResultCardCompany = (props) => {
  const classes = useStyles();
  console.log(props);
  return (
    <div className={classes.cardStyle}>
      <div className={classes.topCard}>
        <Stat title="Релевантность" data={props?.card?.bench + "%"} />
        <Button
          size="small"
          className={classes.moreButton}
          onClick={() => props.searchSupplierByID(props?.card?.id)}
        >
          <MoreHoriz className={classes.horiz} />
        </Button>
      </div>
      <div className={classes?.logoTitle}>
        {/* <div>
                    <img
                        className={classes.logo}
                        alt=""
                        src={props?.card?.logo_urls["90"]}
                    />
                </div> */}
        <div className={classes.title}>
          <a href={"https://metaprom.ru/companies/"+props?.card?.id} target="_blank">{props?.card?.name}</a>
        </div>
      </div>
      <div>{props?.card?.city}</div>
      <div>{props?.card?.type}</div>
      <div>{props?.card?.description?.otraslName}</div>
      <div>
        {props?.card?.description?.baseInfo?.map((d) => (
          <div>
            {d?.name}: {d?.value}
          </div>
        ))}
      </div>
      {/*<div className={classes.contacts}>*/}
      {/*  /!*{props?.card?.contacts ? props?.card?.contacts?.map((c, index) => (*!/*/}
      {/*  /!*  <Stat title={c?.type} link={c?.link} data={c?.value} />*!/*/}
      {/*  /!*)) : null}*!/*/}
      {/*</div>*/}
      {/* <div
                className={classes.description}
                dangerouslySetInnerHTML={{__html: props.card.description + "...",}}
            /> */}
    </div>
  );
};

export default ResultCardCompany;
