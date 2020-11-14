<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Plans;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Image;

class AdminPlansController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('backOffice/Plans');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $plan = new Plans();
        $plan -> nombre = $request->input('Name');
        $plan -> descripcion = $request->input('Description');
        $plan -> dias_hospedaje = $request->input('Days');
        $plan -> valor = $request->input('Value');

        if($request->hasFile('image_plan')!=null){

            $rules = ['image_plan'=> 'required|image_plan|max:1024*1024*1',];
            $messages = [
                'image_plan.required' => 'la imagen es requerida',
                'image_plan.image_procedure' => 'Formato no permitido',
                'image_plan.max' => 'El maximo permitido es 1MB'
            ];
            $validator = Validator::make($request->all(),$rules, $messages);

            $name = $plan->nombre . '-' . $request->file('image_plan')->getClientOriginalName();
            $request->file('image_plan')->move('img/plans', $name);
            $plan->img_plan = $name;
        }   

        $plan -> save();

        return redirect()->route('PlanAdmin')->with('datos','Registro guardado correctamente!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
