<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('client')->middleware('auth:web')->group(function() {
 Route::resource('users', UserController::class);
});


Auth::routes();
