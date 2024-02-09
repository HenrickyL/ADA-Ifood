import { TaskList } from "./_components/TaskList";
import { Task } from "./_entities/Task";
import GlobalStyle from "./global"
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskText, setNewTaskText] = useState<string>('');

  const handleAddTask = () => {}

  const handleRemoveTask = (taskId: number) => {}

  const handleFinished = (taskId: number) => {}

  return (
    <>
      <GlobalStyle />
      <div>
        <h1>Lista de Tarefas</h1>
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <button onClick={handleAddTask}>Adicionar Tarefa</button>
        <TaskList
          tasks={tasks}
          onToggle={handleFinished}
          onRemove={handleRemoveTask}
        />
    </div>
    </>
  )
}

export default App
