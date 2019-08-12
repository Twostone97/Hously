@extends ('layouts/dashboardtemplate')

@section ('title') Hously main dashboard
@endsection

@section ('nav')
<li class="nav-item ml-2">
    <a class="nav-link active" href="#">Dashboard main</a>
</li>
<li class="nav-item ml-2">
    <a class="nav-link" href="#my-info">My info</a>
</li>
<li class="nav-item ml-2">
    <a class="nav-link" href="#house-rules">House Rules</a>
</li>
<li class="nav-item ml-2">
    <a class="nav-link" href="#admin">Admin Area</a>
</li>
@endsection

@section ('content')
<div class="dashboard__container bg__wall" id="reactApp">


</div>
<script src="/js/dashboard.js"></script>


@endsection