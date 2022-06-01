import { Head } from "@inertiajs/inertia-react";
import { Checkbox, FormControl, FormControlLabel, Radio, RadioGroup, Slider } from "@mui/material";
import { useState } from "react";
import PageTitle from "../../Components/PageTitle";
import PlusIcon from "../../Components/PlusIcon";
import AppLayout from "../../Layouts/AppLayout";

function Pill(props){
    const inActiveClasses = "bg-sky-100 text-sky-600 hover:text-pink-600"
    const activeClasses = "bg-pink-600 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-white"

    return (
        <button
            onClick={props.onClick}
            type="button"
            className={`${props.active ? activeClasses : inActiveClasses} hover:bg-pink-100 inline-block px-6 py-3 m-2 rounded-full`}>
                {props.text}
        </button>
    )
}

function Input({name, type, value, onChange, placeholder}) {
    return (
        <>
            {
                type && type === 'textarea' ? (
                    <textarea
                        value={value}
                        onChange={onChange}
                        id={name}
                        rows="10"
                        placeholder={placeholder}
                        className="block w-full px-3 py-4 outline-none rounded-2xl bg-white border-2 border-sky-600 border-opacity-50 placeholder:text-gray-600 placeholder:text-opacity-50 text-gray-900 mt-2 md:mt-4"
                    />
                ) : (
                    <input
                        value={value}
                        onChange={onChange}
                        id={name}
                        type="text"
                        placeholder={placeholder}
                        className="block w-full px-3 py-4 outline-none rounded-2xl bg-white border-2 border-sky-600 border-opacity-50 placeholder:text-gray-600 placeholder:text-opacity-50 text-gray-900 mt-2 md:mt-4"
                    />
                )
            }
        </>
    )
}

function JobTitleInput({title, setTitle}) {
    return (
        <label htmlFor="title" className="block">
            <h3 className="font-radio font-semibold text-gray-600">Job title / Position</h3>
            <p className="text-sm mt-1 md:w-[80%] text-gray-400">
                Specify as single job position like "Marketing Manager" not a sentence. No CAPITAL LETTERS or job count e.g. "x2".
            </p>
            <Input value={title} onChange={e => setTitle(e.target.value)} placeholder="Job title or position e.g Junior PHP Developer" />
        </label>
    )
}

function JobDescriptionInput({description, setDescription}) {
    return (
        <label htmlFor="description" className="block">
            <h3 className="font-radio font-semibold text-gray-600 mt-8">
                Job description
            </h3>
            <p className=" text-sm mt-1 md:w-[80%] text-gray-400">
                Make sure to include duties &amp; responsibilities, plus qualifications and any relavant information about your company.
            </p>
            <Input value={description} onChange={e => setDescription(e.target.value)} type="textarea" placeholder="Enter job description here..." />
        </label>
    )
}

function JobCategoriesInput({categories, setCategories, allCategories}) {

    /**
     * Check if a category is selected
     *
     * @param {*} category
     * @returns
     */
     function isCategorySelected(category){
        return categories.includes(category)
    }

    /**
     * Toggle the selection status of the category
     *
     * @param {*} category
     * @returns
     */
    function toggleCategory(category) {
        return isCategorySelected(category)
            ? setCategories(categories.filter(cat => cat !== category))
            : setCategories([...categories, category])
    }
    return (
        <div>
            <label htmlFor="" className="block">
                <h3 className="font-radio font-semibold text-gray-600 mt-8">Job Categories / Tags</h3>
                <p className="text-sm mt-1 md:w-[80%] text-gray-400">Select all categories that apply. We've already suggested some for you.</p>
            </label>

            <div className="mt-4">
                <div className="hidden md:flex md:flex-wrap md:-mx-2 mt-4">
                    {
                        allCategories.map((cat, i) => (
                            <Pill key={i} text={cat} active={isCategorySelected(cat)} onClick={() => toggleCategory(cat)} />
                        ))
                    }
                    <button type="button" className="bg-sky-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-sky-600 hover:text-white hover:shadow-lg inline-block px-6 py-3 m-2 rounded-full">
                        <span className="font-semibold">
                            Other &ndash; Specify
                        </span>
                    </button>
                    <button type="button" className="bg-sky-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-sky-600 hover:text-white hover:shadow-lg px-6 py-3 m-2 rounded-full flex items-center space-x-2 pl-2 viewAllBtn">
                        <span className="h-6 w-6 rounded-full bg-sky-600 text-white flex items-center justify-center viewAllBtn_icon">
                            <PlusIcon className="h-4 w-4 fill-current" />
                        </span>
                        <span className="font-semibold">
                            View more categories
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default function NewJob({allCategories, contractTypes, workExperienceRanges, renumerationRanges}) {
    const [value, setValue] = useState([20, 50])
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [categories, setCategories] = useState([])

    const labelStyles = {
        '& .MuiFormControlLabel-label': {
            fontFamily: '"Nunito", sans-serif',
            color: 'rgb(75 85 99 / 1)' //text-gray-600
        }
    }

    return (
        <AppLayout>
            <Head title="Create job">
                <meta name="description" content="Create new job on senza" />
            </Head>

            <main>
                <PageTitle title="Post new job" />

                <div className="px-3 py-6 md:container lg:flex lg:space-x-6">
                    <div className="lg:flex-grow">
                    <form action="#" className="block space-y-4 md:space-y-12">
                        <JobTitleInput title={title} setTitle={setTitle} />
                        <JobDescriptionInput description={description} setDescription={setDescription} />
                        <JobCategoriesInput categories={categories} setCategories={setCategories} allCategories={allCategories} />
                        <div className="border-t">
                            <label htmlFor="" className="block">
                                <h3 className="font-radio font-semibold text-gray-600 mt-8 md:mt-12">Contract type</h3>
                                <p className="text-sm mt-1 md:w-[80%] text-gray-400">Select the job contract type that applies. Full Time - 35+ Hrs/wk, Part Time &lt;35Hrs/wk, Fixed Term ends on a specific date.</p>
                            </label>

                            <div className="mt-4">
                                <div className="md:hidden">
                                    <FormControl>
                                        <RadioGroup defaultValue="fulltime" name="radio-buttons-group">
                                            <FormControlLabel value="fulltime" sx={labelStyles} control={<Radio  size="small" />} label="Full Time"/>
                                            <FormControlLabel value="parttime" sx={labelStyles} control={<Radio size="small" />} label="Part Time" />
                                            <FormControlLabel value="fixedterm" sx={labelStyles} control={<Radio size="small" />} label="Fixed Term" />
                                            <FormControlLabel value="internship" sx={labelStyles} control={<Radio size="small" />} label="Internship" />
                                            <FormControlLabel value="zerohours" sx={labelStyles} control={<Radio size="small" />} label="Zero Hours" />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                                <div className="hidden md:flex md:flex-wrap md:-mx-2">
                                    <button className="bg-pink-600 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-white hover:text-white shadow-lg inline-block px-6 py-3 m-2 rounded-full">
                                        Full Time
                                    </button>
                                    <button type="button" className="bg-sky-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-sky-600 hover:text-white hover:shadow-lg inline-block px-6 py-3 m-2 rounded-full">
                                        Part Time
                                    </button>
                                    <button type="button" className="bg-sky-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-sky-600 hover:text-white hover:shadow-lg inline-block px-6 py-3 m-2 rounded-full">
                                        Fixed Term
                                    </button>
                                    <button type="button" className="bg-sky-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-sky-600 hover:text-white hover:shadow-lg inline-block px-6 py-3 m-2 rounded-full">
                                        Internship
                                    </button>
                                    <button type="button" className="bg-sky-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-sky-600 hover:text-white hover:shadow-lg inline-block px-6 py-3 m-2 rounded-full">
                                        Zero Hours
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="border-t">
                            <label htmlFor="" className="block">
                                <h3 className="font-radio font-semibold text-gray-600 mt-8 md:mt-12">Work Experience</h3>
                                <p className="text-sm mt-1 md:w-[80%] text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos saepe impedit quaerat expedita omnis culpa illo repellendus perferendis tempora.</p>
                            </label>

                            <div className="mt-4">
                                <div className="md:hidden">
                                    <FormControl>
                                        <RadioGroup defaultValue="one_three" name="radio-buttons-group">
                                            <FormControlLabel value="zero" sx={labelStyles} control={<Radio  size="small" />} label="No Experience"/>
                                            <FormControlLabel value="one_three" sx={labelStyles} control={<Radio size="small" />} label="1 - 3 Years" />
                                            <FormControlLabel value="four_seven" sx={labelStyles} control={<Radio size="small" />} label="4 - 7 Years" />
                                            <FormControlLabel value="eight_ten" sx={labelStyles} control={<Radio size="small" />} label="8 - 10 Years" />
                                            <FormControlLabel value="ten_more" sx={labelStyles} control={<Radio size="small" />} label="More than 10 years" />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                                <div className="hidden md:flex md:flex-wrap md:-mx-2">
                                    <button type="button" className="bg-sky-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-sky-600 hover:text-white hover:shadow-lg inline-block px-6 py-3 m-2 rounded-full">
                                        No experience
                                    </button>
                                    <button className="bg-pink-600 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-white hover:text-white shadow-lg inline-block px-6 py-3 m-2 rounded-full">
                                        1 - 3 Years
                                    </button>
                                    <button type="button" className="bg-sky-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-sky-600 hover:text-white hover:shadow-lg inline-block px-6 py-3 m-2 rounded-full">
                                        4 - 7 Years
                                    </button>
                                    <button type="button" className="bg-sky-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-sky-600 hover:text-white hover:shadow-lg inline-block px-6 py-3 m-2 rounded-full">
                                        8 - 10 Years
                                    </button>
                                    <button type="button" className="bg-sky-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-sky-600 hover:text-white hover:shadow-lg inline-block px-6 py-3 m-2 rounded-full">
                                        More than 10 years
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="border-t">
                            <label htmlFor="" className="block">
                                <h3 className="font-radio font-semibold text-gray-600 mt-8 md:mt-12">Renumeration</h3>
                                <p className="text-sm mt-1 md:w-[80%] text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos saepe impedit quaerat expedita omnis culpa illo repellendus perferendis tempora.</p>
                            </label>

                            <div className="mt-4">
                                <div className="md:hidden">
                                    <FormControl>
                                        <RadioGroup defaultValue="monthly" name="radio-buttons-group">
                                            <FormControlLabel value="hourly" sx={labelStyles} control={<Radio  size="small" />} label="Hourly"/>
                                            <FormControlLabel value="daily" sx={labelStyles} control={<Radio size="small" />} label="Daily" />
                                            <FormControlLabel value="weekly" sx={labelStyles} control={<Radio size="small" />} label="Weekly" />
                                            <FormControlLabel value="monthly" sx={labelStyles} control={<Radio size="small" />} label="Monthly" />
                                            <FormControlLabel value="yearly" sx={labelStyles} control={<Radio size="small" />} label="Yearly" />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                                <div className="hidden md:flex md:flex-wrap md:-mx-2">
                                    <button className="bg-sky-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-sky-600 hover:text-white hover:shadow-lg inline-block px-6 py-3 m-2 rounded-full">
                                        Hourly
                                    </button>
                                    <button className="bg-sky-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-sky-600 hover:text-white hover:shadow-lg inline-block px-6 py-3 m-2 rounded-full">
                                        Daily
                                    </button>
                                    <button className="bg-sky-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-sky-600 hover:text-white hover:shadow-lg inline-block px-6 py-3 m-2 rounded-full">
                                        Weekly
                                    </button>
                                    <button className="bg-pink-600 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-white hover:text-white shadow-lg inline-block px-6 py-3 m-2 rounded-full">
                                        Monthly
                                    </button>
                                    <button className="bg-sky-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-sky-600 hover:text-white hover:shadow-lg inline-block px-6 py-3 m-2 rounded-full">
                                        Yearly
                                    </button>
                                </div>
                                <div className="ml-2 mr-4 mt-12">
                                    <Slider
                                        sx={{
                                            '& .MuiSlider-markLabel' : {
                                                fontFamily: '"Nunito", sans-serif'
                                            }
                                        }}
                                        marks={[{value: 1, label: '$1'}, {value: 98, label: '$100'}]} valueLabelDisplay="on" value={value} />
                                </div>
                            </div>
                        </div>
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
                    <div className="hidden lg:block lg:w-[15rem] lg:flex-shrink-0">
                        Right
                    </div>
                </div>
            </main>
        </AppLayout>
    )
}
