import useWorkflowState from "./states/workflow.state";

type WorkflowActions = ReturnType<typeof useWorkflowState>[1];

export interface AppProviderType extends WorkflowActions {
  workflowState: ReturnType<typeof useWorkflowState>[0];
}
