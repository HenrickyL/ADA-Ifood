export type Task = {
    id: number;
    text: string;
    completed: boolean;
    createdAt: Date;
    deadline?: Date;
    hasDeadline: boolean;
  };