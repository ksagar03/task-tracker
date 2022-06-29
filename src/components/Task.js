import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onreminder }) => {
  return (
    <div
      className={`task  ${task.Reminder ? "reminder" : ""}`}
      onDoubleClick={() => onreminder(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes style={{ color: "red" }} onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
