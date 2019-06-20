<?php

use Illuminate\Database\Seeder;
use App\Flat;

class FlatsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Flat::create([
            'building_id'     => 1,
            'floor'    => 1,
        ]);
    }
}
