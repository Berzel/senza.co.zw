import { Link } from "@inertiajs/inertia-react";
import BackIcon from "./Icons/BackIcon";

export default function PageTitle({title}){
    return (
        <div className="bg-sky-600 text-white">
            <div className="px-3 md:container">
                <div className="font-radio flex items-center space-x-2 md:space-x-4">
                    <Link href={route("home")} className="h-16 flex items-center space-x-2">
                        <BackIcon />
                        <span className="hidden md:inline-block">
                            Home
                        </span>
                    </Link>
                    <span className="hidden md:inline-block">/</span>
                    <h1>
                        {title}
                    </h1>
                </div>
            </div>
        </div>
    )
}
