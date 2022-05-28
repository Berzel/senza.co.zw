export default function SearchForm (props) {
    return (
        <form action="#" className="hidden md:flex md:items-center border-2 border-pink-600 bg-white overflow-hidden rounded-r-full rounded-l-full">
            <label htmlFor="" className="flex items-center pl-4">
                <svg className="h-4 w-4 text-gray-400 fill-current" viewBox="0 0 20 20">
                    <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" fillRule="evenodd" clipRule="evenodd" />
                </svg>
                <input type="text" className="bg-white p-2 outline-none" placeholder="Job title or keyword..." />
            </label>
            <label htmlFor="" className="flex items-center pl-2 border-l border-pink-400">
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <input type="text" className="bg-white p-2 outline-none" placeholder="Location" />
            </label>
            <button type="submit" className="h-8 lg:h-auto w-8 lg:w-auto p-1 lg:px-4 lg:py-2 mr-2 lg:mr-1 lg:my-1 shadow-xl shadow-pink-300 lg:shadow-pink-100 rounded-full flex-grow-0 flex-shrink-0 flex items-center justify-center bg-gradient-to-r from-pink-500 to-pink-600">
                <svg viewBox="0 0 512 512" className="lg:hidden h-4 w-4 fill-current text-white">
                    <path d="M225.474,0C101.151,0,0,101.151,0,225.474c0,124.33,101.151,225.474,225.474,225.474    c124.33,0,225.474-101.144,225.474-225.474C450.948,101.151,349.804,0,225.474,0z M225.474,409.323    c-101.373,0-183.848-82.475-183.848-183.848S124.101,41.626,225.474,41.626s183.848,82.475,183.848,183.848    S326.847,409.323,225.474,409.323z" />
                    <path d="M505.902,476.472L386.574,357.144c-8.131-8.131-21.299-8.131-29.43,0c-8.131,8.124-8.131,21.306,0,29.43l119.328,119.328    c4.065,4.065,9.387,6.098,14.715,6.098c5.321,0,10.649-2.033,14.715-6.098C514.033,497.778,514.033,484.596,505.902,476.472z"/>
                </svg>
                <span className="hidden lg:inline-block text-white font-semibold">
                    Find work
                </span>
            </button>
        </form>
    )
}
