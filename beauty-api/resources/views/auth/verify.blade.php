@extends('layout.app')
@section('content')
<style>
  body{
    height: 0 !important;
    background: linear-gradient(180deg, rgba(249, 1, 216, 1) 0%, rgba(86, 98, 234, 1) 90%, rgba(10, 146, 245, 1) 100%);
  }
  .message{
    color: aliceblue;
    text-align: center;
    margin-top: 5rem;
    font-size: 50px;
  }
</style>
<div class="container" style="align-items:center;">
  <h1 class="message">{{$message}}</h1>
</div>
@endsection
