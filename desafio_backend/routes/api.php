<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::get("/", "ClienteController@getAll")->name("getAll");
Route::post("/", "ClienteController@store")->name("store");
Route::post("/cliente/{id}", "ClienteController@edit")->name("edit");
Route::delete("/cliente/{id}", "ClienteController@delete")->name("delete");