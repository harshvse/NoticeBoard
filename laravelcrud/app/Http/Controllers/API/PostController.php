<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function store(Request $request){
        $post = new Post;
        $post -> title = $request -> input('title');
        $post -> type = $request -> input('type');
        $post -> desc = $request -> input('desc');
        $post -> save();

        return response() -> json([
            'status'=> 200,
            'message' => 'Post Stored Successfully'
        ]);
    }
}
