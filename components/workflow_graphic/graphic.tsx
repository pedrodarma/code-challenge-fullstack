"use client"; // This is a client component 👈🏽

import { useAppContext } from "@/src";
import * as go from "gojs";
import { useEffect, useState } from "react";
import { colors, figs } from "@/src/models";
import { EditStepModal } from "../modals";

export function WorkflowGraphic() {
    const { workflowState } = useAppContext();

    const [diagram, setDiagram] = useState<go.Diagram>();
    const [nodeToEdit, setNodeToEdit] = useState<string>();

    useEffect(() => {
        try {
            var $ = go.GraphObject.make;  // for conciseness in defining templates

            const myDiagram =
                new go.Diagram("diagramWorkflow",  // create a Diagram for the HTML Div element
                    {
                        "undoManager.isEnabled": true,
                        "ObjectSingleClicked": (node) => {
                            console.log('click', node.subject.part.data.key);

                            if (node.subject.part.data.key !== 'End') {
                                const stepName = node.subject.part.data.key;

                                setNodeToEdit(stepName);
                            }
                        },
                    });  // enable undo & redo

            // auto arrange layout
            myDiagram.layout = $(go.LayeredDigraphLayout,
                { direction: 90, layerSpacing: 10, isRealtime: true });

            // define a simple Node template
            myDiagram.nodeTemplate =
                new go.Node("Auto", { alignment: go.Spot.Center }) // the Shape will automatically surround the TextBlock
                    // add a Shape and a TextBlock to this "Auto" Panel
                    .add(new go.Shape("RoundedRectangle",
                        { strokeWidth: 0, fill: "white" })  // no border; default fill is white
                        .bind("fill", "color")
                        .bind("figure", "fig")
                    )  // Shape.fill is bound to Node.data.color
                    .add(new go.TextBlock({ margin: 8, stroke: "#333" })  // some room around the text
                        .bind("text", "key"));  // TextBlock.text is bound to Node.data.key

            setDiagram(myDiagram);

        } catch (error) {

        }

    }, [])

    useEffect(() => {
        if (diagram) {
            diagram.model = new go.GraphLinksModel(
                // Nodes
                workflowState.steps.map(step => {
                    return { key: step.name, color: colors[step.type], fig: figs[step.type] };
                }),
                // Connections
                workflowState.steps.filter(step => step.next).map(step => {
                    return step.next!.map(next => ({ from: step.name, to: next })).flat();
                }).flat()
            );
        }
    }, [workflowState, diagram])

    return (
        <>
            <div id="diagramWorkflow" className="z-5" style={{ width: "100vw", height: '100vh', backgroundColor: 'lightgray' }}></div>
            {nodeToEdit !== undefined && <EditStepModal nodeName={nodeToEdit} onClose={() => setNodeToEdit(undefined)} />}
        </>
    );
}


