import { Head } from "@inertiajs/inertia-react"
import Hero from "../Components/Hero"
import AppLayout from "../Layouts/AppLayout"

export default function Home(props) {
    return (
        <AppLayout>
            <Head title="Homepage">
                <meta name="description" content="Senza homepage" />
            </Head>

            <Hero />

            <main>
                Other Home Content
            </main>
        </AppLayout>
    )
}
