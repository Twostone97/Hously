@extends ('layouts/houslytemplate')

@section ('nav')
<li class="nav-item ml-2">
    <a class="nav-link " href="/about">About Hously</a>
</li>
<li class="nav-item ml-2">
    <a class="nav-link active" href="/flats">Available Appartments</a>
</li>
<li class="nav-item ml-2">
    <a class="nav-link" href="/houses">Involved Houses</a>
</li>
@endsection



@section('title')
Available flats
@endsection

@section ('content')

<main class="bg__tertiary">
    <section class="page__main bg__gradient-light">
        <div class="page__main__promo">
            <h1>Available flats</h1>
            <h5>Currently you can choose from following flats that are managed via Hously...</h5>
        </div>

        <div class="page__main__flat">
            @foreach ($allbuildings as $building)
            <h3> Building location: {{$building->street}} {{$building->house_number}}</h3>
            <div class="page__main__flat__container">



                @foreach ($list_of_flats as $one_flat)
                @if ($building->id === $one_flat->building_id)
                <div class="page__main__flat__container__item">
                    <div class="page__main__flat__container__item__head">
                        Flat no. {{$one_flat->number}}
                    </div>

                    <div class="page__main__flat__container__item__body">

                        <img src="/img/flats/flat0{{rand(1,4)}}.jpeg" alt="" srcset="">
                        <div><strong>Address:</strong></div>
                        <div>{{$building->street}} {{$building->house_number}}, {{$building->city}}</div>
                        <div><strong>Located on floor:</strong></div>
                        <div>{{$one_flat->floor}}</div>
                        <div><strong>Type of use:</strong></div>
                        <div>{{$one_flat->residential?"Residential":"Commercial"}}</div>
                        <div><strong>Square area:</strong></div>
                        <div>{{rand(25,50)}} m2</div>
                        <div><strong>Rooms:</strong></div>
                        <div>{{rand(1,4)}} </div>

                    </div>
                </div>
                @endif
                @endforeach


            </div>
            @endforeach
        </div>






    </section>
</main>
@endsection