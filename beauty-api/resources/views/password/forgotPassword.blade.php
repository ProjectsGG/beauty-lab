@extends('layout.app')
@section('content')
<script>
  var id = {{$id}}
</script>
<style>
  body{
    height: 0 !important;
    background: linear-gradient(180deg, rgba(249, 1, 216, 1) 0%, rgba(86, 98, 234, 1) 90%, rgba(10, 146, 245, 1) 100%);
  }
  .message{
    color: aliceblue;
    text-align: center;
    margin-top: 5rem;
    font-size: 30px;
  }
  label{
    color: aliceblue;
    font-size: 15px;
  }
  .text-center{
    text-align: center;
  }
  .hide{
    display: none;
  }
</style>
<div class="container" style="align-items:center;">
  <h1 class="message">{{$message}}</h1>
  <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <br>
        <div class="form-group">
          <label for="password">Password:</label>
          <input class="form-control" type="password" id="password">
        </div>
        <div class="form-group">
          <label for="password-confirm">Confirm Password:</label>
          <input class="form-control" type="password" id="password-confirm">
        </div>
        <div id="alert" class="hide text-center alert alert-light" role="alert">
          A simple light alert—check it out!
        </div>
        <button type="button" class="btn btn-block btn-primary" onclick="change()" >Change Password</button>     
      </div>
      <div class="col-md-4"></div>
  </div>
</div>
@endsection
@section('script')
<script>
  function change() {
    let pass = document.getElementById('password').value;
    let passConfirm = document.getElementById('password-confirm').value;

    if (pass === passConfirm) {
      document.getElementById('alert').style.display = 'none';
      fetch('http://localhost:8080/beauty-lab/beauty-api/public/api/change-password/'+id)
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
        });
    } else { 
      document.getElementById('alert').innerHTML = 'Passwords do not match';
      document.getElementById('alert').style.display = 'block';
    }
  }
</script>
@endsection
