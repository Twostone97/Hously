<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBuildingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('buildings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('city');
            $table->string('street');
            $table->integer('house_number');
            $table->integer('postal');
            $table->unsignedBigInteger('owner_id');
            $table->date('construction_date');
            $table->integer('floors_above_ground');
            $table->integer('floors_bellow_ground');
            $table->boolean('heating');
            $table->boolean('gas');
            $table->boolean('elevator');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('buildings');
    }
}
