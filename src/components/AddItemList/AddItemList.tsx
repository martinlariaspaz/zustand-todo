import React, { useCallback } from "react";
import { Box, Button, FormGroup, FormLabel, Input } from "@material-ui/core";
import { useStoreList } from "../../store/store";
import { makeStyles } from "@material-ui/styles";

export const AddItemList = () => {
  const { addTask } = useStoreList();
  const classes = useStyle();
  const [value, setValue] = React.useState<{ value: string }>({ value: "" });
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue({ value: e.target.value });
    },
    [setValue]
  );
  const handleOnClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (value.value.length >= 3) {
        addTask(value.value);
        setValue({ value: "" });
      }
    },
    [addTask, setValue, value.value]
  );
  return (
    <FormGroup className={classes.container}>
      <Box className={classes.box}>
        <FormLabel className={classes.label}>Añade una tarea: </FormLabel>
        <Input
          className={classes.input}
          value={value.value}
          onChange={handleInputChange}
          placeholder="Ingrese una tarea..."
        />
      </Box>
      <Button className={classes.button} onClick={handleOnClick}>
        Agregar
      </Button>
    </FormGroup>
  );
};

const useStyle = makeStyles({
  container: {
    margin: "20px auto 0px",
  },
  box: {
    marginBottom: "40px",
  },
  label: {
    fontSize: "20px",
  },
  input: {
    width: "600px",
    marginLeft: "20px",
    flexGrow: 10,
    backgroundColor: "#f1f1f1",
    padding: "0 0 0 15px",
    borderRadius: "5px 5px 0 0px",
  },
  button: {
    backgroundColor: "#f1f1f1",
  },
});
