import { Button, makeStyles } from "@material-ui/core";
import { TrashIcon } from "../../assets/TrashIcon";
import { useStoreList } from "../../store/store";

export const RemoveTask = ({ taskName }: { taskName: string }) => {
  const { removeTask } = useStoreList();
  const classes = useStyles();
  return (
    <Button
      startIcon={<TrashIcon className={classes.buttonIcon} />}
      className={classes.button}
      onClick={() => removeTask(taskName)}
    >
      Eliminar
    </Button>
  );
};

const useStyles = makeStyles({
  button: {
    backgroundColor: "#f1f1f1",
  },
  buttonIcon: {
    fill: "#df4759",
  },
});
