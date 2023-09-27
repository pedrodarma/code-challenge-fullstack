"use client"; // This is a client component 👈🏽

import { useState } from "react";
import { useAppContext } from "@/src";
import * as go from "gojs";
import { ReactDiagram } from "gojs-react";
import { colors, figs } from "@/src/models";
import { CreateNewStepModal, EditStepModal } from "../modals";

export function WorkflowGraphic() {
  const { workflowState, removeLink } = useAppContext();

  const [isInitialized, setisInitialized] = useState<boolean>(false);
  const [nodeToEdit, setNodeToEdit] = useState<string>();
  const [showModal, setShowModal] = useState(false);

  /**
 * Diagram initialization method, which is passed to the ReactDiagram component.
 * This method is responsible for making the diagram and initializing the model and any templates.
 * The model's data should not be set here, as the ReactDiagram component handles that via the other props.
 */
  function initDiagram() {
    const $ = go.GraphObject.make;
    // set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
    const diagram =
      $(go.Diagram,
        {
          "undoManager.isEnabled": true,  // must be set to allow for model change listening
          // "clickCreatingTool.archetypeNodeData": { text: "new node", color: "lightblue" },
          model: new go.GraphLinksModel(
            {
              linkKeyProperty: "key"  // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
            }),
          "BackgroundDoubleClicked": () => {
            setShowModal(true);
          },
          "ObjectSingleClicked": (node) => {
            const { from, to } = node.subject.part.data;
            const isLink = from && to;

            if (node.subject.part.data.key !== "End" && !isLink) {
              const stepName = node.subject.part.data.key;

              setNodeToEdit(stepName);
            }
          },

        });

    // auto arrange layout
    diagram.layout = $(go.LayeredDigraphLayout,
      { direction: 90, layerSpacing: 10, isRealtime: true });

    // define a simple Node template
    diagram.nodeTemplate =
      new go.Node("Auto", { alignment: go.Spot.Center }) // the Shape will automatically surround the TextBlock
        // add a Shape and a TextBlock to this "Auto" Panel
        .add(new go.Shape("RoundedRectangle",
          { strokeWidth: 0, fill: "white" })  // no border; default fill is white
          .bind("fill", "color")
          .bind("figure", "fig")
        )  // Shape.fill is bound to Node.data.color
        .add(new go.TextBlock({ margin: 8, stroke: "#333" })  // some room around the text
          .bind("text", "key"));  // TextBlock.text is bound to Node.data.key

    diagram.linkTemplate =
      $(go.Link,
        {
          routing: go.Link.AvoidsNodes,
          corner: 10
        },
        $(go.Shape),
        $(go.Shape, { toArrow: "Standard" })
      );

    return diagram;
  }

  /**
   * This function handles any changes to the GoJS model.
   * It is here that you would make any updates to your React state, which is discussed below.
   */
  function handleModelChange(event: go.IncrementalData) {
    if (!isInitialized) {
      setisInitialized(true);
      return;
    }

    const { removedLinkKeys } = event;

    if (removedLinkKeys) {
      for (const link of removedLinkKeys) {
        const [from, to] = link!.toString().split("__");
        removeLink(from, to);
      }
    }
  }

  return (
    <>
      <ReactDiagram
        initDiagram={initDiagram}
        divClassName='z-5'
        style={{ width: "100vw", height: "100vh", backgroundColor: "lightgray" }}
        nodeDataArray={workflowState.steps.map(step => {
          return { key: step.name, color: colors[step.type], fig: figs[step.type] };
        })}
        linkDataArray={
          workflowState.steps.filter(step => step.next).map(step => {
            return step.next!.map(next => ({ from: step.name, to: next, key: step.name + "__" + next })).flat();
          }).flat()
        }
        onModelChange={handleModelChange}
      />
      {nodeToEdit !== undefined && <EditStepModal nodeName={nodeToEdit} onClose={() => setNodeToEdit(undefined)} />}
      {showModal && <CreateNewStepModal onClose={() => setShowModal(false)} />}
    </>
  );
}

