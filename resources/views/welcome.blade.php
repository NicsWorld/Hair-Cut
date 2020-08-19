@extends('layouts.app')
    @section('content')
    <section class='welcome-hero'>
      <div class='primary-intro'>Find a stylist that fits your needs.</div>
      <div class='secondary-intro'>To get started, select an option:</div>
    </section>
    
    <ul class='ws-1'>
      <a href='/register'><li id="client-welcome"></li></a>
      <a href='/barber/register'><li id="barber-welcome"></li></a>
    </ul>
    @auth
      <div id="users-list"></div>
    @endauth
    @endsection
