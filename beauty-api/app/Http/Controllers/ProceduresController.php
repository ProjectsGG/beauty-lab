<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Procedures;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

class ProceduresController extends Controller
{

    public function index()
    {
        $procedures = Procedures::all();

        return response()->json([
            'ok' => true,
            'data' => $procedures
        ]);
    }

    public function show($id)
    {
        $task = $this->user->tasks()->find($id);
        if (!$task) {
            return response()->json([
                'ok' => false,
                'message' => 'Sorry, task with id ' . $id . ' cannot be found.'
            ], 400);
        }
        return response()->json([
            'ok' => true,
            'data' => $task
        ]);
    }
    public function store(Request $request)
    {

        $this->validate($request, [
            'nombre' => 'required',
            'descripcion' => 'required',
            'precio' => 'required',
        ]);
        try {

            $img = $this->getB64Image($request->imagen);

            $img_extension = $this->getB64Extension($request->imagen);

            $img_name = 'procedures' . time() . '.' . $img_extension;

            Storage::disk('procedures')->put($img_name, $img);

            $procedures = new Procedures();
            $procedures->nombre = $request->nombre;
            $procedures->descripcion = $request->descripcion;
            $procedures->precio = $request->precio;
            $procedures->imagen = $img_name;
            $response = $procedures->save();

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
        $procedures = $this->user->procedures()->find($id);

        if (!$procedures) {
            return response()->json([
                'ok' => false,
                'message' => 'Sorry, task with id ' . $id . ' cannot be found.'
            ], 400);
        }
        try {
            $procedures->update($request->all());
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

    public function getImage($filename){
        $file = Storage::disk('procedures')->get($filename);
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


}
