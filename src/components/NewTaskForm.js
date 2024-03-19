import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({ categories, onAddTask }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]); // Default to the first category

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    const newTask = { id: uuid(), text, category };
    onAddTask(newTask);
    setText(""); // Clear the input field after adding the task
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;
