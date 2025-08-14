<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class YahuaChimichurri extends Model
{
    protected $table = 'yahuas_chimichurris';

    protected $fillable = [
        'categoria_id','nombre','precio','imagen',
        'contenido_ml','descripcion','uso','refrigerado'
    ];

    protected $casts = [
        'refrigerado' => 'boolean',
        'precio' => 'decimal:2',
        'contenido_ml' => 'integer',
    ];

    public function categoria(): BelongsTo
    {
        return $this->belongsTo(Categoria::class);
    }
}
