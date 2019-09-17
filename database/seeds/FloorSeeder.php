<?php

use Illuminate\Database\Seeder;
use App\Floor;

class FloorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Floor::create([
            'building_id'     => 1,
            'label'    => '1',
            'type' => 'obytný',
            'number_of_flats' => 4,
            'shared_balcony' => 1,
        ]);
        Floor::create([
            'building_id'     => 1,
            'label'    => '2',
            'type' => 'obytný',
            'number_of_flats' => 4,
            'shared_balcony' => 1,
        ]);
        Floor::create([
            'building_id'     => 1,
            'label'    => '0',
            'type' => 'smíšený',
            'number_of_flats' => 4,
            'shared_balcony' => 0,
        ]);
    }
}
