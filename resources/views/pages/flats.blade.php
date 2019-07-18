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

<main class="bg__wall">
    <section class="page__main bg__gradient-light">
        <div class="page__main__promo">
            <h1>Available flats</h1>
            <h5>Currently you can choose from following flats that are managed via Hously...</h5>
        </div>
        <div class="page__main__flat__container">

            @foreach ($allbuildings as $building)


            <div class="page__main__flat__container__item">

                @foreach ($list_of_flats as $one_flat)
                @if ($building->id === $one_flat->building_id)

                <div class="page__main__flat__container__item__head">
                    {{$building->street}} {{$building->house_number}}
                    {{$one_flat->number}}
                </div>

                <div class="page__main__flat__container__item__body">

                    <img src="/img/flats/flat0{{rand(1,4)}}.jpeg" alt="" srcset="">
                    <table>

                        <tr>
                            <td>Adress</td>
                            <td>{{$building->city}}</td>
                            <td> {{$building->street}} {{$building->house_number}}</td>
                        </tr>
                        <tr>
                            <td>floor:</td>
                            <td>{{$one_flat->floor}}</td>
                        <tr>
                            <td>type:</td>
                            <td>{{$one_flat->residential?"Residential":"Commercial"}}
                        </tr>

                        <tbody>
                        </tbody>

                    </table>

                </div>
                @endif
                @endforeach

            </div>
            @endforeach

        </div>




    </section>
</main>
@endsection