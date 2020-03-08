<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Beauty Lab</title>
        <link rel="stylesheet" href="{{ asset('styles/style.css') }}">
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    </head>
    <body>
        <hr>
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-3 col-xl-3"></div>
                <div class="col-12 col-sm-12 col-md-6 col-xl-6 center text-center">
                    <img src="{{ asset('img/horizontal_logo.png') }}" alt="">
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-xl-3"></div>
            </div>
            <br><br>
            <div class="row">
                <div class="col-12 col-sm-12 col-md-2 col-xl-2"></div>
                <div class="col-12 col-sm-12 col-md-8 col-xl-8">
                   <h1 class="text-center text-light">Soon we will help you Build the Body of your Dreams</h1>
                </div>
                <div class="col-12 col-sm-12 col-md-2 col-xl-2"></div>
            </div>
        </div>
        <br><br>
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-xl-6 center text-center">
                    <img src="{{ asset('img/3dplan.png') }}" alt="">
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-xl-6 center text-center">
                    <img src="{{ asset('img/bootyplan.png') }}" alt="">
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-xl-6 center text-center">
                    <img src="{{ asset('img/supermodelplan.png') }}" alt="">
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-xl-6 center text-center">
                    <img src="{{ asset('img/superstar1.png') }}" alt="">
                </div>
            </div>
        </div>
        <br>
        <br>




        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    </body>
</html>
