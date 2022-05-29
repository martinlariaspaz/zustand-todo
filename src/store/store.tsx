import create from "zustand";

type ListItemType = {
  [key: string]: boolean;
};
type ListState = {
  todoList: ListItemType;
  addTask: (ListName: string) => void;
  removeTask: (ListName: string) => void;
  finishTask: (ListName: string) => void;
};

export const useStoreList = create<ListState>((set) => ({
  todoList: {},
  addTask: (listName: string) =>
    set((state: ListState) => ({
      todoList: { ...state.todoList, [listName]: false },
    })),
  removeTask: (listName: string) =>
    set((state: ListState) => {
      const { [listName]: toDelete, ...restItem } = state.todoList;
      return { todoList: restItem };
    }),
  finishTask: (listName: string) =>
    set((state: ListState) => ({
      todoList: { ...state.todoList, [listName]: !state.todoList[listName] },
    })),
}));
