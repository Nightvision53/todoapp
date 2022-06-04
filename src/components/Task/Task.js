import { useTaskContext } from "../../context/taskContext";

const Task = ({ num, task }) => {
  const { deleteTask, toggleTask } = useTaskContext();
  const creationDate = new Date(task.task_date);

  return (
    <tr onClick={() => toggleTask(task.task_id)}>

      {/* Task Number */}
      <th className="w-[10px]">{num}</th>

      {/* Task Text */}
      <td
        className={`${task.task_is_completed ? "line-through" : ""}`}>
        {task.task_text}
      </td>

      {/* Task Creation Date */}
      <td>{creationDate.toLocaleDateString()}</td>

      {/* Task Actions */}
      <td className="w-[1rem] max-w-lg content-start ">
        <button onClick={(e) => deleteTask(task.task_id)} className={"btn btn-primary"}>
          Delete
        </button>
      </td>
    </tr>
  )
}

export default Task