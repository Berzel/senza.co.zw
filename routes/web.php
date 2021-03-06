<?php

use App\Http\Controllers\HomePageController;
use App\Http\Controllers\JobsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('jobs/post-new-job', [JobsController::class, 'create'])
    ->name('jobs.create');

Route::get('/jobs', [JobsController::class, 'showAll'])
    ->name('jobs.index');

Route::get('/', [HomePageController::class, 'showHomePage'])
    ->name('home');
