@extends('layout.app')
@section('content')
<div class="container-fluid">
    <div class="row">
        <div class="col-12 p-2 bg-dark">
            <h1 class="text-center text-light titles">R O O M S</h1>
        </div>
    </div>
</div><br>
<div class="center text-center"><img src="{{ asset('img/whiteLogoH.png') }}" class="logo" alt=""></div>
<br>
<br>
<div class="container">
    <div class="row">
        <div class="col-12">
            <h3 class="text-center text-light subtitles">This are ours procedures</h3>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-sm-12 col-md-6 col-xl-6">
            <div class="card bg-transparent">
                <img src="{{ asset('img/ROOM1.png') }}" class="card-img-top" alt="">
                <div class="card-body">
                  <h5 class="card-title text-light">VIP</h5>
                </div>
                <ul class="list-group list-group-flush bg-transparent">
                  <li class="list-group-item bg-transparent text-light">The rooms in Ca' Pisani hotel have been realised completely
                       using original pieces of design and are taken care of down to the last detail.</li>
                </ul>
              </div>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-xl-6">
            <div class="card bg-transparent">
                <img src="{{ asset('img/ROOM2.png') }}" class="card-img-top" alt="">
                <div class="card-body">
                  <h5 class="card-title text-light">DOUBLE</h5>
                  <ul class="list-group list-group-flush bg-transparent">
                      <li class="list-group-item bg-transparent text-light">Refined style, play of colours and 
                          precious materials make the hotel a real jewel of contemporary design.</li>
                  </ul>
                </div>
              </div>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-xl-6">
            <div class="card bg-transparent">
                <img src="{{ asset('img/ROOM3.png') }}" class="card-img-top" alt="">
                <div class="card-body">
                  <h5 class="card-title text-light">SIMPLE</h5>
                  <ul class="list-group list-group-flush bg-transparent">
                      <li class="list-group-item bg-transparent text-light">
                      The presence of marbles,
                      </li>
                  </ul>
                </div>
              </div>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-xl-6">
            <div class="card bg-transparent">
                <img src="{{ asset('img/ROOM4.jpg') }}" class="card-img-top img-room4" alt="">
                <div class="card-body">
                  <h5 class="card-title text-light">SHARED</h5>
                  <ul class="list-group list-group-flush bg-transparent">
                      <li class="list-group-item bg-transparent text-light">
                      precious fabrics and inlaid wood furniture has been designed to guarantee guests maximum comfort and relaxation.
                      </li>
                  </ul>
                </div>
              </div>
        </div>
    </div>
</div>
<style>
    .img-room4{
        height: 170px;
    width: 81%;
    display: block;
    margin: auto;
    border-radius: 30px;
    }
</style>
@endsection