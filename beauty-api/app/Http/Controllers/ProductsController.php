<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class ProductsController extends Controller
{
    public function getProducts()
    {
        $client = new Client(['base_uri' => 'https://beauty-lab-merch.myshopify.com']);
        $response = $client->get('https://844672ed6d0f31d8ad2fb844a0636e80:c4e4a2414eed48ff01f4355382e19bd3@beauty-lab-merch.myshopify.com/admin/api/2020-01/collections/173830930491/products.json');
        dd($response);
    }
}
