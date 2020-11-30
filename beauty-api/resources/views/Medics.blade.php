@extends('layout.app')
@section('content')

<div class="container">
    <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
        <form action="{{ route('savemedic') }}" method="post" enctype="multipart/form-data">
                @csrf

            <h3 class="text-light">Registro Medicos Beauty App</h3>
            <fieldset>
                <legend class="text-light">Ingreso de Información</legend>
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
                    <input type="text" class="form-control" id="identificacion" name="identificacion" placeholder="Identification" required>
                </div>                                
                <div class="form-group">
                    <label for="Name" class="text-white">Nombres:</label>
                    <input type="text" class="form-control" id="nombres" name="nombres" placeholder="Name" required>
                </div>
                <div class="form-group">
                    <label for="Amenities" class="text-white">Apellidos:</label>
                    <input type="text" class="form-control" id="apellidos" name="apellidos" placeholder="Last Name" required>
                </div>
                <div class="form-group">
                    <label for="NightPrice" class="text-white">Celular:</label>
                    <input type="number" class="form-control" id="celular" name="celular" placeholder="Phone" required>
                </div>
                <div class="form-group">
                    <label for="NightPrice" class="text-white">Email:</label>
                    <input type="email" class="form-control" id="email" name="email" placeholder="Phone" required>
                </div>                
                <div class="form-group">
                    <label for="Estate" class="text-white">Presentación ( Cuétanos tu experciencia y especialidad) :</label>
                    <input type="text" class="form-control" id="presentacion" name="presentacion" placeholder="Specialty" required>
                </div>
                <div class="form-group">
                    <label for="" class="text-white">Senos</label>
                    <input type="checkbox" name="esp_senos" id="esp_senos" value="S">
                    <label for="" class="text-white">Liposucción</label>
                    <input type="checkbox" name="esp_liposuccion" id="esp_liposuccion" value="S">
                    <label for="" class="text-white">Caderas</label>
                    <input type="checkbox" name="esp_caderas" id="esp_caderas" value="S">
                    <label for="" class="text-white">Rinoplastia</label>
                    <input type="checkbox" name="esp_rinoplastia" id="esp_rinoplastia" value="S">
                    <label for="" class="text-white">Diseño Sonrisa</label>
                    <input type="checkbox" name="esp_sonrisa" id="esp_sonrisa" value="S">
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