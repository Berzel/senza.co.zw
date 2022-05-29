import { Head, Link } from "@inertiajs/inertia-react";
import BackIcon from "../Components/BackIcon";
import Filter from "../Components/Filter";
import PlusIcon from "../Components/PlusIcon";
import Sort from "../Components/Sort";
import AppLayout from "../Layouts/AppLayout";

function BreadCrumbs(props) {
    return (
        <div className="bg-sky-600 text-white">
            <div className="px-3 md:container flex justify-between items-center">
                <div className="flex items-center space-x-2 md:space-x-4">
                    <Link href={route("home")} className="h-16 flex items-center space-x-2">
                        <BackIcon />
                        <span className="hidden md:inline-block">
                            Home
                        </span>
                    </Link>
                    <span className="hidden md:inline-block">/</span>
                    <h1 className="font-radio">
                        All jobs in Zimbabwe
                    </h1>
                </div>
                <div className="flex items-center md:hidden">
                    <Sort />
                    <Filter />
                </div>
            </div>
        </div>
    )
}

function MobileCategoryList(props) {

    const categoryRows = [
        ['Accounting & Finance', 'Category', 'Category', 'Category', 'Category', 'Category', 'Category', 'Category', 'Category', 'Category', 'Category'],
        ['Logistics', 'Category', 'Category', 'Category', 'Category', 'Category', 'Category', 'Category', 'Category', 'Category', 'Category'],
        ['Engineering', 'Category', 'Category', 'Category', 'Category', 'Category', 'Category', 'Category', 'Category', 'Category', 'Category'],
        ['Agriculture & Farming', 'Category', 'Category', 'Category', 'Category', 'Category', 'Category', 'Category', 'Category', 'Category', 'Category']
    ]

    return (
        <ul className="px-3 py-6 md:container space-y-3 overflow-auto lg:hidden">
            { categoryRows && categoryRows.map((row, i) => (
                <li key={i}>
                    <ul className="flex items-center space-x-2">
                        { row.map(cat => (
                            <li key={cat}>
                                <Link className="bg-sky-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-sky-600 hover:text-white hover:shadow-lg hover:font-semibold hover:shadow-pink-100 px-4 py-2 inline-block rounded-r-full rounded-l-full whitespace-nowrap">
                                    {cat}
                                </Link>
                            </li>
                        )) }
                    </ul>
                </li>
            )) }
        </ul>
    )
}

function DesktopCategoryList (props) {
    return (
        <ul className="px-3 container py-6 space-y-3 hidden lg:block">
            <li>
                <ul className="flex justify-between">
                    <li className="w-[24%]">
                        <Link className="block py-3 px-4 rounded-full bg-sky-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-sky-600 hover:text-white hover:shadow-lg hover:font-semibold hover:shadow-pink-100">
                            Accounting &amp; Finance <span className="hidden xl:inline-block">&mdash; <span className="text-sm font-medium">5436</span></span>
                        </Link>
                    </li>
                    <li className="w-[24%]">
                        <Link className="block py-3 px-4 rounded-full bg-sky-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-sky-600 hover:text-white hover:shadow-lg hover:font-semibold hover:shadow-pink-100">
                            Banking <span className="hidden xl:inline-block">&mdash; <span className="text-sm font-medium">5436</span></span>
                        </Link>
                    </li>
                    <li className="w-[24%]">
                        <Link className="block py-3 px-4 rounded-full bg-sky-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-sky-600 hover:text-white hover:shadow-lg hover:font-semibold hover:shadow-pink-100">
                            Cooking <span className="hidden xl:inline-block">&mdash; <span className="text-sm font-medium">5436</span></span>
                        </Link>
                    </li>
                    <li className="w-[24%]">
                        <Link className="block py-3 px-4 rounded-full bg-sky-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-sky-600 hover:text-white hover:shadow-lg hover:font-semibold hover:shadow-pink-100">
                            Accounting &amp; Finance <span className="hidden xl:inline-block">&mdash; <span className="text-sm font-medium">5436</span></span>
                        </Link>
                    </li>
                </ul>
            </li>
            <li>
                <ul className="flex justify-between">
                    <li className="w-[24%]">
                        <Link className="block py-3 px-4 rounded-full bg-sky-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-sky-600 hover:text-white hover:shadow-lg hover:font-semibold hover:shadow-pink-100">
                            Agriculture &amp; Farming <span className="hidden xl:inline-block">&mdash; <span className="text-sm font-medium">5436</span></span>
                        </Link>
                    </li>
                    <li className="w-[24%]">
                        <Link className="block py-3 px-4 rounded-full bg-sky-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-sky-600 hover:text-white hover:shadow-lg hover:font-semibold hover:shadow-pink-100">
                            Accounting &amp; Finance <span className="hidden xl:inline-block">&mdash; <span className="text-sm font-medium">5436</span></span>
                        </Link>
                    </li>
                    <li className="w-[24%]">
                        <Link className="block py-3 px-4 rounded-full bg-sky-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-sky-600 hover:text-white hover:shadow-lg hover:font-semibold hover:shadow-pink-100">
                            Engineering <span className="hidden xl:inline-block">&mdash; <span className="text-sm font-medium">5436</span></span>
                        </Link>
                    </li>
                    <li className="w-[24%]">
                        <Link className="block py-3 px-4 rounded-full bg-sky-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-sky-600 hover:text-white hover:shadow-lg hover:font-semibold hover:shadow-pink-100">
                            Sports <span className="hidden xl:inline-block">&mdash; <span className="text-sm font-medium">5436</span></span>
                        </Link>
                    </li>
                </ul>
            </li>
            <li>
                <ul className="flex justify-between">
                    <li className="w-[24%]">
                        <Link className="block py-3 px-4 rounded-full bg-sky-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-sky-600 hover:text-white hover:shadow-lg hover:font-semibold hover:shadow-pink-100">
                            Accounting &amp; Finance <span className="hidden xl:inline-block">&mdash; <span className="text-sm font-medium">5436</span></span>
                        </Link>
                    </li>
                    <li className="w-[24%]">
                        <Link className="block py-3 px-4 rounded-full bg-sky-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-sky-600 hover:text-white hover:shadow-lg hover:font-semibold hover:shadow-pink-100">
                            Banking <span className="hidden xl:inline-block">&mdash; <span className="text-sm font-medium">5436</span></span>
                        </Link>
                    </li>
                    <li className="w-[24%]">
                        <Link className="block py-3 px-4 rounded-full bg-sky-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-sky-600 hover:text-white hover:shadow-lg hover:font-semibold hover:shadow-pink-100">
                            Cooking <span className="hidden xl:inline-block">&mdash; <span className="text-sm font-medium">5436</span></span>
                        </Link>
                    </li>
                    <li className="w-[24%]">
                        <Link className="block py-3 px-4 rounded-full bg-sky-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-sky-600 hover:text-white hover:shadow-lg hover:font-semibold hover:shadow-pink-100">
                            Accounting &amp; Finance <span className="hidden xl:inline-block">&mdash; <span className="text-sm font-medium">5436</span></span>
                        </Link>
                    </li>
                </ul>
            </li>
            <li>
                <ul className="flex justify-between">
                    <li className="w-[24%]">
                        <Link className="block py-3 px-4 rounded-full bg-sky-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-sky-600 hover:text-white hover:shadow-lg hover:font-semibold hover:shadow-pink-100">
                            Agriculture &amp; Farming <span className="hidden xl:inline-block">&mdash; <span className="text-sm font-medium">5436</span></span>
                        </Link>
                    </li>
                    <li className="w-[24%]">
                        <Link className="block py-3 px-4 rounded-full bg-sky-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-sky-600 hover:text-white hover:shadow-lg hover:font-semibold hover:shadow-pink-100">
                            Accounting &amp; Finance <span className="hidden xl:inline-block">&mdash; <span className="text-sm font-medium">5436</span></span>
                        </Link>
                    </li>
                    <li className="w-[24%]">
                        <Link className="block py-3 px-4 rounded-full bg-sky-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-sky-600 hover:text-white hover:shadow-lg hover:font-semibold hover:shadow-pink-100">
                            Engineering <span className="hidden xl:inline-block">&mdash; <span className="text-sm font-medium">5436</span></span>
                        </Link>
                    </li>
                    <li className="w-[24%]">
                        <Link className="flex items-center space-x-2 p-3 rounded-full rounded-l-full bg-sky-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-sky-600 hover:text-white hover:shadow-lg hover:font-semibold hover:shadow-pink-100 viewAllBtn">
                            <span className="h-6 w-6 flex items-center justify-center rounded-full bg-sky-600 text-white viewAllBtn_icon">
                                <PlusIcon className="h-4 w-4  fill-current" />
                            </span>
                            <span className="font-semibold">
                                View all categories
                            </span>
                        </Link>
                    </li>
                </ul>
            </li>
        </ul>
    )
}

function CategoryList(props) {
    return (
        <>
            <MobileCategoryList />
            <DesktopCategoryList />
        </>
    )
}

export default function Jobs(props) {
    return (
        <AppLayout>
            <Head title="Homepage">
                <meta name="description" content="Senza homepage" />
            </Head>

            <main>
                <BreadCrumbs />
                <CategoryList />
            </main>
        </AppLayout>
    )
}
