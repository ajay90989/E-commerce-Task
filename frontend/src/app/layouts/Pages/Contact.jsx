import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const containerStyle = {
        height: '100vh',
        backgroundImage: 'url("https://images.unsplash.com/photo-1607083205394-cd3d3a07d050?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Poppins, sans-serif',
        position: 'relative',
        color: '#fff'
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 1
    };

    const cardStyle = {
        zIndex: 2,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderRadius: '16px',
        padding: '40px',
        maxWidth: '500px',
        textAlign: 'center',
        boxShadow: '0 8px 30px rgba(0,0,0,0.5)'
    };

    const iconStyle = {
        fontSize: '1.2rem',
        marginRight: '10px',
        color: '#FF6F61'
    };

    const itemStyle = {
        margin: '15px 0',
        fontSize: '1.05rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    return (
        <div style={containerStyle}>
            <div style={overlayStyle}></div>

            <div style={cardStyle}>
                <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Get in Touch</h2>
                <p style={{ fontSize: '1rem', marginBottom: '30px' }}>
                    Reach out to us for queries, support or collaboration.
                </p>

                <div style={itemStyle}>
                    <FaPhone style={iconStyle} />
                    +91 98765 43210
                </div>
                <div style={itemStyle}>
                    <FaEnvelope style={iconStyle} />
                    support@shopease.in
                </div>
                <div style={itemStyle}>
                    <FaMapMarkerAlt style={iconStyle} />
                    2nd Floor, Phoenix Mall, Mumbai, India
                </div>
            </div>
        </div>
    );
};

export default Contact;
