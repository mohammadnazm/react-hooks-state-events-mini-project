import React from "react";

function Task({ task, onDeleteTask }) {
  if (!task) {
    return null; // Or render some fallback content
  }

  const { id, text, category } = task;

  const handleDeleteClick = () => {
    onDeleteTask(id);
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDeleteClick}>
        X
      </button>
    </div>
  );
}

export default Task;
