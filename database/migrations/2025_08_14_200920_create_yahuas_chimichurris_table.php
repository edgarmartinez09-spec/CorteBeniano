<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
{
    Schema::create('yahuas_chimichurris', function (Blueprint $table) {
        $table->id();
        $table->foreignId('categoria_id')->constrained('categorias')->onDelete('cascade');
        $table->string('nombre');
        $table->decimal('precio', 10, 2);
        $table->string('imagen')->nullable();
        $table->integer('contenido_ml'); // mililitros
        $table->text('descripcion')->nullable();
        $table->string('uso')->nullable();
        $table->boolean('refrigerado')->default(false);
        $table->timestamps();
    });
}


    public function down(): void
    {
        Schema::dropIfExists('yahuas_chimichurris');
    }
};
