@extends('layouts.app')

@section('content')
<div id="profile" data-name='{{ $barber[0]->name }}' data-email='{{ $barber[0]->email }}' data-zip='{{ $barber[0]->zip_code }}'></div>
@endsection
