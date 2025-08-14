<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  public function up(): void
{
    Schema::create('productos', function (Blueprint $table) {
        $table->id();
        $table->foreignId('categoria_id')->constrained('categorias')->onDelete('cascade');
        $table->string('nombre');
        $table->decimal('precio', 10, 2);
        $table->string('imagen')->nullable();
        $table->decimal('peso', 8, 2)->nullable(); // kg
        $table->text('descripcion')->nullable();
        $table->string('ubicacion')->nullable();
        $table->string('coccion')->nullable();
        $table->boolean('refrigerado')->default(false);
        $table->timestamps();
    });
}


    public function down(): void
    {
        Schema::dropIfExists('productos');
    }
};
