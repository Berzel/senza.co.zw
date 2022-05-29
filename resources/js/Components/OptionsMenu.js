import { Link } from "@inertiajs/inertia-react"
import { ClickAwayListener } from "@mui/base"
import { useState } from "react"

export default function OptionsMenu(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const dropDownLinks = [
        {
            title: 'About Us',
            href: '#'
        },
        {
            title: 'Contact Us',
            href: '#'
        },
        {
            title: 'Terms of use',
            href: '#'
        },
        {
            title: 'Privacy Policy',
            href: '#'
        }
    ]

    return (
        <ClickAwayListener onClickAway={() => setDropdownOpen(false)}>
            <span className="relative">
                <button className="h-8 w-8 flex items-center justify-center" onClick={() => setDropdownOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 block md:hidden text-sky-600 fill-current" viewBox="0 0 20 20">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                    <svg className="h-6 lg:h-8 w-6 lg:w-8 hidden md:block rounded-full text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
                <ul className={`absolute right-0 top-0 bg-white py-2 rounded-xl shadow-xl border-t overflow-hidden ${dropdownOpen ? 'block' : 'hidden'}`}>
                    {
                        dropDownLinks.map(link => (
                            <li key={link.title}>
                                <Link href={link.href} className="block py-2 px-6 min-w-[8rem] text-left text-sky-600 hover:text-pink-600 whitespace-nowrap hover:bg-pink-100 hover:bg-opacity-70 hover:backdrop-blur-sm">
                                    {link.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </span>
        </ClickAwayListener>
    )
}
