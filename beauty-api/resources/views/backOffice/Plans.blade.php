@extends('layout.admin')
@section('content')
<h2>Admin Plans</h2>


<div class="container">
    <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
            <h3>Admin Plans</h3>
            <fieldset>
                <legend>Create New Plan</legend>
                <div class="form-group">
                    <label for="Name">Name:</label>
                    <input type="text" class="form-control" id="Name" name="Name" placeholder="Name" required>
                </div>
                <div class="form-group">
                    <label for="Description">Description:</label>
                    <input type="text" class="form-control" id="Description" name="Description" placeholder="Description" required>
                </div>
                <div class="form-group">
                    <label for="Days">Host Days:</label>
                    <input type="number" class="form-control" id="Days" name="Days" placeholder="Days" required>
                </div>
                <div class="form-group">
                    <label for="Value">Value:</label>
                    <input type="number" class="form-control" id="Value" name="Value" placeholder="Value" required>
                </div>
                <div class="form-group">
                    <label for="Image">Image:</label>
                    <input type="file" class="form-control" id="Image" name="Image" placeholder="Image" required>
                </div>
                <div class="form-group">
                    
                    <input type="submit" class="btn btn-success btn-sm btn-block" name="Save" value="Save">
                </div>
            </fieldset>
        </div>
        <div class="col-3"></div>
    </div>
</div>



@endsection