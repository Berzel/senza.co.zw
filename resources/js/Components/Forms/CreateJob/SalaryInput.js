import { ClickAwayListener } from "@mui/base"
import { useState } from "react"

export default function SalaryInput({salary, setSalary}) {
    const [showMinSalaryOptions, setShowMinSalaryOptions] = useState(false)
    const [showMaxSalaryOptions, setShowMaxSalaryOptions] = useState(false)
    const salaryOptions = [100, 250, 500, 1000, 1500, 2000, 2500]

    function setMinSalary(minSalary) {
        const maxSalary = salary.max <= minSalary
            ? salaryOptions[salaryOptions.indexOf(minSalary) + 1]
            : salary.max

        setSalary({
            ...salary,
            min: minSalary,
            max: maxSalary
        })

        setShowMinSalaryOptions(false)
    }

    function setMaxSalary(maxSalary) {
        const minSalary = salary.min >= maxSalary
            ? salaryOptions[salaryOptions.indexOf(maxSalary) - 1]
            : salary.min

        setSalary({
            ...salary,
            min: minSalary,
            max: maxSalary
        })

        setShowMaxSalaryOptions(false)
    }

    return (
        <div className="flex items-center space-x-2">
            <div className="h-12 w-12 bg-green-600 rounded-full">

            </div>
            <div>
                <div className="flex items-center text-gray-700">
                    <div className={`flex items-center relative ${showMinSalaryOptions && 'z-10'}`}>
                        <button type="button" onClick={() => setShowMinSalaryOptions(true)} className="text-gray-700 font-semibold hover:text-sky-600">
                            ${salary.min}
                        </button>
                        <button type="button" onClick={() => setShowMinSalaryOptions(true)} className="ml-2 w-5 h-5 rounded-full text-sky-600 hover:text-pink-600 bg-sky-50 hover:bg-pink-50 flex items-center justify-center transition hover:scale-125">
                            <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>
                        </button>
                        {
                            showMinSalaryOptions && (
                                <ClickAwayListener onClickAway={() => setShowMinSalaryOptions(false)}>
                                    <div className="absolute top-0 left-0 min-w-[7rem] bg-white border py-2 rounded-lg shadow-lg">
                                        {
                                            salaryOptions.filter((o, i) => i < salaryOptions.length - 1).map((o) => (
                                                <button onClick={() => setMinSalary(o)} type="button" key={o} className="py-1 px-3 block w-full text-left hover:bg-pink-100 hover:text-pink-600 hover:font-semibold">
                                                    ${o}
                                                </button>
                                            ))
                                        }
                                    </div>
                                </ClickAwayListener>
                            )
                        }
                    </div>
                    <span className="mx-2  font-semibold">
                        &mdash;
                    </span>
                    <div className={`flex items-center relative ${showMaxSalaryOptions && 'z-10'}`}>
                        <button type="button" onClick={() => setShowMaxSalaryOptions(true)} className="text-gray-700 font-semibold hover:text-sky-600">
                            ${salary.max}
                        </button>
                        <button type="button" onClick={() => setShowMaxSalaryOptions(true)} className="ml-2 w-5 h-5 rounded-full text-sky-600 hover:text-pink-600 bg-sky-50 hover:bg-pink-50 flex items-center justify-center transition hover:scale-125">
                            <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>
                        </button>
                        {
                            showMaxSalaryOptions && (
                                <ClickAwayListener onClickAway={() => setShowMaxSalaryOptions(false)}>
                                    <div className="absolute top-0 left-0 min-w-[7rem] bg-white border py-2 rounded-lg shadow-lg">
                                        {
                                            salaryOptions.filter((o, i) => i > 0).map((o) => (
                                                <button onClick={() => setMaxSalary(o)} type="button" key={o} className="py-1 px-3 block w-full text-left hover:bg-pink-100 hover:text-pink-600 hover:font-semibold">
                                                    ${o}
                                                </button>
                                            ))
                                        }
                                    </div>
                                </ClickAwayListener>
                            )
                        }
                    </div>
                </div>

                <p className="text-gray-600 text-sm">{salary.period} Salary</p>
            </div>
        </div>
    )
}
