<?php

use App\Http\Controllers\API\PostController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::Post('/addPost',[PostController::class, 'store'] );



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
