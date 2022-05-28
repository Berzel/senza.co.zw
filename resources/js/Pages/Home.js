import { Head } from "@inertiajs/inertia-react"
import Hero from "../Components/Hero"
import NavBar from "../Components/NavBar"

export default function Home(props) {
    return (
        <>
            <Head title="Homepage">
                <meta name="description" content="Senza homepage" />
            </Head>

            <div className="bg-gray-50 min-h-screen">
                <header className="relative z-10">
                    <NavBar />
                    <Hero />
                </header>

                <main>

                </main>

                <footer>

                </footer>
            </div>
        </>
    )
}
