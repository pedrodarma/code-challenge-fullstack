export type WorkflowTypes = "Init" | "End" | "Conditional" | "Action";

export interface WorkflowComponent {
  name: string;
  type: WorkflowTypes;
  next?: Array<string>;
}

export const stepTypes = <Array<WorkflowTypes>>["Init", "End", "Conditional", "Action"];

export type WorkflowSteps = Array<WorkflowComponent>;

export const figs = {
  Init: "Ellipse",
  End: "Ellipse",
  Conditional: "Diamond",
  Action: undefined,
};

export const colors = {
  Init: "lightgreen",
  End: "red",
  Conditional: "lightblue",
  Action: "yellow",
};
