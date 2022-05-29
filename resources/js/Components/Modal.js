import { useEffect } from "react";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import Portal from "@mui/base/Portal";
import CloseIcon from "./CloseIcon";

export default function Modal({title, close, children}) {

    useEffect(() => {
        document.body.classList.add('overflow-hidden')

        return () => {
            document.body.classList.remove('overflow-hidden')
        }
    }, [])

    function handleClickAway() {
        setTimeout(() => close(), 0)
    }

    return (
        <Portal>
            <div className="fixed top-0 right-0 bottom-0 left-0 overflow-hidden z-20 bg-black bg-opacity-70 backdrop-blur-sm flex flex-col justify-end">
                <ClickAwayListener onClickAway={handleClickAway}>
                    <div className="bg-white rounded-t-xl mt-12 overflow-auto">
                        <button className="w-full px-3 py-4 flex justify-between items-center" onClick={close}>
                            <span className="font-semibold text-lg">{title}</span>
                            <span className="h-8 w-8 rounded-full bg-red-200 flex items-center justify-center">
                                <CloseIcon className="h-4 w-4 text-red-600 fill-current" />
                            </span>
                        </button>

                        {children}
                    </div>
                </ClickAwayListener>
            </div>
        </Portal>
    )
}
