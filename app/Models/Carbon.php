<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Carbon extends Model
{
    protected $table = 'carbones';

    protected $fillable = [
        'categoria_id','nombre','precio','imagen','peso','descripcion'
    ];

    protected $casts = [
        'precio' => 'decimal:2',
        'peso' => 'decimal:2',
    ];

    public function categoria(): BelongsTo
    {
        return $this->belongsTo(Categoria::class);
    }
}
