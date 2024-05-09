@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                    <div class="alert alert-success" role="alert">
                        {{ session('status') }}
                    </div>
                    @endif

                    {{ __('Selamat datang, silakan pilih menu berikut!') }}
                    <div class="mt-4">
                        <a href="{{ route('articles.index') }}">Article</a>
                        <!-- <a href="{{ route('articles.create') }}">Article</a> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection