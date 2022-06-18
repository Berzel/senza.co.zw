import { useState } from "react"
import PlusIcon from "../../Icons/PlusIcon"

export default function ResponsibilitiesInput({}) {
    const [responsibilities, setResponsibilities] = useState(['', '', ''])

    return (
        <div>
            <h3 className="font-radio font-semibold text-gray-600 mt-8">
                Responsibilities
            </h3>
            <p className=" text-sm mt-1 md:w-[80%] text-gray-400">
                List all the job responsibilities below. You can add up to a maximum of 30 responsibilities.
            </p>

            <ul className="mt-4 space-y-3 text-gray-700">
                {
                    responsibilities.map((r, i) => (
                        <li key={i} className="flex items-center">
                            <svg className="h-4 w-4 fill-current text-pink-600" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>

                            <span className="ml-2">
                                {r ? r : `Edit responsibility #${i+1}`}
                            </span>

                            <div className="flex items-center ml-6 space-x-2">
                                <button className="w-5 h-5 rounded-full text-sky-600 hover:text-pink-600 bg-sky-50 hover:bg-pink-50 flex items-center justify-center transition hover:scale-125" title={`Edit responsibility #${i+1}`}>
                                    <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                    </svg>
                                </button>
                                <button className="w-5 h-5 rounded-full text-pink-600 hover:text-sky-600 bg-pink-50 hover:bg-sky-50 flex items-center justify-center transition hover:scale-125" title={`Remove responsibility #${i+1}`}>
                                    <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </li>
                    ))
                }
            </ul>
            {
                responsibilities.length < 30 && (
                    <div className="mt-4">
                        <button onClick={() => responsibilities.length < 30 && setResponsibilities([...responsibilities, ''])} className="flex items-center text-sky-600 hover:text-pink-600 space-x-2 transition hover:scale-105 origin-left">
                            <PlusIcon className="h-4 w-4 fill-current" />
                            <span>Add Responsibility</span>
                        </button>
                    </div>
                )
            }
        </div>
    )
}
