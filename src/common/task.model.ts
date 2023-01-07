export enum TASK_STATUS {
  DONE = 'DONE',
  INPROGRESS = 'INPROGRESS',
  TBD = 'TBD',
  TODO = 'TODO',
}

export enum ROUTINE {
  WEEKLY = 'WEEKLY',
  DAILY = 'DAILY',
  TBD = 'TBD',
  TODO = 'TODO',
}

export interface ITask {
  status: TASK_STATUS;
  name: string;
  time: {
    start: string;
    estimate: number;
    end: string;
  };
  routine: ROUTINE;
}
