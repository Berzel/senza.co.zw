import { Link } from "@inertiajs/inertia-react";
import FacebookIcon from "../Components/FacebookIcon";
import LinkedinIcon from "../Components/LinkedinIcon";
import NavBar from "../Components/NavBar";
import TwitterIcon from "../Components/TwitterIcon";
import YoutubeIcon from "../Components/YoutubeIcon";

export default function AppLayout(props) {

    const iconClasses = "w-4 h-4 fill-current text-white"
    const socialMediaLinks = [
        {href: 'https://facebook.com', icon: <FacebookIcon className={iconClasses} />},
        {href: 'https://twitter.com', icon: <TwitterIcon className={iconClasses} />},
        {href: 'https://youtube.com', icon: <YoutubeIcon className={iconClasses} />},
        {href: 'https://linkedin.com', icon: <LinkedinIcon className={iconClasses} />},
    ]

    return (
        <>
            <div className="bg-gray-50 min-h-screen flex flex-col">
                <header className="relative z-10">
                    <NavBar />
                </header>

                {props.children}

                <footer className="mt-auto pt-12 text-white">
                    <div className="bg-sky-600 px-3 py-8">
                        <div className="md:container py-6 space-y-12 lg:space-y-2 lg:flex lg:justify-between lg:text-sm">
                            <div className="">
                                <Link href={route("home")} className="flex items-center space-x-2">
                                    <div className="rounded-full h-8 w-8 bg-white">

                                    </div>
                                    <h1 className="font-bold font-radio text-xl">
                                        Senza
                                    </h1>
                                </Link>
                                <p className="mt-4 md:max-w-[18rem]">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus necessitatibus soluta quaerat veniam.
                                </p>
                                <div className="flex items-center space-x-5 pr-2 mt-8">
                                    {
                                        socialMediaLinks.map(link => (
                                            <a target="_blank" key={link.href} href={link.href}>
                                                {link.icon}
                                            </a>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="lg:ml-12">
                                <h3 className="font-semibold text-lg">Features</h3>
                                <ul className="mt-4 space-y-2">
                                    <li>
                                        <Link href="#" className="flex items-center space-x-1 hover:scale-110 transition">
                                            <svg class="h-4 w-4 fill-current" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                            <span>
                                                Pricing
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={route('jobs.index')} className="flex items-center space-x-1 hover:scale-110 transition">
                                            <svg class="h-4 w-4 fill-current" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                            <span>
                                                All Jobs
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={route('jobs.create')} className="flex items-center space-x-1 hover:scale-110 transition">
                                            <svg class="h-4 w-4 fill-current" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                            <span>
                                                Post a job
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="flex items-center space-x-1 hover:scale-110 transition">
                                            <svg class="h-4 w-4 fill-current" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                            <span>
                                                Search for jobs
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="">
                                <h3 className="font-semibold text-lg">Quick Links</h3>
                                <ul className="mt-4 space-y-2">
                                    <li>
                                        <Link href="#" className="flex items-center space-x-1 hover:scale-110 transition">
                                            <svg class="h-4 w-4 fill-current" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                            <span>
                                                Our Blog
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="flex items-center space-x-1 hover:scale-110 transition">
                                            <svg class="h-4 w-4 fill-current" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                            <span>
                                                About Us
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="flex items-center space-x-1 hover:scale-110 transition">
                                            <svg class="h-4 w-4 fill-current" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                            <span>
                                                Contact Us
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="">
                                <h3 className="font-semibold text-lg">Legal</h3>
                                <ul className="mt-4 space-y-2">
                                    <li>
                                        <Link href="#" className="flex items-center space-x-1 hover:scale-110 transition">
                                            <svg class="h-4 w-4 fill-current" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                            <span>
                                                Privacy Policy
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="flex items-center space-x-1 hover:scale-110 transition">
                                            <svg class="h-4 w-4 fill-current" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                            <span>
                                                Terms &amp; Conditions
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bg-sky-800 p-3 text-sm">
                        <div className="md:container md:flex md:justify-between py-6">
                            <p>Copyright &copy; 2022 Senza. All Rights Reserved.</p>
                            <p className="mt-4 md:mt-0 flex space-x-1">
                                <span>With</span>
                                <svg className="h-5 w-5 fill-current text-pink-500" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>
                                <span>from</span>
                                <a className="hover:text-pink-600" href="https://twitter.com/berzel_best">Berzel Best</a>
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
