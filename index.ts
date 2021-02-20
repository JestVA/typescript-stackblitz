import "./style.css";
import { Client } from "./libs";

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

const tango = clients;

const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<div class="responsive">${JSON.stringify(tango)}</div>`;
