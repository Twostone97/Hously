<?php

use Illuminate\Database\Seeder;

class ContractSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Flat::create([
            'name'     => 'Na Dobu Neurčitou',
            'type'    => 'Nájemní',
        ]);

        Flat::create([
            'name'     => 'Na Dobu Určitou',
            'type'    => 'Nájemní',
        ]);
    }
}
