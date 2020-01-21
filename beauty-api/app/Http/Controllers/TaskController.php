<?php

namespace App\Http\Controllers;

use JWTAuth;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    protected $user;

    public function __construct()
    {
        $this->user = JWTAuth::parseToken()->authenticate();
    }

    public function index()
    {
        $tasks = $this->user->tasks()->get(['title', 'description'])->toArray();

        return response()->json([
            'ok' => true,
            'data' => $tasks
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
            'title' => 'required',
            'description' => 'required',
        ]);
        try {
            $input = $request->all();
            $input['user_id']=$this->user->id;
            $task = Task::create($input);

            return response()->json([
                'ok' => true,
                'task' => $task
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
