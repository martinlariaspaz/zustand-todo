import { ListComponent, AddItemList } from "./components";
import "./App.css";
import { makeStyles } from "@material-ui/core";

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.appContainer}>
      <ListComponent />
      <AddItemList />
    </div>
  );
};
const useStyles = makeStyles({
  appContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
  },
});
export default App;
