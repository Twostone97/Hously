@extends ('layouts/houslytemplate')

@section ('title') O Hously
@endsection

@section ('nav')
<li class="nav-item ml-2">
    <a class="nav-link" href="/about">O Hously</a>
</li>
<li class="nav-item ml-2">
    <a class="nav-link" href="/flats">Dostupné byty</a>
</li>
<li class="nav-item ml-2">
    <a class="nav-link" href="/houses">Zapojené domy</a>
</li>
@endsection

@section ('content')
<main>
    <script src="https://kit.fontawesome.com/8e20837f84.js"></script>
    <div class="heroBanner hero__about">
        <h1>Co je Hously?</h1>
        <h3>komplexní systémové prostředí, platforma a nástroj pro reálné domy</h3>
    </div>

    <section class="content2boxes">
        <div class="flexContainer box">
            <div class="content2boxes__box__txt">
                <div class="content2boxes__box__txt__head">
                    <h3>4 dimenze domu </h3>
                </div>
                <div class="flexContainer">
                    <div class="content2boxes__box__txt__body">
                        <div class="content2boxes__box__txt__body__txt fullWidth">
                            <h4>Lidé</h4>
                            <p>Lidé neznají komunitu ve svém domě. Chybí vhodná komunikační platforma pro domovní
                                prostředí.
                            </p>
                            <h4>Budovy</h4>
                            <p>Chybí nástroj pro správu budov vhodný pro každého. Potřeba podpory při řešení běžných i
                                mimořádných událostí
                            </p>
                            <h4>Ekonomika</h4>
                            <p>Majitelé hledají jednoduchý, rychlý a pohodlný pronájem volných prostor.Propojení dalších
                                činností - účetnictví, opravy, údržba
                            </p>
                            <h4>Digitalizace</h4>
                            <p>Chybí strukturované a přístupné úložiště informací. Podpora rozhodovacích procesů u
                                rozsáhlých vlastníků (SVJ, BD)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content2boxes__box__img box quotes" id="ilustr-dimenze-1">
        </div>
    </section>
    <section class="content2boxes imgLeft">
        <div class="flexContainer box">
            <div class="content2boxes__box__txt">
                <div class="content2boxes__box__txt__head textRight">
                    <h3>Hously je pro lidi</h3>
                </div>
                <div class="flexContainer">
                    <div class="content2boxes__box__txt__body textRight boxesReversed">
                        <div class="content2boxes__box__txt__body__txt fullWidth">
                            <h4>Rezidenti</h4>
                            <p>Obyvatelé v bytech</p>
                            <p>Podnikatelé provozující obchůdky</p>
                            <p>Zaměstnanci v kanceláři</p>
                            <h4>Vlastníci domů</h4>
                            <p>Členové bytových družstev a společenství vlastníků</p>
                            <p>Profesionální investoři na trhu s nemovitostmi</p>
                            <h4>Správci domů</h4>
                            <p>Osoby odpovědné za řádný provoz domů
                            </p>
                            <h4>Dodavatelé</h4>
                            <p>Subjekty poskytující údržbu, opravy, služby a dodávky
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content2boxes__box__img box" id="ilustr-dimenze-2">
        </div>
    </section>
    <section class="content2boxes">
        <div class="flexContainer box">
            <div class="content2boxes__box__txt">
                <div class="content2boxes__box__txt__head">
                    <h3>Hlavní funkcionality</h3>
                </div>
                <div class="flexContainer">
                    <div class="content2boxes__box__txt__body">
                        <div class="content2boxes__box__txt__body__txt fullWidth">
                            <p><strong>Komunikační platforma</strong> - chat a příspěvky na nástěnce</p>
                            <p><strong>Webová prezentace</strong> pro každý dům</p>
                            <p><strong>Osobní a obchodní informace</strong> každého uživatele</p>
                            <p><strong>Přehled úkolů</strong> pro každého uživatele</p>
                            <p>Globální <strong>kalendář</strong> pro každý dům</p>
                            <p><strong>Technické informace</strong> o každém domu</p>
                            <p>Automatické <strong>zobrazení dle role</strong> konkrétního uživatele</p>
                            <p> Propojení se sdíleným <strong>cloudovým úložištěm</strong></p>
                            <p><strong>Autorizování vybraných úkonů</strong> přes aplikaci v mobilu</p>
                            <p><strong>E-aukce</strong> (zakázky, volné prostory,...)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content2boxes__box__img box" id="ilustr-dimenze-3">
        </div>
    </section>
    <section class="content2boxes imgLeft">
        <div class="flexContainer box">
            <div class="content2boxes__box__txt">
                <div class="content2boxes__box__txt__head textRight">
                    <h3>Základní principy řešení</h3>
                </div>
                <div class="flexContainer">
                    <div class="content2boxes__box__txt__body textRight boxesReversed">
                        <div class="content2boxes__box__txt__body__txt fullWidth">
                            <p><strong>Komplexnost, dostupnost a bezpečnost</strong></p>
                            <p><strong>Přehlednost</strong> – snadná a intuitivní orientace i pro občasného uživatele
                            </p>
                            <p><strong>Individualizace</strong> - nastavení dle potřeb a role uživatele</p>
                            <p><strong>Strukturovanost </strong>- technická a provozní data, administrativní záznamy,
                                historie komunikace – databáze</p>
                            <p><strong>Operativnost</strong> – už s malým objem zadaných klientských dat to musí dávat
                                smysl</p>
                            <p><strong>Scénáře </strong>pro nejčastější situace a on-line poradenství</p>
                            <p><strong>Splnění požadavků legislativy </strong>vlastnictví a provozu domu</p>
                            <p><strong>Srozumitelnost</strong> - zadání i zobrazení ekonomických a účetních dat
                                srozumitelným způsobem</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content2boxes__box__img box" id="ilustr-dimenze-4">
        </div>
    </section>



</main>
@endsection