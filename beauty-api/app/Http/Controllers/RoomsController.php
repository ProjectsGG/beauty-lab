<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rooms;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Response;

class RoomsController extends Controller
{

    public function index()
    {
        $rooms = Rooms::all();

        return response()->json([
            'ok' => true,
            'data' => $rooms
        ]);
    }

    public function show($id)
    {
        //$room = Rooms::all()->where('id_habitacion',$id);
        $room = Rooms::where('id_habitacion', $id)->get();
        if (!$room) {
            return response()->json([
                'ok' => false,
                'message' => 'Sorry, room with id ' . $id . ' cannot be found.'
            ], 400);
        }
        return response()->json([
            'ok' => true,
            'data' => $room
        ]);
    }

    public function store(Request $request)
    {

        $this->validate($request, [
            'nombre' => 'required'
        ]);
        try {
            $img = $this->getB64Image($request->imagen);

            $img_extension = $this->getB64Extension($request->imagen);

            $img_name = 'rooms' . time() . '.' . $img_extension;

            Storage::disk('rooms')->put($img_name, $img);

            $rooms = new Rooms();
            $rooms->nombre = $request->nombre;
            $rooms->comodidades = $request->comodidades;
            $rooms->precio_noche = $request->precio_noche;
            $rooms->cantidad_camas = $request->cantidad_camas;
            $rooms->cantidad_camas_disponibles = $request->cantidad_camas_disponibles;
            $rooms->imagen = $img_name;
            $response = $rooms->save();

            return response()->json([
                'ok' => true,
                'data' => $response
            ]);


        } catch (\Throwable $th) {
            return response()->json([
                'ok' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }
    public function update(Request $request, $id)
    {
        $rooms = $this->user->rooms()->find($id);

        if (!$rooms) {
            return response()->json([
                'ok' => false,
                'message' => 'Sorry, task with id ' . $id . ' cannot be found.'
            ], 400);
        }
        try {
            $rooms->update($request->all());
            return response()->json([
                'ok' => true,
                'message' => 'Task updated successfully'
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'ok' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function getContenido($filename){
        $file = Storage::disk('rooms')->get($filename);
        return new Response($file);
    }

    public function getImgPerfil($filename) {
        $file = Storage::disk('profile')->get($filename);
        return new Response($file);
    }

    public function getB64Image($base64_image)
    {
        // Obtener el String base-64 de los datos
        $image_service_str = substr($base64_image, strpos($base64_image, ",") + 1);
        // Decodificar ese string y devolver los datos de la imagen
        $image = base64_decode($image_service_str);
        // Retornamos el string decodificado
        return $image;
    }
    public function getB64Extension($base64_image, $full = null)
    {
        // Obtener mediante una expresión regular la extensión imagen y guardarla
        // en la variable "img_extension"
        preg_match("/^data:image\/(.*);base64/i", $base64_image, $img_extension);
        // Dependiendo si se pide la extensión completa o no retornar el arreglo con
        // los datos de la extensión en la posición 0 - 1
        return ($full) ?  $img_extension[0] : $img_extension[1];
    }

    public function getImage($filename){
        $file = Storage::disk('rooms')->get($filename);
        return new Response($file);
    }



}
