<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ArticleGuestController;
use App\Http\Controllers\ContactUsController;
use App\Http\Controllers\MailController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/industri-maritim', function () {
    return Inertia::render('IndustriMaritim');
});

Route::get('/peraturan', function () {
    return Inertia::render('Peraturan');
});

Route::get('/publikasi', [ArticleGuestController::class, 'index']);
Route::get('/publikasi/{id}', [ArticleGuestController::class, 'show']);

// Route::get('/kontak-kami', function () {
//     return Inertia::render('KontakKami');
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::resource('/contact-us', ContactUsController::class);

Route::prefix('admin')->middleware("auth")->group(function () {
    Route::resource('/articles', ArticleController::class);
});


require __DIR__.'/auth.php';
