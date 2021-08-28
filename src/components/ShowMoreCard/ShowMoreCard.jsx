import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stat from "../ResultCard/Stat";
import { Button } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";

const desc =
  "российская вертикально-интегрированная нефтяная компания. Основные виды деятельности — разведка и разработка месторождений нефти и газа, нефтепереработка, производство и реализация нефтепродуктов.";

const stats = [
  {
    title: "Релевантность",
    data: "100%",
    titleFontSize: "16px",
    dataFontSize: "24px",
  },
  {
    title: "Релевантность",
    data: "100%",
    titleFontSize: "16px",
    dataFontSize: "24px",
  },
  {
    title: "Релевантность",
    data: "100%",
    titleFontSize: "16px",
    dataFontSize: "24px",
  },
  {
    title: "Релевантность",
    data: "100%",
    titleFontSize: "16px",
    dataFontSize: "24px",
  },
  {
    title: "Релевантность",
    data: "100%",
    titleFontSize: "16px",
    dataFontSize: "24px",
  },
  {
    title: "Релевантность",
    data: "100%",
    titleFontSize: "16px",
    dataFontSize: "24px",
  },
  {
    title: "Релевантность",
    data: "100%",
    titleFontSize: "16px",
    dataFontSize: "24px",
  },
  {
    title: "Релевантность",
    data: "100%",
    titleFontSize: "16px",
    dataFontSize: "24px",
  },
  {
    title: "Релевантность",
    data: "100%",
    titleFontSize: "16px",
    dataFontSize: "24px",
  },
  {
    title: "Релевантность",
    data: "100%",
    titleFontSize: "16px",
    dataFontSize: "24px",
  },
  {
    title: "Релевантность",
    data: "100%",
    titleFontSize: "16px",
    dataFontSize: "24px",
  },
  {
    title: "Релевантность",
    data: "100%",
    titleFontSize: "16px",
    dataFontSize: "24px",
  },
  {
    title: "Релевантность",
    data: "100%",
    titleFontSize: "16px",
    dataFontSize: "24px",
  },
  {
    title: "Релевантность",
    data: "100%",
    titleFontSize: "16px",
    dataFontSize: "24px",
  },
];

const useStyles = makeStyles({
  showMoreCard: {
    width: "880px",
    height: "670px",
    backgroundColor: "white",
    borderRadius: "16px",

    position: "absolute",
    top: "55%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "32px",
  },
  topCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoTitle: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    gap: "16px",
  },
  statExit: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "16px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    lineHeight: "56px",
  },
  logo: {
    width: "56px",
    height: "56px",
  },
  columns: {
    marginTop: "32px",
    display: "flex",
    gap: "32px",
  },
  col: {
    width: "392px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  stats: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    gap: "24px",
  },
});

const ShowMoreCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.showMoreCard}>
      <div className={classes.topCard}>
        <div className={classes.logoTitle}>
          <img src="" alt="logo" />
          <span className={classes.title}>Газпром нефть</span>
        </div>
        <div className={classes.statExit}>
          <Stat title="Релевантность" data="100%" />
          <Button>
            <ClearIcon />
          </Button>
        </div>
      </div>
      <div className={classes.columns}>
        <div className={classes.col}>
          {desc}
          <p>{desc}</p>
          <p>{desc}</p>
        </div>
        <div className={classes.col}>
          <div className={classes.stats}>
            {stats.map((s) => (
              <Stat
                title={s.title}
                data={s.data}
                titleFontSize={s.titleFontSize}
                dataFontSize={s.dataFontSize}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMoreCard;
