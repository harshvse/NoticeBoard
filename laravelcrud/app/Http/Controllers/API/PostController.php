<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function index(Request $request){
        $count = $request -> input('count');
        $posts = Post::orderBy('updated_at', 'asc') ->take($count)->get(); ;
        return response() -> json([
            'status'=> 200,
            'posts' => $posts,
            'message' => 'Students Fetched Successfully'
        ]);
    }

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
