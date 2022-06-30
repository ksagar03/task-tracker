import { useState } from "react";
const Taskform = () => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  // here we are setting use state of reminder as false by default
  return (
    <form className="add-form">
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day and time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set reminder</label>
        <input
          type="checkbox"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      {/* this above setReminder(e.currentTarget.checked)} /> will return a boolean value 
i.e either true or false when a user press on the set reminder checkbox*/}
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default Taskform;
