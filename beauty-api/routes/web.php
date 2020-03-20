<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/verify/{token}','APIController@verify')->name('verify');
Route::get('/file/{filename}','RoomsController@getContenido');
Route::get('/file/profile/{filename}','RoomsController@getImgPerfil');
Route::get('/file/blog/{filename}','PublicController@returnBlog');
Route::get('/file/plans/{filename}','PlansController@getImage');
Route::get('/file/rooms/{filename}','RoomsController@getImage');
Route::get('/file/procedures/{filename}','ProceduresController@getImage');
Route::get('/file/zone/{filename}','PublicController@returnZoneAff');
Route::get('/forgot/{token}', 'APIController@changePassword');
Route::get('/', function () {
    return view('welcome');
});
Route::get('home','HomeControlller@index')->name('homeweb');
Route::get('plans','PlansWebController@index')->name('plansweb');
Route::get('procedures','ProceduresWebController@index')->name('proceduresweb');
Route::get('rooms','RoomsWebController@index')->name('roomsweb');
Route::get('contact','ContactWebController@index')->name('contactweb');
