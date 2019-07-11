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

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/','WebController@index');
Route::get('/flats','WebController@flats');
Route::get('/about','WebController@about');
Route::get('/app/dashboard','WebController@dashboard');
Route::get('/test/map','WebController@map');


Auth::routes();

// api

Route::get('/test/map/api','WebController@mapApi');
Route::get('/api', 'HomeController@api');

// *************************************


Route::get('/home', 'HomeController@index')->name('home');
Route::get('/test', 'HomeController@reacttest');

Route::post('/notice', 'NoticeController@store');
Route::post('/chat', 'ChatController@store');
Route::post('/resident', 'ResidentController@store');
Route::post('/owner', 'OwnerController@store');
Route::post('/admin', 'AdministratorController@store');
Route::post('/building', 'BuildingController@store');
Route::post('/user', 'HomeController@store');

Route::post('/updatebuilding', 'BuildingController@update');

Route::get('/storage/contract/{file_id}.pdf', 'ResidentController@index');

Route::post('/su/edit/user/{id}', 'HomeController@edit');
Route::post('/su/edit/building/{id}', 'BuildingController@edit');
Route::post('/su/edit/owner/{id}', 'OwnerController@edit');
Route::post('/su/edit/admin/{id}', 'AdministratorController@edit');

Route::post('/su/delete/user/{id}', 'HomeController@destroy');
Route::post('/su/delete/building/{id}', 'BuildingController@destroy');
Route::post('/su/delete/owner/{id}', 'OwnerController@destroy');
Route::post('/su/delete/admin/{id}', 'AdministratorController@destroy');
Route::post('/su/delete/notice/{id}', 'NoticeController@destroy');
Route::post('/su/delete/chat/{id}', 'ChatController@destroy');
