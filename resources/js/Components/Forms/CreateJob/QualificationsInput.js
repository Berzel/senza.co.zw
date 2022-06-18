import { useState } from "react"
import PlusIcon from "../../Icons/PlusIcon"

export default function QualificationsInput({}) {
    const [responsibilities, setResponsibilities] = useState(['', '', ''])

    return (
        <div>
            <h3 className="font-radio font-semibold text-gray-600 mt-8">
                Qualifications
            </h3>
            <p className=" text-sm mt-1 md:w-[80%] text-gray-400">
                Make sure to include duties &amp; responsibilities, plus qualifications and any relavant information about your company.
            </p>

            <ul className="mt-4 space-y-2 text-gray-700">
                {
                    responsibilities.map((r, i) => (
                        <li key={i} className="flex items-center space-x-2">
                            <svg className="h-4 w-4 fill-current text-pink-600" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                            <span>
                                {r ? r : `Edit qualification #${i+1}`}
                            </span>
                        </li>
                    ))
                }
            </ul>
            {
                responsibilities.length < 30 && (
                    <div className="mt-4">
                        <button onClick={() => responsibilities.length < 30 && setResponsibilities([...responsibilities, ''])} className="flex items-center text-sky-600 hover:text-pink-600 space-x-2 transition hover:scale-105 origin-left">
                            <PlusIcon className="h-4 w-4 fill-current" />
                            <span>Add Qualification</span>
                        </button>
                    </div>
                )
            }
        </div>
    )
}
