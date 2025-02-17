@extends('layouts.app')

@section('content')
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">{{ __('Edit Artikel') }}</div>
        <div class="card-body">
          <form action="{{ route('articles.update', $article->id) }}" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PUT')
            <div class="d-grid gap-3">
              <div class="form-group">
                <label class="font-weight-bold">GAMBAR</label>
                <input type="file" class="form-control" name="cover">
              </div>

              <div class="form-group">
                <label class="font-weight-bold">JUDUL</label>
                <input type="text" class="form-control @error('title') is-invalid @enderror" name="title" value="{{ old('title', $article->title) }}" placeholder="Masukkan Judul Post">

                <!-- error message untuk title -->
                @error('title')
                <div class="alert alert-danger mt-2">
                  {{ $message }}
                </div>
                @enderror
              </div>

              <div class="form-group">
                <label class="font-weight-bold">KONTEN</label>
                <textarea class="form-control @error('content') is-invalid @enderror" name="content" rows="5" placeholder="Masukkan Konten Post">{{ old('content', $article->content) }}</textarea>

                <!-- error message untuk content -->
                @error('content')
                <div class="alert alert-danger mt-2">
                  {{ $message }}
                </div>
                @enderror
              </div>
              <div>
                <button type="submit" class="btn btn-md btn-primary">UPDATE</button>
                <button type="reset" class="btn btn-md btn-warning">RESET</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
@endsection
@section('script')
<script>
  CKEDITOR.replace('content');
</script>
@endsection