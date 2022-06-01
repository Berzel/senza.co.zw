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

    /**
     * Show the form to create a new job
     *
     * @return \Inertia\Response
     */
    public function create() : Response
    {
        $categories = ['Administrative', 'Marketing', 'Accounting', 'Management', 'IT & Telecoms', 'Banking', 'Sales', 'Mining', 'Domestic Stuff', 'Banking', 'Pharmaceutical', 'Medicine', 'Farming', 'Customer Service', 'Management', 'Food Services', 'Art & Design', 'Sales'];

        return Inertia::render('Jobs/NewJob', [
            'allCategories' => $categories
        ]);
    }
}
