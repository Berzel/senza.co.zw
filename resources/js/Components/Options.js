import { ClickAwayListener } from "@mui/base"
import { useState } from "react"
import CloseIcon from "./Icons/CloseIcon"

export default function Options(props){
    const [open, setOpen] = useState(false)

    function close(e) {
        setOpen(false)
        e.stopPropagation()
    }

    return (
        <div className="relative">
            <button onClick={() => setOpen(true)} className="hidden md:flex items-center justify-center h-10 w-10 rounded-full hover:bg-pink-200">
                { props.icon }
            </button>
            {
                open && (
                    <ClickAwayListener onClickAway={close}>
                        <div className="absolute top-0 right-0 bg-white rounded-xl p-3 shadow-lg min-w-[15rem]">
                            {
                                props.title && (
                                    <div className="whitespace-nowrap flex items-center justify-between space-x-16">
                                        <h3 className="font-semibold font-radio">{props.title ?? 'Menu'}</h3>
                                        <button onClick={close} className="inline-block p-1 rounded-full bg-pink-100 hover:bg-pink-600 text-pink-600 hover:text-white">
                                            <CloseIcon className="h-4 w-4 fill-current" />
                                        </button>
                                    </div>
                                )
                            }
                            { props.children }
                        </div>
                    </ClickAwayListener>
                )
            }
        </div>
    )
}
