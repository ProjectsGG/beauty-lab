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
Route::get('/file/before-after/{filename}','PublicController@returnBeforeOrAfter');
Route::get('/forgot/{token}', 'APIController@changePassword');
Route::get('/', function () {
    return view('welcome');
});
Route::get('home','HomeControlller@index')->name('homeweb');
Route::get('plans','PlansWebController@index')->name('plansweb');
Route::get('procedures','ProceduresWebController@index')->name('proceduresweb');
Route::get('rooms','RoomsWebController@index')->name('roomsweb');
Route::get('contact','ContactWebController@index')->name('contactweb');
Route::get('flight','FlightController@index')->name('flightweb');
Route::get('policy','ControllerPrivacy@index')->name('PrivacyPolicy');
Route::get('ggapp','LiveController@index')->name('appgg');
Route::get('video','VideoController@index')->name('uservid');
Route::get('videofull','Videofull@index')->name('fullvideo');
Route::get('game','Controller3D@index')->name('game3d');
Route::get('registermedics','MedicsController@index')->name('registermedics');
Route::post('savemedic','MedicsController@store')->name('savemedic');
Route::get('medics','admin\MedicsController@index')->name('medics');


Route::get('back','admin\BackController@index')->name('backoffice');
Route::get('adminPlan','admin\AdminPlansController@index')->name('PlanAdmin');
Route::get('listPlans','admin\ListPlansController@index')->name('planlist');
Route::get('adminProcedure','admin\AdminProcedureController@create')->name('ProcedureAdmin');
Route::get('listProcedure','admin\AdminProcedureController@index')->name('procedurelist');
Route::get('adminRoom','admin\AdminRoomsController@index')->name('RoomsAdmin');
Route::post('saveprocedure','admin\AdminProcedureController@store')->name('proceduresave');
Route::post('saveplan','admin\AdminPlansController@store')->name('plansave');
Route::post('saveroom','admin\AdminRoomsController@store')->name('roomsave');
Route::get('userRegistered','admin\UserRegisteredController@index')->name('ListUsers');
Route::get('listrooms','admin\RoomsWebController@index')->name('roomslist');

Route::get('bookings','ReservationController@bookings')->name('bookings');
Route::get('asignmedic/{id}','ReservationController@asignmedic')->name('asignmedic');
Route::get('updatemedicbookin/{id}/{reserva}','ReservationController@updatemedicbookin')->name('updatemedicbookin');