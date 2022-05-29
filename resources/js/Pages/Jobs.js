import { Head, Link } from "@inertiajs/inertia-react";
import BackIcon from "../Components/BackIcon";
import Filter from "../Components/Filter";
import FilterIcon from "../Components/FilterIcon";
import Options from "../Components/Options";
import PlusIcon from "../Components/PlusIcon";
import Sort from "../Components/Sort";
import SortIcon from "../Components/SortIcon";
import AppLayout from "../Layouts/AppLayout";

function PageTitle(props) {
    return (
        <div className="bg-sky-600 text-white">
            <div className="px-3 md:container flex justify-between items-center">
                <div className="font-radio flex items-center space-x-2 md:space-x-4">
                    <Link href={route("home")} className="h-16 flex items-center space-x-2">
                        <BackIcon />
                        <span className="hidden md:inline-block">
                            Home
                        </span>
                    </Link>
                    <span className="hidden md:inline-block">/</span>
                    <h1>
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
        <ul className="px-3 py-6 md:container space-y-3 overflow-auto">
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
        <ul className="px-3 container py-6 space-y-3">
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
            <div className="lg:hidden">
                <MobileCategoryList />
            </div>
            <div className="hidden lg:block">
                <DesktopCategoryList />
            </div>
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
                <PageTitle />
                <CategoryList />

                <section className="mt-2">
                    <div className="bg-white md:bg-transparent px-3 md:container">
                        <div className="flex justify-between items-center py-3 md:py-2 md:bg-pink-100 md:bg-opacity-50 md:backdrop-blur-sm md:rounded-full md:pl-4 md:pr-3 md:text-pink-600">
                            <h2 className="font-semibold font-radio">
                                Recent jobs feed
                            </h2>
                            <div className="flex items-center">
                                <Options icon={<SortIcon className="h-5 w-5 fill-current" />} title="Sort jobs">
                                    <div>
                                        Hello <br />
                                        Hello <br />
                                        Hello <br />
                                        Hello <br />
                                        Hello <br />
                                        Hello <br />
                                    </div>
                                </Options>
                                <Options icon={<FilterIcon className="h-5 w-5" />} title="Filter jobs">
                                    <div>
                                        Hello <br />
                                        Hello <br />
                                        Hello <br />
                                        Hello <br />
                                        Hello <br />
                                        Hello <br />
                                    </div>
                                </Options>
                            </div>
                        </div>
                    </div>
                    <div className="md:container lg:flex lg:justify-between md:mt-4 lg:space-x-4">
                        <div className="hidden lg:block lg:w-[15rem] bg-white rounded-2xl p-3">
                            Left
                        </div>
                        <ul className="md:space-y-4 lg:flex-grow">
                            <li>
                                <Link href="#" className="px-3 py-4 flex space-x-3 md:bg-white md:rounded-2xl md:hover:shadow-lg">
                                    <div className="rounded-xl h-12 w-12 bg-pink-600">

                                    </div>
                                    <div>
                                        <h3 className="font-radio">Senior Frontend Developer</h3>
                                        <p className="text-sky-600">Webdev Online Solutions</p>
                                        <p className="text-sm text-gray-600 mt-1">$1.55K &mdash; $2K per month</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="px-3 py-4 flex space-x-3 bg-gray-100 md:bg-white md:rounded-2xl md:hover:shadow-lg">
                                    <div className="rounded-xl h-12 w-12 bg-pink-600">

                                    </div>
                                    <div>
                                        <h3 className="font-radio">Senior Frontend Developer</h3>
                                        <p className="text-sky-600">Webdev Online Solutions</p>
                                        <p className="text-sm text-gray-600 mt-1">$1.55K &mdash; $2K per month</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="px-3 py-4 flex space-x-3 md:bg-white md:rounded-2xl md:hover:shadow-lg">
                                    <div className="rounded-xl h-12 w-12 bg-pink-600">

                                    </div>
                                    <div>
                                        <h3 className="font-radio">Senior Frontend Developer</h3>
                                        <p className="text-sky-600">Webdev Online Solutions</p>
                                        <p className="text-sm text-gray-600 mt-1">$1.55K &mdash; $2K per month</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="px-3 py-4 flex space-x-3 bg-gray-100 md:bg-white md:rounded-2xl md:hover:shadow-lg">
                                    <div className="rounded-xl h-12 w-12 bg-pink-600">

                                    </div>
                                    <div>
                                        <h3 className="font-radio">Senior Frontend Developer</h3>
                                        <p className="text-sky-600">Webdev Online Solutions</p>
                                        <p className="text-sm text-gray-600 mt-1">$1.55K &mdash; $2K per month</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="px-3 py-4 flex space-x-3 md:bg-white md:rounded-2xl md:hover:shadow-lg">
                                    <div className="rounded-xl h-12 w-12 bg-pink-600">

                                    </div>
                                    <div>
                                        <h3 className="font-radio">Senior Frontend Developer</h3>
                                        <p className="text-sky-600">Webdev Online Solutions</p>
                                        <p className="text-sm text-gray-600 mt-1">$1.55K &mdash; $2K per month</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="px-3 py-4 flex space-x-3 bg-gray-100 md:bg-white md:rounded-2xl md:hover:shadow-lg">
                                    <div className="rounded-xl h-12 w-12 bg-pink-600">

                                    </div>
                                    <div>
                                        <h3 className="font-radio">Senior Frontend Developer</h3>
                                        <p className="text-sky-600">Webdev Online Solutions</p>
                                        <p className="text-sm text-gray-600 mt-1">$1.55K &mdash; $2K per month</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
        </AppLayout>
    )
}
