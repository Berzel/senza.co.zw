import { ClickAwayListener } from "@mui/base"
import { useState } from "react"

export default function SideMenu(props) {
    const [sideMenuOpen, setSideMenuOpen] = useState(false)

    return (
        <ClickAwayListener onClickAway={() => setSideMenuOpen(false)}>
            <span className="flex items-center md:hidden">
                <button onClick={() => setSideMenuOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                        <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" fillRule="evenodd" clipRule="evenodd" />
                    </svg>
                </button>

                <div className={`fixed left-0 top-0 h-screen w-[85%] max-w-[15rem] bg-white shadow-xl border-r p-4 ${sideMenuOpen ? 'block' : 'hidden'}`}>
                    Side menu
                </div>
            </span>
        </ClickAwayListener>
    )
}
