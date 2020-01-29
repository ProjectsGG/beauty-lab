<?php

// use Illuminate\Http\Request;
// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('login', 'ApiController@login');
Route::post('/register', 'APIController@register');

Route::group(['middleware' => 'auth.jwt'], function () {
    Route::post('logout', 'ApiController@logout');
    Route::get('refresh', 'APIController@refresh')->name('api.jwt.refresh');
    Route::put('user/update/{id}','UserController@update');

    Route::get('tasks', 'TaskController@index');
    Route::get('tasks/{id}', 'TaskController@show');
    Route::post('tasks', 'TaskController@store');
    Route::put('tasks/{id}', 'TaskController@update');
    Route::delete('tasks/{id}', 'TaskController@destroy');

    Route::get('plans', 'PlansController@index');

});
