import { makeStyles, Typography } from "@material-ui/core";
import { TaskIcon } from "../../assets/TaskIcon";
import { useStoreList } from "../../store/store";
import { ListItem } from "../ListItem/ListItem";
import { RemoveTask } from "../RemoveTask/RemoveTask";

export const ListComponent = () => {
  const { todoList } = useStoreList();
  const classes = useStyle();
  const todoListKeys = Object.keys(todoList);
  return (
    <div className={classes.container}>
      <span className={classes.title}>Todo List</span>
      {!!todoListKeys.length ? (
        todoListKeys.map((item, index) => (
          <div key={item[0]} className={classes.listContainer}>
            <ListItem
              taskName={item}
              taskValue={todoList[item]}
              index={index}
            />
            <RemoveTask taskName={item} />
          </div>
        ))
      ) : (
        <Typography className={classes.emptyListLabel}>
          <TaskIcon className={classes.emptyListIcon} />
          Aun no hay tareas en la lista...
        </Typography>
      )}
    </div>
  );
};

const useStyle = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "40vh",
    minWidth: "60vw",
    alignContent: "center",
    padding: "20px 40px 20px",
    margin: "100px auto 20px",
    border: "1px solid #a1a1a1",
    borderRadius: "16px",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "24px",
    marginBottom: "40px",
    color: "#818181",
    position: "relative",
    "&:after": {
      position: "absolute",
      content: '""',
      top: 38,
      left: 50,
      right: 0,
      width: "90%",
      height: 2,
      background: "#818181",
    },
  },
  listContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "10px 0px",
  },
  emptyListLabel: {
    display: "flex",
    fontSize: "24px",
    fontWeight: 600,
    color: "#818181",
    verticalAlign: "top",
    alignItems: "start",
  },
  emptyListIcon: {
    fill: "#818181",
    marginRight: "10px",
    margin: "auto 10px auto",
  },
});
