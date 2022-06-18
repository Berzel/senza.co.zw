import { Link } from "@inertiajs/inertia-react";
import PlusIcon from "./Icons/PlusIcon";

export default function AddJobBtn(props) {
    return (
        <Link href={route('jobs.create')} className="w-8 lg:w-auto h-8 lg:h-auto py-6 lg:px-4 lg:py-2 flex items-center justify-center lg:bg-gradient-to-r from-sky-600 to-sky-700 rounded-r-full rounded-l-full text-white lg:shadow-lg shadow-sky-100">
            <PlusIcon className="lg:hidden h-6 w-6 text-pink-500 fill-current" />
            <span className="hidden lg:inline-block font-semibold">
                Post a job
            </span>
        </Link>
    )
}
