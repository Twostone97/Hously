@extends ('layouts/houslytemplate')

@section ('title') Map test
@endsection 

@section ('styles') 

<style>
.page__main__dash__item i__big{
    flex:1 1 auto;
}
/*pokud budes potrebovat neco nastylovat, davej prosim sem*/

</style>

@endsection

@section ('content')

<main class="bg__wall">
    <section class="page__main bg__gradient-light">
        <div class="page__main__promo">
            <h1>Map test</h1>
            <h5>oh yeah, test me ...</h5>
        </div>
        
        <div class="page__main__dash">
            <div class="page__main__dash__item i__big">
                <p>test map here</p>
            </div>
        </div>
    </section>
    
</main>

@endsection