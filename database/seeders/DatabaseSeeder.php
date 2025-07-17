<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        // User::factory(10)->create();
        $this->call(ApplicantSeeder::class);
        $this->call(JobOpeningSeeder::class);
        $this->call(EducationalBackgroundSeeder::class);
        $this->call(JobApplicationSeeder::class);
        $this->call(MedicalSeeder::class);
        $this->call(WorkExperienceSeeder::class);
        
        /*User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);*/


    }
}
