<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function index(Request $request){
        $count = $request -> input('count');
        $posts = Post::orderBy('updated_at', 'desc') ->take($count)->get(); ;
        return response() -> json([
            'status'=> 200,
            'posts' => $posts,
            'message' => 'Post Fetched Successfully'
        ]);
    }

    public function fetchID(Request $request){
        $postID = $request -> route('postID');
        $post = Post::find($postID);
        return response() -> json([
            'status' => 200,
            'post' => $post,
            'message' => 'Post fetched from id',
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

    public function update(Request $request){
        $postID = $request -> route('postID');

        $post = Post::find($postID);
        $post->title = $request->input('title');
        $post->type = $request->input('type');
        $post->desc = $request->input('desc');
        $post->update();

        return response() -> json([
            'status'=> 200,
            'message' => "Post Updated",
            'post' => $post,
        ]);
    }
}
