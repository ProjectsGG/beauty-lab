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
            'title' => 'required',
            'description' => 'required',
        ]);
        try {
            $input = $request->all();
            $input['user_id']=$this->user->id;
            //$task = Task::create($input);

            /*return response()->json([
                'ok' => true,
                'task' => $task
            ]);*/
        } catch (\Throwable $th) {
            return response()->json([
                'ok' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }
    public function update(Request $request, $id)
    {
        $task = $this->user->tasks()->find($id);

        if (!$task) {
            return response()->json([
                'ok' => false,
                'message' => 'Sorry, task with id ' . $id . ' cannot be found.'
            ], 400);
        }
        try {
            $task->update($request->all());
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
    public function destroy($id)
    {
        $task = $this->user->tasks()->find($id);

        if (!$task) {
            return response()->json([
                'ok' => false,
                'message' => 'Sorry, task with id ' . $id . ' cannot be found.'
            ], 400);
        }

        if ($task->delete()) {
            return response()->json([
                'ok' => true,
                'message'=>'Task deleted successfully'
            ]);
        } else {
            return response()->json([
                'ok' => false,
                'message' => 'Task could not be deleted.'
            ], 500);
        }
    }

    public function getContenido($filename)
    {
        $file = Storage::disk('rooms')->get($filename);
        return new Response($file);
    }
}
