export default function CategoriesInput({categories, setCategories}) {
    return (
        <label htmlFor="categories" className="block">
            <h3 className="font-radio font-semibold text-gray-600">Categories</h3>
            <p className="text-sm mt-1 md:w-[80%] text-gray-400">
                Add all the job categories that apply to this job. You can select up to a maximum of three.
            </p>
            <input
                id="categories"
                type="text"
                placeholder="Start typing to search..."
                className="block w-full px-3 py-4 outline-none rounded-2xl bg-gray-50 border-2 border-transparent focus:border-sky-600 focus:border-opacity-50 placeholder:text-gray-600 placeholder:text-opacity-50 text-gray-900 mt-2 md:mt-4"
            />
        </label>
    )
}
