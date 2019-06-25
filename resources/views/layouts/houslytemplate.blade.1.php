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

    <!-- VEGAS Library: -->
    <link rel="stylesheet" href="/vendor/vegas/vegas.min.css">

    

</head>
<body>
    <header>
        <div class="header__logo">
                {{-- <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" height="100%" width="100%" viewBox="0 50 700 200"><g id="svg-container" transform="matrix(2.86,0,0,2.86,-51.253101139068605,165.89496242523194)"><g id="surrounding_shape" transform="matrix(1,0,0,1,24.818958282470703,-23.578244795799257)"><rect width="40.14220590267181" height="37.68726023985545" fill="transparent" stroke-width="2" stroke="#da5100" data-shape-id="custom" surrounded-groups="symbols" fill-type="outline" id="surrounding_shape_0"></rect></g><g id="symbols" transform="matrix(2.428571387918504,0,0,2.428571387918504,31.39018435546491,7.921807048397751)"><text data-font-id="1249" font-family="hero__bold" id="symbols_0" transform="matrix(1.074698580771455,0,0,1.074698580771455,-0.4108421942430027,0.4108421942430027)" svgjs:data="{&quot;leading&quot;:&quot;1.3&quot;}"><tspan id="symbols_0_word_0" fill="#517ca4" svgjs:data="{&quot;leading&quot;:&quot;1.3&quot;}">H</tspan></text></g></g><defs><style>@font-face {font-family: playfair_italic;src: url(https://pismo.tailorbrands.com/v2/px_fonts/playfair_italic)}</style><style>@font-face {font-family: hero__bold;src: url(https://pismo.tailorbrands.com/v2/px_fonts/hero__bold)}</style></defs></svg> --}}
                <div><img src="img/hously-logo.svg" alt="logo"></div>
        </div>
        <div class="header__menu">
            <div class="header__menu__navigation">
                    <div class="navigation__toggler"></div>
                    <div class="navigation__items">
                        <div>About Hously</div>
                        <div>Available Appartments</div>
                        <div>Involved Houses</div>
                    </div>
            </div> 
            <div class="header__menu__links">
                @guest
                <div class="header__links__container">
                    <div id="login__open"><a href="#">Login</a></div>
                    <div id="register__open"><a href="#">Sign up</a></div>
                </div>
                @else
                <div class="header__menu__links__container">
                    <div>{{ Auth::user()->first_name }}</div>
                    <div>
                        <a href="{{ route('logout') }}"
                            onclick="
                            event.preventDefault();
                            document.getElementById('logout-form').submit();">
                            <img src="img/logout__ico.svg" alt="logout">
                        </a>
                    </div>
                </div>
                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                @csrf
                </form>                            
                @endguest
            </div>          
        </div>
        
    </header>
    <div class="auth__overlay">
        <div class="auth__overlay__modal modal__login">
            <div class="auth__overlay__modal__close" id="login__close">X</div>
            <h4>Log in to your account</h4>
            <form method="POST" action="{{ route('login') }}">
                @csrf
                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" placeholder="email" required autocomplete="email" autofocus>
                @error('email')
                            <span class="invalid-feedback" role="alert">
                                <script> 
                                    document.querySelector('body').classList.add('modal__open');
                                    document.querySelector('.auth__overlay').classList.add('modal__open');
                                    document.querySelector('.modal__login').classList.add('modal__open');
                               </script>
                                <strong>{{ $message }}</strong>
                            </span>
                @enderror
                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" placeholder="password" required autocomplete="current-password">
                @error('password')
                <script> 
                        document.querySelector('body').classList.add('modal__open');
                        document.querySelector('.auth__overlay').classList.add('modal__open');
                        document.querySelector('.modal__login').classList.add('modal__open');
                </script>
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
        <div class="auth__overlay__modal modal__register ">
                <div class="auth__overlay__modal__close" id="register__close">X</div>
                <h4>Register new account</h4>
                <form method="POST" action="{{ route('register') }}">
                        @csrf

                        <div class="form-group row">
                            <label for="first_name" class="col-md-4 col-form-label text-md-right">{{ __('First Name') }}</label>

                            <div class="col-md-6">
                                <input id="first_name" type="text" class="form-control @error('first_name') is-invalid @enderror" name="first_name" value="{{ old('first_name') }}" required autocomplete="first_name" autofocus>

                                @error('first_name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="last_name" class="col-md-4 col-form-label text-md-right">{{ __('Last Name') }}</label>

                            <div class="col-md-6">
                                <input id="last_name" type="text" class="form-control @error('last_name') is-invalid @enderror" name="last_name" value="{{ old('last_name') }}" required autocomplete="last_name" autofocus>

                                @error('last_name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="birth_date" class="col-md-4 col-form-label text-md-right">{{ __('Birth Date') }}</label>

                            <div class="col-md-6">
                                <input id="birth_date" type="date" class="form-control @error('birth_date') is-invalid @enderror" name="birth_date" value="{{ old('birth_date') }}" required autocomplete="birth_date" autofocus>

                                @error('birth_date')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="phone_number" class="col-md-4 col-form-label text-md-right">{{ __('Phone Number') }}</label>

                            <div class="col-md-6">
                                <input id="phone_number" type="number" class="form-control @error('phone_number') is-invalid @enderror" name="phone_number" value="{{ old('phone_number') }}" required autocomplete="phone_number" autofocus>

                                @error('phone_number')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('Confirm Password') }}</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Register') }}
                                </button>
                            </div>
                        </div>
                    </form> 
        </div>
    </div>
    <main>
    @yield('content')
    </main>
    <script src="/vendor/jquery/jquery-3.4.1.min.js"></script>
    <script src="/vendor/vegas/vegas.js"></script>
    <script src="/js/hously.js"></script>
</body>
</html>