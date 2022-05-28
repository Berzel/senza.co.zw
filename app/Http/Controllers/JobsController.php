<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class JobsController extends Controller
{
    /**
     * Show all jobs on senza
     *
     * @return \Inertia\Response
     */
    public function showAll() : Response
    {
        return Inertia::render('Jobs');
    }
}
