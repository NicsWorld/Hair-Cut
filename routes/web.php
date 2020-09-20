<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});
Auth::routes();

Route::get('/login/google', 'Auth\LoginController@google');
Route::get('/callback', 'Auth\LoginController@callback');
Route::get('/barber/register', 'Auth\RegisterController@createBarber');
Route::post('/barber/register', 'Auth\RegisterController@saveBarber');
Route::get('/stylists/{id}', 'BarberController@show');
Route::get('/stylists', 'BarberController@index');

Route::get('/start', function() {
  return 'Start!';
});
Route::get('/home', function () {
  return view('home');
});
