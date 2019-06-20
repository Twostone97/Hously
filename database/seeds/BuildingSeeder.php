<?php

use Illuminate\Database\Seeder;
use App\Building;

class BuildingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Building::create([
            'city'     => 'Testerov',
            'street'    => 'Testovací',
            'house_number'    => 1,
            'postal'    => 11100,
            'owner_id'    => 1,
            'construction_date' => '2019-06-20',
            'floors_above_ground' => 1,
            'floors_bellow_ground' => 0,
            'heating' => 1,
            'gas' => 1,
        ]);
    }
}
