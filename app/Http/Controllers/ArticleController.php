<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use App\Models\Article;
use Inertia\Inertia;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $articles = Article::latest()->paginate(10);

        // return view('articles.index', compact('articles'));
        return Inertia::render('Articles/index', ['articles' => $articles]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Articles/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //validate form
        $this->validate($request, [
            'cover'     => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'title'     => 'required|min:5',
            'content'   => 'required|min:10'
        ]);

        //upload image
        $image = $request->file('cover');
        $image->storeAs('public/articles', $image->hashName());

        Article::create([
            'cover'     => $image->hashName(),
            'title'     => $request->title,
            'slug'      => Str::slug($request->title, '-'),
            'content'   => $request->content
        ]);

        //redirect to index
        return redirect()->route('articles.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Article $article)
    {
        return Inertia::render('Articles/Edit', [
            'article' => [
                'id' => $article->id,
                'cover' => $article->cover,
                'title' => $article->title,
                'content' => $article->content
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Article $article)
    {
        //validate form
        $this->validate($request, [
            'cover'     => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'title'     => 'required|min:5',
            'content'   => 'required|min:10'
        ]);

        //check if image is uploaded
        if ($request->hasFile('cover')) {

            $image = $request->file('cover');
            $image->storeAs('public/articles', $image->hashName());

            //delete old image
            Storage::delete('public/articles/'.$article->cover);

            //update post with new image
            $article->update([
                'cover'     => $image->hashName(),
                'title'     => $request->title,
                'content'   => $request->content
            ]);

        } else {
            //update post without image
            $article->update([
                'title'     => $request->title,
                'content'   => $request->content
            ]);
        }

        //redirect to index
        return redirect()->route('articles.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Article $article)
    {
        Storage::delete('public/posts/'. $article->image);

        //delete post
        $article->delete();

        //redirect to index
        return redirect()->route('articles.index');
    }
}
