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

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::post('/notice', 'HomeController@notice');
Route::post('/chat', 'HomeController@chat');
Route::post('/resident', 'ResidentController@store');