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
            $table->unsignedBigInteger('owner_id')->nullable();
            $table->date('construction_date');
            $table->integer('floors_above_ground');
            $table->integer('floors_bellow_ground');
            $table->boolean('heating');
            $table->boolean('gas');
            $table->string('house_rules')->nullable();
            $table->integer('size');
            $table->string('construction');
            $table->integer('garden');
            $table->string('roof');
            $table->string('roof_cover');
            $table->string('facade');
            $table->boolean('worm_water');
            $table->boolean('cold_water');
            $table->boolean('elevator');
            $table->boolean('electricity');
            $table->date('electricity_check_first');
            $table->date('electricity_check_last');
            $table->boolean('conductor');
            $table->date('conductor_check_first');
            $table->date('conductor_check_last');
            $table->boolean('antena');
            $table->boolean('data');
            $table->boolean('EZS');
            $table->boolean('EPS');
            $table->boolean('CCTV');
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
