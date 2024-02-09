import { v4 as uuid } from 'uuid';

export interface ITask {
  id: string;
  name: string;
  completed: boolean;
  createdAt: Date;
  deadline?: Date;
  hasDeadline: boolean;
}

export class Task implements ITask {
  id: string;
  name: string;
  completed: boolean;
  createdAt: Date;
  deadline?: Date;
  hasDeadline: boolean;

  constructor(name: string) {
    this.id = uuid();
    this.name = name.toLowerCase().trim();
    this.completed = false;
    this.createdAt = new Date();
    this.hasDeadline = false;
  }

  public setCompleted(value:boolean){
    this.completed = value
  }

  public setHasDeadline(value:boolean){
    this.hasDeadline = value
  }
}