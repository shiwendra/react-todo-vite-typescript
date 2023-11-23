import { ReactNode, createContext, useContext, useState } from "react";
export type TodosProviderProps = {
  children: ReactNode;
};
export type ToDo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};
export type TodoContext = {
  todos: ToDo[];
  handleAddToDo: (task: string) => void;
  toggleTodoAsCompleted: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
};
export const todosContext = createContext<TodoContext | null>(null);
export const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todos, setTodos] = useState<ToDo[]>(() => {
    try {
      const newTodos = localStorage.getItem("todos") || "[]";
      return JSON.parse(newTodos) as ToDo[];
    } catch (error) {
      return [];
    }
  });
  const handleAddToDo = (task: string) => {
    setTodos((prev) => {
      const newTodos: ToDo[] = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      // console.log("Previous Data" + prev);
      // console.log(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };
  //toggle for mark completed or uncompleted
  const toggleTodoAsCompleted = (id: string) => {
    setTodos((prev) => {
      let newTodolist = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        localStorage.setItem("todos", JSON.stringify(todo));
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(newTodolist));
      return newTodolist;
    });
  };
  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => {
      let newTodolist = prev.filter((filterTodo) => filterTodo.id != id);
      return newTodolist;
    });
  };

  return (
    <todosContext.Provider
      value={{ todos, handleAddToDo, toggleTodoAsCompleted, handleDeleteTodo }}
    >
      {children}
    </todosContext.Provider>
  );
};

//consumer
export const useTodos = () => {
  const todosConsumer = useContext(todosContext);
  if (!todosConsumer) {
    throw -new Error("useTodod used outside of provider");
  }
  return todosConsumer;
};
