<!DOCTYPE html>
<html class="loading" lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-textdirection="ltr">
<!-- BEGIN: Head-->

<head>
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta name="description" content="Vuesax admin is super flexible, powerful, clean &amp; modern responsive bootstrap 4 admin template with unlimited possibilities.">
    <meta name="keywords" content="BeautyLab, Surgery, Plastic Surgery, Body, build Body, web app">
    <meta name="author" content="BeautyLab Team">
    <title>Beautylab</title>
    <link rel="apple-touch-icon" href="{{asset('styles/app-assets/images/ico/apple-icon-120.png')}}">
    <link rel="shortcut icon" type="image/x-icon" href="{{asset('styles/app-assets/images/ico/favicon.png')}}">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600" rel="stylesheet">

    <!-- BEGIN: Vendor CSS-->
    <link rel="stylesheet" type="text/css" href="{{asset('styles/app-assets/vendors/css/vendors.min.css')}}">
    <!-- END: Vendor CSS-->

    <!-- BEGIN: Theme CSS-->
    <link rel="stylesheet" type="text/css" href="{{asset('styles/app-assets/css/bootstrap.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('styles/app-assets/css/bootstrap-extended.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('styles/app-assets/css/colors.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('styles/app-assets/css/components.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('styles/app-assets/css/themes/dark-layout.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('styles/app-assets/css/themes/semi-dark-layout.css')}}">

    <!-- BEGIN: Page CSS-->
    <link rel="stylesheet" type="text/css" href="{{asset('styles/app-assets/css/core/menu/menu-types/vertical-menu.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('styles/app-assets/css/core/colors/palette-gradient.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('styles/app-assets/css/pages/invoice.css')}}">
    <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">


        <link rel="stylesheet" href="{{ asset('styles/style.css') }}">
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <!-- END: Page CSS-->

    <!-- BEGIN: Custom CSS-->
    <link rel="stylesheet" type="text/css" href="{{asset('styles/assets/css/style.css')}}">
    <!-- END: Custom CSS-->
    {{-- <script src="{{ asset('js/app.js') }}" defer></script> --}}

</head>
<!-- END: Head-->

<!-- BEGIN: Body-->

<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">
            Beauty Lab<img src="">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="{{ route('homeweb') }}">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="{{ route('plansweb') }}">Plans</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="{{ route('proceduresweb') }}">Procedures</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="{{ route('roomsweb') }}">Rooms</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-light" href="{{ route('flightweb') }}">Flights</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="{{ route('contactweb') }}">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    <!-- BEGIN: Content-->
                @yield('content')

    <!-- END: Content-->
    <hr class="bg-light"><br><br><br>
      <footer>
            <div class="container-fluid sticky-bottom bg-dark">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-4 col-xl-4">
                        <h2 class="text-light text-center titles">Beauty Lab</h2>}
                        <h3 class="text-center text-light subtitles">Medellin - Colombia</h3>
                        <h3 class="text-center text-light subtitles">2020 All rights reserved</h3>
                    </div>
                    <div class="col-12 col-sm-12 col-md-4 col-xl-4">
                        <h2 class="text-light titles text-center">Follow Us</h2>
                        <h3 class="text-center text-light subtitles">Instagram</h3>
                        <h3 class="text-center text-light subtitles">Facebook</h3>
                        <h3 class="text-center text-light subtitles">Youtube</h3>
                    </div>
                    <div class="col-12 col-sm-12 col-md-4 col-xl-4">
                        <h2 class="text-light titles text-center">About Us</h2>
                        <h3 class="text-center text-light subtitles">The best place to find your perfect plastic surgery</h3>

                    </div>
                </div>
            </div>
      </footer>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="{{ asset('styles/app-assets/vendors/js/vendors.min.js') }}"></script>

    <script src="{{asset('styles/app-assets/js/core/app-menu.js')}}"></script>
    <script src="{{asset('styles/app-assets/js/core/app.js')}}"></script>
    <script src="{{asset('styles/app-assets/js/scripts/components.js')}}"></script>
    @yield('script')
</body>

</html>
