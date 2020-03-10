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
    Route::get('img/zone', 'UserController@imagesZone');

    //  Blog
    Route::resource('blog', 'BlogController');
    Route::get('blog/user/{id}', 'BlogController@getForUser');
    // Hiatory

    // Hiatory

    Route::get('history','HistoryController@index');
    // Room
    Route::resource('/room','RoomsController');
    // Reservation
    Route::resource('/reservation', 'ReservationController');
    // Comments
    Route::post('/commentary', 'CommentaryController@comment');

    // Contact
    Route::post('/contact', 'ContactController@index');


    Route::get('blog/like/{blog}', 'BlogController@like');

    // Examples
    Route::get('tasks', 'TaskController@index');
    Route::get('tasks/{id}', 'TaskController@show');
    Route::post('tasks', 'TaskController@store');
    Route::put('tasks/{id}', 'TaskController@update');
    Route::delete('tasks/{id}', 'TaskController@destroy');


});

Route::get('plans', 'PlansController@index');
Route::post('plan', 'PlansController@store');

Route::get('procedures', 'ProceduresController@index');
Route::post('procedure', 'ProceduresController@store');

Route::get('room/{id}', 'RoomsController@show');
Route::get('rooms', 'RoomsController@index');
Route::post('room', 'RoomsController@store');

Route::get('roomstype', 'RoomsTypeController@index');

Route::get('reversations', 'ReservationController@index');
