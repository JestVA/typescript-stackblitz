import "./style.css";
import { Client, BaseEntity } from "./libs";

const dorin: Client = {
  id: "1",
  firstName: "Dorin",
  lastName: "Dumitrascuta",
  company: "Fintech"
};

const john: Client = {
  id: "2",
  firstName: "Code",
  lastName: "Dojo",
  company: "Super Company"
};

const clients: Client[] = [dorin, john];

interface ClientsState {
  clients: Client[];
  currentClient: Client;
}

const newClient: Client = {
  id: null,
  firstName: "",
  lastName: "",
  company: ""
};

const initialClientsState: ClientsState = {
  clients,
  currentClient: newClient
};

class ClientsStore {
  state: ClientsState;

  constructor(state: ClientsState) {
    this.state = state;
  }

  getState(): ClientsState {
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

const CLIENT_LOAD = "[Client] Load";
const CLIENT_CREATE = "[Client] Create";
const CLIENT_UPDATE = "[Client] Update";
const CLIENT_DELETE = "[Client] Delete";
const CLIENT_SELECT = "[Client] Select";
const CLIENT_CLEAR = "[Client] Clear";

const loadClients = (state, clients) => {
  console.log(clients);
  return state;
};

const selectClient = (state, client) => {
  console.log(client);
  return state;
};

const clientsReducer = (
  state: ClientsState = initialClientsState,
  action: Action
) => {
  switch (action.type) {
    case CLIENT_LOAD:
      return loadClients(state, action.payload);
    case CLIENT_SELECT:
      return selectClient(state, action.payload);
    default:
      return state;
  }
};

const clientsStore = new ClientsStore(initialClientsState);

const currentClient = clientsStore.select("currentClient");

interface Project extends BaseEntity {
  title: string;
  description: string;
  completed: boolean;
}

const petProject: Project = {
  id: "1",
  title: "Make personal blog",
  description:
    "A personal blog to talk about interesting philosophy behind being a dev and programming.",
  completed: false
};

const hellProject: Project = {
  id: "2",
  title: "Make a multi step progression flow",
  description: "Go back and forward and next and jump steps at a whim",
  completed: true
};

const superProject: Project = {
  id: "3",
  title: "Make Galois.ai a real LTD company",
  description: "Hire people and give them code to crunch",
  completed: false
};

const newProject: Project = {
  id: null,
  title: "",
  description: "",
  completed: false
};

const projects: Project[] = [petProject, hellProject];

interface ProjectsState {
  projects: Project[];
  currentProject: Project;
}

const initialProjectsState: ProjectsState = {
  projects,
  currentProject: newProject
};

class ProjectsStore {
  reducer;
  state: ProjectsState;

  constructor(state: ProjectsState, reducer) {
    this.state = state;
    this.reducer = reducer;
  }

  getState(): ProjectsState {
    // this must return something as it is not null or any typed
    return this.state;
  }

  select(key: string) {
    return this.state[key];
  }

  dispatch(action: Action) {
    this.state = this.reducer(this.state, action);
  }
}

const PROJECT_LOAD = "[Project] Load";
const PROJECT_SELECT = "[Project] Select";
const PROJECT_CLEAR = "[Project] Clear";
const PROJECT_CREATE = "[Project] Create";
const PROJECT_UPDATE = "[Project] Update";
const PROJECT_DELETE = "[Project] Delete";

const loadProjects = (state, projects): ProjectsState => {
  return {
    projects,
    currentProject: state.currentProject
  };
};

const selectProject = (state, project): ProjectsState => {
  return {
    projects: state.projects,
    currentProject: project
  };
};

const clearProject = (state): ProjectsState => {
  return {
    projects: state.projects,
    currentProject: null
  };
};

const createProject = (state, project): ProjectsState => {
  return {
    projects: [...state.projects, project],
    currentProject: state.currentProject
  };
};

const updateProject = (state, project): ProjectsState => {
  return {
    projects: state.projects.map(p =>
      p.id === project.id ? Object.assign({}, project) : p
    ),
    currentProject: state.currentProject
  };
};

const deleteProject = (state, project): ProjectsState => {
  return {
    projects: state.projects.filter(p => p.id !== project.id),
    currentProject: state.currentProject
  };
};

const projectsReducer = (
  state: ProjectsState = initialProjectsState,
  action: Action
) => {
  switch (action.type) {
    case PROJECT_LOAD:
      return loadProjects(state, action.payload);
    case PROJECT_SELECT:
      return selectProject(state, action.payload);
    case PROJECT_CLEAR:
      return clearProject(state);
    case PROJECT_CREATE:
      return createProject(state, action.payload);
    case PROJECT_UPDATE:
      return updateProject(state, action.payload);
    case PROJECT_DELETE:
      return deleteProject(state, action.payload);
    default:
      return state;
  }
};

const projectsStore = new ProjectsStore(initialProjectsState, projectsReducer);

// if we put this dispatcher below the constants for allprojects and current project, the ui does not update (because this is not React, hah!)
projectsStore.dispatch({ type: PROJECT_CREATE, payload: superProject });

// handy ways to have selectors for each bit of isolated state ( when we do not have app state interfce enabled )
const allProjects = projectsStore.select("projects");

const currentProject = projectsStore.select("currentProject");

interface AppState {
  // clientsState: ClientsState;
  projectsState: ProjectsState;
}

const appState: AppState = {
  // clientsState: initialClientsState,
  projectsState: initialProjectsState
};

// HTML context rendering

const tango = allProjects;

const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<div class="responsive">
  <pre><code>${JSON.stringify(tango, null, 2)}</code></pre>
</div>`;
