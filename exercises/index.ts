interface CleanCode {
  name: string;
  startDate: Date | null;
  deadline: Date | null;
  inProgress: boolean;
  progressAchieved: number;
}

const learnTypescript: CleanCode = {
  name: "Learn Typescript",
  startDate: new Date("2020-02-18"),
  deadline: new Date("2020-03-14"),
  inProgress: true,
  progressAchieved: 5
};

const learnTesting: CleanCode = {
  name: "TDD with Cypress",
  startDate: new Date("2020-02-18"),
  deadline: new Date("2020-03-14"),
  inProgress: false,
  progressAchieved: 0
};

const projects: CleanCode[] = [learnTypescript, learnTesting];

interface CleanCodesState {
  projects: CleanCode[];
  currentProject: CleanCode;
}

const newProject: CleanCode = {
  name: "",
  startDate: null,
  deadline: null,
  inProgress: false,
  progressAchieved: 0
};

const initialCleanCodesState: CleanCodesState = {
  projects,
  currentProject: newProject
};

class ProjectsStore {
  state: CleanCodesState;

  constructor(state: CleanCodesState) {
    this.state = state;
  }

  getState(): CleanCodesState {
    return this.state;
  }

  select(key: string) {
    return this.state[key];
  }
}

interface Action {
  type: string;
  payload?: any;
}

const PROJECT_CREATE = "[Project] Create";
const PROJECT_DELETE = "[Project] Delete";

const createProjects = (state, projects) => {
  console.log(projects);
  return state;
};

const deleteProject = (state, project) => {
  console.log(project);
  return state;
};

const projectsReducer = (
  state: CleanCodesState = initialCleanCodesState,
  action: Action
) => {
  switch (action.type) {
    case PROJECT_CREATE:
      return createProjects(state, action.payload);
    case PROJECT_DELETE:
      return deleteProject(state, action.payload);
    default:
      return state;
  }
};

const projectsStore = new ProjectsStore(initialCleanCodesState);

const selectedProjecs = projectsStore.select("projects");
