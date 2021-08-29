import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  select: {
    height: "48px",
    fontSize: "12px",
    display: "flex",
  },
}));

export default function Category(props) {
  const classes = useStyles();
  return (
    <div>
      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-age-native-simple">
          {props.name}
        </InputLabel>
        <Select native label="Type" className={classes.select} defaultValue="all">
          {/* <option aria-label="Везде" value="all" /> */}
          <option value={"all"}>Везде</option>
          <option value={"company"}>По компании</option>
          <option value={"patents"}>По патентам</option>
          <option value={"okved"}>По виду деятельности</option>
          <option value={"block"}>Блочный поиск</option>
        </Select>
      </FormControl>
    </div>
  );
}
