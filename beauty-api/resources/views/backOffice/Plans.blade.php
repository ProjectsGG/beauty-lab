@extends('layout.back')
@section('content')
<hr class="bg-light"><br>
<div class="container">
    <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
            <form action="{{ route('plansave') }}" method="post" enctype="multipart/form-data">
                @csrf
           
            <h3 class="text-white">Admin Plans</h3>
            <fieldset>
                <legend class="text-white">Create New Plan</legend>
                @if (session('status'))
                    <div class="alert alert-success" role="alert">
                {{ session('status') }}
                    </div>
                @endif                
                <div class="form-group">
                    <label for="Name" class="text-white">Name:</label>
                    <input type="text" class="form-control" id="Name" name="Name" placeholder="Name" required>
                </div>
                <div class="form-group">
                    <label for="Description" class="text-white">Description:</label>
                    <input type="text" class="form-control" id="Description" name="Description" placeholder="Description" required>
                </div>
                <div class="form-group">
                    <label for="Days" class="text-white">Host Days:</label>
                    <input type="number" class="form-control" id="Days" name="Days" placeholder="Days" required>
                </div>
                <div class="form-group">
                    <label for="Value" class="text-white">Value:</label>
                    <input type="number" class="form-control" id="Value" name="Value" placeholder="Value" required>
                </div>
                <div class="form-group">
                    <label for="Image" class="text-white">Image:</label>
                    <input type="file" class="form-control" id="image_plan" name="image_plan" placeholder="Image">
                </div>
                <div class="form-group">
                    
                    <button class="btn btn-success btn-block">SAVE</button>
                </div>
            </fieldset>
        </form>
        </div>
        <div class="col-3"></div>
    </div>
</div>



@endsection