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
        <Select native label="Type" className={classes.select}>
          <option aria-label="" value="Компании" />
          <option value={10}>Компании</option>
          <option value={20}>Стартапы</option>
          <option value={30}>Патенты</option>
        </Select>
      </FormControl>
    </div>
  );
}
