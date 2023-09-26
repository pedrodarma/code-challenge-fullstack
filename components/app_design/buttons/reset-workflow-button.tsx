import { useAppContext } from "@/src";

export function ResetWorkflowButton() {
    const { resetWorkflow } = useAppContext();

    return (
        <div className='fixed left-10 bottom-10 bg-gray-500 rounded-full flex text-center items-center justify-center hover:border-gray-300 hover:bg-gray-700 cursor-pointer z-10 h-12 cursor-pointer'
            onClick={() => resetWorkflow()}>
            <span className='px-4'>Clean Workflow</span>
        </div>
    );
}

