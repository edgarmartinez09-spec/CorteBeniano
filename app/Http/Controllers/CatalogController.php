<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use App\Models\Carbon;
use App\Models\YahuaChimichurri;
use App\Models\Sal;
use Inertia\Inertia;

class CatalogController extends Controller
{
    public function index()
    {
        // 1) Productos genéricos (Brangus, Nelore, Embutidos)
        $genericos = Producto::with('categoria:id,nombre')
            ->orderBy('nombre')
            ->get()
            ->map(function ($p) {
                return [
                    'key'        => "producto-{$p->id}",
                    'type'       => 'producto',
                    'id'         => $p->id,
                    'categoria'  => $p->categoria?->nombre,
                    'nombre'     => $p->nombre,
                    'precio'     => (float)$p->precio,
                    'imagen'     => $p->imagen,
                    'descripcion'=> $p->descripcion,
                    'refrigerado'=> (bool)$p->refrigerado,
                    'meta'       => [
                        'peso' => $p->peso,
                        'ubicacion' => $p->ubicacion,
                        'coccion' => $p->coccion,
                    ],
                ];
            });

        // 2) Extras: Carbón
        $carbones = Carbon::with('categoria:id,nombre')
            ->orderBy('nombre')
            ->get()
            ->map(function ($c) {
                return [
                    'key'        => "carbon-{$c->id}",
                    'type'       => 'carbon',
                    'id'         => $c->id,
                    'categoria'  => $c->categoria?->nombre, // debería ser "Extras"
                    'nombre'     => $c->nombre,
                    'precio'     => (float)$c->precio,
                    'imagen'     => $c->imagen,
                    'descripcion'=> $c->descripcion,
                    'refrigerado'=> false,
                    'meta'       => [
                        'peso' => $c->peso, // kg
                    ],
                ];
            });

        // 3) Extras: Yahuas/Chimichurris
        $salsas = YahuaChimichurri::with('categoria:id,nombre')
            ->orderBy('nombre')
            ->get()
            ->map(function ($y) {
                return [
                    'key'        => "yc-{$y->id}",
                    'type'       => 'yc', // yahua/chimichurri
                    'id'         => $y->id,
                    'categoria'  => $y->categoria?->nombre, // "Extras"
                    'nombre'     => $y->nombre,
                    'precio'     => (float)$y->precio,
                    'imagen'     => $y->imagen,
                    'descripcion'=> $y->descripcion,
                    'refrigerado'=> (bool)$y->refrigerado,
                    'meta'       => [
                        'contenido_ml' => $y->contenido_ml,
                        'uso'          => $y->uso,
                    ],
                ];
            });

        // 4) Extras: Sales
        $sales = Sal::with('categoria:id,nombre')
            ->orderBy('nombre')
            ->get()
            ->map(function ($s) {
                return [
                    'key'        => "sal-{$s->id}",
                    'type'       => 'sal',
                    'id'         => $s->id,
                    'categoria'  => $s->categoria?->nombre, // "Extras"
                    'nombre'     => $s->nombre,
                    'precio'     => (float)$s->precio,
                    'imagen'     => $s->imagen,
                    'descripcion'=> $s->descripcion,
                    'refrigerado'=> (bool)$s->refrigerado,
                    'meta'       => [
                        'contenido_g' => $s->contenido_g,
                    ],
                ];
            });

        $items = $genericos
            ->concat($carbones)
            ->concat($salsas)
            ->concat($sales)
            ->values();

        return Inertia::render('Catalogo', [
            'items' => $items,
        ]);
    }
}
