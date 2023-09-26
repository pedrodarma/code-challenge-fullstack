import { useEffect, useState } from "react";
import { WorkflowSteps, WorkflowComponent, WorkflowTypes } from "../models";

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
                { name: 'Init', type: 'Init', next: ['Condition 1', 'Condition 2'] },
                { name: 'Condition 1', type: 'Conditional', next: ['Action 1'] },
                { name: 'Action 1', type: 'Action', next: ['Action 2'] },
                { name: 'Action 2', type: 'Action', next: ['End'] },
                { name: 'Condition 2', type: 'Conditional', next: ['Action 3'] },
                { name: 'Action 3', type: 'Action', next: ['Condition 3', 'Condition 4'] },
                { name: 'Condition 3', type: 'Conditional', next: ['End'] },
                { name: 'Condition 4', type: 'Conditional', next: ['Action 4'] },
                { name: 'Action 4', type: 'Action', next: ['End'] },
                { name: 'End', type: 'End' }
            ]
        }));
    }, [])

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
        setWorkflowState(currentState => ({ ...currentState, steps: [...workflowState.steps, { name, type }] }));
    }

    function _updateStep(prevStepName: string, updatedStep: WorkflowComponent) {
        const updatedSteps = workflowState.steps.map(step => step.name === prevStepName ? updatedStep : step)
        const updatedStepsAndNext = updatedSteps.map(step => ({ ...step, next: step.next?.map(name => name === prevStepName ? updatedStep.name : name) }))
        setWorkflowState(currentState => ({ ...currentState, steps: updatedStepsAndNext }));
    }

    function _removeStep(name: string) {
        setWorkflowState(currentState => ({ ...currentState, steps: workflowState.steps.filter(step => step.name !== name) }));
    }

    function _resetWorkflow() {
        setWorkflowState(currentState => ({
            ...currentState, steps: [
                { name: 'Init', type: 'Init', next: ['Condition Example'] },
                { name: 'Condition Example', type: 'Conditional', next: ['Action Example'] },
                { name: 'Action Example', type: 'Action', next: ['End'] },
                { name: 'End', type: 'End' }
            ]
        }));
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
