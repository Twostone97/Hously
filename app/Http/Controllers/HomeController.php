<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Auth;
use App\Chat;
use App\Notice;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\File;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {   
        $resident      = DB::table('residents')->where('user_id', '=', Auth::user()->id)->first();
        $owner         = DB::table('owners')->where('user_id', '=', Auth::user()->id)->first();
        $administrator = DB::table('administrators')->where('user_id', '=', Auth::user()->id)->first();


                        //Speciální data dostupná pouze danému profilu
                        if (DB::table('owners')->where('user_id', '=', Auth::user()->id)->first() != null) {
                            $building = $owner->building_id;
                        } elseif (DB::table('administrators')->where('user_id', '=', Auth::user()->id)->first() != null) {
                            $building = $administrator->building_id;
                        } elseif (DB::table('residents')->where('user_id', '=', Auth::user()->id)->first() != null) {
                            $building = $resident->building_id;
                            $contract       = DB::table('contracts')->where('id', '=', $resident->contract_id)->first();
                            $date           = explode('-' ,$resident->begining_of_current_rent);
                            $date           = "{$date[2]}. {$date[1]}. {$date[0]}";     //Převedení data z formátu YY-mm-dd na dd. mm. YY
                            $file_id        = $resident->flat_id;
                            $file           = Storage::url("contract/{$file_id}.pdf");
                        }

        $chats          = DB::table('chats')->where('community_id', '=', 1)->orderBy('created_at', 'asc')->get();
        $users          = DB::table('users')->get();
        $communities    = DB::table('communities')->where('building_id', '=', $building)->get();
        $current_user   = DB::table('users')->where('id', '=', Auth::user()->id)->first();
        $noticeboard    = DB::table('noticeboards')->where('building_id', '=', $building)->first();
        $rentcontracts      = DB::table('contracts')->where('type', '=', 'Nájemní')->get();
        $notices        = DB::table('notices')->where('noticeboard_id', '=', $noticeboard->id)->get();
        $flats          = DB::table('flats')->where('building_id', '=', $building)->get();
        
        
        
        return view('Auth/home', compact('chats', 'users', 'communities', 'current_user', 'resident', 'date', 'contract', 'building', 'notices', 'noticeboard', 'flats', 'rentcontracts', 'file', 'file_id'));
    }
}
