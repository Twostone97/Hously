<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDruzstvosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('druzstvos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->string("name");
            $table->string("street");
            $table->string("house_number");
            $table->string("city");
            $table->string("country");
            $table->integer("members");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('druzstvos');
    }
}
