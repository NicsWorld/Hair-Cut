@extends('layouts.app')
    @section('content')
    <section class='welcome-hero'>
      <div>Cut My Hair Pls</div>
    </section>
    <ul class='ws-1'>
      <a href='/login'><li id="client-welcome"></li></a>
      <a href='/login'><li id="barber-welcome"></li></a>
    </ul>
    @auth
      <div id="users-list"></div>
    @endauth
    @endsection
