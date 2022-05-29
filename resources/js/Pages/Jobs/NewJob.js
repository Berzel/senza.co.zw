import { Head, Link } from "@inertiajs/inertia-react";
import BackIcon from "../../Components/BackIcon";
import AppLayout from "../../Layouts/AppLayout";

function PageTitle(props){
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
                        Post new job
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default function NewJob(props) {
    return (
        <AppLayout>
            <Head title="Create job">
                <meta name="description" content="Create new job on senza" />
            </Head>

            <main>
                <PageTitle />

                <div className="px-3 py-6 md:container lg:flex lg:space-x-6">
                    <div className="lg:flex-grow">
                        <form action="#" className="block space-y-4">
                            <label htmlFor="title" className="block">
                                <h3 className="font-radio font-semibold text-sm text-gray-500 ml-1">Job title / Position</h3>
                                <p className="hidden md:block text-sm mt-1 ml-1 md:w-[80%] text-gray-400">Specify as single job position like "Marketing Manager" or "Node JS Developer", not a sentence. DO NOT WRITE IN FULL CAPS. If posting multiple roles, please create multiple job posts. Do not include a count in the job title like "x2 or x5". A job post is limited to a single job. We only allow real jobs, absolutely no MLM-type courses "learn how to work online" please.</p>
                                <input id="title" type="text" placeholder="Job title or position e.g Junior PHP Developer" className="block w-full px-3 py-4 outline-none rounded-lg bg-gray-200 placeholder:text-gray-600 placeholder:text-opacity-40 text-gray-600 mt-2" />
                            </label>
                            <label htmlFor="description" className="block">
                                <h3 className="font-radio font-semibold text-sm text-gray-500 ml-1 mt-8">Job description</h3>
                                <p className="hidden md:block text-sm mt-1 ml-1 md:w-[80%] text-gray-400">Describe your organisation personality, work environment and other organisation related information. Include the job summary, as well as the responsibilities, skills, and certifications required. Please do not include any personal information.</p>
                                <textarea id="description" placeholder="Enter job description here..." rows="5" className="block w-full px-3 py-4 outline-none rounded-lg bg-gray-200 placeholder:text-gray-600 placeholder:text-opacity-40 text-gray-600 mt-2" />
                            </label>
                            <label htmlFor="" className="block">
                                <h3 className="font-radio font-semibold text-sm text-gray-500 ml-1 mt-8">Contract type</h3>
                                <p className="text-sm mt-1 ml-1 md:w-[80%] text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos saepe impedit quaerat expedita omnis culpa illo repellendus perferendis tempora.</p>
                            </label>
                        </form>
                    </div>
                    <div className="hidden lg:block lg:w-[15rem] lg:flex-shrink-0">
                        Right
                    </div>
                </div>
            </main>
        </AppLayout>
    )
}
