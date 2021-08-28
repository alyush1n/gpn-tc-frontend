import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  formControl: {
    height: 48,
    width: 144,
  },
}));

const MenuProps = {
  style: {},
  PaperProps: {
    style: {},
  },
};

export default function MultipleCategory(props) {
  const classes = useStyles();
  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">
          {props.name}
        </InputLabel>
        <Select multiple value={[]} MenuProps={MenuProps}>
          {props.items.map((i) => (
            <MenuItem key={i} value={i}>
              <Checkbox color="default" />
              <ListItemText primary={i} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
