<?php

namespace App\Http\Controllers;

use App\Resident;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\File;
use Auth;
use DB;

class ResidentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($file_id)
    {
     
        
    return response((Storage::get("/contract/{$file_id}.pdf")))->header('Content-Type',"pdf");
        // return redirect(action('HomeController@index'));

      
    }
  
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $resident = new Resident;
        $resident->user_id = $request->user_id;
        $resident->flat_id = $request->flat_id;
        $resident->building_id = $request->building_id;
        $resident->begining_of_first_rent = $request->begining_of_first_rent;
        $resident->begining_of_current_rent = $request->begining_of_current_rent;
        $resident->contract_id = $request->contract_id;
        $resident->end_of_current_rent = $request->end_of_current_rent;
        $resident->number_of_residents = $request->number_of_residents;
        $resident->rental = $request->rental;
        $resident->file = $request->file('file')->storeAs(
            'contract', "{$request->flat_id}.pdf"
        );
        $resident->save();

        return redirect(action('HomeController@index'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Resident  $resident
     * @return \Illuminate\Http\Response
     */
    public function show(Resident $resident)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Resident  $resident
     * @return \Illuminate\Http\Response
     */
    public function edit(Resident $resident)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Resident  $resident
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Resident $resident)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Resident  $resident
     * @return \Illuminate\Http\Response
     */
    public function destroy(Resident $resident)
    {
        //
    }
}
