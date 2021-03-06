import React from "react";
import ResultCard from "../ResultCard/ResultCard";
import ResultCardPatent from "../ResultCardPatent";
import ResultCardArticle from "../ResultCardArticle";
import { makeStyles } from "@material-ui/core/styles";
import ResultCardCompany from "../ResultCardCompany/ResultCard";
import ResultCardCompanySupplier from "../ResultCardCompanySupplier";
import ResultCardCompanyOkved from "../ResultCardCompanyOkved";
import { Button } from "@material-ui/core";
import UploadJsonButton from "./UploadJsonButton";

const useStyles = makeStyles({
  card: {
    display: "flex",
    justifyContent: "start",
    flexWrap: "wrap",
    width: "92%",
    margin: "0 auto",
    gap: "16px",
  },
  sourceName: {
    fontWeight: "bold",
    fontSize: "32px",
    marginTop: "32px",
    marginBottom: "16px",
  },
  button: {
    display: "flex",
    justifyContent: "center",
  },
});

const downloadJSON = async (props) => {
  // I am assuming that "this.state.myData"
  // is an object and I wrote it to file as
  // json
  const fileName = "search";
  const json = JSON.stringify(props.sources);
  const blob = new Blob([json], { type: "application/json" });
  const href = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = href;
  link.download = fileName + ".json";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const ResultSource = (props) => {
  const classes = useStyles();
  console.log(props);
  const isViewButtonDownload = () => {
    let isView = false;
    if (
      props?.sources?.hhRu?.length > 0 ||
      props?.sources?.habrCareer?.length > 0 ||
      props?.sources?.rospatent?.length > 0 ||
      props?.sources?.suppliers?.length > 0 ||
      props?.sources?.okved?.length > 0
    )
      isView = true;
    return isView;
  };
  return (
    <div>
      {isViewButtonDownload() ? (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            downloadJSON(props);
          }}
        >
          ?????????????? JSON
        </Button>
      ) : null}
      <UploadJsonButton
        addToStore={(content) => {
          props?.addToStore(content);
          // console.log(content)
        }}
      />
      <div className={classes.sourceName}>
        {props.sources?.habrCareer?.length > 0 ? "???????? ??????????????" : null}
      </div>
      <div className={classes.card}>
        {props.sources?.habrCareer?.map((c, i) => (
          <ResultCard className={classes.card} card={c} index={i} />
        ))}
      </div>
      <div className={classes.sourceName}>
        {props.sources?.hhRu?.length > 0 ? "HeadHunter" : null}
      </div>
      <div className={classes.card}>
        {props.sources?.hhRu?.map((c) => (
          <ResultCardCompany className={classes.card} card={c} />
        ))}
      </div>
      {/*{props.isCardShown ? <ShowMoreCard index={props.index}/> : null}*/}
      <div className={classes.sourceName}>
        {props.sources?.rospatent?.length > 0 ? "??????????????" : null}
      </div>
      <div className={classes.card}>
        {props.sources?.rospatent?.map((c, i) => (
          <ResultCardPatent className={classes.card} card={c} index={i} />
        ))}
      </div>
      <div className={classes.sourceName}>
        {props.sources?.RBC?.length > 0 ? "??????" : null}
      </div>
      <div className={classes.card}>
        {props.sources?.RBC?.map((c, i) => (
          <ResultCardArticle className={classes.card} card={c} index={i} />
        ))}
      </div>
      <div className={classes.sourceName}>
        {props.sources?.suppliers?.length > 0
          ? "???????? ???????????? ??????????????????????"
          : null}
      </div>
      <div className={classes.card}>
        {props.sources?.suppliers?.map((c, i) => (
          <ResultCardCompanySupplier
            className={classes.card}
            card={c}
            index={i}
            searchSupplierByID={(id)=>props.searchSupplierByID(id)}
          />
        ))}
      </div>
      <div className={classes.sourceName}>
        {props.sources?.okved?.length > 0
          ? "???????? ???????????? ???????????????? ???? ?????????? ????????????????????????"
          : null}
      </div>
      <div className={classes.card}>
        {props.sources?.okved?.map((c, i) => (
          <ResultCardCompanyOkved className={classes.card} card={c} index={i} />
        ))}
      </div>
    </div>
  );
};

export default ResultSource;
