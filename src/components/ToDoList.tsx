import { useTodos } from "../Store/ToDos";
import { useSearchParams } from "react-router-dom";

const TodoList = () => {
  const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();
  const [searchParams] = useSearchParams();
  let filterData = todos;
  let todosData = searchParams.get("todos");
  if (todosData === "active") {
    filterData = filterData.filter((task) => !task.completed);
  }
  if (todosData === "completed") {
    filterData = filterData.filter((task) => task.completed);
  }
  return (
    <div className="container">
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">Task</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((todo) => {
            return (
              <tr key={todo.id} className="trstrike">
                <td className="col-12">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id={`todo-${todo.id}`}
                      checked={todo.completed}
                      onChange={() => toggleTodoAsCompleted(todo.id)}
                    />
                    <label htmlFor={`todo-${todo.id}`} className="form-label">
                      {todo.task}
                    </label>
                  </div>
                </td>

                <td>
                  {todo.completed && (
                    <button
                      className="btn btn-danger"
                      type="button"
                      onClick={() => handleDeleteTodo(todo.id)}
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default TodoList;
