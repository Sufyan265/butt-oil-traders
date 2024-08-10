import React from 'react';

const StructuredData = () => {
    const jsonLdData = {
        "@context": "https://schema.org",
        "@type": "Store",
        "name": "Butt Oil Traders",
        "description": "Butt Oil Traders is your go-to store for high-quality car engine oils and filters. We offer a wide range of automotive products including engine oils, gear oils, and more, ensuring the best performance for your vehicles.",
        "image": "https://Buttoiltraders.com/Images/layout.png",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Lahore",
            "addressRegion": "Punjab",
            "addressCountry": "Pakitstan"
        },
        "url": "https://Buttoiltraders.com",
        "telephone": "+923134633066",
        "openingHours": "Mo-Fr 09:00-18:00",
        "sameAs": [
            "https://www.facebook.com/ButtOilTraders?mibextid=kFxxJD",
            "https://www.instagram.com/butt.oiltraders?igsh=NDNteDUzMGZ4N2k0&utm_source=qr"
        ],
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://Buttoiltraders.com/search?query={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
    );
};

export default StructuredData;
