<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Sal extends Model
{
    protected $table = 'sales';

    protected $fillable = [
        'categoria_id','nombre','precio','imagen',
        'contenido_g','descripcion','refrigerado'
    ];

    protected $casts = [
        'refrigerado' => 'boolean',
        'precio' => 'decimal:2',
        'contenido_g' => 'integer',
    ];

    public function categoria(): BelongsTo
    {
        return $this->belongsTo(Categoria::class);
    }
}
