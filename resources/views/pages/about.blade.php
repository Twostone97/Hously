@extends ('layouts/houslytemplate')

@section ('title') About Hously 
@endsection 

@section ('styles') 

@endsection

@section ('content')

<main class="bg__secondary">
    <section class="page__main bg__gradient">
        <div class="page__main__promo">
            <h1>About Hously</h1>
            <h5>Join us on our journey</h5>
        </div>
        <div class="page__main__timeline">
            <div class="page__main__timeline__bubble b__right">
                <h3>We started as student project</h3>
                <p>We started in summer 2009 during a coding Bootcamp. In team of four we prepared the minimal project which we then presented to investors</p>
            </div>
            <div class="page__main__timeline__bubble b__left">
                <h3>Our first customer was a small company from Moravia</h3>
                <p>Velkaneznama s.r.o, a company from Vsetin, implemented Hously to manage a flat house they owned. Residents were satisfied with the app and the word soon began to spread about Hously...</p>
            </div>
            <div class="page__main__timeline__bubble b__right">
                <h3>We expanded quickly</h3>
                <p>During the first year of existence, Hously helped over 50 clients with managing their houses</p>
            </div>
        </div>
    </section>
    
</main>

@endsection