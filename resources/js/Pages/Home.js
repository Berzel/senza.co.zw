import React from "react"
import { Head, Link } from '@inertiajs/inertia-react'
import { Button } from "@mui/material"

export default function Home(props) {
    return (
        <>
            <Head title="Homepage">
                <meta name="description" content="Senza homepage" />
            </Head>

            <div className="container">
                <nav className="space-x-4 mt-2">
                    <Link href={route('home')}>
                        Home
                    </Link>

                    <Link href={route('about')}>
                        About Us
                    </Link>

                    <Button variant="contained">Click Me</Button>
                </nav>

                <div>
                    <h1 className="mt-4 font-semibold">Homepage</h1>
                </div>
            </div>
        </>
    )
}
