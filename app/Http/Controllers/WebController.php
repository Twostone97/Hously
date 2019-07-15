<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
class WebController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth')->only('dashboard','map');
    }

    public function index() {
        return view ('/pages/index');
    }

    public function about() {
        return view ('/pages/about');
    }

    public function dashboard() {
        return view ('/app/dashboard');
    }

    public function map() {
        return view ('/test/map'); //pro Michala na testovani mapy
    }

    public function houses() {
        $taken_flats = [];
        $allbuildings   = DB::table('buildings')->get();
        $allflats       = DB::table('flats')->get();
        $allowners      = DB::table('owners')->get();
        $allusers      = DB::table('users')->get();
        $allresidents   = DB::table('residents')->get();


        foreach ($allflats as $flat) {
            foreach ($allresidents as $resident) {
                if ($flat->id === $resident->flat_id) {
                    $taken_flats[] = $flat->id;
                }
            }
        }

        return view ('/pages/houses', compact("allbuildings", "allflats", "allowners", "allusers", "allresidents", "taken_flats")); //oficiální mapa s funkčnímy odkazy a seznamem domů
    }
  
      
    public function mapApi(){
    $building = DB::table('buildings')->select('city','street','house_number','postal','id')->get();    
        return $building->toJson();

    }
}

