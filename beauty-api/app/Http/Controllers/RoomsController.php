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
            $input = $request->all();
            $rooms = Rooms::create($input);

            return response()->json([
                'ok' => true,
                'data' => $rooms
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
}
