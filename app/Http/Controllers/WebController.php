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
    public function noticeboard() {
        return view ('/app/noticeboard');
    }

    public function community() {
        return view ('/app/community');
    }

    public function messenger() {
        return view ('/app/messenger');
    }

    public function flatavailability() {
        return view ('/app/flatavailability');
    }

    public function myrent() {
        return view ('/app/myrent');
    }

    public function ourhouse() {
        return view ('/app/ourhouse');
    }

    public function ownerstructure() {
        return view ('/app/ownerstructure');
    }

    public function foo() {
        return view ('/app/foo');
    }

    public function map() {
        return view ('/test/map'); //pro Michala na testovani mapy
    }

    public function reacthouses() {
        return view ('/pages/react-houses');
    }

    public function houses() {
        $taken_flats = [];
        $allbuildings   = DB::table('buildings')->get();
        $allflats       = DB::table('units')->get();
        $allowners      = DB::table('owners')->get();
        $allusers       = DB::table('users')->get();
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
    public function flats(){
        $list_of_flats=[];
        $list_of_resident=[];
        $allflats        = DB::table('units')-> get();
        $allbuildings    = DB::table('buildings')->get();
        $allfloors       = DB::table('floors')->get();
        $allresidents_Id = DB::table('residents')->select('flat_id')->get()->toArray();

        foreach ($allresidents_Id as $resident) {
            $list_of_resident[]=$resident->flat_id;
        }
      
       
        foreach ($allflats as $flat) {
           
     
            if(!array_search($flat->id,$list_of_resident)){
               
                $list_of_flats[]=$flat;
                }
        }
      


        return view ('/pages/flats', compact("list_of_flats","allbuildings","allflats", "allfloors"));
    }
}