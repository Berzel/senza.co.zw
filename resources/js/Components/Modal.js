import { ClickAwayListener, Portal } from "@mui/base";
import { Fragment, useEffect } from "react";

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
                                <svg className="h-4 w-4 text-red-600 fill-current" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </button>

                        {children}
                    </div>
                </ClickAwayListener>
            </div>
        </Portal>
    )
}
