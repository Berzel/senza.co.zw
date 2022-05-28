import { Head, Link } from "@inertiajs/inertia-react";
import BackIcon from "../Components/BackIcon";
import Filter from "../Components/Filter";
import Sort from "../Components/Sort";
import AppLayout from "../Layouts/AppLayout";

export default function Jobs(props) {
    return (
        <AppLayout>
            <Head title="Homepage">
                <meta name="description" content="Senza homepage" />
            </Head>

            <main>
                <div className="px-3 flex justify-between items-center bg-sky-600 text-white">
                    <div className="flex items-center space-x-2">
                        <Link href={route("home")} className="h-16 flex items-center">
                            <BackIcon />
                        </Link>
                        <h1 className="font-radio">
                            All jobs in Zimbabwe
                        </h1>
                    </div>
                    <div className="flex items-center">
                        <Sort />
                        <Filter />
                    </div>
                </div>
            </main>
        </AppLayout>
    )
}
