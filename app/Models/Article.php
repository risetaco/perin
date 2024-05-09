<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Article extends Model
{
    use HasUuids;
    use HasFactory;

    protected $fillable = [
        'cover',
        'title',
        'slug',
        'content',
    ];
}