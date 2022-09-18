<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use APP\Models\Post;

class PostController extends Controller
{
    public function store(Request $request){
        $post = new Post;
        $post -> title = $request -> input('title');
        $post -> title = $request -> input('type');
        $post -> title = $request -> input('desc');
        $post -> save();

        return respose() -> json([
            'status'=> 200,
            'message' => 'Post Stored Successfully'
        ]);
    }
}
