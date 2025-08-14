<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use App\Models\Carbon;
use App\Models\YahuaChimichurri;
use App\Models\Sal;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    // Helper: carga un item desde BD según type e id
    private function fetchItem(string $type, int $id): ?array
    {
        switch ($type) {
            case 'producto':
                $p = Producto::find($id);
                return $p ? [
                    'key'        => "producto-{$p->id}",
                    'type'       => 'producto',
                    'id'         => $p->id,
                    'nombre'     => $p->nombre,
                    'precio'     => (float)$p->precio,
                    'imagen'     => $p->imagen,
                ] : null;

            case 'carbon':
                $c = Carbon::find($id);
                return $c ? [
                    'key'        => "carbon-{$c->id}",
                    'type'       => 'carbon',
                    'id'         => $c->id,
                    'nombre'     => $c->nombre,
                    'precio'     => (float)$c->precio,
                    'imagen'     => $c->imagen,
                ] : null;

            case 'yc':
                $y = YahuaChimichurri::find($id);
                return $y ? [
                    'key'        => "yc-{$y->id}",
                    'type'       => 'yc',
                    'id'         => $y->id,
                    'nombre'     => $y->nombre,
                    'precio'     => (float)$y->precio,
                    'imagen'     => $y->imagen,
                ] : null;

            case 'sal':
                $s = Sal::find($id);
                return $s ? [
                    'key'        => "sal-{$s->id}",
                    'type'       => 'sal',
                    'id'         => $s->id,
                    'nombre'     => $s->nombre,
                    'precio'     => (float)$s->precio,
                    'imagen'     => $s->imagen,
                ] : null;

            default:
                return null;
        }
    }

    public function index(Request $request)
    {
        $cart = $request->session()->get('cart', []); // ['key'=> ['nombre'=>..., 'precio'=>..., 'cantidad'=>...]]
        $subtotal = collect($cart)->sum(fn($it) => $it['precio'] * $it['cantidad']);

        return Inertia::render('Cart/Index', [
            'items'    => array_values($cart),
            'subtotal' => round($subtotal, 2),
        ]);
    }

    public function add(Request $request)
    {
        $data = $request->validate([
            'type'     => 'required|in:producto,carbon,yc,sal',
            'id'       => 'required|integer|min:1',
            'cantidad' => 'required|integer|min:1',
        ]);

        $serverItem = $this->fetchItem($data['type'], (int)$data['id']);
        if (!$serverItem) {
            return back()->with('error', 'Producto no encontrado');
        }

        $key = $serverItem['key'];
        $cart = $request->session()->get('cart', []);

        if (isset($cart[$key])) {
            $cart[$key]['cantidad'] += (int)$data['cantidad'];
        } else {
            $cart[$key] = [
                'key'      => $key,
                'type'     => $serverItem['type'],
                'id'       => $serverItem['id'],
                'nombre'   => $serverItem['nombre'],
                'precio'   => $serverItem['precio'], // precio confiable del servidor
                'imagen'   => $serverItem['imagen'],
                'cantidad' => (int)$data['cantidad'],
            ];
        }

        $request->session()->put('cart', $cart);
        return back()->with('success', 'Producto agregado al carrito');
    }

    public function update(Request $request)
    {
        $data = $request->validate([
            'key'      => 'required|string',
            'cantidad' => 'required|integer|min:1',
        ]);

        $cart = $request->session()->get('cart', []);
        if (isset($cart[$data['key']])) {
            $cart[$data['key']]['cantidad'] = (int)$data['cantidad'];
            $request->session()->put('cart', $cart);
        }

        return back()->with('success', 'Cantidad actualizada');
    }

    public function remove(Request $request, string $key)
    {
        $cart = $request->session()->get('cart', []);
        unset($cart[$key]);
        $request->session()->put('cart', $cart);
        return back()->with('success', 'Producto eliminado');
    }

    public function clear(Request $request)
    {
        $request->session()->forget('cart');
        return back()->with('success', 'Carrito vaciado');
    }
}
