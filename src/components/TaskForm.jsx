import { useState } from "react";

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe tu tarea"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        autoFocus
      />
      <textarea
        placeholder="Description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
      ></textarea>
      <button>Save</button>
    </form>
  );
}

export default TaskForm;
