import React from 'react';

const About = () => {
  return (
    <div style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        {/* Header Section */}
        <h1 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '40px', color: '#333333' }}>ABOUT US</h1>
        {/* Text Section */}
        <div style={{ backgroundColor: '#f0f0f0', padding: '30px', marginBottom: '50px', borderRadius: '8px', textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: '16px', lineHeight: '1.6', color: '#444444' }}>
            TEXT
          </p>
        </div>
        {/* Features Grid */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '20px', marginBottom: '40px' }}>
          {/* Ambulance Services */}
          <div style={{ flex: 1, minWidth: '200px', backgroundColor: '#f0f0f0', padding: '30px', textAlign: 'center', borderRadius: '8px', transition: 'transform 0.3s ease', cursor: 'pointer' }} onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')} onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
            <h3 style={{ margin: 0, fontSize: '18px', color: '#333333' }}>AMBULANCE<br />SERVICES</h3>
          </div>
          {/* Open 7 Days */}
          <div style={{ flex: 1, minWidth: '200px', backgroundColor: '#f0f0f0', padding: '30px', textAlign: 'center', borderRadius: '8px', transition: 'transform 0.3s ease', cursor: 'pointer' }} onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')} onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
            <h3 style={{ margin: 0, fontSize: '18px', color: '#333333' }}>open 7 days<br />a week</h3>
          </div>
          {/* Insurance Plans */}
          <div style={{ flex: 1, minWidth: '200px', backgroundColor: '#f0f0f0', padding: '30px', textAlign: 'center', borderRadius: '8px', transition: 'transform 0.3s ease', cursor: 'pointer' }} onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')} onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
            <h3 style={{ margin: 0, fontSize: '18px', color: '#333333' }}>Accepting all major<br />insurance plans</h3>
          </div>
          {/* Waiting Times */}
          <div style={{ flex: 1, minWidth: '200px', backgroundColor: '#f0f0f0', padding: '30px', textAlign: 'center', borderRadius: '8px', transition: 'transform 0.3s ease', cursor: 'pointer' }} onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')} onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
            <h3 style={{ margin: 0, fontSize: '18px', color: '#333333' }}>Short waiting<br />times</h3>
          </div>
          {/* Faster Appointments */}
          <div style={{ flex: 1, minWidth: '200px', backgroundColor: '#f0f0f0', padding: '30px', textAlign: 'center', borderRadius: '8px', transition: 'transform 0.3s ease', cursor: 'pointer' }} onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')} onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
            <h3 style={{ margin: 0, fontSize: '18px', color: '#333333' }}>Faster<br />Appointments</h3>
          </div>
        </div>
        {/* Read More Button */}
        <div style={{ textAlign: 'center' }}>
          <button
            style={{
              backgroundColor: '#4a5568',
              color: 'white',
              padding: '12px 30px',
              border: 'none',
              borderRadius: '6px',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#2d3748')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#4a5568')}
          >
            Read More
          </button>
        </div>
      </div>
      {/* Footer */}
    </div>
  );
};

export default About;