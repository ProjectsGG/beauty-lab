<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\Contact;
class ContactController extends Controller
{
    public function index(Request $request)
    {
        $message=$request->all()['message'];
        Mail::to('miguelhito54@gmail.com')->send(new Contact($message));
        
    }
}
