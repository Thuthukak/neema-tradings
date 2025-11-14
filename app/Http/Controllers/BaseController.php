<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

abstract class BaseController extends Controller
{
    /**
     * Get base SEO data that's common across all pages
     */
    protected function getBaseSeoData()
    {
        return [
            'title' => 'Neema Tradings - Your Trusted Supply Solution | Business Compliance & Growth Solutions',
            'description' => 'Neema Tradings offers comprehensive business solutions including CSD registration, company registration, BBBEE certificates, tender training, and compliance services. Let us help you help your business.',
            'keywords' => 'CSD registration, company registration South Africa, BBBEE certificates, tender training, beneficial ownership declaration, annual return filing, business compliance, Neema Tradings, Nomthandazo Nkosi',
            'og_title' => 'Neema Tradings - Empowering Your Business Growth',
            'og_description' => 'Professional business compliance and growth solutions. CSD registration, company setup, BBBEE certification, tender training, and more. Your Trusted Supply Solution partner.',
            'og_image' => asset('assets/images/logo/neema-logo.png'),
            'og_type' => 'website',
            'og_site_name' => 'Neema Tradings',
            'og_url' => config('app.url'),
            'twitter_card' => 'summary_large_image',
            'canonical_url' => config('app.url'),
        ];
    }

    /**
     * Merge custom SEO data with base SEO data
     */
    protected function mergeSeoData(array $customData = [])
    {
        return array_merge($this->getBaseSeoData(), $customData);
    }

}
