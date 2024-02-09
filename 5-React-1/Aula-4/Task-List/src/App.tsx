import { Container } from "./_components/Container/style";
import { TaskList } from "./_components/TaskList";
import Timer from "./_components/Timer";
import { Task } from "./_entities/Task";
import GlobalStyle from "./global"
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskText, setNewTaskText] = useState<string>('');
  const [onEditable, setOnEditable] = useState<boolean>(true);


  const handleAddTask = () => {
    if (newTaskText.trim() !== '') {
      const newTask: Task = new Task(newTaskText)
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTaskText('');
    }
  }

  const handleRemoveTask = (taskId: string) => {}

  const handleFinished = (taskId: string) => {}

  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>Lista de Tarefas</h1>
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <button onClick={handleAddTask}>Adicionar Tarefa</button>
        <TaskList
          onEditable={onEditable}
          tasks={tasks}
          onToggle={handleFinished}
          onRemove={handleRemoveTask}
        />
    </Container>
    </>
  )
}





export default App
