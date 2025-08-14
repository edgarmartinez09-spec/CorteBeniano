<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\RutasController;
use App\Http\Controllers\CartController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

// Página principal: catálogo o bienvenida
Route::get('/', [RutasController::class, 'index'])->name('home');

//mostrar catalogo
Route::get('/compra', [RutasController::class, 'Catalogo'])->name('compra');







// --- RUTAS DEL CARRITO ---
Route::get('/cart', [CartController::class, 'index'])->name('cart.index');
Route::post('/cart/add', [CartController::class, 'add'])->name('cart.add');
Route::patch('/cart/update', [CartController::class, 'update'])->name('cart.update');
Route::delete('/cart/remove/{key}', [CartController::class, 'remove'])->name('cart.remove');
Route::delete('/cart/clear', [CartController::class, 'clear'])->name('cart.clear');

// --- CUALQUIER OTRA RUTA (404) ---
Route::get('/{any}', function () {
    return Inertia::render('NotFound'); // tu página de NotFound
})->where('any', '.*');
