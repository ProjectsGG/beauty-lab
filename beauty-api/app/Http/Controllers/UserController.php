<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
class UserController extends Controller
{
    public function update(Request $request, $id)
    {   
        dd($id);
        $input = $request->all();

        $validation = Validator::make($input,[
            'apellidos' => 'nullable',
            'username' => 'nullable|string|min:6|max:15|unique:usuarios',
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
               
           } catch (\Exception $ex) {
               return response()->json([
                   'ok' => false,
                   'error' => $ex->getMessage()
               ]);
           }
        }
        

    }
}
