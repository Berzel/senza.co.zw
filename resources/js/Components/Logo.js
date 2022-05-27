import { Link } from "@inertiajs/inertia-react";

export default function Logo (props) {
    return (
        <Link href={route("home")} className="flex items-center space-x-2">
            <div className="hidden md:block rounded-full h-10 lg:h-12 w-10 lg:w-12 bg-sky-600">

            </div>
            <h1 className="font-bold text-lg md:text-xl lg:text-2xl">
                Senza
            </h1>
        </Link>
    )
}
