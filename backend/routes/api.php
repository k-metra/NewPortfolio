<?php

use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;
use App\Mail\ContactFormMail;
use Illuminate\Support\Facades\Route;

Route::post('/contact', function (Request $request) {
    $validated_data = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|max:255',
        'message' => 'required|string',
    ]);

    Mail::to('metrakurt@gmail.com')->send(new ContactFormMail($validated_data));

    return response()->json(['message' => 'Email sent successfully']);
});

