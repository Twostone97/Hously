<?php

use Illuminate\Database\Seeder;
use App\Notice;

class NoticeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Notice::create([
            'noticeboard_id'    => 1,
            'permanent'         => 1,
            'text'              => 'Kontrola plynu',
            'when'              => '2019-09-12 11:32:17'
        ]);

        Notice::create([
            'noticeboard_id'    => 1,
            'permanent'         => 0,
            'text'              => 'Schůze se koná 28. 6. 2019 v 19:00',
        ]);
    }
}
