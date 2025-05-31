import React from 'react';

const About = () => {
    return (
        <div style={{
            position: 'relative',
            height: '100vh',
            backgroundImage: 'url("https://media.giphy.com/media/3o7abAhvUQbzoXNQF6/giphy.gif")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Poppins, sans-serif'
        }}>
            <div style={{
                position: 'absolute',
                top: 0, left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1
            }}></div>

            <div style={{
                position: 'relative',
                zIndex: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '40px',
                width: '90%',
                maxWidth: '700px',
                color: '#fff',
                boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
                textAlign: 'center'
            }}>
                <h1 style={{ fontSize: '2.8rem', marginBottom: '20px', color: '#fff' }}>Welcome to ShopEase 🛒</h1>
                <p style={{ fontSize: '1.1rem', marginBottom: '25px', lineHeight: '1.7' }}>
                    Discover the ultimate online shopping experience. From daily essentials to luxury products – all in one place!
                </p>
                <ul style={{
                    textAlign: 'left',
                    marginBottom: '25px',
                    paddingLeft: '20px',
                    lineHeight: '1.8',
                    fontSize: '1.05rem'
                }}>
                    <li>🔥 Huge Discounts & Festive Offers</li>
                    <li>🚀 1-Day Superfast Delivery in Major Cities</li>
                    <li>🔒 100% Secure Payments & Easy Returns</li>
                    <li>🛠️ 24/7 Customer Assistance</li>
                    <li>🆕 New Products Everyday</li>
                </ul>
                <p style={{ fontSize: '1rem', fontStyle: 'italic' }}>
                    Trusted by thousands of happy customers across India.
                </p>
            </div>
        </div>
    );
};

export default About;
