import { ClickAwayListener } from "@mui/base"
import { useEffect, useState } from "react"

export default function CompanyInput({company, setCompany}) {
    const [suggestions, setSuggestions] = useState([])
    const [focused, setFocused] = useState(false)
    const [startVal, setStartVal] = useState('')
    const [value, setValue] = useState(company)

    useEffect(() => {
        setSuggestions(['Senza', 'Webdev', 'Google', 'Afrosoft'])
    }, [])

    /**
     * Update the value every time the company prop changes
     */
    useEffect(() => {
        startVal ? setValue(startVal) : setValue(company)
        setStartVal('')
    }, [company])

    /**
     * Every time a change happens we want to search for matching companies and show the options
     *
     * @param {*} e
     */
    function handleChange(e) {
        !focused && setFocused(true)
        setValue(e.target.value)
        // Peform debounced http get searching for companies that match the query string
    }

    /**
     * When the user clicks away from the input, we should.
     * 1. Search if the value typed matches any company name and set that as the selected company
     * 2. If no match then clear the input
     */
    function handleClickAway() {
        async function searchQuery() {
            false ? setCompany(value) : setValue('')
        }

        !company && value ? searchQuery() : null
        setFocused(false)
    }

    /**
     * When the input gains focus we should:
     * 1. Save the start value so input doesn't clear when user start typing and company is unset
     * 2. Set focused to true so the auto complete dropdown appears
     * 3. Set company to '' so that we can do a fresh search when typing
     *
     * @param {*} e Focus event
     */
    function handleFocus(e) {
        setStartVal(e.target.value)
        setFocused(true)
        setCompany('')
    }

    /**
     * Return a function that select a company when option is clicked
     *
     * @param {*} company
     * @returns
     */
    function select(company) {
        return () => {
            setCompany(company)
            setTimeout(() => setFocused(false), 0)
        }
    }

    return (
        <label htmlFor="company" className={`${focused ? 'relative z-10' : null} block`}>
            <h3 className="font-radio font-semibold text-gray-600">Company</h3>
            <p className="text-sm mt-1 md:w-[80%] text-gray-400">
                Enter only the company name without the extension e.g LLC, PBC, or Private Limited.
            </p>
            <ClickAwayListener onClickAway={handleClickAway}>
                <div className={`relative`}>
                    <input
                        type='text'
                        id='company'
                        value={value}
                        onFocus={handleFocus}
                        onChange={handleChange}
                        placeholder='Enter company name...'
                        onKeyDown={e => e.key === 'Enter' && e.preventDefault()}
                        className={`block w-full px-3 py-4 outline-none rounded-2xl ${focused ? 'rounded-b-none border-b-transparent border-sky-600 border-opacity-50 bg-white': 'border-transparent bg-gray-100 md:bg-gray-50'} border-2  placeholder:text-gray-600 placeholder:text-opacity-50 text-gray-900 mt-2 md:mt-4`}
                    />

                    {
                        focused && (
                            <div className={`absolute left-0 right-0 px-3 bg-white border-l-2 border-b-2 border-r-2 rounded-bl-2xl rounded-br-2xl border-sky-600 border-opacity-50 -mt-[2px] ${focused ? 'shadow-xl' : null}`}>
                                <div className="py-3 border-t">
                                    <ul>
                                        {
                                            suggestions.map(suggestion => (
                                                <li key={suggestion}>
                                                    <button type="button" className="block w-full py-2 hover:px-2 hover:rounded-xl hover:bg-pink-50 hover:text-pink-600 text-left transition" onClick={select(suggestion)}>
                                                        {suggestion}
                                                    </button>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        )
                    }
                </div>
            </ClickAwayListener>
        </label>
    )
}
