@extends ('layouts/houslytemplate')

@section ('nav')
<li class="nav-item ml-2">
    <a class="nav-link " href="/about">O Hously</a>
</li>
<li class="nav-item ml-2">
    <a class="nav-link" href="/flats">Dostupné byty</a>
</li>
<li class="nav-item ml-2">
    <a class="nav-link active" href="/houses">Zapojené domy</a>
</li>
@endsection



@section('title')
Our Houses
@endsection

@section ('content')
<section class="page__main bg__gradient-light">
<script src="https://api.mapy.cz/loader.js"></script>
<div id="map"></div>
<main class="bg__wall">
    
    <section class="page__main housesList" style="padding-top:2rem;">


        @foreach ($allbuildings as $index => $building)

        <div style="padding-top: 5vh;" id="{{$building->id}}"></div>
        <div class="page__main__dash__item"  >
            <div class="page__main__dash__item__head">
                <h3>{{$building->city}} {{$building->street}} {{$building->house_number}}</h3>
            </div>
            <div class="page__main__dash__item__body item__housesList">


                <img src="/img/houses/house{{$index+1}}.jpeg" alt="" srcset="">

                <table class="custom__table">

                    <thead></thead>

                    <tbody>
                        <tr>
                            <td><strong>Pater:</strong></td>
                            <td>Nad zemí: {{$building->floors_above_ground}}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>pod zemí:{{$building->floors_bellow_ground}}</td>
                        </tr>
                        <tr>
                            <td><strong>Výtahů:</strong></td>
                            <td>{{$building->elevator}}</td>
                        </tr>
                        <tr>
                            <td><strong>bytů:</strong></td>
                            <td>
                                <?php $i = 0; ?>
                                @foreach ($allflats as $flat)
                                @if ($flat->building_id === $building->id)
                                <?php $i++ ?>
                                @endif
                                @endforeach
                                {{$i}}</td>
                        </tr>

                        <?php $arflats = 0; $acflats = 0 ?>
                        @foreach ($allflats as $flat)
                        @if ($flat->building_id === $building->id)
                        @if ($flat->residential == 1)
                        <?php $arflats++ ?>
                        @elseif ($flat->residential == 0)
                        <?php $acflats++ ?>
                        @endif
                        @foreach ($taken_flats as $taken)
                        @if ($flat->id === $taken)
                        @if ($flat->residential == 1)
                        <?php $arflats-- ?>
                        @elseif ($flat->residential == 0)
                        <?php $acflats-- ?>
                        @endif
                        @endif
                        @endforeach
                        @endif
                        @endforeach
                        <tr>
                            <td><strong>Dostupné byty:</strong></td>
                            <td>Bytové:{{$arflats}}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Komerční:{{$acflats}}</td>
                        </tr>
                        @if ($building->owner_id === null)
                        <tr>
                            <td><span>Vlastník:</span></td>
                            <td>žádný vlastník</td>
                        </tr>
                        @else
                        @foreach ($allowners as $owner)
                        @if($building->owner_id === $owner->id)
                        @foreach ($allusers as $user)
                        @if ($owner->user_id === $user->id)
                        <tr>
                            <td><strong>Vlastník:</strong></td>
                            <td>{{$user->first_name}} {{$user->last_name}}</td>
                        </tr>
                        @endif
                        @endforeach
                        @endif
                        @endforeach
                        @endif
                        <?php
                                $date = explode('-' ,$building->construction_date);
                                $date           = "{$date[2]}. {$date[1]}. {$date[0]}";
                                ?>
                        <tr>
                            <td><strong>Datum výstavby:</strong></td>
                            <td>{{$date}}
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
        @endforeach
    </section>
</section>
    <script src="/js/mapa.js"></script>
</main>
@endsection