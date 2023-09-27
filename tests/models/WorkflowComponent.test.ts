import {
  WorkflowTypes,
  WorkflowComponent,
  stepTypes,
  WorkflowSteps,
  figs,
  colors,
} from "../../src/models"; // Replace 'yourfile' with the actual path to your file

// Test for WorkflowTypes
test("WorkflowTypes should contain the correct types", () => {
  const expectedTypes: WorkflowTypes[] = [
    "Init",
    "End",
    "Conditional",
    "Action",
  ];

  expect(stepTypes).toEqual(expectedTypes);
});

// Test for WorkflowComponent
test("WorkflowComponent should have the correct structure", () => {
  const workflow: WorkflowComponent = {
    name: "Example",
    type: "Init",
    next: ["End"],
  };

  expect(workflow).toEqual({
    name: expect.any(String),
    type: expect.any(String),
    next: expect.arrayContaining([expect.any(String)]),
  });
});

// Test for WorkflowSteps
test("WorkflowSteps should be an array of WorkflowComponent", () => {
  const workflowSteps: WorkflowSteps = [
    {
      name: "Step 1",
      type: "Init",
    },
    {
      name: "Step 2",
      type: "End",
    },
  ];

  expect(workflowSteps).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        name: expect.any(String),
        type: expect.any(String),
      }),
    ])
  );
});

// Test for figs
test("figs should contain the correct shapes for each type", () => {
  const expectedFigs = {
    Init: "Ellipse",
    End: "Ellipse",
    Conditional: "Diamond",
    Action: undefined,
  };

  expect(figs).toEqual(expectedFigs);
});

// Test for colors
test("colors should contain the correct colors for each type", () => {
  const expectedColors = {
    Init: "lightgreen",
    End: "red",
    Conditional: "lightblue",
    Action: "yellow",
  };

  expect(colors).toEqual(expectedColors);
});
