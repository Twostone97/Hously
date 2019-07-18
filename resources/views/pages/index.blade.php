@extends ('layouts/houslytemplate')

@section ('title') Hously-Homepage 
@endsection 

@section ('nav') 
    <li class="nav-item ml-2">
        <a class="nav-link" href="/about">About Hously</a>
    </li>
    <li class="nav-item ml-2">
        <a class="nav-link" href="/flats">Available Appartments</a>
    </li>
    <li class="nav-item ml-2">
        <a class="nav-link" href="/houses">Involved Houses</a>
    </li>
@endsection

@section ('content')
<main class="bg__vegas">
    <script src="https://kit.fontawesome.com/8e20837f84.js"></script>
    <section class="page__main">
        <div class="page__main__promo">
            <h1>Here you are home</h1>
            <h5>The only app your house will love</h5>
        </div>
        <div class="page__main__features">
            <div class="page__main__features__item">
            <a href="/about">
                <div>
                    <div>
                    <img src="/img/hp-info-ico.svg" alt="Learn more">
                            <h6>Learn more</h6>
                    </div>
                </div>
            </a>
            </div>
            <div class="page__main__features__item">
                <a href="/flats">
                    <div>
                        <div>
                        <img src="/img/hp-flats-ico.svg" alt=" Available flats">
                                <h6>Available flats</h6>
                        </div>            
                    </div>  
                </a>
            </div>
            @guest
            <div class="page__main__features__item">
                <a href="#">
                    <div>
                        <div id="register__open__onPage">
                        <img src="/img/hp-register-ico.svg" alt=" Register">
                            <h6>Create account</h6>
                        </div>
                    </div>
                </a>
            </div>
            @else
            <div class="page__main__features__item">
                <a href="/app/dashboard">
                    <div>
                        <div>
                            <img src="/img/hp-dashboard-ico.svg" alt=" Dashboard">
                            <h6>Hously dashboard</h6>
                        </div>
                    </div>
                </a>
            </div>
            @endguest
                       
        </div>
    </section>
</main>   
@endsection