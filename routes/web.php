<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\RutasController;

Route::get('/', [RutasController::class, 'index']);

Route::get('/compra', [RutasController::class, 'Carrito']);

Route::get('/{any}', function () {
    return Inertia::render('NotFound');
})->where('any', '.*');
