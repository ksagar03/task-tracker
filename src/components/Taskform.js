import { useState } from "react";
const Taskform = ({ toaddtask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [Reminder, setReminder] = useState(false);
  // here we are setting use state of reminder as false by default
  const onSubmit = (e) => {
    e.preventDefault(); // this line will prevent submitting(saveing)
    // the task

    if (!text) {
      alert("please add a task");
      return;
    }
    if (!day) {
      alert("please add day and time");
      return;
    }
    toaddtask({ text, day, Reminder });
    setText("");
    setDay("");
    setReminder(false);
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
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
          checked={Reminder}
          value={Reminder}
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
