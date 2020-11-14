<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Rooms;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Image;


class AdminRoomsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('backOffice/Rooms');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $room = new Rooms();
        $room -> id_habitacion = $request->input('Id');
        $room -> nombre = $request->input('Name');
        $room -> comodidades = $request->input('Amenities');
        $room -> precio_noche = $request->input('NigthPrice');
        $room -> estado = $request->input('Estate');
        $room -> cantidad_camas = $request->input('NumberofBeds');
        $room -> cantidad_camas_disponibles = $request->input('NumberofBedsAvailable');
        $room -> id_tipo_habitacion = $request->input('TypeOfRoom');

        if($request->hasFile('image_room')!=null){

            $rules = ['image_room'=> 'required|image_room|max:1024*1024*1',];
            $messages = [
                'image_room.required' => 'la imagen es requerida',
                'image_room.image_room' => 'Formato no permitido',
                'image_room.max' => 'El maximo permitido es 1MB'
            ];
            $validator = Validator::make($request->all(),$rules, $messages);

            $name = $room->nombre . '-' . $request->file('image_room')->getClientOriginalName();
            $request->file('image_room')->move('img/romms', $name);
            $room->imagen = $name;
        }   


        $room -> save();

        return redirect()->route('RoomsAdmin')->with('datos','Registro guardado correctamente!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
