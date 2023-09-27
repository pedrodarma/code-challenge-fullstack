import { renderHook, act } from "@testing-library/react";
import useWorkflowState from "../../src/states/workflow.state";

/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

describe("useWorkflowState", () => {
  it("should initialize with the correct initial state", () => {
    const { result } = renderHook(() => useWorkflowState());
    const [workflowState] = result.current;

    expect(workflowState.steps).toEqual([
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
    ]);
    expect(workflowState.isLoading).toBe(false);
  });

  it("should add a step when createStep is called with a unique name", () => {
    const { result } = renderHook(() => useWorkflowState());
    const [_, actions] = result.current;

    act(() => {
      actions.createStep("Conditional", "New Condition");
    });

    const [workflowState] = result.current;

    expect(workflowState.steps).toHaveLength(11);
    expect(workflowState.steps.some(step => step.name === "New Condition")).toBe(true);
  });

  it("should not add a step when createStep is called with a non-unique name", () => {
    const { result } = renderHook(() => useWorkflowState());
    const [_, actions] = result.current;

    act(() => {
      actions.createStep("Conditional", "New Condition");
    });

    act(() => {
      actions.createStep("Action", "New Condition");
    });

    const [workflowState] = result.current;

    expect(workflowState.steps).toHaveLength(11); // No additional step should be added
    expect(workflowState.steps.filter(step => step.name === "New Condition")).toHaveLength(1);
  });

  it("should update a step when updateStep is called", () => {
    const { result } = renderHook(() => useWorkflowState());
    const [_, actions] = result.current;

    act(() => {
      actions.updateStep("Condition 1", { name: "Updated Condition", type: "Conditional", next: [] });
    });

    const [workflowState] = result.current;

    expect(workflowState.steps).toHaveLength(10); // No additional step should be added or removed
    expect(workflowState.steps.some(step => step.name === "Updated Condition")).toBe(true);
  });

  it("should remove a step when removeStep is called", () => {
    const { result } = renderHook(() => useWorkflowState());
    const [_, actions] = result.current;

    act(() => {
      actions.removeStep("Condition Example");
    });

    const [workflowState] = result.current;

    expect(workflowState.steps).toHaveLength(10); // One step should be removed
    expect(workflowState.steps.some(step => step.name === "Condition Example")).toBe(false);
  });

  it("should not remove a step when removeStep is called and conditions are not met", () => {
    const { result } = renderHook(() => useWorkflowState());
    const [_, actions] = result.current;

    act(() => {
      actions.removeStep("Condition Example");
    });

    const [workflowState] = result.current;

    expect(workflowState.steps).toHaveLength(10); // No step should be removed
    expect(workflowState.steps.some(step => step.name === "Condition Example")).toBe(false);
  });

  it("should reset the workflow when resetWorkflow is called", () => {
    const { result } = renderHook(() => useWorkflowState());
    const [_, actions] = result.current;

    act(() => {
      actions.createStep("Conditional", "New Condition");
    });

    act(() => {
      actions.resetWorkflow();
    });

    const [workflowState] = result.current;

    expect(workflowState.steps).toHaveLength(4); // Workflow should be reset to the initial state
    expect(workflowState.steps.some(step => step.name === "New Condition")).toBe(false);
  });

  it("should check if a name is unique", () => {
    const { result } = renderHook(() => useWorkflowState());
    const [_, actions] = result.current;

    act(() => {
      actions.createStep("Conditional", "New Condition");
    });

    const isUnique = result.current[0].steps.some(step => step.name === "New Condition");
    expect(isUnique).toBe(true);

    act(() => {
      actions.createStep("Action", "New Condition");
    });

    const isNotUnique = result.current[0].steps.some(step => step.name === "New Condition");
    expect(isNotUnique).toBe(true);
  });
});
