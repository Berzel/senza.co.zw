import { Link } from "@inertiajs/inertia-react";

export default function AddJobBtn(props) {
    return (
        <Link href="#" className="w-8 lg:w-auto h-8 lg:h-auto py-6 lg:px-4 lg:py-2 flex items-center justify-center lg:bg-gradient-to-r from-sky-600 to-sky-700 rounded-r-full rounded-l-full text-white lg:shadow-lg shadow-sky-100">
            <svg className="lg:hidden h-6 w-6 text-pink-500 fill-current" viewBox="0 0 20 20">
                <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" fillRule="evenodd" clipRule="evenodd" />
            </svg>
            <span className="hidden lg:inline-block font-semibold">
                Post a job
            </span>
        </Link>
    )
}
