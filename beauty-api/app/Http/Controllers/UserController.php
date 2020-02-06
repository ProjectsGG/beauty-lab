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
}
