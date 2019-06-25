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
                        if (DB::table('owners')->where('user_id', '=', Auth::user()->id)->first() != null) {
                            $building = $owner->building_id;
                        } elseif (DB::table('administrators')->where('user_id', '=', Auth::user()->id)->first() != null) {
                            $building = $administrator->building_id;
                        } elseif (DB::table('residents')->where('user_id', '=', Auth::user()->id)->first() != null) {
                            $building = $resident->building_id;
                            $contract       = DB::table('contracts')->where('id', '=', $resident->contract_id)->first();
                            $date           = explode('-' ,$resident->begining_of_current_rent);
                            $date           = "{$date[2]}. {$date[1]}. {$date[0]}";
                        }
        $chats          = DB::table('chats')->where('community_id', '=', 1)->orderBy('created_at', 'asc')->get();
        $users          = DB::table('users')->get();
        $communities    = DB::table('communities')->where('building_id', '=', $building)->get();
        $current_user   = DB::table('users')->where('id', '=', Auth::user()->id)->first();
        $noticeboard    = DB::table('noticeboards')->where('building_id', '=', $building)->first();
        $notices        = DB::table('notices')->where('noticeboard_id', '=', $noticeboard->id)->get();
        
        
        return view('Auth/home', compact('chats', 'users', 'communities', 'current_user', 'resident', 'date', 'contract', 'building', 'notices', 'noticeboard'));
    }

    public function chat(Request $request)
    {
        $chat = new Chat;
        $chat->user_id = Auth::user()->id;
        $chat->community_id = 1;
        $chat->text = $request->text;
        $chat->warning = false;
        $chat->image = $request->image;
        $chat->save();
        
        return redirect(action('HomeController@index'));
    }

    public function notice(Request $request)
    {
        $notice = new Notice;
        $notice->noticeboard_id = $request->noticeboard;
        if ($request->permanent == 'on') {
            $notice->permanent = true;
        } else {
            $notice->permanent = false;   
        }
        $notice->text = $request->notice;
        $notice->save();

        return redirect(action('HomeController@index'));
    }
}
