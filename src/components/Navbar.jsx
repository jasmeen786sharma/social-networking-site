import React, { useState } from 'react';
import { Heart, Menu, X, Award, ShieldAlert } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'feed', label: 'Help Board' },
    { id: 'donations', label: 'Donation Hub' },
    { id: 'volunteer', label: 'Volunteer Portal' },
    { id: 'directory', label: 'Directory' }
  ];

  return (
    <nav className="glass-panel" style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      borderBottom: '1px solid var(--glass-border)',
      background: 'rgba(255, 255, 255, 0.75)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '76px'
      }}>
        {/* Logo */}
        <div 
          onClick={() => setActiveTab('home')} 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer'
          }}
        >
          <div className="flex-center animate-pulse-soft" style={{
            background: 'var(--accent)',
            color: 'white',
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(var(--accent-base), 0.2)'
          }}>
            <Heart size={22} fill="white" />
          </div>
          <div>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.4rem',
              fontWeight: 800,
              color: 'var(--primary)',
              letterSpacing: '-0.02em',
              display: 'block',
              lineHeight: 1
            }}>
              SevaSetu
            </span>
            <span style={{
              fontSize: '0.68rem',
              fontWeight: 600,
              color: 'var(--accent)',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              display: 'block',
              marginTop: '2px'
            }}>
              Indian Social Service Network
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div style={{ display: 'none', gap: '8px', alignItems: 'center' }} className="desktop-nav-container">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="btn"
              style={{
                background: activeTab === item.id ? 'var(--primary-light)' : 'transparent',
                color: activeTab === item.id ? 'var(--primary)' : 'var(--text-main)',
                padding: '8px 18px',
                fontSize: '0.9rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: activeTab === item.id ? 700 : 500,
                border: 'none',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Karma Badge & Action */}
        <div style={{ display: 'none', alignItems: 'center', gap: '16px' }} className="desktop-actions-container">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--bg-secondary)',
            padding: '6px 14px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border-color)',
            fontSize: '0.85rem',
            fontWeight: 600,
            color: 'var(--primary)'
          }}>
            <Award size={16} style={{ color: 'var(--secondary)' }} />
            <span>120 Karma Points</span>
          </div>
          <button 
            onClick={() => setActiveTab('feed')} 
            className="btn btn-accent"
            style={{ padding: '10px 20px', fontSize: '0.85rem' }}
          >
            Get Help
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="btn btn-secondary mobile-menu-toggle"
          style={{
            padding: '8px',
            borderRadius: '10px',
            display: 'inline-flex'
          }}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="glass-panel" style={{
          position: 'absolute',
          top: '76px',
          left: 0,
          right: 0,
          borderBottom: '1px solid var(--border-color)',
          background: 'white',
          padding: '16px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          boxShadow: 'var(--shadow-lg)',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsOpen(false);
              }}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '12px 16px',
                borderRadius: 'var(--radius-md)',
                background: activeTab === item.id ? 'var(--primary-light)' : 'transparent',
                color: activeTab === item.id ? 'var(--primary)' : 'var(--text-main)',
                fontSize: '1rem',
                fontWeight: activeTab === item.id ? 700 : 500,
                border: 'none',
                cursor: 'pointer'
              }}
            >
              {item.label}
            </button>
          ))}
          <div style={{
            height: '1px',
            background: 'var(--border-color)',
            margin: '8px 0'
          }} />
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 12px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--primary)'
            }}>
              <Award size={16} style={{ color: 'var(--secondary)' }} />
              <span>120 Karma Points</span>
            </div>
            <button 
              onClick={() => {
                setActiveTab('feed');
                setIsOpen(false);
              }}
              className="btn btn-accent"
              style={{ padding: '8px 16px', fontSize: '0.85rem' }}
            >
              Get Help
            </button>
          </div>
        </div>
      )}

      {/* Embedded CSS for responsive hide/shows */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 768px) {
          .desktop-nav-container { display: flex !important; }
          .desktop-actions-container { display: flex !important; }
          .mobile-menu-toggle { display: none !important; }
        }
      `}} />
    </nav>
  );
}
