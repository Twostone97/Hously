@extends ('layouts/houslytemplate')

@section ('content')
<script src="https://api.mapy.cz/loader.js"></script>
<main class="bg__wall">
<section class="page__main bg__gradient-light">
    <div class="page__main__promo" style="padding-top: 10vmax">
    <div class="page__main__dash">
        <div id = "map" class="page__main__dash__item i__big">
           
        </div>
    </div>
</section>
</main>
<script src="/js/mapa.js"></script> 
@endsection