@extends('layout.back')
@section('content')
<hr class="bg-light"><br>
<div class="container">
    <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
        <form action="{{ route('roomsave') }}" method="post" enctype="multipart/form-data">
                @csrf

            <h3 class="text-dark">Admin Medics</h3>
            <fieldset>
                <legend class="text-dark">Create New Medic</legend>
                @if (session('status'))
                    <div class="alert alert-success" role="alert">
                {{ session('status') }}
                    </div>
                @endif
                @if ($errors->any())
                    <div class="alert alert-danger alert-dismissible" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        <ul>
                            @foreach ($errors->all() as $error)
                                <li>
                                    {{ $error }}
                                </li>
                            @endforeach
                        </ul>
                    </div>
                @endif 
                <div class="form-group">
                    <label for="Name" class="text-white">Identification:</label>
                    <input type="text" class="form-control" id="Identification" name="Identification" placeholder="Identification" required>
                </div>                                
                <div class="form-group">
                    <label for="Name" class="text-white">Name:</label>
                    <input type="text" class="form-control" id="Name" name="Name" placeholder="Name" required>
                </div>
                <div class="form-group">
                    <label for="Amenities" class="text-white">Last Name:</label>
                    <input type="text" class="form-control" id="LastName" name="LastName" placeholder="Last Name" required>
                </div>
                <div class="form-group">
                    <label for="NightPrice" class="text-white">Phone:</label>
                    <input type="number" class="form-control" id="Phone" name="Phone" placeholder="Phone" required>
                </div>
                <div class="form-group">
                    <label for="Estate" class="text-white">Specialty:</label>
                    <input type="text" class="form-control" id="Specialty" name="Specialty" placeholder="Specialty" required>
                </div>
                <div class="form-group">
                    <label for="Image" class="text-white">Image:</label>
                    <input type="file" class="form-control" id="image_room" name="image_room" placeholder="Image" required>
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