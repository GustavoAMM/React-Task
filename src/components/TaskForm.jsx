import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-white mb-3">Ingresar tarea</h1>
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
      <input
        placeholder="Escribe tu tarea"
        className="bg-slate-300 p-3 w-full mb-2"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        autoFocus
      />
      <textarea
        placeholder="Description"
        className="bg-slate-300 p-3 w-full mb-2"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
      ></textarea>
      <button className="bg-indigo-500 px-3 py-1 text-white">Save</button>
    </form>
    </div>
  );
}

export default TaskForm;
