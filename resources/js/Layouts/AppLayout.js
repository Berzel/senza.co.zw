import NavBar from "../Components/NavBar";

export default function AppLayout(props) {
    return (
        <>
            <div className="bg-gray-50 min-h-screen flex flex-col">
                <header className="relative z-10">
                    <NavBar />
                </header>

                {props.children}

                <footer className="mt-auto pt-12 text-white">
                    <div className="bg-sky-600 p-3">
                        <div className="md:container py-6">

                        </div>
                    </div>
                    <div className="bg-sky-800 p-3 text-sm">
                        <div className="md:container md:flex md:justify-between py-6">
                            <p>Copyright &copy; 2022 Senza. All Rights Reserved.</p>
                            <p className="mt-2 md:mt-0">Site by <a className="hover:text-pink-600" href="https://twitter.com/berzel_best">Berzel Best</a></p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
