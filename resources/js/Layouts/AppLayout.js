import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

export default function AppLayout(props) {
    return (
        <>
            <div className="bg-gray-50 min-h-screen flex flex-col">
                <header className="relative z-10">
                    <NavBar />
                </header>

                {props.children}

                <Footer />
            </div>
        </>
    )
}
