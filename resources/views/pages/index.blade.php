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
<main>
    <script src="https://kit.fontawesome.com/8e20837f84.js"></script>
    <div class="heroBanner bg__vegas">
        <h1>Hously</h1>
        <h5>Digitální život vašeho domu</h5>
        <div>
            <div class="heroBanner__features">
                <div class="heroBanner__features__item">
                    <a href="/about">
                        <div>
                            <div>
                                <img src="/img/hp-info-ico.svg" alt="Learn more">
                                <h6>Zjistit více</h6>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="heroBanner__features__item">
                    <a href="/flats">
                        <div>
                            <div>
                                <img src="/img/hp-flats-ico.svg" alt=" Available flats">
                                <h6>Volné byty</h6>
                            </div>
                        </div>
                    </a>
                </div>
                @guest
                <div class="heroBanner__features__item">
                    <a href="#">
                        <div>
                            <div id="register__open__onPage">
                                <img src="/img/hp-register-ico.svg" alt=" Register">
                                <h6>Vytvořit účet</h6>
                            </div>
                        </div>
                    </a>
                </div>
                @else
                <div class="heroBanner__features__item">
                    <a href="/app/dashboard">
                        <div>
                            <div>
                                <img src="/img/hp-dashboard-ico.svg" alt=" Dashboard">
                                <h6>Zobrazt přehled domu</h6>
                            </div>
                        </div>
                    </a>
                </div>
                @endguest

            </div>
        </div>
    </div>
    <section class="fullwClaim">
        <h3>Hously je pro každého</h3>
        <p>Rezidenty - obyvatele bytu, podnikatele v obchůdku, pracovníka v kanceláři</p>
        <p>Vlastníky - jednotlivé majitele, společenství a družstva, investory</p>
        <p>Správce domů - subjekty odpovědné za řádný provoz domu</p>

        <div class="fullwClaim__slogan">
            <p>"rezidenti, vlastníci, správci</p>
            <p>my všichni dáváme domům život"</p>
        </div>
    </section>
    <section class="content2boxes">
        <div class="flexContainer box">
            <div class="content2boxes__box__txt">
                <div class="content2boxes__box__txt__head">
                    <h3>Jednoduše dostupné virtuální prostředí pro obyvatele domu</h3>
                </div>
                <div class="flexContainer">
                    <div class="content2boxes__box__txt__body">
                        <div class="content2boxes__box__txt__body__txt">
                            <p>komunita v domě</p>
                            <p>život v domě a události</p>
                            <p>provozní informace</p>
                            <p>aktuality</p>
                            <p>služby</p>
                            <p>moje dokumenty</p>
                        </div>
                        <div class="content2boxes__box__txt__body__link arrowRight">
                            <a href="">Obyvatelé domu</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content2boxes__box__img box" id="ilustr-obyvatele">
        </div>
    </section>
    <section class="content2boxes imgLeft">
        <div class="flexContainer box">
            <div class="content2boxes__box__txt">
                <div class="content2boxes__box__txt__head">
                    <h3>Chytrá a bezpečná platforma pro vlastníky nemovitostí</h3>
                </div>
                <div class="flexContainer">
                    <div class="content2boxes__box__txt__body textRight">
                        <div class="content2boxes__box__txt__body__txt">
                            <p>jednotlivci/ společenství a družstva</p>
                            <p>agenda společenství a družstev</p>
                            <p>vlastnické informace a dokumenty</p>
                            <p>profesionální podpora</p>
                            <p>spolupráce se správcem</p>
                            <p>finanční reporting</p>

                        </div>
                        <div class="content2boxes__box__txt__body__link arrowLeft">
                            <a href="">Vlastníci</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content2boxes__box__img box" id="ilustr-vlastnici">
        </div>
    </section>
    <section class="content2boxes">
        <div class="flexContainer box">
            <div class="content2boxes__box__txt">
                <div class="content2boxes__box__txt__head">
                    <h3>Přehledný a ucelený pracovní nástroj pro správce budov</h3>
                </div>
                <div class="flexContainer">
                    <div class="content2boxes__box__txt__body">
                        <div class="content2boxes__box__txt__body__txt">
                            <p>všechny informace na jednom místě</p>
                            <p>plánování provozu a údržby</p>
                            <p>komunikace s rezidenty</p>
                            <p>schvalovací proces s vlastníkem</p>
                            <p>technická podpora</p>
                            <p>sdílené úložiště dokumentace</p>
                        </div>
                        <div class="content2boxes__box__txt__body__link arrowRight">
                            <a href="">Správci</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content2boxes__box__img box" id="ilustr-spravci">
        </div>
    </section>
    <section class="content2boxes imgLeft">
        <div class="flexContainer box">
            <div class="content2boxes__box__txt">
                <div class="content2boxes__box__txt__head">
                    <h3>Příležitost najít zákazníky pro dodavatele</h3>
                </div>
                <div class="flexContainer">
                    <div class="content2boxes__box__txt__body textRight">
                        <div class="content2boxes__box__txt__body__txt">
                            <p>Lorem ipsum nejaký text</p>
                            <p>Lorem ipsum nejaký text</p>
                            <p>Lorem ipsum nejaký text</p>
                            <p>Lorem ipsum nejaký text</p>
                            <p>sLorem ipsum nejaký text</p>
                            <p>Lorem ipsum nejaký text</p>

                        </div>
                        <div class="content2boxes__box__txt__body__link arrowLeft">
                            <a href="">Dodavatelé</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content2boxes__box__img box" id="ilustr-dodavatele">
        </div>
    </section>



</main>
@endsection