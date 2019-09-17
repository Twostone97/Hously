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
            'city'     => 'Praha',
            'street'    => 'Na Příkopě',
            'house_number'    => 1,
            'postal'    => 11000,
            'owner_id'    => 1,
            'construction_date' => '2019-06-20',
            'floors_above_ground' => 2,
            'floors_bellow_ground' => 1,
            'heating' => 1,
            'gas' => 1,
            'size' => 150,
            'construction' => "Nosná",
            'garden' => 0,
            'roof' => "šikmá",
            'roof_cover' => "plechová profilovaná",
            'facade' => 'hlavní',
            'worm_water' => 1,
            'cold_water' => 1,
            'elevator' => 1,
            'electricity' => 1,
            'electricity_check_first' => '2019-06-20',
            'electricity_check_last' => '2019-08-20',
            'conductor' => 1,
            'conductor_check_first' => '2019-06-01',
            'conductor_check_last' => '2019-08-01',
            'antena' => 1,
            'data' => 1,
            'EZS' => 1,
            'EPS' => 1,
            'CCTV' => 1
        ]);
    }
}
