<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UserSeeder::class);
        $this->call(BuildingSeeder::class);
        $this->call(ResidentSeeder::class);
        $this->call(OwnerSeeder::class);
        $this->call(AdministratorSeeder::class);
        $this->call(FlatsSeeder::class);
        $this->call(ContractSeeder::class);
    }
}
