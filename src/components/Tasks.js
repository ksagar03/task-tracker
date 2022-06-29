import React, { useState } from "react";
import Task from "./Task";
// now we have started using hooks
// state-> The state is a built-in React object that is used to contain data or information about
// the component. A component’s state can change over time; whenever it changes, the component
// re-renders. The change in state can happen as a response to user action or system-generated
// events and these changes determine the behavior of the component and how it will render.

// state which are defined in the function are immutable also the states can't re-render itself
// (in function defined).
// therefore to overcome this situation we use hooks to re-render and to change data
//  there are several hooks which comes in handy in react
const Tasks = ({ task, onDelete, onreminder }) => {
  return (
    <>
      {task.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onreminder={onreminder}
        />
      ))}
    </>
  );
};

export default Tasks;
