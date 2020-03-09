<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Plans;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Response;

class PlansController extends Controller
{

    public function index()
    {
        $plans = Plans::all();

        return response()->json([
            'ok' => true,
            'data' => $plans
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
            'valor' => 'required',
            'img_plan' => 'required',
        ]);
        try {

            $img = $this->getB64Image($request->img_plan);

            $img_extension = $this->getB64Extension($request->img_plan);

            $img_name = 'plans' . time() . '.' . $img_extension;

            Storage::disk('plans')->put($img_name, $img);

            $plans = new Plans();
            $plans->nombre = $request->nombre;
            $plans->descripcion = $request->descripcion;
            $plans->valor = $request->valor;
            $plans->img_plan = $img_name;
            $response = $plans->save();

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
        $plans = $this->user->plans()->find($id);

        if (!$plans) {
            return response()->json([
                'ok' => false,
                'message' => 'Sorry, task with id ' . $id . ' cannot be found.'
            ], 400);
        }
        try {
            $plans->update($request->all());
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


    public function returnPlan($filename)
    {
        $file = Storage::disk('plans')->get($filename);
        return new Response($file);
    }

}
