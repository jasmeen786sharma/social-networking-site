import React, { useState } from 'react';
import { Phone, MapPin, Search, Clock, ShieldAlert, Navigation, Info, ExternalLink, Globe } from 'lucide-react';

export default function ResourceDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [activeDirectionsMap, setActiveDirectionsMap] = useState(null);

  const hotlines = [
    { name: 'National Emergency Response', number: '112', coverage: '24/7 Toll-free Emergency', type: 'safety' },
    { name: 'Childline India Support', number: '1098', coverage: '24/7 Child Help Desk', type: 'youth' },
    { name: 'Women Helpline Desk', number: '1091', coverage: '24/7 Domestic Security', type: 'safety' },
    { name: 'Senior Citizen Helpline (Elpline)', number: '14567', coverage: 'Daily 8am-8pm Support', type: 'elderly' }
  ];

  const centers = [
    {
      id: 1,
      name: 'Delhi Government Night Shelter (Rain Basera)',
      type: 'shelter',
      address: 'Connaught Place Underground Subway, New Delhi - 110001',
      phone: '+91 11-23340055',
      hours: 'Open 24/7 (Intake anytime)',
      services: 'Overnight cots, heavy wool blankets, warm tea, basic medical checks, safety staff',
      website: 'www.delhishelterboard.in'
    },
    {
      id: 2,
      name: 'Robin Hood Army Food Hub Kolkata',
      type: 'food-bank',
      address: '15 Park Street area community pickup, Kolkata - 700016',
      phone: '+91 98300 12345',
      hours: 'Distribution daily: 12:30 PM - 2 PM',
      services: 'Freshly packed meals, dry rice & wheat bags, clean drinking water, infant formula packs',
      website: 'www.robinhoodarmy.com'
    },
    {
      id: 3,
      name: 'RK Puram Mohalla Clinic & Health Center',
      type: 'clinic',
      address: 'Block C Community Center, RK Puram Sector 2, New Delhi - 110022',
      phone: '+91 11-26107788',
      hours: 'Monday to Saturday: 9 AM - 1 PM',
      services: 'Free doctor consultation, primary diagnostic lab testing, essential free pharmacy dispensary',
      website: 'www.delhi.gov.in/mohallaclinic'
    },
    {
      id: 4,
      name: 'Akshaya Patra Mega Kitchen Hub',
      type: 'food-bank',
      address: 'Peenya Industrial Area, Bengaluru, Karnataka - 560058',
      phone: '+91 80-28395566',
      hours: 'Feast meals prep: 5 AM - 12 PM',
      services: 'Hot mid-day school meals prep, dry grocery grains kits distribution to low-income clusters',
      website: 'www.akshayapatra.org'
    },
    {
      id: 5,
      name: 'Sneha Family Care & Rehabilitation Center',
      type: 'shelter',
      address: '42 Peenya Main Road, Bengaluru, Karnataka - 560058',
      phone: '+91 80-23456789',
      hours: 'Open 24/7 for families & children',
      services: 'Emergency shelter beds, trauma counselling, basic school materials for children',
      website: 'www.snehacare.org'
    }
  ];

  const filteredCenters = centers.filter(center => {
    const matchesSearch = center.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          center.services.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          center.address.toLowerCase().includes(searchTerm.toLowerCase());
                          
    const matchesType = selectedType === 'all' || center.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="animate-fade-in" style={{ padding: '40px 0 80px', fontFamily: 'var(--font-body)' }}>
      <div className="container">
        
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '12px' }}>Resource Directory</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Find immediate support lines and local centers providing free food, warm shelter, safety care, and health checkups in India.
          </p>
        </div>

        {/* Hotlines Grid */}
        <div style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldAlert size={22} style={{ color: 'var(--accent)' }} /> 24/7 Immediate Indian Support Helplines
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px'
          }}>
            {hotlines.map((hotline, idx) => (
              <div 
                key={idx}
                className="glass-panel animate-pulse-soft"
                style={{
                  padding: '20px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(var(--accent-base), 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  backgroundColor: 'white'
                }}
              >
                <div className="flex-center" style={{
                  background: 'var(--accent-light)',
                  color: 'var(--accent)',
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-full)',
                  flexShrink: 0
                }}>
                  <Phone size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.92rem', color: 'var(--primary)', fontWeight: 700, marginBottom: '2px' }}>
                    {hotline.name}
                  </h4>
                  <a 
                    href={`tel:${hotline.number}`} 
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: 'var(--accent)',
                      display: 'block',
                      lineHeight: 1.2
                    }}
                  >
                    {hotline.number}
                  </a>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>{hotline.coverage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Searchable Directory Section */}
        <div>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '24px' }}>Community Center Directory</h2>
          
          {/* Search/Filters Panel */}
          <div className="glass-panel" style={{
            padding: '20px 24px',
            borderRadius: 'var(--radius-md)',
            marginBottom: '32px',
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap'
          }}>
            <div style={{ flex: 1, minWidth: '260px', position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Search size={18} style={{ position: 'absolute', left: '16px', color: 'var(--text-muted)' }} />
              <input 
                type="text" 
                placeholder="Search centers by name, services, address..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-input"
                style={{ width: '100%', paddingLeft: '48px', borderRadius: 'var(--radius-full)' }}
              />
            </div>
            
            <div style={{ minWidth: '180px' }}>
              <select 
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="form-select"
                style={{ width: '100%', borderRadius: 'var(--radius-full)' }}
              >
                <option value="all">All Center Types</option>
                <option value="shelter">Rain Basera / Shelters</option>
                <option value="food-bank">Food Banks & Feasts</option>
                <option value="clinic">Mohalla / Free Clinics</option>
              </select>
            </div>
          </div>

          {/* Cards Grid */}
          {filteredCenters.length === 0 ? (
            <div className="glass-panel" style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)', borderRadius: 'var(--radius-md)' }}>
              No centers found matching the filters.
            </div>
          ) : (
            <div className="grid-layout">
              {filteredCenters.map(center => (
                <div 
                  key={center.id}
                  className="glass-panel"
                  style={{
                    padding: '24px 30px',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--glass-border)',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    transition: 'all var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{
                      backgroundColor: center.type === 'shelter' ? '#e8f5e9' : center.type === 'food-bank' ? '#e3f2fd' : '#ffebee',
                      color: center.type === 'shelter' ? '#2e7d32' : center.type === 'food-bank' ? '#1565c0' : '#c62828',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                      letterSpacing: '0.04em'
                    }}>
                      {center.type === 'shelter' ? 'Rain Basera' : center.type === 'food-bank' ? 'Food & Pantry' : 'Mohalla Clinic'}
                    </span>
                  </div>

                  <div>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '8px' }}>{center.name}</h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: 'var(--text-main)', marginTop: '12px' }}>
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                        <MapPin size={16} style={{ color: 'var(--primary-medium)', marginTop: '2px', flexShrink: 0 }} />
                        <span>{center.address}</span>
                      </div>
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <Phone size={16} style={{ color: 'var(--primary-medium)', flexShrink: 0 }} />
                        <a href={`tel:${center.phone}`} style={{ fontWeight: 600, color: 'var(--primary)' }}>{center.phone}</a>
                      </div>
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <Clock size={16} style={{ color: 'var(--primary-medium)', flexShrink: 0 }} />
                        <span>{center.hours}</span>
                      </div>
                    </div>
                  </div>

                  <div style={{
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.85rem',
                    color: 'var(--text-main)',
                    lineHeight: 1.4
                  }}>
                    <strong>Services:</strong> {center.services}
                  </div>

                  <div style={{
                    marginTop: 'auto',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--border-color)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.82rem'
                  }}>
                    <a href={`https://${center.website}`} target="_blank" rel="noopener noreferrer" style={{
                      color: 'var(--accent)',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <Globe size={14} /> Website <ExternalLink size={12} />
                    </a>
                    
                    <button 
                      onClick={() => setActiveDirectionsMap(center)}
                      className="btn" 
                      style={{
                        padding: '6px 14px',
                        fontSize: '0.8rem',
                        backgroundColor: 'var(--primary-light)',
                        color: 'var(--primary)',
                        borderRadius: 'var(--radius-full)',
                        border: 'none',
                        cursor: 'pointer',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <Navigation size={12} /> Map View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* MAP VIEW INTERACTIVE POPUP */}
      {activeDirectionsMap && (
        <div style={modalOverlayStyle}>
          <div className="glass-panel animate-fade-in" style={modalContentStyle}>
            <div style={modalHeaderStyle}>
              <h2 style={{ color: 'var(--primary)', fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Navigation size={18} style={{ color: 'var(--accent)' }} /> Navigation Guide
              </h2>
              <button onClick={() => setActiveDirectionsMap(null)} style={modalCloseBtnStyle}>&times;</button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
                <h3 style={{ fontSize: '1.05rem', color: 'var(--primary)', marginBottom: '4px' }}>{activeDirectionsMap.name}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{activeDirectionsMap.address}</p>
              </div>

              {/* Simulated Interactive Map Art */}
              <div style={{
                height: '220px',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: '#e1f5fe',
                border: '1px solid var(--border-color)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.15, background: 'radial-gradient(circle, #01579b 1px, transparent 1px) 0 0/16px 16px' }} />
                <div style={{ position: 'absolute', top: '110px', left: 0, right: 0, height: '24px', backgroundColor: '#cfd8dc', borderTop: '2px solid white', borderBottom: '2px solid white' }} />
                <div style={{ position: 'absolute', left: '160px', top: 0, bottom: 0, width: '24px', backgroundColor: '#cfd8dc', borderLeft: '2px solid white', borderRight: '2px solid white' }} />
                
                <div className="animate-pulse-soft" style={{
                  position: 'absolute',
                  top: '60px',
                  left: '148px',
                  backgroundColor: 'var(--accent)',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50% 50% 50% 0',
                  transform: 'rotate(-45deg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                  border: '2px solid white'
                }}>
                  <div style={{ width: '8px', height: '8px', backgroundColor: 'white', borderRadius: '50%', transform: 'rotate(45deg)' }} />
                </div>
                
                <span style={{
                  position: 'absolute',
                  top: '25px',
                  left: '120px',
                  backgroundColor: 'white',
                  padding: '4px 8px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  boxShadow: 'var(--shadow-sm)',
                  color: 'var(--primary)'
                }}>
                  Destination Pin
                </span>

                <span style={{ fontSize: '0.85rem', color: '#01579b', fontWeight: 600, zIndex: 1, position: 'absolute', bottom: '16px' }}>
                  Simulated Route View
                </span>
              </div>

              <div style={{ display: 'flex', gap: '10px', fontSize: '0.85rem', color: 'var(--text-main)', opacity: 0.9 }}>
                <Info size={16} style={{ color: 'var(--primary-medium)', flexShrink: 0, marginTop: '2px' }} />
                <p>
                  This center welcomes walk-ins. We recommend calling <strong style={{ color: 'var(--primary)' }}>{activeDirectionsMap.phone}</strong> in advance to verify bed or food bag availability before driving.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '12px' }}>
                <button onClick={() => setActiveDirectionsMap(null)} className="btn btn-primary" style={{ padding: '10px 24px' }}>
                  Close Map
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

// Inline styles for overlays
const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(15, 34, 45, 0.4)',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  padding: '20px',
  overflowY: 'auto'
};

const modalContentStyle = {
  width: '100%',
  maxWidth: '460px',
  background: 'white',
  borderRadius: 'var(--radius-lg)',
  padding: '30px',
  boxShadow: 'var(--shadow-lg)',
  maxHeight: '90vh',
  overflowY: 'auto',
  position: 'relative'
};

const modalHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
  borderBottom: '1px solid var(--border-color)',
  paddingBottom: '14px'
};

const modalCloseBtnStyle = {
  background: 'transparent',
  border: 'none',
  fontSize: '2rem',
  lineHeight: 1,
  color: 'var(--text-muted)',
  cursor: 'pointer',
  padding: '0 8px'
};
