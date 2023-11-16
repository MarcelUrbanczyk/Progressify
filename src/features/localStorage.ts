import { type } from "@testing-library/user-event/dist/type";

type Projects = {
  projects: {
    name: string;
    deadline: Date;
    creationDate: Date;
    id: string;
    tasks: {
      name: string;
      isDone: boolean;
    }[];
  }[];
};

type Goals = {
  goals: {
    name: string;
    estimatedDeadline: Date;
    creationDate: Date;
    id: string;
  }[];
};

type StateType = Projects | Goals;

export const saveAtLocalStorage = (
  name: "projects" | "goals",
  state: StateType
) => {
  localStorage.setItem(`${name}`, JSON.stringify(state));
};

export const getFromLocalStorage = (name: "projects" | "goals") => {
  const state = localStorage.getItem(`${name}`);
  if (state) {
    return JSON.parse(state);
  }
  return [];
};
