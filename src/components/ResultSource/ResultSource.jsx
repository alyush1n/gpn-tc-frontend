import React from "react";
import ResultCard from "../ResultCard/ResultCard";
import ResultCardPatent from '../ResultCardPatent'
import ResultCardArticle from '../ResultCardArticle'
import {makeStyles} from "@material-ui/core/styles";
import ResultCardCompany from "../ResultCardCompany/ResultCard";
import {Button} from "@material-ui/core";

const useStyles = makeStyles({
    card: {
        display: "flex",
        justifyContent: "start",
        flexWrap: "wrap",
        width: "92%",
        margin: "0 auto",
        gap: "16px"
    },
    sourceName: {
        fontWeight: "bold",
        fontSize: "32px",
        marginTop: "32px",
        marginBottom: "16px",
    },
    button: {
        display: "flex",
        justifyContent: "center"
    }

});

const downloadJSON = async (props) => {
    // I am assuming that "this.state.myData"
    // is an object and I wrote it to file as
    // json
    const fileName = "search";
    const json = JSON.stringify(props.sources);
    const blob = new Blob([json], {type: 'application/json'});
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const ResultSource = (props) => {
    const classes = useStyles();
    console.log(props);
    return (
        <div>
            {props.load ? null : (<Button onClick={e => {
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
                downloadJSON(props)
            }}>Скачать JSON</Button>)}

            <div className={classes.sourceName}>
                {props.sources?.habrCareer?.length > 0 ? "Хабр Карьера" : null}
            </div>
            <div className={classes.card}>
                {props.sources?.habrCareer?.map((c, i) => (
                    <ResultCard className={classes.card} card={c} index={i}/>
                ))}
            </div>
            <div className={classes.sourceName}>
                {props.sources?.hhRu?.length > 0 ? "HeadHunter" : null}
            </div>
            <div className={classes.card}>
                {props.sources?.hhRu?.map((c) => (
                    <ResultCardCompany className={classes.card} card={c}/>
                ))}
            </div>
            {/*{props.isCardShown ? <ShowMoreCard index={props.index}/> : null}*/}
            <div className={classes.sourceName}>
                {props.sources?.rospatent?.length > 0 ? "Патенты" : null}
            </div>
            <div className={classes.card}>
                {props.sources?.rospatent?.map((c, i) => (
                    <ResultCardPatent className={classes.card} card={c} index={i}/>
                ))}
            </div>
            <div className={classes.sourceName}>
                {props.sources?.RBC?.length > 0 ? "РБК" : null}
            </div>
            <div className={classes.card}>
                {props.sources?.RBC?.map((c, i) => (
                    <ResultCardArticle className={classes.card} card={c} index={i}/>
                ))}
            </div>
        </div>
    );
};

export default ResultSource;
