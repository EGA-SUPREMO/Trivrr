<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class WordManagementTest extends TestCase
{
    public function testExample()
    {
        $response = $this->get('/practice');

        $response->assertOk();
    }
}
