@extends ('layouts/houslytemplate')

@section ('title') Hously-Homepage 
@endsection 

@section ('styles') 

@endsection

@section ('content')
<main class="bg__vegas">
    <script src="https://kit.fontawesome.com/8e20837f84.js"></script>
    <section class="index__main">
        <div class="index__main__promo">
            <h1>Here you are home</h1>
            <h5>The only app your house will love</h5>
        </div>
        <div class="index__main__features">
            <div class="index__main__features__item">
                <div>
                    <div>
                        <i class="fas fa-info-circle"></i>
                        <h6>Learn more</h6>
                    </div>
                </div>
            </div>
            <div class="index__main__features__item">
                <div>
                    <div>
                        <i class="fas fa-home"></i>
                        <h6>Available flats</h6>
                    </div>
                </div>
            </div>
            <div class="index__main__features__item">
                <div>
                    <div>
                        <i class="fas fa-user"></i>
                        <h6>Log in</h6>
                    </div>
                </div>
            </div>
                       
        </div>
    </section>
</main>   
@endsection