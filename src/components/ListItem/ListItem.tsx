import { makeStyles } from "@material-ui/core";
import { useStoreList } from "../../store/store";

type Props = {
  taskName: string;
  taskValue: boolean;
  index: number;
};

export const ListItem = ({ taskName, taskValue, index }: Props) => {
  const { finishTask } = useStoreList();
  const classes = useStyles();
  return (
    <span
      onDoubleClick={() => finishTask(taskName)}
      className={taskValue ? classes.taskNameCompleted : classes.taskName}
    >
      {index + 1}. {taskName}
    </span>
  );
};

const useStyles = makeStyles({
  taskName: {
    display: "flex",
    fontSize: "20px",
    minWidth: "80%",
    cursor: "pointer",
    transition: "text-decoration 3s ease",
  },
  taskNameCompleted: {
    display: "flex",
    fontSize: "20px",
    minWidth: "80%",
    cursor: "pointer",
    textDecoration: "line-through",
  },
});
