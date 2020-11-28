@extends('layout.app')
@section('content')

<div class="container">
    <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
        <form action="{{ route('roomsave') }}" method="post" enctype="multipart/form-data">
                @csrf

            <h3 class="text-dark">Registro Medicos Beauty App</h3>
            <fieldset>
                <legend class="text-dark">Ingreso de Información</legend>
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
                    <label for="Name" class="text-white">Identificacion:</label>
                    <input type="text" class="form-control" id="Identification" name="Identification" placeholder="Identification" required>
                </div>                                
                <div class="form-group">
                    <label for="Name" class="text-white">Nombres:</label>
                    <input type="text" class="form-control" id="Name" name="Name" placeholder="Name" required>
                </div>
                <div class="form-group">
                    <label for="Amenities" class="text-white">Apellidos:</label>
                    <input type="text" class="form-control" id="LastName" name="LastName" placeholder="Last Name" required>
                </div>
                <div class="form-group">
                    <label for="NightPrice" class="text-white">Celular:</label>
                    <input type="number" class="form-control" id="Phone" name="Phone" placeholder="Phone" required>
                </div>
                <div class="form-group">
                    <label for="Estate" class="text-white">Experiencia(Años):</label>
                    <input type="text" class="form-control" id="Experience" name="Experience" placeholder="Specialty" required>
                </div>
                <div class="form-group">
                    <label for="" class="text-white">Senos</label>
                    <input type="checkbox" name="Senos" id="Senos">
                    <label for="" class="text-white">Liposucción</label>
                    <input type="checkbox" name="Liposuccion" id="Liposuccion">
                    <label for="" class="text-white">Caderas</label>
                    <input type="checkbox" name="Caderas" id="Caderas">
                    <label for="" class="text-white">Rinoplastia</label>
                    <input type="checkbox" name="Rinoplastia" id="Rinoplastia">
                    <label for="" class="text-white">Diseño Sonrisa</label>
                    <input type="checkbox" name="Sonrisa" id="Sonrisa">
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