const Taskform = () => {
  return (
    <form className="add-form">
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Add Task"></input>
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input type="text" placeholder="Add Day and time"></input>
      </div>
      <div className="form-control form-control-check">
        <label>Set reminder</label>
        <input type="checkbox"></input>
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default Taskform;
