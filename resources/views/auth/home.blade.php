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
            <div class="card">
                <div class="card-header"><p>Chat</p><select>@foreach ($communities as $community)<option>{{$community->community_name}}</option>@endforeach</select></div>
                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    @foreach ($chats as $chat)
                    @foreach ($users as $user)
                    @if ($user->id == $chat->user_id)
                    <h3>{{$user->first_name}} {{$user->last_name}}</h3><h2>{{$chat->text}}</h2><img src="{{$chat->image}}"><br>    
                    @endif
                    @endforeach
                    @endforeach
                    <form action="" method="post">
                        @csrf
                        <label for="text">Zpráva</label>
                        <input type="text" name="text">

                        <label for="text">Odkaz na obrázek</label>
                        <input type="url" name="image">

                        <input type="submit" value="Odeslat">
                    </form>
                </div>
            </div>

            @if ($profil == 'resident' )
            <div class="card">
                    <div class="card-header"><p>Moje údaje</p></div>
                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif
                        <h4>Jméno: {{$current_user->first_name}} {{$current_user->last_name}}</h4><br>
                        <h4>Telefoní číslo: {{$current_user->phone_number}}</h4><br>
                        <h4>E-mail: {{$current_user->email}}</h4><br>
                        <h4>Nájemné: {{$resident->rental}} KČ</h4><br>
                        <h4>Smlouva: {{$contract->name}}</h4><br>
                        <h4>Začátek smlouvy: {{$date}}</h4><br>
                        @if ($resident->contract_id == 2)
                        <h4>Konec smlouvy: {{$resident->end_of_current_rent}}</h4><br>
                        @endif
                    </div>
                </div>
            @endif
        </div>
    </div>
</div>
@endsection
