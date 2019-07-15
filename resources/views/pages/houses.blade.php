@extends ('layouts/houslytemplate')

@section('title')
Our Houses    
@endsection

@section ('content')
<script src="https://api.mapy.cz/loader.js"></script>
<main class="bg__wall">
<section class="page__main bg__gradient-light">
    <div class="page__main__dash">
        <div id = "map" class="page__main__dash__item" style="margin-top: 20vh; min-width:100%">
           
        </div>
    </div>

    @foreach ($allbuildings as $building)
    
    <div class="page__main__dash__item">
            <div class="page__main__dash__item__head">
                <h3>{{$building->city}} {{$building->street}} {{$building->house_number}}</h3>
            </div>
        <div class="page__main__dash__item__body" id="{{$building->id}}">
            <table>
                
                <thead></thead>
                
                <tbody>
                    <tr><td>Pater:</td><td>Nad zemí: {{$building->floors_above_ground}}</td></tr>
                    <tr><td></td><td>Pod zemí:{{$building->floors_bellow_ground}}</td></tr>
                    <tr><td>Výtah(ů):</td><td>{{$building->elevator}}</td></tr>
                    <tr><td>Bytů:</td><td>
                        <?php $i = 0; ?>
                            @foreach ($allflats as $flat)
                            @if ($flat->building_id === $building->id)
                            <?php $i++ ?>
                            @endif
                            @endforeach
                                {{$i}}</td></tr>
                    @foreach ($allowners as $owner)
                    @if ($building->owner_id === null)
                    <tr><td>Vlastník:</td><td>Žádný Vlastník</td></tr>        
                    @elseif($building->owner_id === $owner->id)
                    @foreach ($allusers as $user)
                    @if ($owner->user_id === $user->id)
                        <tr><td>Vlastník:</td><td>{{$user->first_name}} {{$user->last_name}}</td></tr>             
                    @endif
                    @endforeach
                    @endif
                    @endforeach
                    
                </tbody>
            </table>
            <img src="https://www.google.com/search?biw=1920&bih=969&tbm=isch&sa=1&ei=AGYsXb3oGdH5sAf15YqYBQ&q=praha+centrum&oq=praha+centrum&gs_l=img.3..0l2j0i8i30l8.27082.32125..32387...4.0..0.68.1019.17......0....1..gws-wiz-img.......35i39j0i67j0i30j0i5i30j0i24j0i10i24.Bz6WRYdDNbM#imgrc=sxbnX1nQLcQhXM:" alt="" srcset="">
        </div>
    </div>
    @endforeach
</section>
<script src="/js/mapa.js"></script> 
</main>
@endsection