import { useState } from "react"
import FilterIcon from "./FilterIcon"
import Modal from "./Modal"

export default function Filter(props) {
    const [showFilters, setShowFilters] = useState(false)

    return (
        <>
            <button onClick={() => setShowFilters(true)} className="h-16 w-8 flex items-center justify-end">
                <FilterIcon className="h-5 w-5" />
            </button>

            {
                showFilters && (
                    <Modal close={() => setShowFilters(false)} title="Refine search">
                        <div className="px-3">
                            Filter options
                        </div>
                    </Modal>
                )
            }
        </>
    )
}
