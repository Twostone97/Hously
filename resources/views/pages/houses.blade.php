@extends ('layouts/houslytemplate')

@section('title')
Our Houses    
@endsection

@section ('content')
<script src="https://api.mapy.cz/loader.js"></script>
<main class="bg__wall">
<section class="page__main bg__gradient-light">
    <div class="page__main__dash">
        <div id = "map" class="page__main__dash__item">
           
        </div>
    </div>

    @foreach ($allbuildings as $building)
    
    <div class="page__main__dash__item">
            <div className="page__main__dash__item__head">
                <h3>{{$building->city}} {{$building->street}} {{$building->house_number}}</h3>
            </div>
        <div className="page__main__dash__item__body" id="{{$building->id}}">
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
        </div>
    </div>
    @endforeach
</section>
<script src="/js/mapa.js"></script> 
</main>
@endsection