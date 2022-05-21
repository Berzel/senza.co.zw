import React from "react"
import { Head, Link } from '@inertiajs/inertia-react'
import { Button } from "@mui/material"

export default function About(props) {
    return (
        <>
            <Head title="About Us">
                <meta name="description" content="About us page" />
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
                    <h1 className="mt-4 font-semibold">About Us Page</h1>
                </div>
            </div>
        </>
    )
}
