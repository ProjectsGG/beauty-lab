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
  <h1 class="message" id="message">{{$message}}</h1>
  <div id="form" class="row">
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
    let pass = document.getElementById('password').value
    let passConfirm = document.getElementById('password-confirm').value

    let error = ''

    if (pass.length > 8) error = 'Very long password'
    if (pass.length < 5) error = 'Very short password'
    if (pass.length === 0 || passConfirm.length === 0) error = 'Both fields are required'
    if (pass !== passConfirm) error = 'Passwords do not match'
    if (error==='') {
      data = {
        password: pass
      };
      document.getElementById('alert').style.display = 'none'
      fetch('https://beautylab.app/api/change-password/'+id, 
      {
        method: 'POST',
        body: JSON.stringify(data), 
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(function(response) {
          return response.json()
        })
        .then(function(response) {
          if (response.ok) {
            document.getElementById('message').innerHTML = response.message;
            document.getElementById('form').style.display = 'none';
          } else {
            document.getElementById('alert').innerHTML = response.message
            document.getElementById('alert').style.display = 'block'
            error=''
          }
        })
    } else { 
      document.getElementById('alert').innerHTML = error
      document.getElementById('alert').style.display = 'block'
      error=''
    }
  }
</script>
@endsection
