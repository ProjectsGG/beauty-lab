<?php

namespace App\Http\Controllers;

use App\Models\ImgAreaAffected;
use App\Models\User;
use Illuminate\Http\Request;
use Validator;
use JWTAuth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class UserController extends Controller
{
    protected $user;

    public function __construct()
    {
        $this->user = JWTAuth::parseToken()->authenticate();
    }

    public function update(Request $request, $id)
    {

        $input = $request->all();

        $validation = Validator::make($input, [
            'apellidos' => 'nullable',
            'username' => 'nullable|string|min:6|max:15|unique:usuarios,id,' . $id,
            'movil' => 'nullable|min:8',
            'direccion' => 'nullable|min:5',
            'identificacion' => 'nullable|integer',
            'id_pais' => 'nullable|integer',
            'id_tipo_id' => 'nullable|integer',
            'fecha_cumpleanos' => 'nullable',
            'ciudad' => 'nullable|string'
        ])->setAttributeNames([
            'apellidos' => 'surnames',
            'username' => 'username',
            'movil' => 'phone',
            'direccion' => 'address',
            'identificacion' => 'document',
            'id_pais' => 'pais',
            'id_tipo_id' => 'type',
            'fecha_cumpleanos' => 'birthdate',
            'ciudad' => 'city'
        ]);

        if ($validation->fails()) {
            return response()->json([
                'ok' => false,
                'error' => $validation->errors()->first()
            ]);
        } else {
            try {
                $user = User::find($id);
                $user->update($input);
                return response()->json([
                    'ok' => true,
                    'message' => 'Updated information!!',
                    'user' => $user
                ]);
            } catch (\Exception $ex) {
                return response()->json([
                    'ok' => false,
                    'error' => $ex->getMessage()
                ]);
            }
        }
    }
    public function uploadPhotos(Request $request)
    {
        $input = $request->all();

        $validation = Validator::make($input, [
            'photos' => 'required'
        ]);

        if ($validation->fails()) {
            return response()->json([
                'ok' => false,
                'error' => $validation->errors()->first()
            ]);
        }
        try {
            foreach ($input['photos'] as $s) {
                $image = $s;
                $imageName = time() . $image->getClientOriginalName();
                Storage::disk('photosUser')->put($imageName, File::get($image));

                ImgAreaAffected::create([
                    'imagen' => $imageName,
                    'id_usuario' => $this->user->id
                ]);

                return response()->json([
                    'ok' => true,
                    'message' => 'photos uploaded successfully!'
                ]);
            }
        } catch (\Exception $ex) {
            return response()->json([
                "ok" => false,
                "error" => $ex->getMessage()
            ]);
        }
    }
    public function savePhoto(Request $request)
    {
        $image_avatar_b64 = $request->all()['image'];
        // Obtener los datos de la imagen
        $img = getB64Image($image_avatar_b64);
        // Obtener la extensión de la Imagen
        $img_extension = getB64Extension($image_avatar_b64);
        // Crear un nombre aleatorio para la imagen
        $img_name = 'user_avatar' . time() . '.' . $img_extension;
        // Usando el Storage guardar en el disco creado anteriormente y pasandole a 
        // la función "put" el nombre de la imagen y los datos de la imagen como 
        // segundo parametro
        Storage::disk('images_base64')->put($img_name, $img);
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
