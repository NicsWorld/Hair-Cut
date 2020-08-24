<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class Barber extends Authenticatable
{
    use HasApiTokens, Notifiable;
    
    protected $guard = 'barbers';

    protected $fillable = [
        'name', 'email', 'password', 'zip_code'
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];
}
