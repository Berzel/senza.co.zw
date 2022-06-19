import { ClickAwayListener } from "@mui/base"
import { useState } from "react"

export default function ExperienceInput({experience, setExperience}) {
    const [showXpOptions, setShowXpOptions] = useState(false)
    const xpOptions = [{min:0,max:1},{min:2, max:5},{min:6,max:10},{min:11,max:25}]

    function setRange(range) {
        setExperience({...experience, ...range})
        setShowXpOptions(false)
    }

    return (
        <div className="flex items-start md:items-center space-x-2">
            <div className="h-6 md:h-12 w-6 md:w-12 bg-pink-600 rounded-full mt-0.5 md:mt-0">

            </div>
            <div>
                <div className={`flex items-center relative ${showXpOptions && 'z-10'}`}>
                    <button type="button" onClick={() => setShowXpOptions(true)} className="text-gray-700 font-semibold hover:text-sky-600">
                        {experience.min} - {experience.max} {experience.period}
                    </button>
                    <button type="button" onClick={() => setShowXpOptions(true)} className="ml-2 w-5 h-5 rounded-full text-sky-600 hover:text-pink-600 bg-sky-50 hover:bg-pink-50 flex items-center justify-center transition hover:scale-125">
                        <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                    </button>
                    {
                        showXpOptions && (
                            <ClickAwayListener onClickAway={() => setShowXpOptions(false)}>
                                <div className="absolute top-0 left-0 min-w-[7rem] bg-white border py-2 rounded-lg shadow-lg">
                                    {
                                        xpOptions.map((o, i) => (
                                            <button onClick={() => setRange(o)} type="button" key={i} className="py-1 px-3 block w-full text-left hover:bg-pink-100 hover:text-pink-600 hover:font-semibold">
                                                {o.min} - {o.max}
                                            </button>
                                        ))
                                    }
                                </div>
                            </ClickAwayListener>
                        )
                    }
                </div>
                <p className="text-gray-600 text-sm">Experience</p>
            </div>
        </div>
    )
}
