<?php
    if (DB::table('owners')->where('user_id', '=', Auth::user()->id)->first() != null) {
        $profil = 'owner';
    } elseif (DB::table('administrators')->where('user_id', '=', Auth::user()->id)->first() != null) {
        $profil = 'administrator';
    } elseif (DB::table('residents')->where('user_id', '=', Auth::user()->id)->first() != null) {
        $profil = 'resident';
    }
?>
@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    You are logged in {{ Auth::user()->first_name }} {{ Auth::user()->last_name }}!
                    You are {{$profil}} around here!
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
