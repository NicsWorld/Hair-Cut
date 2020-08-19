@extends('layouts.app')

@section('content')
<section class="barber-register-body">
  <form method="POST" action="{{ url('/barber/register') }}">
    @csrf
    <label class="form-label" for="name">Name</label>
    <input class="form-input" type="text" name="name" required/>
    @error('name')
        <span class="invalid-feedback" role="alert">
            <strong>{{ $message }}</strong>
        </span>
    @enderror

      <label class="form-label" for="email-address">Email</label>
      <input class="form-input" type="email" name="emailAddress"/>
      @error('email-address')
          <span class="invalid-feedback" role="alert">
              <strong>{{ $message }}</strong>
          </span>
      @enderror

      <label class="form-label" for="password">Password</label>
      <input class="form-input @error('password') is-invalid @enderror" type="password" name="password" required autocomplete="new-password"/>
      @error('password')
          <span class="invalid-feedback" role="alert">
              <strong>{{ $message }}</strong>
          </span>
      @enderror

      <label class="form-label" for="password-confirm">Confirm Password</label>
      <input id="password-confirm" type="password" name="password_confirmation" required autocomplete="new-password">

      <span class="agreement">By clicking Agree & Join, you agree to the LinkedIn User Agreement, Privacy Policy, and Cookie Policy.</span>

      <button type="submit" class="barber-submit" value="Accept & Join">Agree & Join</button>

      <span class="secondary-options">
        <span class="seperator-wrapper">
          <span class="seperator"></span>
        </span>
        <span class="or-wrapper">
          <span class="or">or</span>
        </span>
      </span>
      <button class="google"><a href="/login/google"></a></button>

  </form>

</section>
@endsection
