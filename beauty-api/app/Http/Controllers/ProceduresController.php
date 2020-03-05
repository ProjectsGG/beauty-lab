<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Procedures;

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
            $input = $request->all();
            $procedures = Procedures::create($input);

            return response()->json([
                'ok' => true,
                'data' => $procedures
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

}
