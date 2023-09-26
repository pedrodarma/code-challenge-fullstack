import { useAppContext } from "@/src";
import { WorkflowComponent, WorkflowTypes, stepTypes } from "@/src/models";
import { useEffect, useState } from "react";
import { NameTextField, PrimaryButton } from "..";

type CallbackOnClose = () => void;
type Props = {
    nodeName: string;
    onClose: CallbackOnClose;
};

export function EditStepModal({ nodeName, onClose }: Props) {
  const { workflowState, updateStep, removeStep } = useAppContext();

  const [node, setStep] = useState<WorkflowComponent>();

  useEffect(() => {
    const node = workflowState.steps.filter(step => step.name === nodeName)[0];
    setStep(node);
  }, [nodeName, workflowState.steps]);

  return (
    <div className="flex justify-center items-center fixed top-0 left-0 right-0 inset-0 z-50 outline-none focus:outline-none bg-black h-screen bg-opacity-50">
      <div
        className="flex justify-center items-center fixed top-0 left-0 right-0 inset-0 z-50 outline-none focus:outline-none bg-black h-screen bg-opacity-50"
        onClick={() => onClose()}></div>

      <div className="w-full sm:w-10/12 lg:w-6/12 xl:w-4/12 p-4 bg-slate-50 rounded-lg shadow-lg z-50 text-black">
        <div className="flex flex-row justify-between  mb-2 pb-2 border-b">
          <h2 className={`text-2xl font-semibold`}>
                        Edit Node
          </h2>
          {node?.type !== "Init" && node?.type !== "End" &&
                        <h2 className={`text-lg hover:font-semibold cursor-pointer`}
                          onClick={() => {
                            removeStep(node!.name);
                            onClose();
                          }}>
                            remove
                        </h2>
          }
        </div>

        {node?.type !== "Init" && node?.type !== "End" &&
                    <div className="w-full py-2">
                      <label className="block uppercase text-slate-600 text-xs font-bold my-2">
                            Node type
                      </label>
                      <div className="w-full flex flex-row">
                        {stepTypes.filter(type => (type !== "End" && type !== "Init")).map((type: WorkflowTypes) => {
                          const isSelected = node?.type === type;

                          const isSelectedStyle = " border-gray-300 bg-emerald-400 dark:border-neutral-700 dark:bg-emerald-400 text-white ";

                          return <div key={type} className={`w-full text-center rounded-lg ${isSelected ? isSelectedStyle : " border border-transparent "} px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mx-1 cursor-pointer`}
                            onClick={() => {
                              setStep({ ...node!, type: type });
                            }}>
                            <h2 className={`text-xl font-semibold`}>
                              {type}
                            </h2>
                          </div>;
                        })}
                      </div>
                    </div>
        }

        {node?.type !== "Init" && node?.type !== "End" &&
                    <div className="w-full mt-4">
                      <NameTextField defaultValue={node?.name ?? ""}
                        onChange={(name) => setStep({ ...node!, name: name.trim() })}
                        onSubmit={() => {
                          // createStep(stepType, stepName ?? '');
                          // setStep({ ...node!, name })
                          // onClose();
                        }} />
                    </div>
        }

        <div className="w-full mt-4 border-t border-b py-2">
          <label className="block uppercase text-slate-600 text-xs font-bold my-2">
                        Connect to
          </label>
          <div className="w-full flex flex-wrap">
            {workflowState.steps.filter(step => step.name !== nodeName && step.name !== "Init").map(step => {
              const isSelected = node?.next?.includes(step.name);

              const isSelectedStyle = " border-gray-300 bg-emerald-400 dark:border-neutral-700 dark:bg-emerald-400 text-white ";

              return <div key={step.name} className={`text-center rounded-lg ${isSelected ? isSelectedStyle : " border border-transparent "} px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mx-1 cursor-pointer`}
                onClick={() => {
                  if (node) {
                    const isNewConnection = !node.next?.includes(step.name);

                    if (isNewConnection) {
                      // ADD
                      setStep({ ...node, next: [...(node.next ?? []), step.name] });
                    }
                    if (!isNewConnection) {
                      // REMOVE
                      setStep({ ...node, next: node.next!.filter(name => name !== step.name) });
                    }
                  }
                }}>
                <h2 className={`text-xl font-semibold`}>
                  {step.name}
                </h2>
              </div>;
            })}
          </div>
        </div>

        <div className="w-full mt-4">
          <PrimaryButton text="Save"
            onTap={() => {
              if (node) {
                updateStep(nodeName, node);
                onClose();
              }
            }} />
        </div>
      </div>
    </div>
  );
}
