export default function ExperienceInput({experience, setExperience}) {
    return (
        <div className="flex items-center space-x-2">
            <div className="h-12 w-12 bg-pink-600 rounded-full">

            </div>
            <div>
                <button className="flex items-center space-x-4 cursor-pointer font-semibold text-gray-700 hover:text-sky-600">
                    <span>
                        3 &mdash; 5 Years
                    </span>
                    <span className="w-5 h-5 rounded-full text-sky-600 hover:text-pink-600 bg-sky-50 hover:bg-pink-50 flex items-center justify-center transition hover:scale-125">
                        <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                    </span>
                </button>
                <p className="text-gray-600 text-sm">Experience</p>
            </div>
        </div>
    )
}
