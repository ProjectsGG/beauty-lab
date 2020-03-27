@extends('layout.app')
@section('content')

<div class="container-fluid">
    <div class="row">
        <div class="col-12 text-center center">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="{{ asset('img/slide1.png') }}" class="w-80" alt="...">
              </div>
              <div class="carousel-item">
                <img src="{{ asset('img/slide2.png') }}" class="w-80" alt="...">
              </div>
              <div class="carousel-item">
                <img src="{{ asset('img/slide3.png') }}" class="w-80" alt="...">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
    </div>
</div>
<br><br>
<div class="container">
    <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-6 text-center center">
            <img src="{{ asset('img/whiteLogoH.png') }}" class="logo2" alt="">
            <br><br><br>
            <h2 class="text-center text-light subtitles">Welcome to BeautyLab</h2>
            <h3 class="text-center text-light subtitles">
                The best place to find your perfect plastic surgery</h3>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 text-center center">

           <iframe width="560" height="315" src="https://www.youtube.com/embed/Ldi5QLHKm_U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</div>





@endsection
