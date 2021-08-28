import React from "react";
import ResultCard from "../ResultCard/ResultCard";
import ResultCardPatent from '../ResultCardPatent'
import ResultCardArticle from '../ResultCardArticle'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "92%",
    margin: "0 auto",
  },
  sourceName: {
    fontWeight: "bold",
    fontSize: "32px",
    marginTop: "32px",
    marginBottom: "16px",
  },
});

const ResultSource = (props) => {
  const classes = useStyles();
  console.log(props);
  return (
    <div>
      <div className={classes.sourceName}>
        {props.sources?.habrCareer?.length > 0 ? "Хабр Карьера" : null}
      </div>
      <div className={classes.card}>
        {props.sources?.habrCareer?.map((c, i) => (
          <ResultCard className={classes.card} card={c} index={i} />
        ))}
      </div>
      {/* <div className={classes.sourceName}>
        {props.sources?.hhRu?.length > 0 ? "HeadHunter" : null}
      </div> */}
      {/* <div className={classes.card}>
        {props.sources?.hhRu?.map((c) => (
          <ResultCard className={classes.card} card={c} />
        ))}
      </div> */}
      {/* {props.isCardShown ? <ShowMoreCard index={props.index} /> : null} */}
      <div className={classes.sourceName}>
        {props.sources?.rospatent?.length > 0 ? "Патенты" : null}
      </div>
      <div className={classes.card}>
        {props.sources?.rospatent?.map((c, i) => (
          <ResultCardPatent className={classes.card} card={c} index={i} />
        ))}
      </div>
      <div className={classes.sourceName}>
        {props.sources?.RBC?.length > 0 ? "РБК" : null}
      </div>
      <div className={classes.card}>
        {props.sources?.RBC?.map((c, i) => (
          <ResultCardArticle className={classes.card} card={c} index={i} />
        ))}
      </div>
    </div>
  );
};

export default ResultSource;
