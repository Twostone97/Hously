<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title','Welcome to Hously')</title>
    <link rel="stylesheet" href="css/app.css">
    @yield('styles','')
    
    <!-- Laravel AUTH STYLES and SCRIPTS: -->
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <!-- END  -->

</head>
<body>
    <header>
        <div class="container-fluid">
            <div class="row header">
                <div class="header__logo col-md-5 offset-md-1">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="100%" height="150%" viewBox="250 50 300 300"><g id="svg-container" transform="matrix(2.86,0,0,2.86,-51.253101139068605,165.89496242523194)"><g id="surrounding_shape" transform="matrix(1,0,0,1,24.818958282470703,-23.578244795799257)"><rect width="40.14220590267181" height="37.68726023985545" fill="transparent" stroke-width="2" stroke="#da5100" data-shape-id="custom" surrounded-groups="symbols" fill-type="outline" id="surrounding_shape_0"></rect></g><g id="headline" transform="matrix(1,0,0,1,5.5734710693359375,0)"><text data-font-id="1077" font-family="playfair_italic" id="headline_0" transform="matrix(1,0,0,1,63.48461538461538,0)" svgjs:data="{&quot;leading&quot;:&quot;1.3&quot;}"><tspan id="headline_0_word_0" fill="#000000" svgjs:data="{&quot;leading&quot;:&quot;1.3&quot;}">Hously</tspan></text></g><g id="symbols" transform="matrix(2.428571387918504,0,0,2.428571387918504,31.39018435546491,7.921807048397751)"><text data-font-id="1249" font-family="hero__bold" id="symbols_0" transform="matrix(1.074698580771455,0,0,1.074698580771455,-0.4108421942430027,0.4108421942430027)" svgjs:data="{&quot;leading&quot;:&quot;1.3&quot;}"><tspan id="symbols_0_word_0" fill="#517ca4" svgjs:data="{&quot;leading&quot;:&quot;1.3&quot;}">H</tspan></text></g></g><defs><style>@font-face {font-family: playfair_italic;src: url(https://pismo.tailorbrands.com/v2/px_fonts/playfair_italic)}</style><style>@font-face {font-family: hero__bold;src: url(https://pismo.tailorbrands.com/v2/px_fonts/hero__bold)}</style></defs></svg>
                </div>
                @guest
                <div class="header__login col-md-3">
                    <p><strong>Log in</strong></p>
                    <form method="POST" action="{{ route('login') }}">
                        @csrf
                        <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" placeholder="email" required autocomplete="email" autofocus>
                        @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                        @enderror
                        <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" placeholder="password" required autocomplete="current-password">
                        @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                        @enderror
                        
                        <button type="submit" class="btn btn-primary">
                            {{ __('Login') }}
                        </button>

                        @if (Route::has('password.request'))
                        <br>    
                        <a class="btn btn-link text-light" href="{{ route('password.request') }}">
                                {{ __('Forgot Your Password?') }}
                            </a>
                        @endif
                    </form>
                </div>
                <div class="header__register col-md-3">
                        <p><strong>Not yet a member?</strong></p>
                        <a href="register"><button class="btn btn-primary">Register</button></a>
                </div>
            
                
            @else
            <div class="header__login offset-md-2 col-md-3">    
                <div class="header__login__authenticated">
                    <ul>
                        <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle text-left" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->first_name }} <span class="caret"></span>
                                </a>
            
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                    onclick="event.preventDefault();
                                                    document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>
            
                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                    </ul>
                </div>
            </div>
            @endguest
        </div>
            
                
               
            <div class="row navigation">
                <div class="col-md-3">About Hously</div>
                <div class="col-md-3">Available Appartments</div>
                <div class="col-md-3">Involved Houses</div>
            </div>
        </div>
    </header>
    <main>
    @yield('content')
    </main>
    
</body>
</html>