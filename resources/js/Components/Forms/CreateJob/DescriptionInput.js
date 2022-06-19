export default function DescriptionInput({description, setDescription}) {
    return (
        <label htmlFor="description" className="block">
            <h3 className="font-radio font-semibold text-gray-600 mt-8">
                Description
            </h3>
            <p className=" text-sm mt-1 md:w-[80%] text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt excepturi non modi nesciunt consequuntur nam! Voluptas odit voluptate soluta omnis adipisci?
            </p>
            <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                id="description"
                rows="10"
                placeholder="Enter job description here..."
                className="block w-full px-3 py-4 outline-none rounded-2xl bg-gray-50 border-2 border-transparent focus:border-sky-600 focus:border-opacity-50 placeholder:text-gray-600 placeholder:text-opacity-50 text-gray-900 mt-2 md:mt-4"
            />
        </label>
    )
}
