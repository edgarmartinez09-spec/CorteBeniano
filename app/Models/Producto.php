<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Producto extends Model
{
    protected $fillable = [
        'categoria_id','nombre','precio','imagen','peso','descripcion',
        'ubicacion','coccion','refrigerado'
    ];

    protected $casts = [
        'refrigerado' => 'boolean',
        'precio' => 'decimal:2',
        'peso' => 'decimal:2',
    ];

    public function categoria(): BelongsTo
    {
        return $this->belongsTo(Categoria::class);
    }
}
