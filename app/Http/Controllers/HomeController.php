<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Auth;
use App\Chat;
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
        $chats = DB::table('chats')->where('community_id', '=', 1)->orderBy('created_at', 'asc')->get();
        $users = DB::table('users')->get();
        $communities = DB::table('communities')->get();
        $current_user = DB::table('users')->where('id', '=', Auth::user()->id)->first();
        return view('Auth/home', compact('chats', 'users', 'communities', 'current_user'));
    }

    public function save(Request $request)
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
}
