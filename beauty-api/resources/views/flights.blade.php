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

<div class="fli"><script charset="utf-8" src="//old.travelpayouts.com/widgets/0a549d7d65737569518aac55ca623554.js?v=1919" async></script></div>


@endsection
