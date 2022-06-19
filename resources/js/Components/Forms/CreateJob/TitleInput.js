import { useEffect, useState } from "react"

export default function TitleInput({title, setTitle}) {
    const [focused, setFocused] = useState(false)

    useEffect(() => {
        focused && document.getElementById('title').focus()
    }, [focused])

    return (
        <label htmlFor="title" className="block" onClick={() => !focused && setFocused(true)}>
            <span className="font-radio font-semibold text-gray-600">Job Title / Position</span>
            <div className="flex items-center space-x-4 mt-2">
                {
                    !focused ? (
                        <button onClick={() => setFocused(true)} className={`${!focused ? 'block':'hidden'} font-radio text-xl lg:text-3xl font-semibold text-gray-700 cursor-pointer`}>
                            {title}
                        </button>
                    ) : (
                        <input
                            id="title"
                            type="text"
                            value={title}
                            onBlur={() => setFocused(false)}
                            onChange={e => setTitle(e.target.value)}
                            className={`${focused ? 'block w-full':'hidden'} bg-transparent font-radio text-xl lg:text-3xl font-semibold text-gray-700 outline-none border-none`}
                        />
                    )
                }

                {
                    !focused && (
                        <button onClick={() => setFocused(true)} className="h-8 w-8 rounded-full text-sky-600 hover:text-pink-600 bg-sky-100 hover:bg-pink-100 flex items-center justify-center" title="Click to edit job title">
                            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>
                        </button>
                    )
                }
            </div>
        </label>
    )
}
