import { ClickAwayListener } from "@mui/base"
import { useState } from "react"

export default function ContractTypeInput({contractType, setContractType}) {
    const [showContractTypes, setShowContractTypes] = useState(false)
    const contractTypes = ['Full Time', 'Part Time', 'Fixed Term', 'Zero Hours', 'Internship']

    function selectContractType(type) {
        setContractType(type)
        setShowContractTypes(false)
    }

    return (
        <div className="flex items-center space-x-2 basis-[50%] flex-shrink-0 mt-6">
            <div className="h-12 w-12 bg-orange-600 rounded-full">

            </div>
            <div>
                <div className={`flex items-center relative ${showContractTypes && 'z-10'}`}>
                    <button type="button" onClick={() => setShowContractTypes(true)} className="text-gray-700 font-semibold hover:text-sky-600">
                        {contractType}
                    </button>
                    <button type="button" onClick={() => setShowContractTypes(true)} className="ml-2 w-5 h-5 rounded-full text-sky-600 hover:text-pink-600 bg-sky-50 hover:bg-pink-50 flex items-center justify-center transition hover:scale-125">
                        <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                    </button>
                    {
                        showContractTypes && (
                            <ClickAwayListener onClickAway={() => setShowContractTypes(false)}>
                                <div className="absolute top-0 left-0 min-w-[7rem] bg-white border py-2 rounded-lg shadow-lg">
                                    {
                                        contractTypes.map((type, i) => (
                                            <button onClick={() => selectContractType(type)} type="button" key={i} className="py-1 px-3 block w-full text-left hover:bg-pink-100 hover:text-pink-600 hover:font-semibold">
                                                {type}
                                            </button>
                                        ))
                                    }
                                </div>
                            </ClickAwayListener>
                        )
                    }
                </div>
                <p className="text-gray-600 text-sm">Contract Type</p>
            </div>
        </div>
    )
}
