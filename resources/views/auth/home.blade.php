<?php
    //Získání profilu uživatele
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
                <div class="card-header"><p>Nástěnka</p></div>
                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>    
                    @endif
                    
                    @foreach ($notices as $notice)              {{-- Permanentní upozornění --}}
                    @if ($notice->permanent == 1)
                    <div class="card-header"><h3><strong>{{$notice->text}}</strong></h3></div>
                    @endif
                    @endforeach
                    @foreach ($notices as $notice)
                    @if ($notice->permanent == 0)               {{-- Běžné upozornění ubíhající jako chat--}}
                    <h3>{{$notice->text}}</h3>
                    @endif
                    @endforeach
                    @if ($profil == 'administrator')            {{-- Zobrazí se pouze profilu "administrator" --}}
                    <form action="/notice" method="post">       {{-- Formulář pro přidání upozornění        Zpracovává NoticeController@store --}}
                            @csrf
                            <label for="notice">Zpráva</label>
                            <input type="text" name="notice">

                            <input type="hidden" name="noticeboard" value="{{$noticeboard->id}}">
    
                            <label for="text">Permanentní</label>
                            <input type="radio" name="permanent">
    
                            <input type="submit" value="Odeslat">
                        </form>
                    @endif
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
                    <h3>{{$user->first_name}} {{$user->last_name}}</h3><h2>{{$chat->text}}</h2><img class="image" src="{{$chat->image}}"><br>    
                    @endif
                    @endforeach
                    @endforeach
                    <form action="/chat" method="post">         {{-- Formulář pro přidání zprávy        Zpracovává ChatController@store --}}
                        @csrf
                        <label for="text">Zpráva</label>
                        <input type="text" name="text"><br>

                        <label for="text">Odkaz na obrázek</label>
                        <input type="url" name="image">

                        <input type="submit" value="Odeslat">
                    </form>
                </div>
            </div>

            @if ($profil == 'resident' )                    {{-- Zobrazí se pouze profilu "resident" --}}
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

                <div class="card">
                    <div class="card-header"><p>Moje Soubory</p></div>
                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif
                        <a href="/storage/contract/{{$file_id}}.pdf">Nájemní Smlouva</a>
                    </div>
                </div>
            @endif

            @if ($profil == 'administrator' )
            <div class="card">
                    <div class="card-header"><p>Registrace obyvatele</p></div>
                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif
                        <form action="/resident" method="post" enctype="multipart/form-data">   {{-- Formulář pro registraci obyvatele       Zpracovává ResidentController@store --}}
                        @csrf
                        <label for="user_id"></label>
                        <select name="user_id">
                            @foreach ($users as $user)
                                <option value="{{$user->id}}">{{$user->first_name}} {{$user->last_name}}</option>       {{-- Výběr z uživatelů --}}
                            @endforeach
                        </select><br>
                        
                        <label for="flat_id"></label>
                        <select name="flat_id">
                            @foreach ($flats as $flat)
                            @if ($flat->residential == 1)
                            <option value="{{$flat->id}}">patro: {{$flat->floor}} byt: {{$flat->number}}</option>       {{-- Výběr z bytových jednotek --}}
                            @endif
                            @endforeach
                        </select><br>

                        <input type="hidden" name="building_id" value="{{$building}}">

                        <label for="begining_of_first_rent">Začátek prvního nájemního obdobý</label>
                        <input type="date" name="begining_of_first_rent"><br>

                        <label for="begining_of_current_rent">Začátek aktuálního nájemního obdobý</label>
                        <input type="date" name="begining_of_current_rent"><br>

                        <label for="contract_id">Smlouva</label>
                        <select name="contract_id">
                            @foreach ($rentcontracts as $contract)
                                <option value="{{$contract->id}}">{{$contract->name}}</option>
                            @endforeach
                        </select><br>
                        
                        {{-- @if ($contract == 2) --}}  {{-- If bude v reaktu --}}
                        <label for="end_of_current_rent">Konec aktuálního nájemního obdobý</label>
                        <input type="date" name="end_of_current_rent"><br>
                        {{-- @endif --}}

                        <label for="number_of_residents">Počet osob</label>
                        <input type="number" name="number_of_residents"><br>

                        <label for="rental">Nájemné (kč)</label>
                        <input type="number" name="rental"><br>

                        <label for="file">Nájemní smlouva</label>
                        <input type="file" name="file"><br>

                        <input type="submit" value="Registrovat">
                        </form>
                    </div>
                </div>
            @endif

            <div class="card">
                <div class="card-header"><p>Test Mapy.cz</p></div>
                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    <div id="mapa" style="width:600px; height:400px;"></div>                                <!-- Mapy.cz Api -->
                    <script type="text/javascript">
                        var stred = SMap.Coords.fromWGS84(14.41, 50.08);
                        var mapa = new SMap(JAK.gel("mapa"), stred, 10);
                        mapa.addDefaultLayer(SMap.DEF_BASE).enable();
                        mapa.addDefaultControls();	      	      
                    </script>
                </div>
            </div>

            @if ($profil == 'owner' ||  $profil == 'administrator')
            <div class="card">
                <div class="card-header"><p>Tato budova</p></div>
                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    
                    <table>
                            <th>Budova</th>
                        <thead>
                            <th>Položka</th>
                            <th>Hodnota</th>                            
                        </thead>
                        <tbody>
                            <tr>
                                <td>Město</td>
                                <td>{{$this_building->city}}</td>
                            </tr>
                            <tr>
                                <td>Číslo popisné</td>
                                <td>{{$this_building->house_number}}</td>
                            </tr>
                            <tr>
                                <td>Počet podlaží</td>
                                <td>{{$this_building->floors_above_ground + $this_building->floors_bellow_ground}}</td>
                            </tr>
                            <tr>
                                <td>Výtah</td>
                                <td>@if ($this_building->elevator == 1)
                                    Ano
                                @else
                                    Ne
                                @endif</td>
                            </tr>
                        </tbody>
                        
                    </table>
                    
                    <table>
                        <th>Bytové jednotky</th>
                        <tbody>
                            @foreach ($flats as $flat)
                            @if ($flat->residential == 1)
                            <tr>
                                <td>Patro: {{$flat->floor}}</td>
                                <td>Číslo bytu: {{$flat->number}}</td>
                                <td>Obyvatel: 
                                        @foreach ($residents as $resid)
                                            @if ($resid->flat_id == $flat->id)
                                                <?php $r = DB::table('users')->where('id', '=', $resid->user_id)->first(); $name = "{$r->first_name} {$r->last_name}" ?>
                                                {{$name}}
                                            @endif
                                        @endforeach                                    
                                </td>
                            </tr>    
                            
                            @endif
                            @endforeach
                        </tbody>
                    </table>

                    <table>
                        <th>Nebytové jednotky</th>
                        <tbody>
                            @foreach ($flats as $flat)
                            @if ($flat->residential == 0)
                            <tr>
                                <td>Patro: {{$flat->floor}}</td>
                                <td>Číslo bytu: {{$flat->number}}</td>
                                <td>Obyvatel:
                                    @foreach ($residents as $resid)
                                    @if ($resid->flat_id == $flat->id)
                                        <?php $r = DB::table('users')->where('id', '=', $resid->user_id)->first(); $name = "{$r->first_name} {$r->last_name}" ?>
                                        {{$name}}
                                    @endif
                                    @endforeach
                                </td>
                            </tr>
                            
                            @endif
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
            @endif

            @if ($profil == 'owner' ||  $profil == 'administrator')
            <div class="card">
                <div class="card-header"><p>Databáze Obyvatel</p></div>
                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

            </div>
            @endif

        </div>
    </div>
</div>
@endsection




