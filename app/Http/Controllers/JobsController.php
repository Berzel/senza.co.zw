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
        return Inertia::render('Jobs/Index');
    }

    /**
     * Show the form to create a new job
     *
     * @return \Inertia\Response
     */
    public function create() : Response
    {
        return Inertia::render('Jobs/Create');
    }
}
