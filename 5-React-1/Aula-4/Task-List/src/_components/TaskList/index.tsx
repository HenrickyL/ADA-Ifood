import { Task } from "../../_entities/Task";
import { TaskItem } from "../TaskItem";
import { TableCell } from "../TaskItem/style";
import { Table } from "./style";

type TaskListProp = {
    tasks: Task[];
    onToggle: (taskId: number) => void;
    onRemove: (taskId: number) => void;
}

export const TaskList = ({tasks, onRemove, onToggle}:TaskListProp)=>{
    return(
        <Table>
      <thead>
        <tr>
          <TableCell>Tarefa</TableCell>
          <TableCell>Data de Criação</TableCell>
          <TableCell>Prazo</TableCell>
          <TableCell>Ações</TableCell>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </tbody>
    </Table>
    )
}