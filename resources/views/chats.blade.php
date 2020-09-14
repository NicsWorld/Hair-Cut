@extends('layouts.app')

@section('content')
<div class="container">
    <div data-user="{{ auth()->user()->name }}" id="chats"></div>
</div>
@endsection
