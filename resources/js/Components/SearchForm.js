import SearchIcon from "./Icons/SearchIcon";

export default function SearchForm (props) {
    return (
        <form action="#" className="hidden md:flex md:items-center border-2 border-pink-600 bg-white overflow-hidden rounded-r-full rounded-l-full">
            <label htmlFor="keyword" className="flex items-center pl-2">
                <svg className="h-4 w-4 text-gray-400 fill-current" viewBox="0 0 20 20">
                    <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" fillRule="evenodd" clipRule="evenodd" />
                </svg>
                <input type="text" id="keyword" className="bg-white p-2 outline-none" placeholder="Job title or keyword..." />
            </label>
            <label htmlFor="location" className="flex items-center pl-2 border-l border-pink-200">
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <input type="text" id="location" className="bg-white p-2 outline-none" placeholder="Location" />
            </label>
            <button type="submit" className="h-8 lg:h-auto w-8 lg:w-auto p-1 lg:px-4 lg:py-2 mr-2 lg:mr-1 lg:my-1 shadow-xl shadow-pink-300 lg:shadow-pink-100 rounded-full flex-grow-0 flex-shrink-0 flex items-center justify-center bg-gradient-to-r from-pink-500 to-pink-600">
                <SearchIcon className="lg:hidden h-4 w-4 fill-current text-white" />
                <span className="hidden lg:inline-block text-white font-semibold">
                    Find work
                </span>
            </button>
        </form>
    )
}
