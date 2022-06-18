import { useEffect, useState } from "react"
import PlusIcon from "../../Icons/PlusIcon"

function Pill(props){
    const inActiveClasses = "bg-sky-100 text-sky-600 hover:text-pink-600"
    const activeClasses = "bg-pink-600 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-white"

    return (
        <button
            onClick={props.onClick}
            type="button"
            className={`${props.active ? activeClasses : inActiveClasses} hover:bg-pink-100 inline-block px-6 py-3 m-2 rounded-full`}>
                {props.text}
        </button>
    )
}

export default function TagsInput({tags, setTags}) {
    const [allTags, setAllTags] = useState([])

    useEffect(() => {
        setAllTags(['Administrative', 'Marketing', 'Accounting', 'IT & Telecoms', 'Mining', 'Domestic Stuff', 'Banking', 'Pharmaceutical', 'Medicine', 'Farming', 'Customer Service', 'Management', 'Food Services', 'Art & Design', 'Sales'])
    }, [])

    /**
     * Check if a tag is selected
     *
     * @param {*} tag
     * @returns
     */
     function isTagSelected(tag){
        return tags.includes(tag)
    }

    /**
     * Toggle the selection status of the tag
     *
     * @param {*} tag
     * @returns
     */
    function toggleTag(tag) {
        return isTagSelected(tag)
            ? setTags(tags.filter(t => t !== tag))
            : setTags([...tags, tag])
    }

    return (
        <div>
            <label htmlFor="" className="block">
                <h3 className="font-radio font-semibold text-gray-600 mt-8">Tags</h3>
                <p className="text-sm mt-1 md:w-[80%] text-gray-400">Select all tags that apply. We've already suggested some for you.</p>
            </label>

            <div className="mt-4">
                <div className="hidden md:flex md:flex-wrap md:-mx-2 mt-4">
                    {
                        allTags.map((tag, i) => (
                            <Pill key={i} text={tag} active={isTagSelected(tag)} onClick={() => toggleTag(tag)} />
                        ))
                    }
                    <button type="button" className="bg-sky-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-sky-600 hover:text-white hover:shadow-lg inline-block px-6 py-3 m-2 rounded-full">
                        <span className="font-semibold">
                            Other &ndash; Specify
                        </span>
                    </button>
                    <button type="button" className="bg-sky-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-sky-600 hover:text-white hover:shadow-lg px-6 py-3 m-2 rounded-full flex items-center space-x-2 pl-2 viewAllBtn">
                        <span className="h-6 w-6 rounded-full bg-sky-600 text-white flex items-center justify-center viewAllBtn_icon">
                            <PlusIcon className="h-4 w-4 fill-current" />
                        </span>
                        <span className="font-semibold">
                            View more tags
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}
