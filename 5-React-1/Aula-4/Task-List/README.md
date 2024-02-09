# Gerenciamento de Lista de Tarefas

Você, um talentoso desenvolvedor iniciante, acaba de ser contratado pela inovadora empresa TechTasks. Sua primeira missão é criar uma aplicação de gerenciamento de tarefas para ajudar os colaboradores da empresa a organizarem suas atividades diárias. Esta é uma oportunidade única para aplicar seus conhecimentos em React, especialmente nos conceitos de prop drilling e spread operator.

**Objetivo:**

Desenvolver uma aplicação React que permita aos usuários adicionar, marcar como concluída e remover tarefas de uma lista de afazeres.

**Instruções:**

1. **Componentes:**
    - Crie três componentes essenciais: **`App`**, **`TaskList`** e **`TaskItem`**.
    - **`App`** será o componente principal e conterá o estado da lista de tarefas.
    - **`TaskList`** será responsável por exibir a lista de tarefas
    - **`TaskItem`** representará uma tarefa individual na lista.
2. **Funções de Manipulação de Estado:**
    - No componente **`App`**, implemente funções puras para manipular as tarefas.
        - **`handleFinished(taskId)`**: Marca uma tarefa como concluída ou não concluída.
        - **`handleAddTask(newTaskText)`**: Adiciona uma nova tarefa à lista.
        - **`handleRemoveTask(taskId)`**: Remove uma tarefa da lista.
3. **Componente `TaskList`:**
    - Utilize o componente **`TaskList`** para exibir a lista de tarefas e gerenciar o estado do texto da nova tarefa.
4. **Componente `TaskItem`:**
    - No componente **`TaskItem`**, adicione um botão para marcar a tarefa como concluída e um botão para remover a tarefa.
5. **Desafio Extra (Opcional):**
    - Implemente a funcionalidade de remoção de tarefas no componente **`TaskList`**, utilizando o spread operator para criar uma nova versão da lista sem a tarefa removida.