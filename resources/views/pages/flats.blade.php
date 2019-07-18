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
            @foreach ($list_of_flats as $one_flat)

            <div class="page__main__flat__container__item" id="{{$one_flat->id}}">

                @foreach ($allbuildings as $building)
                @if ($building->id === $one_flat->building_id)

                <div class="page__main__flat__container__head">
                    {{$building->street}} {{$building->house_number}}
                </div>

                <div class="page__main__flat__container__body">

                    <img src="http://www.ziprealty.cz/uploads/2016/08/01-villa-apus-byty-krakovska-developerske-projekty-nove-mesto-praha-1-1470737183.jpg"
                        alt="" srcset="" style="max-width: 45%; max-height: 45%; align-self: left">
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