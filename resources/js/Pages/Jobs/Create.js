import { Head, Link } from "@inertiajs/inertia-react";
import { Checkbox, FormControl, FormControlLabel, RadioGroup } from "@mui/material";
import { useState } from "react";
import PageTitle from "../../Components/PageTitle";
import AppLayout from "../../Layouts/AppLayout";

import TitleInput from "../../Components/Forms/CreateJob/TitleInput";
import SalaryInput from "../../Components/Forms/CreateJob/SalaryInput";
import ExperienceInput from "../../Components/Forms/CreateJob/ExperienceInput";
import ContractTypeInput from "../../Components/Forms/CreateJob/ContractTypeInput";
import LocationInput from "../../Components/Forms/CreateJob/LocationInput";
import DescriptionInput from "../../Components/Forms/CreateJob/DescriptionInput";
import ResponsibilitiesInput from "../../Components/Forms/CreateJob/ResponsibilitiesInput";
import QualificationsInput from "../../Components/Forms/CreateJob/QualificationsInput";
import CompanyInput from "../../Components/Forms/CreateJob/CompanyInput";
import CategoriesInput from "../../Components/Forms/CreateJob/CategoriesInput";
import TagsInput from "../../Components/Forms/CreateJob/TagsInput";

export default function Create() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [categories, setCategories] = useState([])
    const [tags, setTags] = useState([])
    const [company, setCompany] = useState('')

    const labelStyles = {
        '& .MuiFormControlLabel-label': {
            fontFamily: '"Nunito", sans-serif',
            color: 'rgb(75 85 99 / 1)' //text-gray-600
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log({title, company})
    }

    return (
        <AppLayout>
            <Head title="Create job">
                <meta name="description" content="Create new job on senza" />
            </Head>

            <main>
                <PageTitle title="Post new job" />

                <div className="px-3 py-6 md:container md:flex md:space-x-6">
                    <div className="hidden md:block md:w-auto lg:w-[15rem] lg:flex-shrink-0 ">
                        <div className="p-3 bg-white rounded-xl sticky top-4">
                            <div>
                                <div className="mt-2 hidden lg:block">
                                    <h3 className="font-bold text-sm ml-3 uppercase text-gray-600">Title</h3>
                                </div>
                                <ul className="lg:mt-4 space-y-2">
                                    <li>
                                        <Link href="#" className="p-3 flex items-center space-x-3 rounded-xl bg-sky-100 text-sky-600 font-semibold">
                                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <span className="hidden lg:inline-block">
                                                My Jobs
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="p-3 flex items-center space-x-3 rounded-xl text-gray-600 hover:bg-pink-100 hover:text-pink-600">
                                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                            </svg>
                                            <span className="hidden lg:inline-block">
                                                Applications
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="p-3 flex items-center space-x-3 rounded-xl text-gray-600 hover:bg-pink-100 hover:text-pink-600">
                                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                            </svg>
                                            <span className="hidden lg:inline-block">
                                                Bookmarks
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-12">
                                <div className="mt-2 hidden lg:block">
                                    <h3 className="font-bold text-sm ml-3 uppercase text-gray-600">Title</h3>
                                </div>
                                <ul className="lg:mt-4 space-y-2">
                                    <li>
                                        <Link href="#" className="p-3 flex items-center space-x-3 rounded-xl text-gray-600 hover:bg-pink-100 hover:text-pink-600">
                                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <span className="hidden lg:inline-block">
                                                My Jobs
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="p-3 flex items-center space-x-3 rounded-xl text-gray-600 hover:bg-pink-100 hover:text-pink-600">
                                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                            </svg>
                                            <span className="hidden lg:inline-block">
                                                Applications
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="p-3 flex items-center space-x-3 rounded-xl text-gray-600 hover:bg-pink-100 hover:text-pink-600">
                                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                            </svg>
                                            <span className="hidden lg:inline-block">
                                                Bookmarks
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="lg:flex-grow px-4 pb-4 bg-white rounded-xl">
                        <form action="#" className="block space-y-4 md:space-y-12 mt-4" onSubmit={handleSubmit}>
                            <TitleInput title={title} setTitle={setTitle} />
                            <div className="flex flex-wrap">
                                <div className="basis-[50%] flex-shrink-0">
                                    <SalaryInput />
                                </div>
                                <div className="basis-[50%] flex-shrink-0">
                                    <ExperienceInput />
                                </div>
                                <div className="basis-[50%] flex-shrink-0">
                                    <ContractTypeInput />
                                </div>
                                <div className="basis-[50%] flex-shrink-0">
                                    <LocationInput />
                                </div>
                            </div>
                            <DescriptionInput description={description} setDescription={setDescription} />
                            <ResponsibilitiesInput />
                            <QualificationsInput />
                            <div className="border-t"></div>
                            <CategoriesInput categories={categories} setCategories={setCategories} />
                            <TagsInput tags={tags} setTags={setTags} />
                            <div className="border-t"></div>
                            <CompanyInput company={company} setCompany={setCompany} />

                            <div>
                                <label htmlFor="" className="block">
                                    <h3 className="font-radio font-semibold text-gray-600 mt-8">Options</h3>
                                    <p className="text-sm mt-1 md:w-[80%] text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos saepe impedit quaerat expedita omnis culpa illo repellendus perferendis tempora.</p>
                                </label>

                                <div className="mt-4 inline-block">
                                    <FormControl>
                                        <RadioGroup defaultValue="one_three" name="radio-buttons-group">
                                            <FormControlLabel value="zero" sx={labelStyles} control={<Checkbox  size="small" />} label="Show logo on listing - $5"/>
                                            <FormControlLabel value="one_three" sx={labelStyles} control={<Checkbox size="small" />} label="Email blast matching candidates - $10" />
                                            <FormControlLabel value="four_seven" sx={labelStyles} control={<Checkbox size="small" />} label="Appear first in search results - $5" />
                                            <FormControlLabel value="eight_ten" sx={labelStyles} control={<Checkbox size="small" />} label="Post job listing in WhatsApp Groups - $5" />
                                            <FormControlLabel value="ten_more" sx={labelStyles} control={<Checkbox size="small" />} label="Post this job on other platforms - $15" />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </AppLayout>
    )
}
