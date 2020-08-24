<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
        $this->middleware('guest:barbers')->except('logout');
    }

    public function login(Request $request) {
      if(Auth::guard('barbers')->attempt($request->only('email','password'))){
        return redirect()->to('/');
      }
      if(Auth::guard('web')->attempt($request->only('email','password'))){
        return redirect()->to('/');
      }
    }

    public function google() {
      return Socialite::driver('google')->stateless()->redirect();
    }

    public function callback() {
      try {
          $user = Socialite::driver('google')->stateless()->user();
      } catch (\Exception $e) {
        dd($e);
        return redirect('/login');
      }
      $existingUser = User::where('email', $user->email)->first();
      if($existingUser){
          auth()->login($existingUser, true);
      } else {
          $newUser = new User;
          $newUser->name = $user->name;
          $newUser->email = $user->email;
          $newUser->save();
          auth()->login($newUser, true);
      }
      return redirect()->to('/');
    }
}
