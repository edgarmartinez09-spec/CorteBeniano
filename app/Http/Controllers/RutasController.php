<?php
namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;

class RutasController extends Controller
{
     public function index()
    {
        // Como las imágenes las carga React desde el JSON, aquí solo renderizas la vista
        return Inertia::render('Welcome');
    }
    
     public function Carrito()
    {
        
        return Inertia::render('Carrito');
    }
}
