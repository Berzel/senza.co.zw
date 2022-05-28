import NavBar from "../Components/NavBar";

export default function AppLayout(props) {
    return (
        <>
            <div className="bg-gray-50 min-h-screen">
                <header className="relative z-10">
                    <NavBar />
                </header>

                {props.children}

                <footer>

                </footer>
            </div>
        </>
    )
}
