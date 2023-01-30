<?php

use App\Http\Controllers\Fetch_clinicController;
use App\Http\Controllers\Save_clinicController;
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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/fetch_clinic_config', [Fetch_clinicController::class, 'fetch_clinic_config']);
Route::get('/save_clinic_booking', [Save_clinicController::class, 'save_clinic_booking']);
