import { Task } from "../../_entities/Task";
import { CheckIcon, RemoveIcon, TableCell, TableRow } from "./style"

type TaskItemProp  = {
  task: Task;
  onToggle: (taskId: string) => void;
  onRemove: (taskId: string) => void;
  onEditable: boolean
}

export const TaskItem = ({task, onRemove, onToggle, onEditable}: TaskItemProp)=>{

  return(
    <TableRow completed={task.completed}>
      {onEditable ? <TableCell><input type="checkbox"/></TableCell> : <TableCell></TableCell>}
      <TableCell>{task.name}</TableCell>
      <TableCell>{task.createdAt.toLocaleDateString()}</TableCell>
      <TableCell>
        {task.hasDeadline ? task.deadline?.toLocaleDateString() : '/'}
      </TableCell>
      <TableCell>
        <button onClick={() => onToggle(task.id)}>
          {task.completed ? 'Desfazer' : <CheckIcon />}
        </button>
      </TableCell>
      <TableCell>
        <button onClick={() => onRemove(task.id)}><RemoveIcon /></button>
      </TableCell>
    </TableRow>
  )
}