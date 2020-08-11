@extends('layouts.app')
    @section('content')
    @auth
      <div id="users-list"></div>
    @endauth
    <ul class='ws-1'>
      <a href='/login'><li id="client-welcome"></li></a>
      <a href='/login'><li id="barber-welcome"></li></a>
    </ul>

    @endsection
