import { useState } from "react";
import { CreateNewStepModal } from "@/components/modals";

export function RoundedButton() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className='fixed right-10 bottom-10 bg-gray-900 rounded-full flex text-center items-center justify-center hover:border-gray-300 hover:bg-gray-700 cursor-pointer z-10 w-12 h-12'
                onClick={() => {
                    setShowModal(true);
                }}>
                <span className='text-3xl pb-1'>+</span>
            </div>
            {showModal && <CreateNewStepModal onClose={() => setShowModal(false)} />}
        </>
    );
}

