<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends BaseController
{
    public function Home()
    {
        // Owner/Founder image
        $ownerImage = asset('/assets/images/nomthandazo-nkosi.jpeg');

        // Customize SEO data for Neema Tradings home page
        $seoData = $this->mergeSeoData([
            'title' => 'Neema Tradings - Your Trusted Supply Solution | Business Compliance & Growth Solutions',
            'description' => 'Neema Tradings offers comprehensive business solutions including CSD registration, company registration, BBBEE certificates, tender training, and compliance services. Let us help you help your business.',
            'keywords' => 'CSD registration, company registration South Africa, BBBEE certificates, tender training, beneficial ownership declaration, annual return filing, business compliance, Neema Tradings, Nomthandazo Nkosi',
            'og_title' => 'Neema Tradings - Empowering Your Business Growth',
            'og_description' => 'Professional business compliance and growth solutions. CSD registration, company setup, BBBEE certification, tender training, and more. Your Trusted Supply Solution partner.',
        ]);

        // Services data for better SEO and structured data
        $services = [
            [
                'title' => 'Central Supplier Database (CSD)',
                'description' => 'Get registered on the government\'s Central Supplier Database and ensure your profile is optimized for maximum visibility and compliance. We offer CSD Registration (R400) and CSD Optimization & Audit (R350).',
                'price' => 'From R350',
                'icon' => 'database',
            ],
            [
                'title' => 'Company Registration',
                'description' => 'Complete company registration package with all necessary documentation, BBBEE certification, and compliance certificates to get your business started right. Includes BBBEE and other certificates.',
                'price' => 'R800',
                'icon' => 'building',
                'featured' => true,
            ],
            [
                'title' => 'Beneficial Ownership Declaration',
                'description' => 'Ensure full compliance with beneficial ownership requirements through proper documentation and declaration filing.',
                'price' => 'R650',
                'icon' => 'file-contract',
            ],
            [
                'title' => 'Company Annual Return Filing',
                'description' => 'Stay compliant with annual return requirements. We handle all the paperwork and ensure timely submission to avoid penalties.',
                'price' => 'R400',
                'icon' => 'calendar-check',
            ],
            [
                'title' => 'Tender/RFQ Masterclass',
                'description' => 'Comprehensive one-on-one training covering tender compliance, document filling, funding strategies, competitive pricing, identifying legitimate RFQs, and avoiding scams.',
                'price' => 'R400',
                'icon' => 'graduation-cap',
            ],
        ];

        // Structured Data for SEO
        $structuredData = [
            '@context' => 'https://schema.org',
            '@type' => 'ProfessionalService',
            'name' => 'Neema Tradings',
            'alternateName' => 'Your Trusted Supply Solution',
            'description' => $seoData['description'],
            'url' => $seoData['og_url'],
            'logo' => $seoData['og_image'],
            'image' => $seoData['og_image'],
            'founder' => [
                '@type' => 'Person',
                'name' => 'Nomthandazo Nkosi',
                'jobTitle' => 'Founder & Business Consultant',
            ],
            'address' => [
                '@type' => 'PostalAddress',
                'addressCountry' => 'ZA',
            ],
            'contactPoint' => [
                '@type' => 'ContactPoint',
                'contactType' => 'customer service',
                'email' => 'enquiries@neematradings.co.za',
                'availableLanguage' => ['English', 'Zulu'],
            ],
            'areaServed' => [
                '@type' => 'Country',
                'name' => 'South Africa',
            ],
            'priceRange' => 'R350 - R800',
            'openingHoursSpecification' => [
                [
                    '@type' => 'OpeningHoursSpecification',
                    'dayOfWeek' => ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                    'opens' => '08:00',
                    'closes' => '17:00',
                ],
                [
                    '@type' => 'OpeningHoursSpecification',
                    'dayOfWeek' => 'Saturday',
                    'opens' => '09:00',
                    'closes' => '13:00',
                ],
            ],
            'hasOfferCatalog' => [
                '@type' => 'OfferCatalog',
                'name' => 'Business Compliance Services',
                'itemListElement' => array_map(function($service) {
                    return [
                        '@type' => 'Offer',
                        'itemOffered' => [
                            '@type' => 'Service',
                            'name' => $service['title'],
                            'description' => $service['description'],
                        ],
                        'price' => $service['price'],
                        'priceCurrency' => 'ZAR',
                    ];
                }, $services),
            ],
            'aggregateRating' => [
                '@type' => 'AggregateRating',
                'ratingValue' => '4.9',
                'reviewCount' => '127',
                'bestRating' => '5',
            ],
        ];

        return Inertia::render('Home', [
            'ownerImage' => $ownerImage,
            'services' => $services,
            'seo' => $seoData,
            'structuredData' => json_encode($structuredData),
        ]);
    }


    public function AdminAuth () {

        $seoData = $this->mergeSeoData([
            'title' => 'Admin Authentication - Neema Tradings',
            'description' => 'Admin Authentication page for Neema Tradings',
            'keywords' => 'admin login, admin authentication, Neema Tradings admin',
            'og_title' => 'Admin Authentication | Neema Tradings',
            'hero_image' => asset('assets/images/logo/neema-logo-badge.png'),
        ]);

        return Inertia::render('Admin', [
            'seo' => $seoData
        ]);
    }


    public function FaqIndex () {
    $seoData = $this->mergeSeoData([
        'title' => 'FAQ - Frequently Asked Questions About Our Web Design, Graphic Design, Branding, E-commerce, and Digital Marketing Services | Neema Tradings',
        'description' => 'Get answers to common questions about web design, graphic design, branding, e-commerce solutions, and digital marketing services. Expert advice from Neema Tradings South Africa.',
        'keywords' => 'FAQ, web design questions, graphic design FAQ, branding questions, e-commerce FAQ, digital marketing help, website design cost, logo design questions, South Africa web design',
        'og_title' => 'Frequently Asked Questions | Neema Tradings Design Services',
        'og_description' => 'Find answers to your questions about our web design, branding, and digital marketing services. Get expert insights from South Africa\'s leading creative agency.',
        'canonical_url' => config('app.url') . '/faq',
    ]);
    
    // Add structured data for FAQ
    $structuredData = [
        '@context' => 'https://schema.org',
        '@type' => 'FAQPage',
        'mainEntity' => [
            [
                '@type' => 'Question',
                'name' => 'Do you build responsive websites?',
                'acceptedAnswer' => [
                    '@type' => 'Answer',
                    'text' => 'Yes, all our websites are mobile-friendly and fully responsive across devices.'
                ]
            ],
            [
                '@type' => 'Question',
                'name' => 'How much does web design cost?',
                'acceptedAnswer' => [
                    '@type' => 'Answer',
                    'text' => 'The cost of web design can vary widely depending on factors such as the complexity of the project, the level of customization required, the experience of the design team, and additional services such as SEO or content creation. It\'s best to discuss your specific needs and budget with a web design agency to get an accurate quote.'
                ]
            ],
            [
                '@type' => 'Question',
                'name' => 'What types of designs do you offer?',
                'acceptedAnswer' => [
                    '@type' => 'Answer',
                    'text' => 'We offer everything from logos and flyers to packaging and promotional materials.'
                ]
            ],
            [
                '@type' => 'Question',
                'name' => 'Do you offer payment gateway integration?',
                'acceptedAnswer' => [
                    '@type' => 'Answer',
                    'text' => 'Yes, we integrate with major gateways like PayFast, PayPal, and Stripe.'
                ]
            ],
            [
                '@type' => 'Question',
                'name' => 'Do you manage social media accounts?',
                'acceptedAnswer' => [
                    '@type' => 'Answer',
                    'text' => 'Yes, we can manage and grow your social media presence across multiple platforms.'
                ]
            ],
            [
                '@type' => 'Question',
                'name' => 'What types of identity design services do you offer?',
                'acceptedAnswer' => [
                    '@type' => 'Answer',
                    'text' => 'We offer everything from logo design to brand guidelines.'
                ]
            ]
        ]
    ];
    
    return Inertia::render('Faq', [
        'seo' => $seoData, 
        'structuredData' => json_encode($structuredData),
    ]);
}

    public function AboutUsIndex () {

    $seoData = $this->mergeSeoData([
        // Basic SEO
        'title' => 'About Us | Digital Design & Development Agency',
        'description' => 'Discover Neema Tradings\' journey from boutique design studio to comprehensive digital solutions provider. Specializing in web development, branding, graphic design, and digital marketing since 2019.',
        'keywords' => 'about Neema Tradings, digital design agency, web development company, graphic design studio, branding experts, digital marketing agency, web applications, e-commerce solutions, UI/UX design, Laravel development, Vue.js, responsive web design, logo design, brand identity, Kempton Park, South Africa',
        'canonical_url' => url('/about-us'),
        
        // Open Graph (Facebook, LinkedIn, etc.)
        'og_title' => 'About Neema Tradings - Digital Design & Development Experts',
        'og_description' => 'From boutique design studio to full-service digital agency. Transforming brands through innovative design and technology since 2019. Web development, branding, and digital marketing specialists.',
        'og_image' => asset('assets\images\penda_logo2.png'),
        'og_url' => url('/about-us'),
        'og_type' => 'website',
        'og_site_name' => 'Neema Tradings',
        
        // Twitter Card
        'twitter_card' => 'summary_large_image',
        'twitter_title' => 'About Neema Tradings - Digital Design & Development Experts',
        'twitter_description' => 'From boutique design studio to full-service digital agency. Transforming brands through innovative design and technology since 2019.',
        'twitter_image' => asset('assets\images\painted_p_logo.png'),
        
        // Additional SEO data
        'author' => 'Neema Tradings',
        'robots' => 'index, follow',
        'revisit_after' => '7 days',
        'language' => 'en-US',
        'geo_region' => 'ZA-GP',
        'geo_placename' => 'Kempton Park, Gauteng, South Africa',
        'geo_position' => '-26.1186;28.2294',
        'ICBM' => '-26.1186, 28.2294',
        
        // Page-specific images
        'sec_img' => asset('assets/images/painted_p_logo.png'),
        'sec_img2' => asset('assets/images/approach.png'),
        
        // Breadcrumbs
        'breadcrumbs' => [
            ['name' => 'Home', 'url' => url('/')],
            ['name' => 'About Us', 'url' => url('/about-us')]
        ],
        
        // Additional meta tags
        'theme_color' => '#005e91',
        'msapplication_TileColor' => '#005e91',
        'apple_mobile_web_app_capable' => 'yes',
        'apple_mobile_web_app_status_bar_style' => 'default',
        
        // Performance and technical SEO
        'preload_images' => [
            asset('assets/images/painted_p_logo.png'),
            asset('assets/images/approach.png')
        ],
        
        // Content freshness
        'last_modified' => now()->toISOString(),
        'published_time' => '2019-01-01T00:00:00+00:00',
        'modified_time' => now()->toISOString(),
    ]);

    // Structured Data for Schema.org
    $structuredData = [
        '@context' => 'https://schema.org',
        '@type' => 'Organization',
        'name' => 'Neema Tradings',
        'description' => 'Digital design and development agency specializing in web development, branding, graphic design, and digital marketing solutions.',
        'url' => url('/'),
        'logo' => asset('assets/images/penda-graphics-logo.png'),
        'image' => asset('assets/images/penda-graphics-team.jpg'),
        'address' => [
            '@type' => 'PostalAddress',
            'streetAddress' => 'Birch Acres',
            'addressLocality' => 'Kempton Park',
            'addressRegion' => 'Gauteng',
            'addressCountry' => 'ZA'
        ],
        'contactPoint' => [
            '@type' => 'ContactPoint',
            'telephone' => '+27738114652',
            'email' => 'info@pendagraphics.co.za',
            'contactType' => 'customer service'
        ],
        'foundingDate' => '2019',
        'sameAs' => [
            'https://web.facebook.com/Penda.graphix',
            'https://www.instagram.com/penda_graphics/',
        ],
        'hasOfferCatalog' => [
            '@type' => 'OfferCatalog',
            'name' => 'Digital Services',
            'itemListElement' => [
                [
                    '@type' => 'Offer',
                    'itemOffered' => [
                        '@type' => 'Service',
                        'name' => 'Web Design & Development'
                    ]
                ],
                [
                    '@type' => 'Offer',
                    'itemOffered' => [
                        '@type' => 'Service',
                        'name' => 'Graphic Design'
                    ]
                ],
                [
                    '@type' => 'Offer',
                    'itemOffered' => [
                        '@type' => 'Service',
                        'name' => 'Brand Identity Design'
                    ]
                ],
                [
                    '@type' => 'Offer',
                    'itemOffered' => [
                        '@type' => 'Service',
                        'name' => 'Digital Marketing'
                    ]
                ],
                [
                    '@type' => 'Offer',
                    'itemOffered' => [
                        '@type' => 'Service',
                        'name' => 'Web Applications'
                    ]
                ],
                [
                    '@type' => 'Offer',
                    'itemOffered' => [
                        '@type' => 'Service',
                        'name' => 'E-commerce Solutions'
                    ]
                ]
            ]
        ],
        'openingHoursSpecification' => [
            [
                '@type' => 'OpeningHoursSpecification',
                'dayOfWeek' => ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                'opens' => '08:00',
                'closes' => '17:00'
            ],
            [
                '@type' => 'OpeningHoursSpecification',
                'dayOfWeek' => 'Saturday',
                'opens' => '09:00',
                'closes' => '13:00'
            ]
        ]
    ];

    // Business information for component use
    $businessInfo = [
        'hours' => [
            'monday' => '08:00-17:00',
            'tuesday' => '08:00-17:00',
            'wednesday' => '08:00-17:00',
            'thursday' => '08:00-17:00',
            'friday' => '08:00-17:00',
            'saturday' => '09:00-13:00',
            'sunday' => 'closed'
        ],
        'contact' => [
            'phone' => '+27738114652',
            'email' => 'info@pendagraphics.co.za'
        ],
        'location' => [
            'address' => 'Birch Acres, Kempton Park, Gauteng, South Africa',
            'coordinates' => [
                'lat' => -26.1186,
                'lng' => 28.2294
            ]
        ],
        'founded' => '2019',
        'services' => [
            'Web Design & Development',
            'Graphic Design',
            'Brand Identity Design',
            'Digital Marketing',
            'Web Applications',
            'E-commerce Solutions'
        ]
    ];

    // Social media links
    $socialMedia = [
        'facebook' => 'https://web.facebook.com/Penda.graphix',
        'instagram' => 'https://www.instagram.com/penda_graphics/',
    ];

    // Images for the component
    $images = [
        'logo' => asset('assets/images/painted_p_logo.png'),
        'approach' => asset('assets/images/approach.png'),
        'team' => asset('assets\images\painted_p_logo.png'),
        'company_logo' => asset('public\assets\images\penda_logo2.png')
    ];
    
    return Inertia::render('AboutUS', [
        'seo' => $seoData,
        'structuredData' => $structuredData,
        'businessInfo' => $businessInfo,
        'socialMedia' => $socialMedia,
        'images' => $images
    ]);
}

    public function ContactIndex() {
    // Customize SEO data for contact page
    $seoData = $this->mergeSeoData([
        'title' => 'Contact Us | Get in Touch with Neema Tradings',
        'description' => 'Contact Neema Tradings for professional web design, branding, and digital marketing services in South Africa. Call +27 73 811 4652 or email info@pendagraphics.co.za for a free consultation.',
        'keywords' => 'contact Neema Tradings, web design consultation, South Africa web design, Kempton Park web design, contact web designer, get quote web design, branding consultation, digital marketing contact',
        'og_title' => 'Contact Neema Tradings | Professional Web Design & Branding Services',
        'og_description' => 'Ready to elevate your brand? Contact our expert team for web design, branding, and digital marketing services. Located in Kempton Park, serving all of South Africa.',
        'og_type' => 'website',
        'og_url' => url('/contact'),
        'canonical_url' => url('/contact'),
        'twitter_title' => 'Contact Neema Tradings | Web Design & Digital Solutions',
        'twitter_description' => 'Get in touch with Neema Tradings for professional web design, branding, and digital marketing services in South Africa.',
    ]);

    // Structured Data for SEO (separate from seoData for cleaner organization)
    $structuredData = [
        '@context' => 'https://schema.org',
        '@type' => 'ContactPage',
        'mainEntity' => [
            '@type' => 'LocalBusiness',
            'name' => 'Neema Tradings',
            'description' => 'Professional web design, branding, and digital marketing services',
            'url' => config('app.url'),
            'telephone' => '+27738114652',
            'email' => 'info@pendagraphics.co.za',
            'address' => [
                '@type' => 'PostalAddress',
                'addressLocality' => 'Birch Acres',
                'addressRegion' => 'Gauteng',
                'addressCountry' => 'ZA',
                'postalCode' => '1618'
            ],
            'geo' => [
                '@type' => 'GeoCoordinates',
                'latitude' => -26.052120488886704,
                'longitude' => 28.182524335456343
            ],
            'openingHours' => 'Mo-Fr 09:00-17:00',
            'sameAs' => [
                'https://web.facebook.com/Penda.graphix',
                'https://www.instagram.com/penda_graphics/',
                'https://www.youtube.com/@PendaGraphics',
                'https://www.tiktok.com/@pendagraphics'
            ],
            'priceRange' => '$',
            'areaServed' => [
                '@type' => 'Country',
                'name' => 'South Africa'
            ],
            'serviceType' => [
                'Web Design',
                'Web Development',
                'Branding',
                'Graphic Design',
                'Digital Marketing',
                'SEO Services'
            ]
        ]
    ];

    // Additional contact-specific data
    $contactInfo = [
        'phone' => '+27738114652',
        'email' => 'info@pendagraphics.co.za',
        'address' => 'Birch Acres, Kempton Park, Gauteng, South Africa',
        'business_hours' => 'Monday - Friday: 9am - 5pm'
    ];

    return Inertia::render('ContactUs', [
        'seo' => $seoData,
        'structuredData' => json_encode($structuredData),
        'contactInfo' => $contactInfo,
    ]);
}
}
