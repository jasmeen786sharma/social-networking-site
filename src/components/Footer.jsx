import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  return (
    <footer style={{
      backgroundColor: 'var(--primary)',
      color: 'rgba(255, 255, 255, 0.85)',
      padding: '64px 0 24px',
      borderTop: '4px solid var(--accent)',
      fontFamily: 'var(--font-body)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '48px'
        }}>
          {/* Logo and About */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div className="flex-center" style={{
                background: 'var(--accent)',
                color: 'white',
                width: '32px',
                height: '32px',
                borderRadius: '8px'
              }}>
                <Heart size={18} fill="white" />
              </div>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                fontWeight: 800,
                color: 'white',
                letterSpacing: '-0.02em'
              }}>
                SevaSetu
              </span>
            </div>
            <p style={{
              fontSize: '0.9rem',
              lineHeight: '1.6',
              marginBottom: '20px',
              color: 'rgba(255, 255, 255, 0.7)'
            }}>
              A community support platform bridging the gap between individuals needing immediate help and local Indian donors, volunteers, and social welfare organizations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              color: 'white',
              fontSize: '1rem',
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <li>
                <a href="#home" onClick={(e) => { e.preventDefault(); setActiveTab('home'); }} style={{ transition: 'color var(--transition-fast)' }} className="footer-link">
                  Home / Dashboard
                </a>
              </li>
              <li>
                <a href="#feed" onClick={(e) => { e.preventDefault(); setActiveTab('feed'); }} style={{ transition: 'color var(--transition-fast)' }} className="footer-link">
                  Active Help Board
                </a>
              </li>
              <li>
                <a href="#donations" onClick={(e) => { e.preventDefault(); setActiveTab('donations'); }} style={{ transition: 'color var(--transition-fast)' }} className="footer-link">
                  Donation Campaigns
                </a>
              </li>
              <li>
                <a href="#volunteer" onClick={(e) => { e.preventDefault(); setActiveTab('volunteer'); }} style={{ transition: 'color var(--transition-fast)' }} className="footer-link">
                  Volunteer Shifts
                </a>
              </li>
              <li>
                <a href="#directory" onClick={(e) => { e.preventDefault(); setActiveTab('directory'); }} style={{ transition: 'color var(--transition-fast)' }} className="footer-link">
                  Emergency Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 style={{
              color: 'white',
              fontSize: '1rem',
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Support Line & Location
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.9rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={16} style={{ color: 'var(--accent)' }} />
                <span>+91 1800-120-SEVA (24/7 Helpline)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={16} style={{ color: 'var(--accent)' }} />
                <span>support@sevasetu.org.in</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <MapPin size={16} style={{ color: 'var(--accent)' }} />
                <span>12 Seva Marg, Connaught Place, New Delhi - 110001</span>
              </li>
            </ul>
          </div>
        </div>

        <div style={{
          height: '1px',
          background: 'rgba(255, 255, 255, 0.1)',
          marginBottom: '24px'
        }} />

        {/* Legal and Empathy text */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.8rem',
          color: 'rgba(255, 255, 255, 0.5)',
          textAlign: 'center'
        }} className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} SevaSetu. Dedicated to community welfare in India.
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="#" style={{ transition: 'color var(--transition-fast)' }} className="footer-link">Privacy Policy</a>
            <span>•</span>
            <a href="#" style={{ transition: 'color var(--transition-fast)' }} className="footer-link">Terms of Use</a>
            <span>•</span>
            <a href="#" style={{ transition: 'color var(--transition-fast)' }} className="footer-link">Disclaimers</a>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .footer-link:hover {
          color: var(--accent) !important;
        }
        @media (min-width: 768px) {
          .footer-bottom {
            flex-direction: row !important;
            text-align: left !important;
          }
        }
      `}} />
    </footer>
  );
}
