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

class ClientStore {
  clients: Client[];
  currentClient: Client;

  load(newClients: Client[]) {
    this.clients = newClients;
  }
  select(client: Client) {
    this.currentClient = client;
  }
  create(newClient: Client) {
    this.clients = [...this.clients, newClient];
  }
}

const clientStore = new ClientStore();

clientStore.load(clients);

clientStore.select(dorin);

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

interface AppState {
  clientsState: ClientsState;
  projectsState: ProjectsState;
}

const appState: AppState = {
  clientsState: initialClientsState,
  projectsState: initialProjectsState
};

const tango = clientStore;

const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<div class="responsive">
  <pre><code>${JSON.stringify(tango, null, 2)}</code></pre>
</div>`;
