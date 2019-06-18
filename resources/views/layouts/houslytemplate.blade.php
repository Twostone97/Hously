<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title','Welcome to Hously')</title>
    <link rel="stylesheet" href="css/app.css">
    @yield('styles','')
</head>
<body>
    <header>
        <div class="container-fluid">
            <div class="row header">
                <div class="header__logo col-md-5 offset-md-1">
                    Hously
                </div>
                <div class="header__login col-md-3">
                    Login
                </div>
                <div class="header__register col-md-3">
                    Form
                </div>
            </div>
        </div>
    </header>
    <main>
    @yield('content')
    </main>
    
</body>
</html>