@extends('layout.app')
@section('content')


<div class="container-fluid">
    <div class="row">
        <div class="col-12 p-2 bg-dark">
            <h1 class="text-center text-light titles">F L I G H T S</h1>
        </div>
    </div>
</div><br>
<div class="center text-center"><img src="{{ asset('img/whiteLogoH.png') }}" class="logo" alt=""></div>
<br><br>

<h2 class="text-center subtitles text-light">Find your Best Flight</h2>
<div class="container">
    <div class="row">
        <div class="col-12 col-sm-12 col-md-2 col-xl-2"></div>
        <div class="col-12 col-sm-12 col-md-8 col-xl-8 fli">
            <iframe scrolling="yes" style="position:sticky; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:0;" src="http://old.travelpayouts.com/widgets/0a549d7d65737569518aac55ca623554.html?v=1916"></iframe>
            <br>
        </div>
        <div class="col-12 col-sm-12 col-md-2 col-xl-2"></div>
    </div>
</div>

@endsection
