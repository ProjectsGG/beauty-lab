<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Plans;

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
        ]);
        try {
            $input = $request->all();
            $plans = Plans::create($input);

            return response()->json([
                'ok' => true,
                'data' => $plans
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
}
