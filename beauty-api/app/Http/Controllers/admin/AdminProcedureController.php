<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Procedures;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Image;

class AdminProcedureController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $procedures = Procedures::get();
        return view('backOffice/listprocedure',compact('procedures'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('backOffice/Procedures');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        $request->validate([
            'Name'                  =>  'required',
            'Value'                 =>  'required',
            'image_procedure'       =>  'required|image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);

        $proc = new Procedures();
        $proc -> nombre = $request->input('Name');
        $proc -> descripcion = $request->input('Description');
        $proc -> precio = $request->input('Value');


        if($request->hasFile('image_procedure')!=null){

            $rules = ['image_procedure'=> 'required|image_procedure|max:1024*1024*1',];
            $messages = [
                'image_procedure.required' => 'la imagen es requerida',
                'image_procedure.image_procedure' => 'Formato no permitido',
                'image_procedure.max' => 'El maximo permitido es 1MB'
            ];
            $validator = Validator::make($request->all(),$rules, $messages);

            $name = $proc->nombre . '-' . $request->file('image_procedure')->getClientOriginalName();
            $request->file('image_procedure')->move('img/procedures', $name);
            $proc->imagen = $name;
        }   

        $proc -> save();

        return redirect()->back()->with(['status' => 'created procedure successfully.']);
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
