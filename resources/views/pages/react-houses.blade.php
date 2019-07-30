@extends ('layouts/houslytemplate')

@section ('nav')
<li class="nav-item ml-2">
    <a class="nav-link " href="/about">About Hously</a>
</li>
<li class="nav-item ml-2">
    <a class="nav-link" href="/flats">Available Appartments</a>
</li>
<li class="nav-item ml-2">
    <a class="nav-link active" href="/houses">Involved Houses</a>
</li>
@endsection



@section('title')
Our Houses
@endsection

@section ('content')
<main class="bg__wall" id="reactApp">






</main>
<script src="/js/index.js"></script>
@endsection