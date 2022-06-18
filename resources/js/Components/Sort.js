import { useState } from "react";
import Modal from "./Modal";
import SortIcon from "./Icons/SortIcon";

export default function Sort(props) {
    const [showSortOptions, setShowSortOptions] = useState(false)

    return (
        <>
            <button onClick={() => setShowSortOptions(true)} className="h-16 w-8 flex items-center justify-center">
                <SortIcon className="h-6 w-6 fill-current" />
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
