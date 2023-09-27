import { useEffect, useState } from "react";
import { WorkflowSteps, WorkflowComponent, WorkflowTypes } from "../models";
import { toast } from "react-hot-toast";

export default function useWorkflowState() {
  //  ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  const [workflowState, setWorkflowState] = useState({
    steps: [] as WorkflowSteps,
    isLoading: false,
  });

  useEffect(() => {
    setWorkflowState(currentState => ({
      ...currentState, steps: [
        { name: "Init", type: "Init", next: ["Condition 1", "Condition 2"] },
        { name: "Condition 1", type: "Conditional", next: ["Action 1"] },
        { name: "Action 1", type: "Action", next: ["Action 2"] },
        { name: "Action 2", type: "Action", next: ["End"] },
        { name: "Condition 2", type: "Conditional", next: ["Action 3"] },
        { name: "Action 3", type: "Action", next: ["Condition 3", "Condition 4"] },
        { name: "Condition 3", type: "Conditional", next: ["End"] },
        { name: "Condition 4", type: "Conditional", next: ["Action 4"] },
        { name: "Action 4", type: "Action", next: ["End"] },
        { name: "End", type: "End" }
      ]
    }));
  }, []);

  //  ╔═╗╦═╗╦╔ ╗╔═╗╔╦╗╔═╗
  //  ╠═╝╠╦╝║║ ║╠═╣ ║ ║╣
  //  ╩  ╩╚═╩╚╝ ╩ ╩ ╩ ╚═╝
  function _startLoading() {
    setWorkflowState(currentState => ({ ...currentState, isLoading: true }));
  }

  function _stopLoading() {
    setWorkflowState(currentState => ({ ...currentState, isLoading: false }));
  }

  function _createStep(type: WorkflowTypes, name: string) {
    if (name.length === 0) {
      toast.error("The step name should not be empty");
      return;
    }

    const isUnique = _checkUniqueName(name);

    if (isUnique) {
      setWorkflowState(currentState => ({ ...currentState, steps: [...workflowState.steps, { name: name.trim(), type }] }));
    }
    else {
      toast.error("The name should be unique in the workflow");
    }
  }

  function _updateStep(prevStepName: string, updatedStep: WorkflowComponent) {
    try {
      const updatedSteps = workflowState.steps.map(step => step.name === prevStepName ? updatedStep : step);
      const updatedStepsAndNext = updatedSteps.map(step => ({ ...step, next: step.next?.map(name => name === prevStepName ? updatedStep.name : name) }));
      setWorkflowState(currentState => ({ ...currentState, steps: updatedStepsAndNext }));
    } catch {
      toast.error("Error! Unable to update.");
    }
  }

  function _removeStep(name: string) {
    const canRemove = _canRemoveStep();
    if (canRemove) {
      setWorkflowState(currentState => ({ ...currentState, steps: workflowState.steps.filter(step => step.name !== name) }));
    } else {
      toast.error("The workflow should have at least one Conditional and one Action.");
    }
  }

  function _resetWorkflow() {
    setWorkflowState(currentState => ({
      ...currentState, steps: [
        { name: "Init", type: "Init", next: ["Condition Example"] },
        { name: "Condition Example", type: "Conditional", next: ["Action Example"] },
        { name: "Action Example", type: "Action", next: ["End"] },
        { name: "End", type: "End" }
      ]
    }));
  }

  function _checkUniqueName(name: string) {
    const isUnique = !workflowState.steps.map(step => step.name).includes(name.trim());
    return isUnique;
  }

  function _getCurrentStepByName(name: string) {
    const step = workflowState.steps.filter(step => step.name === name)[0];
    return step;
  }

  function _canRemoveStep(): boolean {
    const conditionalCounter = workflowState.steps.filter(step => step.type === "Conditional").length;
    const actionsCounter = workflowState.steps.filter(step => step.type === "Action").length;
    return actionsCounter > 1 && conditionalCounter > 1;
  }

  //  ╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  const _actions_ = {
    createStep: _createStep,
    updateStep: _updateStep,
    removeStep: _removeStep,
    resetWorkflow: _resetWorkflow,
  };

  return [workflowState, _actions_] as [typeof workflowState, typeof _actions_];
}
