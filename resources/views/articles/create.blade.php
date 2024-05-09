@extends('layouts.app')

@section('content')
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">{{ __('Buat Artikel') }}</div>
        <div class="card-body">
          <form action="{{ route('articles.store') }}" method="POST" enctype="multipart/form-data">

            @csrf
            <div class="d-grid gap-3">
              <div class="form-group">
                <label class="font-weight-bold">GAMBAR</label>
                <input type="file" class="form-control @error('cover') is-invalid @enderror" name="cover">

                <!-- error message untuk title -->
                @error('cover')
                <div class="alert alert-danger mt-2">
                  {{ $message }}
                </div>
                @enderror
              </div>

              <div class="form-group">
                <label class="font-weight-bold">JUDUL</label>
                <input type="text" class="form-control @error('title') is-invalid @enderror" name="title" value="{{ old('title') }}" placeholder="Masukkan Judul Post">

                <!-- error message untuk title -->
                @error('title')
                <div class="alert alert-danger mt-2">
                  {{ $message }}
                </div>
                @enderror
              </div>

              <div class="form-group">
                <label class="font-weight-bold">KONTEN</label>
                <textarea class="form-control @error('content') is-invalid @enderror" name="content" rows="5" placeholder="Masukkan Konten Post">{{ old('content') }}</textarea>

                <!-- error message untuk content -->
                @error('content')
                <div class="alert alert-danger mt-2">
                  {{ $message }}
                </div>
                @enderror
              </div>
              <div>
                <button type="submit" class="btn btn-md btn-primary">SIMPAN</button>
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