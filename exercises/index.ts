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

interface CleanCodeState {
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

const initialCleanCodeState: CleanCodeState = {
  projects,
  currentProject: newProject
};
