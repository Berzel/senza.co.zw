import { useEffect, useState } from "react"

export default function TitleInput({title, setTitle}) {
    const [isFocused, setIsFocused] = useState(false)
    const [value, setValue] = useState('Kickass Laravel Developer')

    useEffect(() => {
        if (isFocused) document.getElementById('titleInput').focus()
    }, [isFocused])

    return (
        <>
            <div>
                <label className="font-radio font-semibold text-gray-600">
                    Job Title / Position
                </label>
                <div className="flex items-center  space-x-4 mt-2">
                    {
                        !isFocused ? (
                            <button onClick={() => setIsFocused(true)} className={`${!isFocused ? 'block':'hidden'} font-radio text-3xl font-semibold text-gray-700 cursor-pointer`}>
                                {value}
                            </button>
                        ) : (
                            <input id="titleInput" type="text" onBlur={() => setIsFocused(false)} value={value} onChange={e => setValue(e.target.value)} className={`${isFocused ? 'block w-full':'hidden'} bg-transparent font-radio text-3xl font-semibold text-gray-700 outline-none border-none`} />
                        )
                    }

                    {
                        !isFocused && (
                            <button onClick={() => setIsFocused(true)} className="h-8 w-8 rounded-full text-sky-600 hover:text-pink-600 bg-sky-100 hover:bg-pink-100 flex items-center justify-center" title="Click to edit job title">
                                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                </svg>
                            </button>
                        )
                    }
                </div>
            </div>
        </>
    )
}
