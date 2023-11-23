import AddToDo from "./components/AddToDo";
import Navbar from "./components/Navbar";
import TodoList from "./components/ToDoList";
const App = () => {
  return (
    <>
      <div className="container">
        <h1> Add To Do </h1>
        <br />
        <Navbar />
        <br />
        <AddToDo />
        <br />
        <TodoList />
      </div>
    </>
  );
};
export default App;
