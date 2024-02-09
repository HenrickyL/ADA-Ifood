import { Task } from "../../_entities/Task";
import { TaskItem } from "../TaskItem";
import { TableCell, TableHead } from "../TaskItem/style";
import { Table } from "./style";

type TaskListProp = {
    tasks: Task[];
    onToggle: (taskId: string) => void;
    onRemove: (taskId: string) => void;
    onEditable: boolean
}

export const TaskList = ({tasks, onRemove, onToggle, onEditable}:TaskListProp)=>{
    return(
        <Table>
      <thead>
        <tr>
          <TableHead></TableHead>
          <TableHead>Tarefa</TableHead>
          <TableHead>Data de Criação</TableHead>
          <TableHead>Prazo</TableHead>
          <TableHead>Ações</TableHead>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <TaskItem
            onEditable={onEditable}
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