<?php

namespace App\Http\Controllers;

use App\Models\BeforeAfter;
use App\Models\ImagesXBeforeAfter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use JWTAuth;
class BeforeAfterController extends Controller
{
    protected $user;

    public function __construct()
    {
        $this->user = JWTAuth::parseToken()->authenticate();
    }
    public function getData($id)
    {
        $data = BeforeAfter::where('id_usuario', $id)->first();
        return response()->json([
            'ok' => count($data) > 0 ? true : false,
            'data' => $data
        ]);
    }
    public function saveData(Request $request)
    {
        try {
            $input = $request->all();
            $beforeAfter = BeforeAfter::create($input);
            if (isset($input['photos'])) {
                foreach ($input['photos'] as $key => $value) {

                    $img = $this->getB64Image($value);
                    $img_extension = $this->getB64Extension($value);

                    $img_name = $this->user->id . '-beforeAfter-' . $key . time() . '.' . $img_extension;

                    Storage::disk('beforeAfter')->put($img_name, $img);

                    ImagesXBeforeAfter::create([
                        'id_referencia' => $beforeAfter->id,
                        'imagen' => $img_name,
                    ]);
                }
            }

            return response()->json([
                'ok' => true,
                'message' => 'Stored information'
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'ok' => false,
                'error' => $th->getMessage()
            ]);
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
}
