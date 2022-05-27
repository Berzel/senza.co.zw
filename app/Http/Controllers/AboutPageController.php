<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class AboutPageController extends Controller
{
    /**
     * Show the about us page
     *
     * @return \Inertia\Response
     */
    public function showAboutPage() : Response
    {
        return Inertia::render('About');
    }
}
