@extends('layouts.app')

@section('content')
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">{{ __('Articles') }}</div>
        <div class="card-body">
          <a href="{{ route('articles.create') }}" class="btn btn-md btn-success mb-3">TAMBAH POST</a>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">GAMBAR</th>
                <th scope="col">JUDUL</th>
                <th scope="col">CONTENT</th>
                <th scope="col">AKSI</th>
              </tr>
            </thead>
            <tbody>
              @forelse ($articles as $post)
              <tr>
                <td class="text-center">
                  <img src="{{ Storage::url('public/articles/').$post->cover }}" class="rounded" style="width: 150px">
                </td>
                <td>{{ $post->title }}</td>
                <td>{!! $post->content !!}</td>
                <td class="text-center">
                  <form onsubmit="return confirm('Apakah Anda Yakin ?');" action="{{ route('articles.destroy', $post->id) }}" method="POST">
                    <a href="{{ route('articles.edit', $post->id) }}" class="btn btn-sm btn-primary">EDIT</a>
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="btn btn-sm btn-danger">HAPUS</button>
                  </form>
                </td>
              </tr>
              @empty
              <div class="alert alert-danger">
                Data Post belum Tersedia.
              </div>
              @endforelse
            </tbody>
          </table>
          {{ $articles->links() }}
        </div>
      </div>
    </div>
  </div>
</div>
@endsection
