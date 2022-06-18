import SearchIcon from "./Icons/SearchIcon";

export default function SearchBtn (props) {
    return (
        <div className="md:hidden">
            <button className="h-8 w-8 py-6 flex items-center justify-center">
                <SearchIcon className="h-4 w-4 fill-current text-sky-600" />
            </button>
        </div>
    )
}
