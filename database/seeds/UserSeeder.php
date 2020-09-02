<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Barber;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    $usersQuantity = 50;

    factory(User::class, $usersQuantity)->create();
    factory(Barber::class, $usersQuantity)->create();
    }
}
