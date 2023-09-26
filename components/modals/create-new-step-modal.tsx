import { useAppContext } from "@/src";
import { WorkflowTypes, stepTypes } from "@/src/models";
import { useState } from "react";
import { NameTextField, PrimaryButton } from "..";

type CallbackOnClose = () => void;
type Props = {
    onClose: CallbackOnClose;
};

export function CreateNewStepModal({ onClose }: Props) {
  const { workflowState, createStep } = useAppContext();

  const [stepType, setStepType] = useState<WorkflowTypes>();
  const [stepName, setStepName] = useState<string>();

  return (
    <div className="flex justify-center items-center fixed top-0 left-0 right-0 inset-0 z-50 outline-none focus:outline-none bg-black h-screen bg-opacity-50">
      <div
        className="flex justify-center items-center fixed top-0 left-0 right-0 inset-0 z-50 outline-none focus:outline-none bg-black h-screen bg-opacity-50"
        onClick={() => onClose()}></div>

      <div className="w-full sm:w-10/12 lg:w-6/12 xl:w-4/12 p-4 bg-slate-50 rounded-lg shadow-lg z-50 text-black">
        <h2 className={`text-2xl font-semibold mb-2 pb-2 border-b`}>
                    New Node
        </h2>

        {stepTypes.filter(type => (type !== "End" && type !== "Init") && (stepType === type || !stepType)).map(type => {
          return <div key={type} className={`group rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30`}
            onClick={() => {
              setStepType(type);
            }}>
            <h2 className={`text-xl font-semibold`}>
              {type}
            </h2>
          </div>;
        })}

        {stepType &&
                    <>
                      <div className="w-full mt-4">
                        <NameTextField defaultValue={stepName ?? ""}
                          onChange={(name) => setStepName(name)}
                          onSubmit={() => {
                            createStep(stepType, stepName?.trim() ?? "");
                            onClose();
                          }} />
                      </div>

                      <div className="w-full mt-4">
                        <PrimaryButton text="Ok"
                          isDisabled={!stepType || !stepName}
                          onTap={() => {
                            createStep(stepType, stepName?.trim() ?? "");
                            onClose();
                          }} />
                      </div>
                    </>
        }
      </div>
    </div>
  );
}
