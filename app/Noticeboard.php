<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Noticeboard extends Model
{
    public function building()
    {
        return $this->hasOne('App\Building');
    }

    public function notices()
    {
        return $this->hasMany('App\Notice');
    }
}
