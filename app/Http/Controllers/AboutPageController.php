<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class AboutPageController extends Controller
{
    public function showAboutPage()
    {
        return Inertia::render('About');
    }
}
