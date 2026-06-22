import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Check, Gift, HelpCircle } from 'lucide-react';

export default function VolunteerPortal() {
  const [opportunities, setOpportunities] = useState([
    {
      id: 1,
      title: 'Weekly Ration Kit Packing & Sorting',
      organizer: 'Robin Hood Army Delhi',
      date: 'Saturday, June 27',
      time: '09:00 AM - 01:00 PM',
      location: 'Okhla Phase 3 Warehouse, New Delhi',
      filledSpots: 18,
      totalSpots: 30,
      skills: 'Basic sorting, packing ration boxes, coordinate shipments',
      points: 40,
      registered: false
    },
    {
      id: 2,
      title: 'Teaching Math & Reading to Slum Children',
      organizer: 'Teach For India Volunteer Network',
      date: 'Every Saturday & Sunday',
      time: '03:30 PM - 05:30 PM',
      location: 'Dharavi Community Library, Mumbai',
      filledSpots: 4,
      totalSpots: 8,
      skills: 'Patience, basic arithmetic, elementary English',
      points: 60,
      registered: false
    },
    {
      id: 3,
      title: 'Distribution of Blankets & Clothing',
      organizer: 'Delhi Night Helpers Association',
      date: 'Friday, July 3',
      time: '09:00 PM - Midnight (Night Drive)',
      location: 'Connaught Place Metro Exit 4, Delhi',
      filledSpots: 12,
      totalSpots: 15,
      skills: 'Route coordination, active communication',
      points: 50,
      registered: false
    },
    {
      id: 4,
      title: 'Red Cross Blood Donation Camp Coordinator',
      organizer: 'Indian Red Cross Society',
      date: 'Sunday, July 5',
      time: '08:00 AM - 02:00 PM',
      location: 'Town Hall Central, Bengaluru',
      filledSpots: 2,
      totalSpots: 5,
      skills: 'Crowd management, registration support, logistics',
      points: 70,
      registered: false
    }
  ]);

  const [registerSuccessMessage, setRegisterSuccessMessage] = useState(null);

  const handleRegister = (id) => {
    setOpportunities(opportunities.map(opp => {
      if (opp.id === id) {
        setRegisterSuccessMessage(`Successfully registered for: ${opp.title}!`);
        setTimeout(() => setRegisterSuccessMessage(null), 3500);
        return {
          ...opp,
          filledSpots: opp.filledSpots + 1,
          registered: true
        };
      }
      return opp;
    }));
  };

  const registeredOpps = opportunities.filter(opp => opp.registered);

  return (
    <div className="animate-fade-in" style={{ padding: '40px 0 80px', fontFamily: 'var(--font-body)' }}>
      <div className="container">
        
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '12px' }}>Volunteer Portal</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Lend a hand! Volunteer for food distribution drives, youth classes, or transport. Coordinate and earn karma points.
          </p>
        </div>

        {/* Global Registration Toast Notice */}
        {registerSuccessMessage && (
          <div style={{
            position: 'fixed',
            top: '90px',
            right: '24px',
            background: 'var(--success)',
            color: 'white',
            padding: '16px 24px',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-lg)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontWeight: 600,
            animation: 'fadeIn 0.2s ease-out'
          }}>
            <Check size={20} style={{ border: '2px solid white', borderRadius: '50%' }} />
            <span>{registerSuccessMessage}</span>
          </div>
        )}

        {/* Outer Split Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px'
        }} className="volunteer-layout-grid">
          
          {/* Opportunities Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <h2 style={{ fontSize: '1.6rem', color: 'var(--primary)', borderBottom: '2px solid var(--border-color)', paddingBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Users size={22} style={{ color: 'var(--primary-medium)' }} /> Available Volunteer Drives
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {opportunities.map(opp => (
                <div 
                  key={opp.id}
                  className="glass-panel"
                  style={{
                    borderRadius: 'var(--radius-lg)',
                    padding: '24px 30px',
                    border: opp.registered ? '2px solid var(--success)' : '1px solid var(--glass-border)',
                    boxShadow: 'var(--shadow-md)',
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '20px',
                    transition: 'all var(--transition-fast)'
                  }}
                  className="opp-card"
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
                    <div>
                      <h3 style={{ fontSize: '1.3rem', color: 'var(--primary)', marginBottom: '4px' }}>{opp.title}</h3>
                      <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 600 }}>Organized by {opp.organizer}</span>
                    </div>
                    <div style={{
                      backgroundColor: 'var(--secondary-light)',
                      color: 'hsl(40, 95%, 30%)',
                      padding: '6px 12px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <Gift size={14} /> +{opp.points} Karma Points
                    </div>
                  </div>

                  {/* Core Details Grid */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '12px',
                    fontSize: '0.9rem',
                    color: 'var(--text-main)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Calendar size={16} style={{ color: 'var(--primary-medium)' }} />
                      <span><strong>Date:</strong> {opp.date}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Clock size={16} style={{ color: 'var(--primary-medium)' }} />
                      <span><strong>Time:</strong> {opp.time}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <MapPin size={16} style={{ color: 'var(--primary-medium)' }} />
                      <span><strong>Location:</strong> {opp.location}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Users size={16} style={{ color: 'var(--primary-medium)' }} />
                      <span><strong>Spots:</strong> {opp.filledSpots} of {opp.totalSpots} filled</span>
                    </div>
                  </div>

                  {/* Skills summary */}
                  <div style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-muted)',
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '12px 18px',
                    borderRadius: 'var(--radius-sm)'
                  }}>
                    <strong>Preferred Skills:</strong> {opp.skills}
                  </div>

                  {/* Signup button */}
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '4px' }}>
                    {opp.registered ? (
                      <button 
                        disabled 
                        className="btn" 
                        style={{
                          backgroundColor: 'var(--success-light)',
                          color: 'var(--success)',
                          border: '1px solid var(--success)',
                          padding: '10px 24px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          cursor: 'default'
                        }}
                      >
                        <Check size={16} /> Registered
                      </button>
                    ) : (
                      <button 
                        onClick={() => handleRegister(opp.id)}
                        className="btn btn-primary" 
                        style={{ padding: '10px 24px' }}
                      >
                        Sign Up for Shift
                      </button>
                    )}
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* User's registered roster */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="glass-panel" style={{
              padding: '30px',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--glass-border)',
              position: 'sticky',
              top: '100px'
            }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={20} style={{ color: 'var(--success)' }} /> My Volunteering Calendar
              </h3>

              {registeredOpps.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '24px 0', color: 'var(--text-muted)' }}>
                  <HelpCircle size={32} style={{ color: 'var(--text-muted)', marginBottom: '12px', opacity: 0.6 }} />
                  <p style={{ fontSize: '0.9rem' }}>You have not registered for any drives yet.</p>
                  <p style={{ fontSize: '0.8rem', marginTop: '4px' }}>Sign up for a drive on the left to add it here!</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {registeredOpps.map(opp => (
                    <div 
                      key={opp.id} 
                      style={{
                        padding: '16px',
                        backgroundColor: 'var(--primary-light)',
                        borderRadius: 'var(--radius-md)',
                        borderLeft: '4px solid var(--success)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px'
                      }}
                      className="animate-fade-in"
                    >
                      <h4 style={{ color: 'var(--primary)', fontSize: '0.95rem', fontWeight: 700 }}>{opp.title}</h4>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{opp.organizer}</span>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', fontSize: '0.78rem', color: 'var(--text-main)', marginTop: '4px' }}>
                        <span>📅 {opp.date}</span>
                        <span>⏰ {opp.time}</span>
                        <span>📍 {opp.location}</span>
                      </div>
                    </div>
                  ))}
                  
                  <div style={{
                    marginTop: '8px',
                    padding: '12px',
                    backgroundColor: 'var(--secondary-light)',
                    borderRadius: 'var(--radius-md)',
                    color: 'hsl(40, 95%, 30%)',
                    textAlign: 'center',
                    fontWeight: 700,
                    fontSize: '0.85rem'
                  }}>
                    Total Karma Gained: {registeredOpps.reduce((acc, curr) => acc + curr.points, 0)} pts
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .volunteer-layout-grid {
          grid-template-columns: 1.8fr 1.2fr !important;
        }
        @media (max-width: 991px) {
          .volunteer-layout-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </div>
  );
}
