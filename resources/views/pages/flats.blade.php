@extends ('layouts/houslytemplate')

@section ('nav')
<li class="nav-item ml-2">
    <a class="nav-link " href="/about">O Hously</a>
</li>
<li class="nav-item ml-2">
    <a class="nav-link active" href="/flats">Dostupné byty</a>
</li>
<li class="nav-item ml-2">
    <a class="nav-link" href="/houses">Zapojené domy</a>
</li>
@endsection



@section('title')
Dostupné Byty
@endsection

@section ('content')

<main class="bg__wall">
    <section class="page__main bg__gradient-light">
        <div class="page__main__promo">
            <h1>Dostupné byty</h1>
            <h5>Můžeš si vybrat z těchto bytů...</h5>
        </div>

        <div class="page__main__flat">
            @foreach ($allbuildings as $building)
            
            
            <h3> Adresa: {{$building->street}} {{$building->house_number}}</h3>
            <div class="page__main__flat__container">



                @foreach ($list_of_flats as $one_flat)
                @if ($building->id === $one_flat->building_id)
                @if ($one_flat->available)
                <div class="page__main__flat__container__item">
                    <div class="page__main__flat__container__item__head">
                        Byt číslo {{$one_flat->label}}
                    </div>

                    <div class="page__main__flat__container__item__body">

                        <img src="/img/flats/flat0{{rand(1,4)}}.jpeg" alt="" srcset="">
                        <div><strong>Adresa:</strong></div>
                        <div>{{$building->street}} {{$building->house_number}}, {{$building->city}}</div>
                        <div><strong>Na patře:</strong></div>
                        @foreach ($allfloors as $floor)
                        @if ($one_flat->floor_id == $floor->id)
                        <div>{{$floor->label}}</div>
                        @endif
                        @endforeach
                        <div><strong>Typ:</strong></div>
                        <div>{{$one_flat->residential?"Obytný":"Obchodní"}}</div>
                        <div><strong>Výměra:</strong></div>
                        <div>{{$one_flat->size}} m2</div>
                        <div><strong>Dispozice:</strong></div>
                        <div>{{$one_flat->dispozition}} </div>
                    </div>
                </div>
                @endif
                @endif
                @endforeach


            </div>
            
            @endforeach
        </div>






    </section>
</main>
@endsection