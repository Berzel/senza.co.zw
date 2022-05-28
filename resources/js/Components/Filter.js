import { useState } from "react"
import Modal from "./Modal"

export default function Filter(props) {
    const [showFilters, setShowFilters] = useState(false)

    return (
        <>
            <button onClick={() => setShowFilters(true)} className="h-16 w-8 flex items-center justify-end">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
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
