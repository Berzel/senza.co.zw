import { useState } from "react";
import Modal from "./Modal";

export default function Sort(props) {
    const [showSortOptions, setShowSortOptions] = useState(false)

    return (
        <>
            <button onClick={() => setShowSortOptions(true)} className="h-16 w-8 flex items-center justify-center">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20">
                    <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
                </svg>
            </button>

            {
                showSortOptions && (
                    <Modal close={() => setShowSortOptions(false)} title="Sort jobs">
                        <div className="px-3">
                            Sort options
                        </div>
                    </Modal>
                )
            }
        </>
    )
}
