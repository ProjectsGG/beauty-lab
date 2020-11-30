<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Medics;
use App\Models\User;
use Illuminate\Support\Facades\Hash;


class MedicsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('Medics');
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
        
        $request->validate([
            'identificacion'     =>  'required',
            'nombres'            =>  'required',
            'apellidos'          =>  'required',
            'celular'            =>  'required',
            'email'              =>  'required',
        ]);        

        $user =User::create([
            'nombres' => $request->input('nombres'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('identificacion')),
        ]);

        $medic = new Medics();
        $medic->nombres         = $request->input('nombres');
        $medic->apellidos       = $request->input('apellidos');
        $medic->celular         = $request->input('celular');
        $medic->email           = $request->input('email');
        $medic->identificacion  = $request->input('identificacion');
        $medic->esp_senos       = $request->input('esp_senos');
        $medic->esp_caderas     = $request->input('esp_caderas');
        $medic->esp_liposuccion = $request->input('esp_liposuccion');
        $medic->esp_rinoplastia = $request->input('esp_rinoplastia');
        $medic->esp_sonrisa     = $request->input('esp_sonrisa');
        $medic->id_usuario      = $user->id;
        $medic->save();
        return redirect()->back()->with(['status' => 'created medic successfully.']);
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
