@extends('layout.admin')
@section('content')
<hr class="bg-light"><br>
<div class="container">
    <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
            <h3 class="text-white">Admin Plans</h3>
            <fieldset>
                <legend class="text-white">Create New Plan</legend>
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
                    <input type="file" class="form-control" id="Image" name="Image" placeholder="Image" required>
                </div>
                <div class="form-group">
                    
                    <input type="submit" class="btn btn-success btn-block" name="Save" value="SAVE">
                </div>
            </fieldset>
        </div>
        <div class="col-3"></div>
    </div>
</div>



@endsection