import { Task } from "../../_entities/Task";
import { TableCell, TableRow } from "./style"


type TaskItemProp  = {
  task: Task;
  onToggle: (taskId: number) => void;
  onRemove: (taskId: number) => void;
}

export const TaskItem = ({task, onRemove, onToggle}: TaskItemProp)=>{

  return(
      <TableRow completed={task.completed}>
      <TableCell>{task.text}</TableCell>
      <TableCell>{task.createdAt.toLocaleDateString()}</TableCell>
      <TableCell>
        {task.hasDeadline ? task.deadline?.toLocaleDateString() : 'Sem prazo'}
      </TableCell>
      <TableCell>
        <button onClick={() => onToggle(task.id)}>
          {task.completed ? 'Desfazer' : 'Concluir'}
        </button>
      </TableCell>
      <TableCell>
        <button onClick={() => onRemove(task.id)}>Remover</button>
      </TableCell>
    </TableRow>
  )
}