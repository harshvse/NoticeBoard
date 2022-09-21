<?php

use App\Http\Controllers\API\PostController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('/addPost',[PostController::class, 'store'] );

Route::post('/posts', [PostController::class, 'index']);

Route::get('/posts/{postID}', [PostController::class, 'fetchID']);
Route::post('/posts/edit/{postID}', [PostController::class, 'update']);



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
