import { FormEvent, useState } from "react";
import { useTodos } from "../Store/ToDos";

const AddToDo = () => {
  const [todo, setTodo] = useState("");
  const { handleAddToDo } = useTodos();
  const handlFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddToDo(todo);
    setTodo(" ");
  };
  return (
    <>
      <form className="row" onSubmit={handlFormSubmit}>
        <div className="col-auto col-11">
          <input
            type="text"
            className="form-control"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-success" type="submit">
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default AddToDo;
