<?php

// use Illuminate\Http\Request;
// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::post('saveImg','UserController@savePhoto');
Route::post('login', 'APIController@login');
Route::post('register', 'APIController@register');

Route::group(['middleware' => 'auth.jwt'], function () {
    // Auth
    Route::post('logout', 'APIController@logout');
    Route::get('refresh', 'APIController@refresh');
    Route::post('me', 'APIController@me');

    // User
    Route::put('user/update/{id}', 'UserController@update');
    Route::post('user/upload/photos', 'UserController@uploadPhotos');
    Route::post('setImgProfile', 'UserController@updatePhoto');
    // Room
    Route::resource('/room','RoomsController');
    // Reservation
    Route::resource('/reservation', 'ReservationController');
    // Examples
    Route::get('tasks', 'TaskController@index');
    Route::get('tasks/{id}', 'TaskController@show');
    Route::post('tasks', 'TaskController@store');
    Route::put('tasks/{id}', 'TaskController@update');
    Route::delete('tasks/{id}', 'TaskController@destroy');


});

Route::get('plans', 'PlansController@index');
Route::get('procedures', 'ProceduresController@index');
Route::get('room/{id}', 'RoomsController@show');
