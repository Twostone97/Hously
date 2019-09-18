<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFlatsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('flats', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('building_id');
            $table->unsignedBigInteger('floor_id');
            $table->string('label');
            $table->boolean('residential');
            $table->string('type');
            $table->string('dispozition');
            $table->integer('rooms');
            $table->integer('size');
            $table->boolean('balcony');
            $table->boolean('heating');
            $table->boolean('warm_water');
            $table->boolean('cold_water');
            $table->boolean('electricity');
            $table->date('electricity_check_first');
            $table->date('electricity_check_last');
            $table->boolean('gas');
            $table->boolean('antena');
            $table->boolean('EZS');
            $table->boolean('EPS');
            $table->boolean('data');
            $table->boolean('CCTV');
            $table->boolean('available');
            $table->integer('rent');
            $table->integer('fees');
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
        Schema::dropIfExists('flats');
    }
}
