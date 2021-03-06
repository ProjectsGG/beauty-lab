@extends('layout.back')
@section('content')
<hr class="bg-light"><br>
<div class="container">
    <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
        <form action="{{ route('roomsave') }}" method="post" enctype="multipart/form-data">
                @csrf

            <h3 class="text-dark">Admin Rooms</h3>
            <fieldset>
                <legend class="text-dark">Create New Rooms</legend>
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
                    <label for="Name" class="text-white">Name:</label>
                    <input type="text" class="form-control" id="Name" name="Name" placeholder="Name" required>
                </div>
                <div class="form-group">
                    <label for="Amenities" class="text-white">Amenities:</label>
                    <input type="text" class="form-control" id="Amenities" name="Amenities" placeholder="Amenities" required>
                </div>
                <div class="form-group">
                    <label for="NightPrice" class="text-white">Night Price:</label>
                    <input type="number" class="form-control" id="NightPrice" name="NightPrice" placeholder="Night Price" required>
                </div>
                <div class="form-group">
                    <label for="Estate" class="text-white">Estate:</label>
                    <input type="number" class="form-control" id="Estate" name="Estate" placeholder="Estate" required>
                </div>
                <div class="form-group">
                    <label for="NumberofBeds" class="text-white">Number of Beds:</label>
                    <input type="number" class="form-control" id="NumberofBeds" name="NumberofBeds" placeholder="Number of Beds" required>
                </div>
                <div class="form-group">
                    <label for="NumberofBedsAvailable" class="text-white">Number of Beds Available:</label>
                    <input type="number" class="form-control" id="NumberofBedsAvailable" name="NumberofBedsAvailable" placeholder="Number of Beds Available" required>
                </div>
                <div class="form-group">
                    <label for="TypeOfRoom" class="text-white">Typeof Room:</label>
                    <select name="TypeOfRoom" class="form-control" id="TypeOfRoom" required>
                        <option value="">Select</option>
                        <option value="1" >Sencilla</option>                  
                        <option value="2">Doble</option>
                        <option value="3" >VIP</option>
                    </select>
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