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
//DASHBOARD
Route::get('/app/dashboard','WebController@dashboard');
Route::get('/app/noticeboard','WebController@noticeboard');
Route::get('/app/community','WebController@community');
Route::get('/app/community/{id}','WebController@community');
Route::get('/app/messenger','WebController@messenger');
Route::get('/app/foo','WebController@foo');
//
Route::get('/react-houses','WebController@reacthouses');
Route::get('/react-houses/{id}','WebController@reacthouses');
Route::get('/test/map','WebController@map');
Route::get('/houses', 'WebController@houses');

Auth::routes();

// api

Route::get('/map/api','WebController@mapApi');
Route::get('/api', 'HomeController@api'); //Pouze pro supersprávce
Route::get('/react-houses-api','HomeController@reacthouses');

//Nové api pro nový dashboard

Route::get('/selectbuildingapi', 'HomeController@selectBuildingApi');
Route::get('/selectprofile{building}', 'HomeController@selectProfile');
Route::get('/chatapi', 'HomeController@chat_api'); 
Route::get('/noticeapi', 'HomeController@notice_api');
Route::get('/communityapi', 'HomeController@community_api');
Route::get('/meapi', 'HomeController@me_api');

//Api pro messanger
Route::post('/messageroom', 'MessageRoomController@store');
Route::post('/message', 'MessageRoomController@store');


// *************************************


Route::get('/home', 'HomeController@index')->name('home');
Route::get('/home/building/{id}', 'HomeController@bedit');
Route::get('/test', 'HomeController@reacttest');

Route::post('/notice', 'NoticeController@store');
Route::post('/chat', 'ChatController@store');
Route::post('/resident', 'ResidentController@store');
Route::post('/owner', 'OwnerController@store');
Route::post('/admin', 'AdministratorController@store');
Route::post('/building', 'BuildingController@store');
Route::post('/flat', 'FlatController@store');
Route::post('/user', 'HomeController@store');

Route::post('/updatebuilding', 'BuildingController@update');
Route::post('/uploadProfileImage', 'HomeController@profileImage');



Route::post('/update_{resident_id}_{user_id}', 'ResidentController@update');

Route::get('/storage/contract/{file_id}.pdf', 'ResidentController@index');

Route::post('/su/edit/user/{id}', 'HomeController@edit');
Route::post('/su/edit/building/{id}', 'BuildingController@edit');
Route::post('/su/edit/owner/{id}', 'OwnerController@edit');
Route::post('/su/edit/admin/{id}', 'AdministratorController@edit');
Route::post('/su/edit/flat/{id}', 'FlatController@edit');
Route::post('/su/edit/resident/{id}', 'ResidentController@edit');

Route::post('/su/delete/user/{id}', 'HomeController@destroy');
Route::post('/su/delete/building/{id}', 'BuildingController@destroy');
Route::post('/su/delete/owner/{id}', 'OwnerController@destroy');
Route::post('/su/delete/admin/{id}', 'AdministratorController@destroy');
Route::post('/su/delete/notice/{id}', 'NoticeController@destroy');
Route::post('/su/delete/chat/{id}', 'ChatController@destroy');
Route::post('/su/delete/flat/{id}', 'FlatController@destroy');
Route::post('/su/delete/resident/{id}', 'ResidentController@destroy');