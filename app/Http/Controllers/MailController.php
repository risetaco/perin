<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;
use App\Mail\ContactUs;

class MailController extends Controller
{
  /**
   * Write code on Method
   *
   * @return response()
   */
  public function index()
  {
    $mailData = [
      'title' => 'Mail from ItSolutionStuff.com',
      'body' => 'This is for testing email using smtp.'
    ];

    Mail::to('contact.condro@gmail.com')->send(new ContactUs($mailData));

    dd("Email is sent successfully.");
  }
}
