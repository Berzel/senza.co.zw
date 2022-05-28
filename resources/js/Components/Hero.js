import { Link } from "@inertiajs/inertia-react";
import GradientText from "./GradientText";
import SearchIcon from "./SearchIcon";

export default function Hero (props) {
    return (
        <div className="px-3 pt-16 md:pt-32 lg:pt-44 pb-12 md:container">
            <h1 className="font-radio text-gray-900 text-2xl md:text-4xl lg:text-5xl font-bold max-w-[20rem] md:max-w-[30rem] lg:max-w-[40rem]">
                The recuitment <GradientText text="platform every employer" color="primary" /> needs!
            </h1>
            <p className="text-gray-600 lg:text-lg mt-4 lg:mt-6 max-w-[20rem] md:max-w-[25rem] lg:max-w-[30rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nulla amet debitis enim tempora error corrupti aspernatur placeat qui necessitatibus.
            </p>
            <div className="mt-8 lg:mt-12 flex items-center space-x-4">
                <Link href="#" className="font-semibold bg-gradient-to-r from-pink-500 to-pink-600 inline-block px-6 lg:px-8 py-3 lg:py-4 rounded-r-full rounded-l-full shadow-xl shadow-pink-100 md:shadow-pink-200 text-white">
                    Post a job
                </Link>
                <Link href={route("jobs.index")} className="flex items-center space-x-2">
                    <span className="h-8 w-8 p-2 flex items-center justify-center rounded-full border-2 border-sky-600 shadow-lg">
                        <SearchIcon className="h-4 w-4 fill-current text-sky-600" />
                    </span>
                    <GradientText color="primary" className="font-semibold">
                        <span className="md:hidden">Find work</span>
                        <span className="hidden md:inline">I'm looking for work</span>
                    </GradientText>
                </Link>
            </div>
        </div>
    )
}
