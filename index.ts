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
  state: ProjectsState;

  constructor(state: ProjectsState) {
    this.state = state;
  }

  getState(): ProjectsState {
    // this must return something as it is not null or any typed
    return this.state;
  }

  select(key: string) {
    return this.state[key];
  }
}

const PROJECT_LOAD = "[Project] Load";
const PROJECT_CREATE = "[Project] Create";
const PROJECT_UPDATE = "[Project] Update";
const PROJECT_DELETE = "[Project] Delete";
const PROJECT_SELECT = "[Project] Select";
const PROJECT_CLEAR = "[Project] Clear";

const loadProjects = (state, projects) => {
  console.log(projects);
  return state;
};

const selectProject = (state, project) => {
  console.log(project);
  return state;
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
    default:
      return state;
  }
};

const projectsStore = new ProjectsStore(initialProjectsState);

const currentProjects = projectsStore.select("projects");

const currentProject = projectsStore.select("currentProject");

interface AppState {
  clientsState: ClientsState;
  projectsState: ProjectsState;
}

const appState: AppState = {
  clientsState: initialClientsState,
  projectsState: initialProjectsState
};

const tango = currentProjects;

const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<div class="responsive">
  <pre><code>${JSON.stringify(tango, null, 2)}</code></pre>
</div>`;
