<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

use App\User;

class WordManagementTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->withoutExceptionHandling();
    }
    
    public function test_signed_user_can_practice()
    {
        $this->actingAs(factory(User::class)->create());

        $response = $this->get('/practice');

        $response->assertOk();
    }
    public function test_unsigned_user_cannot_practice()
    {
        $this->withExceptionHandling();
        $response = $this->get('/practice');

        $response->assertRedirect('/login');
    }
}
