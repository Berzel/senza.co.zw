<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class HomePageController extends Controller
{
    /**
     * Show the application homepage
     *
     * @return \Inertia\Response
     */
    public function showHomePage() : Response
    {
        return Inertia::render('Home');
    }
}
